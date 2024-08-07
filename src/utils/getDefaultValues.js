import { DEFAULT_VALUE_LIST } from "../data/chemicals"

const getDefaultValues = (chemicalName) => {
  return DEFAULT_VALUE_LIST[chemicalName]
}

export default getDefaultValues
