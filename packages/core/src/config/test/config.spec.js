import {
    firebaseConfig
  } from '../firebase'

  describe('firebaseConfig', () => {
    it('firebaseConfig methods vaild', () => {
        expect(firebaseConfig.apiKey).toEqual('AIzaSyCSwAffdyPYPydhe7wrsS2fcKkf1Jhut-M')
    })
  })
