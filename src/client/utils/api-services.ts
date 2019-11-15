export let AccessToken: string = localStorage.getItem("token") || null;

export let User: any = {
  userid: localStorage.getItem("userid") || null,
  role: localStorage.getItem("role") || null
};

export const setLogin = (token: string, userid: string, role: string) => {
  AccessToken = token;
  User = { userid, role };

  localStorage.setItem("token", token);
  localStorage.setItem("userid", userid);
  localStorage.setItem("role", role);
};

export const json = async (uri: string, method: string = "GET", body?: {}) => {
  let headers: any = { "Content-Type": "application/json" };
  if (AccessToken) {
    headers["Authorization"] = `Bearer ${AccessToken}`;
  }
  try {
      let result = await fetch(uri, {
          method,
          headers,
          body: JSON.stringify(body)
      })
      if (result.ok) {
          return await result.json()
      } else {
          return false
      }
  } catch (error) {
      console.log(error)
  }
};
