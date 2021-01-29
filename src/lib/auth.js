class Auth {
  static setToken(token) {
    localStorage.setItem('token', token)
  }

  static getToken() {
    return localStorage.getItem('token')
  }

  static logout() {
    localStorage.removeItem('token')
  }

  static getPayload() {
    const token = this.getToken()
    if (!token) return false
    const parts = token.split('.')
    if (parts.length < 3) return false
    const payload = JSON.parse(atob(parts[1]))
    return payload
  }

  static isAuthenticated() {
    const payload = this.getPayload()
    if (!payload) return false
    const now = Math.round(Date.now() / 1000)
    return now < payload.exp
  }

  static getUserId() {
    const payload = this.getPayload()
    if (!payload) return false
    const id = payload.sub
    if (!id) return false
    return id
  }

}

export default Auth