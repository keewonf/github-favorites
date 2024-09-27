export class GithubUser {
  static async search(username) {
    const endpoint = `https://api.github.com/users/${username}`

    const response = await fetch(endpoint);
    
    const data = await response.json();
    
    const {login, name, public_repos, followers} = data

    return {
      login,
      name,
      public_repos,
      followers
    }
  }
}