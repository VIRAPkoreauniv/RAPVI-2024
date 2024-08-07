import { atom } from "recoil"
import { recoilPersist } from "recoil-persist"

const { persistAtom } = recoilPersist({
  key: "siteInput",
  storage: localStorage,
})

export const siteInputState = atom({
  key: "siteInput",
  default: {
    chemicalName: "오염 물질",
    coc: {
      S: 0,
      Hc: 0,
      Dair: 0,
      Dwater: 0,
      DHvb: 0,
      Tc: 0,
      Tb: 0,
      MW: 0,
      IUR: 0,
      Rfc: 0,
      Mut: 0,
      Koc: 0,
      foc: 0,
    },
    // TODO: 다른 파트 추가
  },
  effects_UNSTABLE: [persistAtom],
})
