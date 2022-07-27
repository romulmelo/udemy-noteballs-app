import { createServer, Model } from "miragejs"

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    models: {
      note: Model
    },

    seeds(server) {
      server.create("note", {
        title: "My second note",
        content: "This is my second note",
        createdAt: new Date().toISOString()
      })
      server.create("note", {
        title: "My first note",
        content: "This is my first note",
        createdAt: new Date().toISOString()
      })
    },

    routes() {
      this.namespace = "api"
      this.timing = 1500

      this.get("/notes", (schema) => {
        return schema.notes.all()
      })
    }
  })

  return server
}
