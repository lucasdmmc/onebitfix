import { ResourceOptions } from "adminjs"

export const CategoryResourceOptions: ResourceOptions = {
  navigation: "Catálago",
  editProperties: ["name", "position"],
  filterProperties: ["name", "position", "createdAt", "updatedAt"],
  listProperties: ["id", "name", "position"],
  showProperties: ["id", "name", "position", "createdAt", "updatedAt"],
}