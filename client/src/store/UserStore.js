import {makeAutoObservable} from 'mobx'

export default class UserStore {
  constructor() {
    this._isAuth = false
    // this._isAuth = true
    this._user = {}
    makeAutoObservable(this)
  }

  setIsAuth(bool) {
    this._isAuth = bool
  }
  setUser(user) {
    this._user = user
  }
  

//   setUser(userData) {
//   this._user = userData;
// }

  get isAuth() {
    return this._isAuth
  }

  get user() {
    return this._user
  }
}