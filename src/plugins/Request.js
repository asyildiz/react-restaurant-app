const Request = {
  async get({ url, headers = {} }) {
    return this.tryCatch(async () => {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
      });

      return response.json();
    });
  },

  async post({ url, body, headers = {} }) {
    return this.tryCatch(async () => {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...body }),
      });
      const data = await response.json();

      return data;
    });
  },

  async tryCatch(fn) {
    try {
      return fn();
    } catch (error) {
      return false;
    }
  },
};

export default Request;
