import React, { useState } from 'react'
import { Background, BackButton, TextInput, Button, Header, Logo, Toast } from '@sankodan/com.cabbooking.components'
import { emailValidator, sendEmailWithPassword } from '@sankodan/com.cabbooking.core'

export default function ResetPasswordScreen ({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState({ value: '', type: '' })

  const sendResetPasswordEmail = async () => {
    const emailError = emailValidator(email.value)
    if (emailError) {
      setEmail({ ...email, error: emailError })
      return
    }
    setLoading(true)
    const response = await sendEmailWithPassword(email.value)
    console.log("sendEmailWithPassword",response)
    if (response.error) {
      setToast({ type: 'error', message: response.error })
    } else {
      setToast({
        type: 'success',
        message: 'Email with password has been sent.'
      })
    }
    setLoading(false)
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Restore Password</Header>
      <TextInput
        testID = 'emailAddress'
        label="E-mail address"
        returnKeyType="done"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        description="You will receive email with password reset link."
      />
      <Button
        testID = "resetPasswordEmailButton"
        loading={loading}
        mode="contained"
        onPress={sendResetPasswordEmail}
        style={{ marginTop: 16 }}
      >
        Send Instructions
      </Button>
      <Toast {...toast} testID="onDismiss" onDismiss={() => setToast({ value: '', type: '' })} />
    </Background>
  )
}
