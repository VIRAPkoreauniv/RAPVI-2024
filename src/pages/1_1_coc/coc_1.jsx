import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { BiChevronRight } from "react-icons/bi"
import { useNavigate } from "react-router-dom"
import Header from "../../components/header"
import Menu from "../../components/menu"
import { CHEMICAL_LIST } from "../../data/chemicals"
import * as S from "../../styles/Home.style"

const Coc = () => {
  const { t } = useTranslation("site")
  const navigate = useNavigate()

  const [default_S, setDefault_S] = useState(0)
  const [default_Hc, setDefault_Hc] = useState(0)
  const [default_Dair, setDefault_Dair] = useState(0)
  const [default_Dwater, setDefault_Dwater] = useState(0)
  const [default_DHvb, setDefault_DHvb] = useState(0)
  const [default_Tc, setDefault_Tc] = useState(0)
  const [default_Tb, setDefault_Tb] = useState(0)
  const [default_MW, setDefault_MW] = useState(0)
  const [default_IUR, setDefault_IUR] = useState(0)
  const [default_Rfc, setDefault_Rfc] = useState(0)
  const [default_Mut, setDefault_Mut] = useState(0)
  const [default_Koc, setDefault_Koc] = useState(0)
  const [default_foc, setDefault_foc] = useState(0)

  const [value_S, setValue_S] = useState()
  const [value_Hc, setValue_Hc] = useState()
  const [value_Dair, setValue_Dair] = useState()
  const [value_Dwater, setValue_Dwater] = useState()
  const [value_DHvb, setValue_DHvb] = useState()
  const [value_Tc, setValue_Tc] = useState()
  const [value_Tb, setValue_Tb] = useState()
  const [value_MW, setValue_MW] = useState()
  const [value_IUR, setValue_IUR] = useState()
  const [value_Rfc, setValue_Rfc] = useState()
  const [value_Mut, setValue_Mut] = useState()
  const [value_Koc, setValue_Koc] = useState()
  const [value_foc, setValue_foc] = useState()

  const [chem, setChem] = useState("오염 물질")
  // null 이면 input disabled
  const [disabled_IUR, setDisabled_IUR] = useState("disabled")
  const [disabled_Rfc, setDisabled_Rfc] = useState("disabled")

  const [typeIUR, setTypeIUR] = useState("number")
  const [typeRfc, setTypeRfc] = useState("number")

  // 세션 값 있으면 그거 쓰기
  const getSession = () => {
    if (sessionStorage.getItem("chem") !== null) {
      setChem(sessionStorage.getItem("chem"))
    }

    setValue_S(sessionStorage.getItem("value_S"))
    setValue_Hc(sessionStorage.getItem("value_Hc"))
    setValue_Dair(sessionStorage.getItem("value_Dair"))
    setValue_Dwater(sessionStorage.getItem("value_Dwater"))
    setValue_DHvb(sessionStorage.getItem("value_DHvb"))
    setValue_Tc(sessionStorage.getItem("value_Tc"))
    setValue_Tb(sessionStorage.getItem("value_Tb"))
    setValue_MW(sessionStorage.getItem("value_MW"))
    setValue_IUR(sessionStorage.getItem("value_IUR"))
    setValue_Rfc(sessionStorage.getItem("value_Rfc"))
    setValue_Mut(sessionStorage.getItem("value_Mut"))
    setValue_Koc(sessionStorage.getItem("value_Koc"))
    setValue_foc(sessionStorage.getItem("value_foc"))

    if (
      sessionStorage.getItem("value_IUR") === "NULL" ||
      sessionStorage.getItem("value_IUR") === "0"
    ) {
      setDisabled_IUR("disabled")
      setTypeIUR("text")
      setValue_IUR("NULL")
    } else if (value_IUR !== null) {
      setDisabled_IUR("")
      setTypeIUR("number")
    }
    if (
      sessionStorage.getItem("value_Rfc") === "NULL" ||
      sessionStorage.getItem("value_Rfc") === "0"
    ) {
      setDisabled_Rfc("disabled")
      setTypeRfc("text")
      setValue_Rfc("NULL")
    } else if (value_Rfc !== null) {
      setDisabled_Rfc("")
      setTypeRfc("number")
    }
  }

  const selectChem = (e) => {
    let selectedChem = e.target.value
    setOption("none")
    setChem(selectedChem)

    if (selectedChem === "Acenaphthene") {
      setValue_S(3.9)
      setDefault_S(3.9)

      setValue_Hc(0.000184)
      setDefault_Hc(0.000184)

      setValue_Dair(0.0506143)
      setDefault_Dair(0.0506143)

      setValue_Dwater(0.00000833)
      setDefault_Dwater(0.00000833)

      setValue_DHvb(12155)
      setDefault_DHvb(12155)

      setValue_Tc(803.15)
      setDefault_Tc(803.15)

      setValue_Tb(552)
      setDefault_Tb(552)

      setValue_MW(154.21)
      setDefault_MW(154.21)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(null)
      setDefault_Rfc(null)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(2522)
      setDefault_Koc(2522)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Acetaldehyde") {
      setValue_S(1000000)
      setDefault_S(1000000)

      setValue_Hc(0.0000667)
      setDefault_Hc(0.0000667)

      setValue_Dair(0.1277026)
      setDefault_Dair(0.1277026)

      setValue_Dwater(0.0000135)
      setDefault_Dwater(0.0000135)

      setValue_DHvb(6156.64)
      setDefault_DHvb(6156.64)

      setValue_Tc(466)
      setDefault_Tc(466)

      setValue_Tb(293.1)
      setDefault_Tb(293.1)

      setValue_MW(293.1)
      setDefault_MW(293.1)

      setValue_IUR(0.0000022)
      setDefault_IUR(0.0000022)

      setValue_Rfc(0.009)
      setDefault_Rfc(0.009)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(3.219)
      setDefault_Koc(3.219)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Acetone") {
      setValue_S(1000000)
      setDefault_S(1000000)

      setValue_Hc(0.000035)
      setDefault_Hc(0.000035)

      setValue_Dair(0.1059215)
      setDefault_Dair(0.1059215)

      setValue_Dwater(0.0000115)
      setDefault_Dwater(0.0000115)

      setValue_DHvb(6955)
      setDefault_DHvb(6955)

      setValue_Tc(508.1)
      setDefault_Tc(508.1)

      setValue_Tb(328.5)
      setDefault_Tb(328.5)

      setValue_MW(58.081)
      setDefault_MW(58.081)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(31)
      setDefault_Rfc(31)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(9.726)
      setDefault_Koc(9.726)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Acetonitrile") {
      setValue_S(1000000)
      setDefault_S(1000000)

      setValue_Hc(0.0000345)
      setDefault_Hc(0.0000345)

      setValue_Dair(0.1339939)
      setDefault_Dair(0.1339939)

      setValue_Dwater(0.0000141)
      setDefault_Dwater(0.0000141)

      setValue_DHvb(7110.25)
      setDefault_DHvb(7110.25)

      setValue_Tc(545.5)
      setDefault_Tc(545.5)

      setValue_Tb(332.6)
      setDefault_Tb(332.6)

      setValue_MW(41.053)
      setDefault_MW(41.053)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.06)
      setDefault_Rfc(0.06)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(13.46)
      setDefault_Koc(13.46)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Acetophenone") {
      setValue_S(6130)
      setDefault_S(6130)

      setValue_Hc(0.0000104)
      setDefault_Hc(0.0000104)

      setValue_Dair(0.0652221)
      setDefault_Dair(0.0652221)

      setValue_Dwater(0.0000087229)
      setDefault_Dwater(0.0000087229)

      setValue_DHvb(11731.5)
      setDefault_DHvb(11731.5)

      setValue_Tc(709.5)
      setDefault_Tc(709.5)

      setValue_Tb(475.0)
      setDefault_Tb(475.0)

      setValue_MW(120.15)
      setDefault_MW(120.15)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(null)
      setDefault_Rfc(null)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(98.77)
      setDefault_Koc(98.77)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Acrolein") {
      setValue_S(212000)
      setDefault_S(212000)

      setValue_Hc(0.000122)
      setDefault_Hc(0.000122)

      setValue_Dair(0.1116862)
      setDefault_Dair(0.1116862)

      setValue_Dwater(0.0000122)
      setDefault_Dwater(0.0000122)

      setValue_DHvb(6730.7658)
      setDefault_DHvb(6730.7658)

      setValue_Tc(506.0)
      setDefault_Tc(506.0)

      setValue_Tb(325.6)
      setDefault_Tb(325.6)

      setValue_MW(56.065)
      setDefault_MW(56.065)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.00002)
      setDefault_Rfc(0.00002)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(4.901)
      setDefault_Koc(4.901)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Acrylic Acid") {
      setValue_S(1000000)
      setDefault_S(1000000)

      setValue_Hc(0.00000037)
      setDefault_Hc(0.00000037)

      setValue_Dair(0.1027173)
      setDefault_Dair(0.1027173)

      setValue_Dwater(0.000012)
      setDefault_Dwater(0.000012)

      setValue_DHvb(10955.1)
      setDefault_DHvb(10955.1)

      setValue_Tc(615.15)
      setDefault_Tc(615.15)

      setValue_Tb(414.35)
      setDefault_Tb(414.35)

      setValue_MW(72.064)
      setDefault_MW(72.064)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.001)
      setDefault_Rfc(0.001)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(2.235)
      setDefault_Koc(2.235)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Acrylonitrile") {
      setValue_S(74500)
      setDefault_S(74500)

      setValue_Hc(0.000138)
      setDefault_Hc(0.000138)

      setValue_Dair(0.1136836)
      setDefault_Dair(0.1136836)

      setValue_Dwater(0.0000123)
      setDefault_Dwater(0.0000123)

      setValue_DHvb(7786)
      setDefault_DHvb(7786)

      setValue_Tc(519.0)
      setDefault_Tc(519.0)

      setValue_Tb(350.3)
      setDefault_Tb(350.3)

      setValue_MW(53.064)
      setDefault_MW(53.064)

      setValue_IUR(0.000068)
      setDefault_IUR(0.000068)

      setValue_Rfc(0.002)
      setDefault_Rfc(0.002)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(28.55)
      setDefault_Koc(28.55)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Aldrin") {
      setValue_S(0.017)
      setDefault_S(0.017)

      setValue_Hc(0.000044)
      setDefault_Hc(0.000044)

      setValue_Dair(0.0228116)
      setDefault_Dair(0.0228116)

      setValue_Dwater(0.0000058402)
      setDefault_Dwater(0.0000058402)

      setValue_DHvb(15000)
      setDefault_DHvb(15000)

      setValue_Tc(627.225)
      setDefault_Tc(627.225)

      setValue_Tb(418.15)
      setDefault_Tb(418.15)

      setValue_MW(364.92)
      setDefault_MW(364.92)

      setValue_IUR(0.0049)
      setDefault_IUR(0.0049)

      setValue_Rfc(null)
      setDefault_Rfc(null)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(437500)
      setDefault_Koc(437500)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Allyl Alcohol") {
      setValue_S(1000000)
      setDefault_S(1000000)

      setValue_Hc(0.00000499)
      setDefault_Hc(0.00000499)

      setValue_Dair(0.1097535)
      setDefault_Dair(0.1097535)

      setValue_Dwater(0.0000121)
      setDefault_Dwater(0.0000121)

      setValue_DHvb(9553.84)
      setDefault_DHvb(9553.84)

      setValue_Tc(539.8)
      setDefault_Tc(539.8)

      setValue_Tb(370.15)
      setDefault_Tb(370.15)

      setValue_MW(58.081)
      setDefault_MW(58.081)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.0001)
      setDefault_Rfc(0.0001)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(4.052)
      setDefault_Koc(4.052)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Allyl Chloride") {
      setValue_S(3370)
      setDefault_S(3370)

      setValue_Hc(0.011)
      setDefault_Hc(0.011)

      setValue_Dair(0.093611)
      setDefault_Dair(0.093611)

      setValue_Dwater(0.0000108)
      setDefault_Dwater(0.0000108)

      setValue_DHvb(6936.08)
      setDefault_DHvb(6936.08)

      setValue_Tc(514.26)
      setDefault_Tc(514.26)

      setValue_Tb(318.1)
      setDefault_Tb(318.1)

      setValue_MW(76.526)
      setDefault_MW(76.526)

      setValue_IUR(0.000006)
      setDefault_IUR(0.000006)

      setValue_Rfc(0.001)
      setDefault_Rfc(0.001)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(47.28)
      setDefault_Koc(47.28)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Ammonia") {
      setValue_S(482000)
      setDefault_S(482000)

      setValue_Hc(0.0000161)
      setDefault_Hc(0.0000161)

      setValue_Dair(0.2305471)
      setDefault_Dair(0.2305471)

      setValue_Dwater(0.0000223)
      setDefault_Dwater(0.0000223)

      setValue_DHvb(5581)
      setDefault_DHvb(5581)

      setValue_Tc(405.55)
      setDefault_Tc(405.55)

      setValue_Tb(239.8)
      setDefault_Tb(239.8)

      setValue_MW(17.031)
      setDefault_MW(17.031)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.5)
      setDefault_Rfc(0.5)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(0.06337)
      setDefault_Koc(0.06337)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Amyl Alcohol, tert-") {
      setValue_S(110000)
      setDefault_S(110000)

      setValue_Hc(0.0000138)
      setDefault_Hc(0.0000138)

      setValue_Dair(0.0785447)
      setDefault_Dair(0.0785447)

      setValue_Dwater(0.0000091012)
      setDefault_Dwater(0.0000091012)

      setValue_DHvb(9586.520076)
      setDefault_DHvb(9586.520076)

      setValue_Tc(545.15)
      setDefault_Tc(545.15)

      setValue_Tb(375.55)
      setDefault_Tb(375.55)

      setValue_MW(88.151)
      setDefault_MW(88.151)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.003)
      setDefault_Rfc(0.003)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(10.14)
      setDefault_Koc(10.14)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Anthracene") {
      setValue_S(0.0434)
      setDefault_S(0.0434)

      setValue_Hc(0.0000556)
      setDefault_Hc(0.0000556)

      setValue_Dair(0.0389732)
      setDefault_Dair(0.0389732)

      setValue_Dwater(0.0000078523)
      setDefault_Dwater(0.0000078523)

      setValue_DHvb(13121)
      setDefault_DHvb(13121)

      setValue_Tc(873.0)
      setDefault_Tc(873.0)

      setValue_Tb(612.9)
      setDefault_Tb(612.9)

      setValue_MW(178.24)
      setDefault_MW(178.24)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(null)
      setDefault_Rfc(null)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(7274)
      setDefault_Koc(7274)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Benz[a]anthracene") {
      setValue_S(0.0094)
      setDefault_S(0.0094)

      setValue_Hc(0.000012)
      setDefault_Hc(0.000012)

      setValue_Dair(0.0261138)
      setDefault_Dair(0.0261138)

      setValue_Dwater(0.0000067495)
      setDefault_Dwater(0.0000067495)

      setValue_DHvb(16000)
      setDefault_DHvb(16000)

      setValue_Tc(1066.125)
      setDefault_Tc(1066.125)

      setValue_Tb(710.75)
      setDefault_Tb(710.75)

      setValue_MW(228.3)
      setDefault_MW(228.3)

      setValue_IUR(0.00006)
      setDefault_IUR(0.00006)

      setValue_Rfc(null)
      setDefault_Rfc(null)

      setValue_Mut("Yes")
      setDefault_Mut("Yes")

      setValue_Koc(99700)
      setDefault_Koc(99700)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Benzaldehyde") {
      setValue_S(6950)
      setDefault_S(6950)

      setValue_Hc(0.0000267)
      setDefault_Hc(0.0000267)

      setValue_Dair(0.074393)
      setDefault_Dair(0.074393)

      setValue_Dwater(0.0000094627)
      setDefault_Dwater(0.0000094627)

      setValue_DHvb(11657.8)
      setDefault_DHvb(11657.8)

      setValue_Tc(695.0)
      setDefault_Tc(695.0)

      setValue_Tb(452.0)
      setDefault_Tb(452.0)

      setValue_MW(106.13)
      setDefault_MW(106.13)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(null)
      setDefault_Rfc(null)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(32.69)
      setDefault_Koc(32.69)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Benzene") {
      setValue_S(1790)
      setDefault_S(1790)

      setValue_Hc(0.00555)
      setDefault_Hc(0.00555)

      setValue_Dair(0.089534)
      setDefault_Dair(0.089534)

      setValue_Dwater(0.0000103)
      setDefault_Dwater(0.0000103)

      setValue_DHvb(7342)
      setDefault_DHvb(7342)

      setValue_Tc(562.16)
      setDefault_Tc(562.16)

      setValue_Tb(353)
      setDefault_Tb(353)

      setValue_MW(78.115)
      setDefault_MW(78.115)

      setValue_IUR(0.0000078)
      setDefault_IUR(0.0000078)

      setValue_Rfc(0.03)
      setDefault_Rfc(0.03)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(70.51)
      setDefault_Koc(70.51)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Benzenethiol") {
      setValue_S(835.0)
      setDefault_S(835.0)

      setValue_Hc(0.000335)
      setDefault_Hc(0.000335)

      setValue_Dair(0.0728564)
      setDefault_Dair(0.0728564)

      setValue_Dwater(0.0000094506)
      setDefault_Dwater(0.0000094506)

      setValue_DHvb(11359.51)
      setDefault_DHvb(11359.51)

      setValue_Tc(663.15)
      setDefault_Tc(663.15)

      setValue_Tb(442.1)
      setDefault_Tb(442.1)

      setValue_MW(110.18)
      setDefault_MW(110.18)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(null)
      setDefault_Rfc(null)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(153.7)
      setDefault_Koc(153.7)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Benzyl Chloride") {
      setValue_S(525.0)
      setDefault_S(525.0)

      setValue_Hc(0.000412)
      setDefault_Hc(0.000412)

      setValue_Dair(0.0633618)
      setDefault_Dair(0.0633618)

      setValue_Dwater(0.0000088057)
      setDefault_Dwater(0.0000088057)

      setValue_DHvb(8773.2598)
      setDefault_DHvb(8773.2598)

      setValue_Tc(685.0)
      setDefault_Tc(685.0)

      setValue_Tb(452)
      setDefault_Tb(452)

      setValue_MW(126.59)
      setDefault_MW(126.59)

      setValue_IUR(0.000049)
      setDefault_IUR(0.000049)

      setValue_Rfc(0.001)
      setDefault_Rfc(0.001)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(99.03)
      setDefault_Koc(99.03)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Biphenyl, 1,1'-") {
      setValue_S(7.48)
      setDefault_S(7.48)

      setValue_Hc(0.000308)
      setDefault_Hc(0.000308)

      setValue_Dair(0.0470592)
      setDefault_Dair(0.0470592)

      setValue_Dwater(0.0000075618)
      setDefault_Dwater(0.0000075618)

      setValue_DHvb(10890)
      setDefault_DHvb(10890)

      setValue_Tc(789.0)
      setDefault_Tc(789.0)

      setValue_Tb(529.1)
      setDefault_Tb(529.1)

      setValue_MW(154.21)
      setDefault_MW(154.21)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.0004)
      setDefault_Rfc(0.0004)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(3019)
      setDefault_Koc(3019)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Bis(2-chloro-methylethyl) ether") {
      setValue_S(1700)
      setDefault_S(1700)

      setValue_Hc(0.0000742)
      setDefault_Hc(0.0000742)

      setValue_Dair(0.0398891)
      setDefault_Dair(0.0398891)

      setValue_Dwater(0.0000073606)
      setDefault_Dwater(0.0000073606)

      setValue_DHvb(9694.9215)
      setDefault_DHvb(9694.9215)

      setValue_Tc(690.0)
      setDefault_Tc(690.0)

      setValue_Tb(460.0)
      setDefault_Tb(460.0)

      setValue_MW(171.07)
      setDefault_MW(171.07)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(null)
      setDefault_Rfc(null)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(160.8)
      setDefault_Koc(160.8)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Bis(2-chloroethyl)ether") {
      setValue_S(17200)
      setDefault_S(17200)

      setValue_Hc(0.000017)
      setDefault_Hc(0.000017)

      setValue_Dair(0.0567192)
      setDefault_Dair(0.0567192)

      setValue_Dwater(0.000008707)
      setDefault_Dwater(0.000008707)

      setValue_DHvb(10803)
      setDefault_DHvb(10803)

      setValue_Tc(659.79)
      setDefault_Tc(659.79)

      setValue_Tb(451.5)
      setDefault_Tb(451.5)

      setValue_MW(143.01)
      setDefault_MW(143.01)

      setValue_IUR(0.00033)
      setDefault_IUR(0.00033)

      setValue_Rfc(null)
      setDefault_Rfc(null)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(35.32)
      setDefault_Koc(35.32)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Bromo-2-chloroethane, 1-") {
      setValue_S(6900)
      setDefault_S(6900)

      setValue_Hc(0.000909)
      setDefault_Hc(0.000909)

      setValue_Dair(0.0659248)
      setDefault_Dair(0.0659248)

      setValue_Dwater(0.0000108)
      setDefault_Dwater(0.0000108)

      setValue_DHvb(9107.19)
      setDefault_DHvb(9107.19)

      setValue_Tc(570.0)
      setDefault_Tc(570.0)

      setValue_Tb(380.0)
      setDefault_Tb(380.0)

      setValue_MW(143.41)
      setDefault_MW(143.41)

      setValue_IUR(0.0006)
      setDefault_IUR(0.0006)

      setValue_Rfc(null)
      setDefault_Rfc(null)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(46.34)
      setDefault_Koc(46.34)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Bromobenzene") {
      setValue_S(446.0)
      setDefault_S(446.0)

      setValue_Hc(0.00247)
      setDefault_Hc(0.00247)

      setValue_Dair(0.0537132)
      setDefault_Dair(0.0537132)

      setValue_Dwater(0.0000093004)
      setDefault_Dwater(0.0000093004)

      setValue_DHvb(10628.64)
      setDefault_DHvb(10628.64)

      setValue_Tc(670.0)
      setDefault_Tc(670.0)

      setValue_Tb(429.0)
      setDefault_Tb(429.0)

      setValue_MW(157.01)
      setDefault_MW(157.01)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.06)
      setDefault_Rfc(0.06)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(393.2)
      setDefault_Koc(393.2)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Bromochloromethane") {
      setValue_S(16700)
      setDefault_S(16700)

      setValue_Hc(0.00146)
      setDefault_Hc(0.00146)

      setValue_Dair(0.078692)
      setDefault_Dair(0.078692)

      setValue_Dwater(0.0000122)
      setDefault_Dwater(0.0000122)

      setValue_DHvb(7167.65)
      setDefault_DHvb(7167.65)

      setValue_Tc(511.5)
      setDefault_Tc(511.5)

      setValue_Tb(341.0)
      setDefault_Tb(341.0)

      setValue_MW(129.38)
      setDefault_MW(129.38)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.04)
      setDefault_Rfc(0.04)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(16.72)
      setDefault_Koc(16.72)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Bromodichloromethane") {
      setValue_S(3032)
      setDefault_S(3032)

      setValue_Hc(0.00212)
      setDefault_Hc(0.00212)

      setValue_Dair(0.0562629)
      setDefault_Dair(0.0562629)

      setValue_Dwater(0.0000107)
      setDefault_Dwater(0.0000107)

      setValue_DHvb(7800)
      setDefault_DHvb(7800)

      setValue_Tc(585.85)
      setDefault_Tc(585.85)

      setValue_Tb(363.0)
      setDefault_Tb(363.0)

      setValue_MW(163.83)
      setDefault_MW(163.83)

      setValue_IUR(0.000037)
      setDefault_IUR(0.000037)

      setValue_Rfc(null)
      setDefault_Rfc(null)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(54.38)
      setDefault_Koc(54.38)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Bromoform") {
      setValue_S(3100)
      setDefault_S(3100)

      setValue_Hc(0.000535)
      setDefault_Hc(0.000535)

      setValue_Dair(0.0357324)
      setDefault_Dair(0.0357324)

      setValue_Dwater(0.0000104)
      setDefault_Dwater(0.0000104)

      setValue_DHvb(9472.63236)
      setDefault_DHvb(9472.63236)

      setValue_Tc(633.375)
      setDefault_Tc(633.375)

      setValue_Tb(422.25)
      setDefault_Tb(422.25)

      setValue_MW(252.73)
      setDefault_MW(252.73)

      setValue_IUR(0.0000011)
      setDefault_IUR(0.0000011)

      setValue_Rfc(null)
      setDefault_Rfc(null)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(120.9)
      setDefault_Koc(120.9)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Bromomethane") {
      setValue_S(15200)
      setDefault_S(15200)

      setValue_Hc(0.00734)
      setDefault_Hc(0.00734)

      setValue_Dair(0.1004976)
      setDefault_Dair(0.1004976)

      setValue_Dwater(0.0000135)
      setDefault_Dwater(0.0000135)

      setValue_DHvb(5714)
      setDefault_DHvb(5714)

      setValue_Tc(467.0)
      setDefault_Tc(467.0)

      setValue_Tb(276.5)
      setDefault_Tb(276.5)

      setValue_MW(94.939)
      setDefault_MW(94.939)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.005)
      setDefault_Rfc(0.005)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(10.77)
      setDefault_Koc(10.77)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Butadiene, 1,3-") {
      setValue_S(735.0)
      setDefault_S(735.0)

      setValue_Hc(0.0736)
      setDefault_Hc(0.0736)

      setValue_Dair(0.1003488)
      setDefault_Dair(0.1003488)

      setValue_Dwater(0.0000103)
      setDefault_Dwater(0.0000103)

      setValue_DHvb(5370.33)
      setDefault_DHvb(5370.33)

      setValue_Tc(425.0)
      setDefault_Tc(425.0)

      setValue_Tb(268.6)
      setDefault_Tb(268.6)

      setValue_MW(54.092)
      setDefault_MW(54.092)

      setValue_IUR(0.00003)
      setDefault_IUR(0.00003)

      setValue_Rfc(0.002)
      setDefault_Rfc(0.002)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(53.3)
      setDefault_Koc(53.3)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Butanol, N-") {
      setValue_S(63200)
      setDefault_S(63200)

      setValue_Hc(0.00000881)
      setDefault_Hc(0.00000881)

      setValue_Dair(0.0900387)
      setDefault_Dair(0.0900387)

      setValue_Dwater(0.0000101)
      setDefault_Dwater(0.0000101)

      setValue_DHvb(134572.18)
      setDefault_DHvb(134572.18)

      setValue_Tc(586.275)
      setDefault_Tc(586.275)

      setValue_Tb(390.85)
      setDefault_Tb(390.85)

      setValue_MW(74.124)
      setDefault_MW(74.124)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(null)
      setDefault_Rfc(null)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(10.01)
      setDefault_Koc(10.01)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Butyl alcohol, sec-") {
      setValue_S(181000)
      setDefault_S(181000)

      setValue_Hc(0.00000906)
      setDefault_Hc(0.00000906)

      setValue_Dair(0.0898848)
      setDefault_Dair(0.0898848)

      setValue_Dwater(0.0000101)
      setDefault_Dwater(0.0000101)

      setValue_DHvb(11875.42312)
      setDefault_DHvb(11875.42312)

      setValue_Tc(536.2)
      setDefault_Tc(536.2)

      setValue_Tb(372.65)
      setDefault_Tb(372.65)

      setValue_MW(74.124)
      setDefault_MW(74.124)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(30.0)
      setDefault_Rfc(30.0)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(7.097)
      setDefault_Koc(7.097)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Butylbenzene, n-") {
      setValue_S(11.8)
      setDefault_S(11.8)

      setValue_Hc(0.0159)
      setDefault_Hc(0.0159)

      setValue_Dair(0.0527732)
      setDefault_Dair(0.0527732)

      setValue_Dwater(0.0000073335)
      setDefault_Dwater(0.0000073335)

      setValue_DHvb(12267.12)
      setDefault_DHvb(12267.12)

      setValue_Tc(720)
      setDefault_Tc(720)

      setValue_Tb(456.3)
      setDefault_Tb(456.3)

      setValue_MW(134.22)
      setDefault_MW(134.22)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(null)
      setDefault_Rfc(null)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(6324)
      setDefault_Koc(6324)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Butylbenzene, sec-") {
      setValue_S(17.6)
      setDefault_S(17.6)

      setValue_Hc(0.0176)
      setDefault_Hc(0.0176)

      setValue_Dair(0.0527928)
      setDefault_Dair(0.0527928)

      setValue_Dwater(0.0000073371)
      setDefault_Dwater(0.0000073371)

      setValue_DHvb(11467.5)
      setDefault_DHvb(11467.5)

      setValue_Tc(677.25)
      setDefault_Tc(677.25)

      setValue_Tb(451.5)
      setDefault_Tb(451.5)

      setValue_MW(134.22)
      setDefault_MW(134.22)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(null)
      setDefault_Rfc(null)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(9245)
      setDefault_Koc(9245)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Butylbenzene, tert-") {
      setValue_S(29.5)
      setDefault_S(29.5)

      setValue_Hc(0.0132)
      setDefault_Hc(0.0132)

      setValue_Dair(0.0529525)
      setDefault_Dair(0.0529525)

      setValue_Dwater(0.0000073662)
      setDefault_Dwater(0.0000073662)

      setValue_DHvb(11405.35)
      setDefault_DHvb(11405.35)

      setValue_Tc(664.725)
      setDefault_Tc(664.725)

      setValue_Tb(443.15)
      setDefault_Tb(443.15)

      setValue_MW(134.22)
      setDefault_MW(134.22)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(null)
      setDefault_Rfc(null)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(3687)
      setDefault_Koc(3687)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Carbon Disulfide") {
      setValue_S(2160)
      setDefault_S(2160)

      setValue_Hc(0.0144)
      setDefault_Hc(0.0144)

      setValue_Dair(0.1064373)
      setDefault_Dair(0.1064373)

      setValue_Dwater(0.000013)
      setDefault_Dwater(0.000013)

      setValue_DHvb(6391)
      setDefault_DHvb(6391)

      setValue_Tc(552.0)
      setDefault_Tc(552.0)

      setValue_Tb(319.0)
      setDefault_Tb(319.0)

      setValue_MW(76.139)
      setDefault_MW(76.139)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.7)
      setDefault_Rfc(0.7)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(48.23)
      setDefault_Koc(48.23)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Carbon Tetrachloride") {
      setValue_S(793.0)
      setDefault_S(793.0)

      setValue_Hc(0.0276)
      setDefault_Hc(0.0276)

      setValue_Dair(0.0571435)
      setDefault_Dair(0.0571435)

      setValue_Dwater(0.0000097849)
      setDefault_Dwater(0.0000097849)

      setValue_DHvb(7127)
      setDefault_DHvb(7127)

      setValue_Tc(556.6)
      setDefault_Tc(556.6)

      setValue_Tb(349.8)
      setDefault_Tb(349.8)

      setValue_MW(153.82)
      setDefault_MW(153.82)

      setValue_IUR(0.000006)
      setDefault_IUR(0.000006)

      setValue_Rfc(0.1)
      setDefault_Rfc(0.1)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(285.6)
      setDefault_Koc(285.6)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Carbonyl Sulfide") {
      setValue_S(1220)
      setDefault_S(1220)

      setValue_Hc(0.61)
      setDefault_Hc(0.61)

      setValue_Dair(0.1157542)
      setDefault_Dair(0.1157542)

      setValue_Dwater(0.0000132)
      setDefault_Dwater(0.0000132)

      setValue_DHvb(4.66)
      setDefault_DHvb(4.66)

      setValue_Tc(378.15)
      setDefault_Tc(378.15)

      setValue_Tb(223.0)
      setDefault_Tb(223.0)

      setValue_MW(60.075)
      setDefault_MW(60.075)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.1)
      setDefault_Rfc(0.1)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(0.9123)
      setDefault_Koc(0.9123)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Chloral Hydrate") {
      setValue_S(793000)
      setDefault_S(793000)

      setValue_Hc(0.00000000571)
      setDefault_Hc(0.00000000571)

      setValue_Dair(0.0543991)
      setDefault_Dair(0.0543991)

      setValue_Dwater(0.0000104)
      setDefault_Dwater(0.0000104)

      setValue_DHvb(7520.55)
      setDefault_DHvb(7520.55)

      setValue_Tc(556.725)
      setDefault_Tc(556.725)

      setValue_Tb(371.15)
      setDefault_Tb(371.15)

      setValue_MW(165.4)
      setDefault_MW(165.4)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(null)
      setDefault_Rfc(null)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(4.465)
      setDefault_Koc(4.465)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Chlordane") {
      setValue_S(0.056)
      setDefault_S(0.056)

      setValue_Hc(0.0000486)
      setDefault_Hc(0.0000486)

      setValue_Dair(0.021493)
      setDefault_Dair(0.021493)

      setValue_Dwater(0.0000054477)
      setDefault_Dwater(0.0000054477)

      setValue_DHvb(14000)
      setDefault_DHvb(14000)

      setValue_Tc(672.225)
      setDefault_Tc(672.225)

      setValue_Tb(448.15)
      setDefault_Tb(448.15)

      setValue_MW(409.78)
      setDefault_MW(409.78)

      setValue_IUR(0.0001)
      setDefault_IUR(0.0001)

      setValue_Rfc(0.0007)
      setDefault_Rfc(0.0007)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(250000)
      setDefault_Koc(250000)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Chlorine") {
      setValue_S(6300)
      setDefault_S(6300)

      setValue_Hc(0.0117)
      setDefault_Hc(0.0117)

      setValue_Dair(0.1542088)
      setDefault_Dair(0.1542088)

      setValue_Dwater(0.0000223)
      setDefault_Dwater(0.0000223)

      setValue_DHvb(68572.6866)
      setDefault_DHvb(68572.6866)

      setValue_Tc(417.15)
      setDefault_Tc(417.15)

      setValue_Tb(239.1)
      setDefault_Tb(239.1)

      setValue_MW(70.906)
      setDefault_MW(70.906)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.00015)
      setDefault_Rfc(0.00015)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(5.462)
      setDefault_Koc(5.462)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Chloro,1-difluoroethane, 1-") {
      setValue_S(1400)
      setDefault_S(1400)

      setValue_Hc(0.0588)
      setDefault_Hc(0.0588)

      setValue_Dair(0.0803925)
      setDefault_Dair(0.0803925)

      setValue_Dwater(0.0000101)
      setDefault_Dwater(0.0000101)

      setValue_DHvb(53298.46)
      setDefault_DHvb(53298.46)

      setValue_Tc(409.85)
      setDefault_Tc(409.85)

      setValue_Tb(263.3)
      setDefault_Tb(263.3)

      setValue_MW(100.5)
      setDefault_MW(100.5)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(50.0)
      setDefault_Rfc(50.0)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(60.09)
      setDefault_Koc(60.09)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Chloro,3-butadiene, 2-") {
      setValue_S(874.9)
      setDefault_S(874.9)

      setValue_Hc(0.0561)
      setDefault_Hc(0.0561)

      setValue_Dair(0.0841489)
      setDefault_Dair(0.0841489)

      setValue_Dwater(0.00001)
      setDefault_Dwater(0.00001)

      setValue_DHvb(8074.848)
      setDefault_DHvb(8074.848)

      setValue_Tc(525)
      setDefault_Tc(525)

      setValue_Tb(332.4)
      setDefault_Tb(332.4)

      setValue_MW(88.537)
      setDefault_MW(88.537)

      setValue_IUR(0.0003)
      setDefault_IUR(0.0003)

      setValue_Rfc(0.02)
      setDefault_Rfc(0.02)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(156.8)
      setDefault_Koc(156.8)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Chlorobenzene") {
      setValue_S(498.0)
      setDefault_S(498.0)

      setValue_Hc(0.00311)
      setDefault_Hc(0.00311)

      setValue_Dair(0.0721306)
      setDefault_Dair(0.0721306)

      setValue_Dwater(0.0000094765)
      setDefault_Dwater(0.0000094765)

      setValue_DHvb(8410)
      setDefault_DHvb(8410)

      setValue_Tc(632.4)
      setDefault_Tc(632.4)

      setValue_Tb(404.7)
      setDefault_Tb(404.7)

      setValue_MW(112.56)
      setDefault_MW(112.56)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.05)
      setDefault_Rfc(0.05)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(291.4)
      setDefault_Koc(291.4)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Chlorobutane, 1-") {
      setValue_S(1100)
      setDefault_S(1100)

      setValue_Hc(0.0167)
      setDefault_Hc(0.0167)

      setValue_Dair(0.0784137)
      setDefault_Dair(0.0784137)

      setValue_Dwater(0.0000093275)
      setDefault_Dwater(0.0000093275)

      setValue_DHvb(7263.21)
      setDefault_DHvb(7263.21)

      setValue_Tc(542.0)
      setDefault_Tc(542.0)

      setValue_Tb(351.6)
      setDefault_Tb(351.6)

      setValue_MW(92.569)
      setDefault_MW(92.569)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(null)
      setDefault_Rfc(null)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(195.4)
      setDefault_Koc(195.4)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Chlorodifluoromethane") {
      setValue_S(2770)
      setDefault_S(2770)

      setValue_Hc(0.0406)
      setDefault_Hc(0.0406)

      setValue_Dair(0.1033788)
      setDefault_Dair(0.1033788)

      setValue_Dwater(0.0000133)
      setDefault_Dwater(0.0000133)

      setValue_DHvb(4835.92122)
      setDefault_DHvb(4835.92122)

      setValue_Tc(369.3)
      setDefault_Tc(369.3)

      setValue_Tb(232.3)
      setDefault_Tb(232.3)

      setValue_MW(86.469)
      setDefault_MW(86.469)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(50.0)
      setDefault_Rfc(50.0)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(8.648)
      setDefault_Koc(8.648)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Chloroethanol, 2-") {
      setValue_S(1000000)
      setDefault_S(1000000)

      setValue_Hc(0.000000761)
      setDefault_Hc(0.000000761)

      setValue_Dair(0.0999813)
      setDefault_Dair(0.0999813)

      setValue_Dwater(0.0000122)
      setDefault_Dwater(0.0000122)

      setValue_DHvb(9956.97)
      setDefault_DHvb(9956.97)

      setValue_Tc(602.625)
      setDefault_Tc(602.625)

      setValue_Tb(401.75)
      setDefault_Tb(401.75)

      setValue_MW(80.515)
      setDefault_MW(80.515)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(null)
      setDefault_Rfc(null)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(3.39)
      setDefault_Koc(3.39)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Chloroform") {
      setValue_S(7950)
      setDefault_S(7950)

      setValue_Hc(0.00367)
      setDefault_Hc(0.00367)

      setValue_Dair(0.0769197)
      setDefault_Dair(0.0769197)

      setValue_Dwater(0.0000109)
      setDefault_Dwater(0.0000109)

      setValue_DHvb(6988)
      setDefault_DHvb(6988)

      setValue_Tc(536.4)
      setDefault_Tc(536.4)

      setValue_Tb(334.1)
      setDefault_Tb(334.1)

      setValue_MW(119.38)
      setDefault_MW(119.38)

      setValue_IUR(0.000023)
      setDefault_IUR(0.000023)

      setValue_Rfc(0.098)
      setDefault_Rfc(0.098)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(51.21)
      setDefault_Koc(51.21)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Chloromethane") {
      setValue_S(5320)
      setDefault_S(5320)

      setValue_Hc(0.00882)
      setDefault_Hc(0.00882)

      setValue_Dair(0.1239651)
      setDefault_Dair(0.1239651)

      setValue_Dwater(0.0000136)
      setDefault_Dwater(0.0000136)

      setValue_DHvb(5114.6)
      setDefault_DHvb(5114.6)

      setValue_Tc(416.25)
      setDefault_Tc(416.25)

      setValue_Tb(249.0)
      setDefault_Tb(249.0)

      setValue_MW(50.488)
      setDefault_MW(50.488)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.09)
      setDefault_Rfc(0.09)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(6.157)
      setDefault_Koc(6.157)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Chloronaphthalene, Beta-") {
      setValue_S(11.7)
      setDefault_S(11.7)

      setValue_Hc(0.00032)
      setDefault_Hc(0.00032)

      setValue_Dair(0.0446914)
      setDefault_Dair(0.0446914)

      setValue_Dwater(0.0000077301)
      setDefault_Dwater(0.0000077301)

      setValue_DHvb(11311.936)
      setDefault_DHvb(11311.936)

      setValue_Tc(793.5)
      setDefault_Tc(793.5)

      setValue_Tb(529.0)
      setDefault_Tb(529.0)

      setValue_MW(162.62)
      setDefault_MW(162.62)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(2423)
      setDefault_Rfc(2423)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(null)
      setDefault_Koc(null)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Chlorophenol, 2-") {
      setValue_S(11300)
      setDefault_S(11300)

      setValue_Hc(0.0000112)
      setDefault_Hc(0.0000112)

      setValue_Dair(0.0661175)
      setDefault_Dair(0.0661175)

      setValue_Dwater(0.0000094784)
      setDefault_Dwater(0.0000094784)

      setValue_DHvb(9572)
      setDefault_DHvb(9572)

      setValue_Tc(675)
      setDefault_Tc(675)

      setValue_Tb(447.9)
      setDefault_Tb(447.9)

      setValue_MW(128.56)
      setDefault_MW(128.56)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(null)
      setDefault_Rfc(null)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(191.1)
      setDefault_Koc(191.1)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Chlorotoluene, o-") {
      setValue_S(374.0)
      setDefault_S(374.0)

      setValue_Hc(0.00357)
      setDefault_Hc(0.00357)

      setValue_Dair(0.0629025)
      setDefault_Dair(0.0629025)

      setValue_Dwater(0.0000087194)
      setDefault_Dwater(0.0000087194)

      setValue_DHvb(9950.5)
      setDefault_DHvb(9950.5)

      setValue_Tc(654.1)
      setDefault_Tc(654.1)

      setValue_Tb(432.0)
      setDefault_Tb(432.0)

      setValue_MW(126.59)
      setDefault_MW(126.59)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(null)
      setDefault_Rfc(null)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(928.6)
      setDefault_Koc(928.6)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Chlorotoluene, p-") {
      setValue_S(106.0)
      setDefault_S(106.0)

      setValue_Hc(0.00438)
      setDefault_Hc(0.00438)

      setValue_Dair(0.062571)
      setDefault_Dair(0.062571)

      setValue_Dwater(0.0000086574)
      setDefault_Dwater(0.0000086574)

      setValue_DHvb(10144.98)
      setDefault_DHvb(10144.98)

      setValue_Tc(658.7)
      setDefault_Tc(658.7)

      setValue_Tb(435.4)
      setDefault_Tb(435.4)

      setValue_MW(126.59)
      setDefault_MW(126.59)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(null)
      setDefault_Rfc(null)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(775.7)
      setDefault_Koc(775.7)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Crotonaldehyde, trans-") {
      setValue_S(150000)
      setDefault_S(150000)

      setValue_Hc(0.0000194)
      setDefault_Hc(0.0000194)

      setValue_Dair(0.0959235)
      setDefault_Dair(0.0959235)

      setValue_Dwater(0.0000108)
      setDefault_Dwater(0.0000108)

      setValue_DHvb(8.62)
      setDefault_DHvb(8.62)

      setValue_Tc(568.0)
      setDefault_Tc(568.0)

      setValue_Tb(377.0)
      setDefault_Tb(377.0)

      setValue_MW(70.092)
      setDefault_MW(70.092)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(null)
      setDefault_Rfc(null)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(10.66)
      setDefault_Koc(10.66)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Cumene") {
      setValue_S(61.3)
      setDefault_S(61.3)

      setValue_Hc(7)
      setDefault_Hc(7)

      setValue_Dair(0.0603044)
      setDefault_Dair(0.0603044)

      setValue_Dwater(0.0000078566)
      setDefault_Dwater(0.0000078566)

      setValue_DHvb(10335.3)
      setDefault_DHvb(10335.3)

      setValue_Tc(631.1)
      setDefault_Tc(631.1)

      setValue_Tb(425.4)
      setDefault_Tb(425.4)

      setValue_MW(120.2)
      setDefault_MW(120.2)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.4)
      setDefault_Rfc(0.4)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(1500)
      setDefault_Koc(1500)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Cyanogen") {
      setValue_S(8000)
      setDefault_S(8000)

      setValue_Hc(0.0054)
      setDefault_Hc(0.0054)

      setValue_Dair(0.1237533)
      setDefault_Dair(0.1237533)

      setValue_Dwater(0.0000138)
      setDefault_Dwater(0.0000138)

      setValue_DHvb(5778)
      setDefault_DHvb(5778)

      setValue_Tc(401.3)
      setDefault_Tc(401.3)

      setValue_Tb(251.9)
      setDefault_Tb(251.9)

      setValue_MW(52.036)
      setDefault_MW(52.036)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(null)
      setDefault_Rfc(null)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(56)
      setDefault_Koc(56)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Cyanogen Chloride") {
      setValue_S(60000)
      setDefault_S(60000)

      setValue_Hc(0.0019412)
      setDefault_Hc(0.0019412)

      setValue_Dair(0.1207454)
      setDefault_Dair(0.1207454)

      setValue_Dwater(0.0000142)
      setDefault_Dwater(0.0000142)

      setValue_DHvb(6389.13)
      setDefault_DHvb(6389.13)

      setValue_Tc(429.0)
      setDefault_Tc(429.0)

      setValue_Tb(286.0)
      setDefault_Tb(286.0)

      setValue_MW(61.471)
      setDefault_MW(61.471)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(null)
      setDefault_Rfc(null)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(12.8)
      setDefault_Koc(12.8)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Cyclohexane") {
      setValue_S(55.0)
      setDefault_S(55.0)

      setValue_Hc(0.15)
      setDefault_Hc(0.15)

      setValue_Dair(0.0799729)
      setDefault_Dair(0.0799729)

      setValue_Dwater(0.0000091077)
      setDefault_Dwater(0.0000091077)

      setValue_DHvb(7153.6)
      setDefault_DHvb(7153.6)

      setValue_Tc(553.4)
      setDefault_Tc(553.4)

      setValue_Tb(353.7)
      setDefault_Tb(353.7)

      setValue_MW(84.163)
      setDefault_MW(84.163)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(6.0)
      setDefault_Rfc(6.0)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(966.4)
      setDefault_Koc(966.4)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Cyclohexanone") {
      setValue_S(25000)
      setDefault_S(25000)

      setValue_Hc(0.000009)
      setDefault_Hc(0.000009)

      setValue_Dair(0.0767599)
      setDefault_Dair(0.0767599)

      setValue_Dwater(0.0000093795)
      setDefault_Dwater(0.0000093795)

      setValue_DHvb(10762.40076)
      setDefault_DHvb(10762.40076)

      setValue_Tc(629.0)
      setDefault_Tc(629.0)

      setValue_Tb(428.55)
      setDefault_Tb(428.55)

      setValue_MW(98.146)
      setDefault_MW(98.146)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.7)
      setDefault_Rfc(0.7)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(37.05)
      setDefault_Koc(37.05)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Cyclohexene") {
      setValue_S(213.0)
      setDefault_S(213.0)

      setValue_Hc(0.0455)
      setDefault_Hc(0.0455)

      setValue_Dair(0.0831876)
      setDefault_Dair(0.0831876)

      setValue_Dwater(0.0000094975)
      setDefault_Dwater(0.0000094975)

      setValue_DHvb(7279.94)
      setDefault_DHvb(7279.94)

      setValue_Tc(560.55)
      setDefault_Tc(560.55)

      setValue_Tb(356.15)
      setDefault_Tb(356.15)

      setValue_MW(82.147)
      setDefault_MW(82.147)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(1.0)
      setDefault_Rfc(1.0)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(303.2)
      setDefault_Koc(303.2)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Cyclohexylamine") {
      setValue_S(1000000)
      setDefault_S(1000000)

      setValue_Hc(0.00000416)
      setDefault_Hc(0.00000416)

      setValue_Dair(0.0712945)
      setDefault_Dair(0.0712945)

      setValue_Dwater(0.0000085394)
      setDefault_Dwater(0.0000085394)

      setValue_DHvb(10444.55)
      setDefault_DHvb(10444.55)

      setValue_Tc(610.725)
      setDefault_Tc(610.725)

      setValue_Tb(407.15)
      setDefault_Tb(407.15)

      setValue_MW(99.177)
      setDefault_MW(99.177)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(null)
      setDefault_Rfc(null)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(24.64)
      setDefault_Koc(24.64)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "DDE, p,p'-") {
      setValue_S(0.04)
      setDefault_S(0.04)

      setValue_Hc(0.0000416)
      setDefault_Hc(0.0000416)

      setValue_Dair(0.0229959)
      setDefault_Dair(0.0229959)

      setValue_Dwater(0.0000058592)
      setDefault_Dwater(0.0000058592)

      setValue_DHvb(15000)
      setDefault_DHvb(15000)

      setValue_Tc(913.725)
      setDefault_Tc(913.725)

      setValue_Tb(609.15)
      setDefault_Tb(609.15)

      setValue_MW(318.03)
      setDefault_MW(318.03)

      setValue_IUR(0.000097)
      setDefault_IUR(0.000097)

      setValue_Rfc(null)
      setDefault_Rfc(null)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(446300)
      setDefault_Koc(446300)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Dibenzofuran") {
      setValue_S(3.1)
      setDefault_S(3.1)

      setValue_Hc(0.000213)
      setDefault_Hc(0.000213)

      setValue_Dair(0.0650663)
      setDefault_Dair(0.0650663)

      setValue_Dwater(0.0000073773)
      setDefault_Dwater(0.0000073773)

      setValue_DHvb(66400)
      setDefault_DHvb(66400)

      setValue_Tc(824.0)
      setDefault_Tc(824.0)

      setValue_Tb(560.0)
      setDefault_Tb(560.0)

      setValue_MW(168.2)
      setDefault_MW(168.2)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(null)
      setDefault_Rfc(null)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(3761)
      setDefault_Koc(3761)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Dibenzothiophene") {
      setValue_S(1.47)
      setDefault_S(1.47)

      setValue_Hc(0.0000338)
      setDefault_Hc(0.0000338)

      setValue_Dair(0.0355475)
      setDefault_Dair(0.0355475)

      setValue_Dwater(0.0000075958)
      setDefault_Dwater(0.0000075958)

      setValue_DHvb(22299.23518)
      setDefault_DHvb(22299.23518)

      setValue_Tc(908.475)
      setDefault_Tc(908.475)

      setValue_Tb(605.65)
      setDefault_Tb(605.65)

      setValue_MW(184.26)
      setDefault_MW(184.26)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(null)
      setDefault_Rfc(null)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(6324)
      setDefault_Koc(6324)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Dibromo-3-chloropropane, 1,2-") {
      setValue_S(1230)
      setDefault_S(1230)

      setValue_Hc(0.000147)
      setDefault_Hc(0.000147)

      setValue_Dair(0.0321351)
      setDefault_Dair(0.0321351)

      setValue_Dwater(0.0000089048)
      setDefault_Dwater(0.0000089048)

      setValue_DHvb(9960.045)
      setDefault_DHvb(9960.045)

      setValue_Tc(703.5)
      setDefault_Tc(703.5)

      setValue_Tb(469.0)
      setDefault_Tb(469.0)

      setValue_MW(236.33)
      setDefault_MW(236.33)

      setValue_IUR(0.006)
      setDefault_IUR(0.006)

      setValue_Rfc(0.0002)
      setDefault_Rfc(0.0002)

      setValue_Mut("Yes")
      setDefault_Mut("Yes")

      setValue_Koc(370.3)
      setDefault_Koc(370.3)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Dibromochloromethane") {
      setValue_S(2700)
      setDefault_S(2700)

      setValue_Hc(0.000783)
      setDefault_Hc(0.000783)

      setValue_Dair(0.0366356)
      setDefault_Dair(0.0366356)

      setValue_Dwater(0.0000106)
      setDefault_Dwater(0.0000106)

      setValue_DHvb(5900)
      setDefault_DHvb(5900)

      setValue_Tc(678.2)
      setDefault_Tc(678.2)

      setValue_Tb(393.0)
      setDefault_Tb(393.0)

      setValue_MW(208.28)
      setDefault_MW(208.28)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(null)
      setDefault_Rfc(null)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(74.86)
      setDefault_Koc(74.86)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Dibromoethane, 1,2-") {
      setValue_S(3910)
      setDefault_S(3910)

      setValue_Hc(0.00065)
      setDefault_Hc(0.00065)

      setValue_Dair(0.0430348)
      setDefault_Dair(0.0430348)

      setValue_Dwater(0.0000104)
      setDefault_Dwater(0.0000104)

      setValue_DHvb(8310.03)
      setDefault_DHvb(8310.03)

      setValue_Tc(583.0)
      setDefault_Tc(583.0)

      setValue_Tb(404.6)
      setDefault_Tb(404.6)

      setValue_MW(187.86)
      setDefault_MW(187.86)

      setValue_IUR(0.0006)
      setDefault_IUR(0.0006)

      setValue_Rfc(0.009)
      setDefault_Rfc(0.009)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(50.2)
      setDefault_Koc(50.2)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Dibromomethane (Methylene Bromide)") {
      setValue_S(11900)
      setDefault_S(11900)

      setValue_Hc(0.000822)
      setDefault_Hc(0.000822)

      setValue_Dair(0.0551373)
      setDefault_Dair(0.0551373)

      setValue_Dwater(0.0000119)
      setDefault_Dwater(0.0000119)

      setValue_DHvb(7867.88)
      setDefault_DHvb(7867.88)

      setValue_Tc(583.0)
      setDefault_Tc(583.0)

      setValue_Tb(370.0)
      setDefault_Tb(370.0)

      setValue_MW(173.84)
      setDefault_MW(173.84)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.004)
      setDefault_Rfc(0.004)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(29.86)
      setDefault_Koc(29.86)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Dichloro-2-butene, cis,4-") {
      setValue_S(580.2)
      setDefault_S(580.2)

      setValue_Hc(0.000664)
      setDefault_Hc(0.000664)

      setValue_Dair(0.0665047)
      setDefault_Dair(0.0665047)

      setValue_Dwater(0.00000929)
      setDefault_Dwater(0.00000929)

      setValue_DHvb(9125)
      setDefault_DHvb(9125)

      setValue_Tc(640.0)
      setDefault_Tc(640.0)

      setValue_Tb(425.5)
      setDefault_Tb(425.5)

      setValue_MW(125)
      setDefault_MW(125)

      setValue_IUR(0.0042)
      setDefault_IUR(0.0042)

      setValue_Rfc(null)
      setDefault_Rfc(null)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(180.4)
      setDefault_Koc(180.4)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Dichloro-2-butene, trans,4-") {
      setValue_S(850.0)
      setDefault_S(850.0)

      setValue_Hc(0.000664)
      setDefault_Hc(0.000664)

      setValue_Dair(0.0663818)
      setDefault_Dair(0.0663818)

      setValue_Dwater(0.0000092665)
      setDefault_Dwater(0.0000092665)

      setValue_DHvb(9125)
      setDefault_DHvb(9125)

      setValue_Tc(646.0)
      setDefault_Tc(646.0)

      setValue_Tb(428.4)
      setDefault_Tb(428.4)

      setValue_MW(125)
      setDefault_MW(125)

      setValue_IUR(0.0042)
      setDefault_IUR(0.0042)

      setValue_Rfc(null)
      setDefault_Rfc(null)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(180.4)
      setDefault_Koc(180.4)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Dichlorobenzene, 1,2-") {
      setValue_S(156.0)
      setDefault_S(156.0)

      setValue_Hc(0.00192)
      setDefault_Hc(0.00192)

      setValue_Dair(0.0561703)
      setDefault_Dair(0.0561703)

      setValue_Dwater(0.0000089213)
      setDefault_Dwater(0.0000089213)

      setValue_DHvb(9700)
      setDefault_DHvb(9700)

      setValue_Tc(705.0)
      setDefault_Tc(705.0)

      setValue_Tb(453.0)
      setDefault_Tb(453.0)

      setValue_MW(147)
      setDefault_MW(147)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.2)
      setDefault_Rfc(0.2)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(947.3)
      setDefault_Koc(947.3)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Dichlorobenzene, 1,4-") {
      setValue_S(81.3)
      setDefault_S(81.3)

      setValue_Hc(0.00241)
      setDefault_Hc(0.00241)

      setValue_Dair(0.0550429)
      setDefault_Dair(0.0550429)

      setValue_Dwater(0.0000086797)
      setDefault_Dwater(0.0000086797)

      setValue_DHvb(9271)
      setDefault_DHvb(9271)

      setValue_Tc(684.75)
      setDefault_Tc(684.75)

      setValue_Tb(447.0)
      setDefault_Tb(447.0)

      setValue_MW(147)
      setDefault_MW(147)

      setValue_IUR(0.000011)
      setDefault_IUR(0.000011)

      setValue_Rfc(0.8)
      setDefault_Rfc(0.8)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(966.4)
      setDefault_Koc(966.4)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Dichlorodifluoromethane") {
      setValue_S(280)
      setDefault_S(280)

      setValue_Hc(0.343)
      setDefault_Hc(0.343)

      setValue_Dair(0.0760293)
      setDefault_Dair(0.0760293)

      setValue_Dwater(0.0000108)
      setDefault_Dwater(0.0000108)

      setValue_DHvb(9421.36088)
      setDefault_DHvb(9421.36088)

      setValue_Tc(384.95)
      setDefault_Tc(384.95)

      setValue_Tb(243.2)
      setDefault_Tb(243.2)

      setValue_MW(120.91)
      setDefault_MW(120.91)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.1)
      setDefault_Rfc(0.1)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(74.86)
      setDefault_Koc(74.86)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Dichloroethane, 1,1-") {
      setValue_S(5040)
      setDefault_S(5040)

      setValue_Hc(0.00562)
      setDefault_Hc(0.00562)

      setValue_Dair(0.0836446)
      setDefault_Dair(0.0836446)

      setValue_Dwater(0.0000106)
      setDefault_Dwater(0.0000106)

      setValue_DHvb(6895)
      setDefault_DHvb(6895)

      setValue_Tc(523.0)
      setDefault_Tc(523.0)

      setValue_Tb(330.4)
      setDefault_Tb(330.4)

      setValue_MW(98.96)
      setDefault_MW(98.96)

      setValue_IUR(0.0000016)
      setDefault_IUR(0.0000016)

      setValue_Rfc(null)
      setDefault_Rfc(null)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(35.74)
      setDefault_Koc(35.74)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Dichloroethane, 1,2-") {
      setValue_S(8600)
      setDefault_S(8600)

      setValue_Hc(0.00118)
      setDefault_Hc(0.00118)

      setValue_Dair(0.0857221)
      setDefault_Dair(0.0857221)

      setValue_Dwater(0.000011)
      setDefault_Dwater(0.000011)

      setValue_DHvb(7643)
      setDefault_DHvb(7643)

      setValue_Tc(561.0)
      setDefault_Tc(561.0)

      setValue_Tb(356.5)
      setDefault_Tb(356.5)

      setValue_MW(98.96)
      setDefault_MW(98.96)

      setValue_IUR(0.000026)
      setDefault_IUR(0.000026)

      setValue_Rfc(0.007)
      setDefault_Rfc(0.007)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(19.23)
      setDefault_Koc(19.23)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Dichloroethylene, 1,1-") {
      setValue_S(2420)
      setDefault_S(2420)

      setValue_Hc(0.0261)
      setDefault_Hc(0.0261)

      setValue_Dair(0.0863107)
      setDefault_Dair(0.0863107)

      setValue_Dwater(0.000011)
      setDefault_Dwater(0.000011)

      setValue_DHvb(6247)
      setDefault_DHvb(6247)

      setValue_Tc(576.05)
      setDefault_Tc(576.05)

      setValue_Tb(304.6)
      setDefault_Tb(304.6)

      setValue_MW(96.944)
      setDefault_MW(96.944)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.2)
      setDefault_Rfc(0.2)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(70.51)
      setDefault_Koc(70.51)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Dichloroethylene, 1,2-cis-") {
      setValue_S(6410)
      setDefault_S(6410)

      setValue_Hc(0.00408)
      setDefault_Hc(0.00408)

      setValue_Dair(0.0884056)
      setDefault_Dair(0.0884056)

      setValue_Dwater(0.0000113)
      setDefault_Dwater(0.0000113)

      setValue_DHvb(7192)
      setDefault_DHvb(7192)

      setValue_Tc(544.0)
      setDefault_Tc(544.0)

      setValue_Tb(328.0)
      setDefault_Tb(328.0)

      setValue_MW(96.944)
      setDefault_MW(96.944)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(null)
      setDefault_Rfc(null)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(54.38)
      setDefault_Koc(54.38)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Dichloroethylene, 1,2-trans-") {
      setValue_S(4520)
      setDefault_S(4520)

      setValue_Hc(0.00938)
      setDefault_Hc(0.00938)

      setValue_Dair(0.0876094)
      setDefault_Dair(0.0876094)

      setValue_Dwater(0.0000112)
      setDefault_Dwater(0.0000112)

      setValue_DHvb(6717)
      setDefault_DHvb(6717)

      setValue_Tc(516.5)
      setDefault_Tc(516.5)

      setValue_Tb(328.0)
      setDefault_Tb(328.0)

      setValue_MW(96.944)
      setDefault_MW(96.944)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(null)
      setDefault_Rfc(null)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(54.39)
      setDefault_Koc(54.38)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Dichloropropane, 1,2-") {
      setValue_S(2800)
      setDefault_S(2800)

      setValue_Hc(0.00282)
      setDefault_Hc(0.00282)

      setValue_Dair(0.0733402)
      setDefault_Dair(0.0733402)

      setValue_Dwater(0.0000097252)
      setDefault_Dwater(0.0000097252)

      setValue_DHvb(7590)
      setDefault_DHvb(7590)

      setValue_Tc(572.0)
      setDefault_Tc(572.0)

      setValue_Tb(368.5)
      setDefault_Tb(368.5)

      setValue_MW(112.99)
      setDefault_MW(112.99)

      setValue_IUR(0.0000037)
      setDefault_IUR(0.0000037)

      setValue_Rfc(0.004)
      setDefault_Rfc(0.004)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(52.24)
      setDefault_Koc(52.24)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Dichloropropane, 1,3-") {
      setValue_S(2750)
      setDefault_S(2750)

      setValue_Hc(0.000976)
      setDefault_Hc(0.000976)

      setValue_Dair(0.0738738)
      setDefault_Dair(0.0738738)

      setValue_Dwater(0.000009823)
      setDefault_Dwater(0.000009823)

      setValue_DHvb(8102.51)
      setDefault_DHvb(8102.51)

      setValue_Tc(590.85)
      setDefault_Tc(590.85)

      setValue_Tb(393.9)
      setDefault_Tb(393.9)

      setValue_MW(112.99)
      setDefault_MW(112.99)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(null)
      setDefault_Rfc(null)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(54.38)
      setDefault_Koc(54.38)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Dichloropropene, 1,3-") {
      setValue_S(2800)
      setDefault_S(2800)

      setValue_Hc(0.00355)
      setDefault_Hc(0.00355)

      setValue_Dair(0.0762725)
      setDefault_Dair(0.0762725)

      setValue_Dwater(0.0000101)
      setDefault_Dwater(0.0000101)

      setValue_DHvb(7900)
      setDefault_DHvb(7900)

      setValue_Tc(587.38)
      setDefault_Tc(587.38)

      setValue_Tb(385.0)
      setDefault_Tb(385.0)

      setValue_MW(110.97)
      setDefault_MW(110.97)

      setValue_IUR(0.000004)
      setDefault_IUR(0.000004)

      setValue_Rfc(0.02)
      setDefault_Rfc(0.02)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(57.73)
      setDefault_Koc(57.73)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Dicyclopentadiene") {
      setValue_S(26.47)
      setDefault_S(26.47)

      setValue_Hc(0.0625)
      setDefault_Hc(0.0625)

      setValue_Dair(0.0557455)
      setDefault_Dair(0.0557455)

      setValue_Dwater(0.0000077554)
      setDefault_Dwater(0.0000077554)

      setValue_DHvb(2197.38)
      setDefault_DHvb(2197.38)

      setValue_Tc(664.5)
      setDefault_Tc(664.5)

      setValue_Tb(443.0)
      setDefault_Tb(443.0)

      setValue_MW(132.21)
      setDefault_MW(132.21)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.0003)
      setDefault_Rfc(0.0003)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(552.3)
      setDefault_Koc(552.3)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Diethylformamide") {
      setValue_S(1000000)
      setDefault_S(1000000)

      setValue_Hc(0.00000013)
      setDefault_Hc(0.00000013)

      setValue_Dair(0.073301)
      setDefault_Dair(0.073301)

      setValue_Dwater(0.0000089773)
      setDefault_Dwater(0.0000089773)

      setValue_DHvb(11687.38)
      setDefault_DHvb(11687.38)

      setValue_Tc(675.975)
      setDefault_Tc(675.975)

      setValue_Tb(450.65)
      setDefault_Tb(450.65)

      setValue_MW(101.15)
      setDefault_MW(101.15)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(null)
      setDefault_Rfc(null)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(4.785)
      setDefault_Koc(4.785)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Difluoroethane, 1,1-") {
      setValue_S(3200)
      setDefault_S(3200)

      setValue_Hc(0.0203)
      setDefault_Hc(0.0203)

      setValue_Dair(0.1023145)
      setDefault_Dair(0.1023145)

      setValue_Dwater(0.0000115)
      setDefault_Dwater(0.0000115)

      setValue_DHvb(5153.88)
      setDefault_DHvb(5153.88)

      setValue_Tc(372.15)
      setDefault_Tc(372.15)

      setValue_Tb(248.1)
      setDefault_Tb(248.1)

      setValue_MW(66.051)
      setDefault_MW(66.051)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(40.0)
      setDefault_Rfc(40.0)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(4.472)
      setDefault_Koc(4.472)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Dimethylaniline, N,N-") {
      setValue_S(1450)
      setDefault_S(1450)

      setValue_Hc(0.0000568)
      setDefault_Hc(0.0000568)

      setValue_Dair(0.0625411)
      setDefault_Dair(0.0625411)

      setValue_Dwater(0.0000083063)
      setDefault_Dwater(0.0000083063)

      setValue_DHvb(12276.68)
      setDefault_DHvb(12276.68)

      setValue_Tc(687.0)
      setDefault_Tc(687.0)

      setValue_Tb(466.45)
      setDefault_Tb(466.45)

      setValue_MW(121.18)
      setDefault_MW(121.18)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(null)
      setDefault_Rfc(null)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(137.3)
      setDefault_Koc(137.3)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Dimethylformamide") {
      setValue_S(1000000)
      setDefault_S(1000000)

      setValue_Hc(0.0000000739)
      setDefault_Hc(0.0000000739)

      setValue_Dair(0.0971846)
      setDefault_Dair(0.0971846)

      setValue_Dwater(0.0000112)
      setDefault_Dwater(0.0000112)

      setValue_DHvb(11369.0696)
      setDefault_DHvb(11369.0696)

      setValue_Tc(647.15)
      setDefault_Tc(647.15)

      setValue_Tb(426.15)
      setDefault_Tb(426.15)

      setValue_MW(73.095)
      setDefault_MW(73.095)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.03)
      setDefault_Rfc(0.03)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(1.24)
      setDefault_Koc(1.24)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Dimethylhydrazine, 1,1-") {
      setValue_S(1000000)
      setDefault_S(1000000)

      setValue_Hc(0.0000129)
      setDefault_Hc(0.0000129)

      setValue_Dair(0.1037857)
      setDefault_Dair(0.1037857)

      setValue_Dwater(0.0000113)
      setDefault_Dwater(0.0000113)

      setValue_DHvb(7791.873058)
      setDefault_DHvb(7791.873058)

      setValue_Tc(523.15)
      setDefault_Tc(523.15)

      setValue_Tb(337.05)
      setDefault_Tb(337.05)

      setValue_MW(60.099)
      setDefault_MW(60.099)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.000002)
      setDefault_Rfc(0.000002)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(1.672)
      setDefault_Koc(1.672)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Dioxane, 1,4-") {
      setValue_S(1000000)
      setDefault_S(1000000)

      setValue_Hc(0.0000048)
      setDefault_Hc(0.0000048)

      setValue_Dair(0.0873739)
      setDefault_Dair(0.0873739)

      setValue_Dwater(0.0000105)
      setDefault_Dwater(0.0000105)

      setValue_DHvb(8687.3502)
      setDefault_DHvb(8687.3502)

      setValue_Tc(585.15)
      setDefault_Tc(585.15)

      setValue_Tb(374.65)
      setDefault_Tb(374.65)

      setValue_MW(88.107)
      setDefault_MW(88.107)

      setValue_IUR(0.000005)
      setDefault_IUR(0.000005)

      setValue_Rfc(0.03)
      setDefault_Rfc(0.03)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(3.931)
      setDefault_Koc(3.931)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Epichlorohydrin") {
      setValue_S(65900)
      setDefault_S(65900)

      setValue_Hc(0.0000304)
      setDefault_Hc(0.0000304)

      setValue_Dair(0.0888682)
      setDefault_Dair(0.0888682)

      setValue_Dwater(0.0000111)
      setDefault_Dwater(0.0000111)

      setValue_DHvb(10.1)
      setDefault_DHvb(10.1)

      setValue_Tc(600.0)
      setDefault_Tc(600.0)

      setValue_Tb(390.0)
      setDefault_Tb(390.0)

      setValue_MW(92.526)
      setDefault_MW(92.526)

      setValue_IUR(0.0000012)
      setDefault_IUR(0.0000012)

      setValue_Rfc(0.001)
      setDefault_Rfc(0.001)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(12.12)
      setDefault_Koc(12.12)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Epoxybutane, 1,2-") {
      setValue_S(95000)
      setDefault_S(95000)

      setValue_Hc(0.00018)
      setDefault_Hc(0.00018)

      setValue_Dair(0.0928958)
      setDefault_Dair(0.0928958)

      setValue_Dwater(0.0000104)
      setDefault_Dwater(0.0000104)

      setValue_DHvb(7211)
      setDefault_DHvb(7211)

      setValue_Tc(516.0)
      setDefault_Tc(516.0)

      setValue_Tb(336.3)
      setDefault_Tb(336.3)

      setValue_MW(72.108)
      setDefault_MW(72.108)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.02)
      setDefault_Rfc(0.02)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(20.43)
      setDefault_Koc(20.43)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Ethoxyethanol Acetate, 2-") {
      setValue_S(187000)
      setDefault_S(187000)

      setValue_Hc(0.0000032)
      setDefault_Hc(0.0000032)

      setValue_Dair(0.0569504)
      setDefault_Dair(0.0569504)

      setValue_Dwater(0.0000079753)
      setDefault_Dwater(0.0000079753)

      setValue_DHvb(9779.84)
      setDefault_DHvb(9779.84)

      setValue_Tc(607.0)
      setDefault_Tc(607.0)

      setValue_Tb(429.55)
      setDefault_Tb(429.55)

      setValue_MW(132.16)
      setDefault_MW(132.16)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.06)
      setDefault_Rfc(0.06)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(12.45)
      setDefault_Koc(12.45)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Ethoxyethanol, 2-") {
      setValue_S(1000000)
      setDefault_S(1000000)

      setValue_Hc(0.00000047)
      setDefault_Hc(0.00000047)

      setValue_Dair(0.0817537)
      setDefault_Dair(0.0817537)

      setValue_Dwater(0.0000097306)
      setDefault_Dwater(0.0000097306)

      setValue_DHvb(9680.42838)
      setDefault_DHvb(9680.42838)

      setValue_Tc(612.225)
      setDefault_Tc(612.225)

      setValue_Tb(408.15)
      setDefault_Tb(408.15)

      setValue_MW(90.123)
      setDefault_MW(90.123)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.2)
      setDefault_Rfc(0.2)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(1.762)
      setDefault_Koc(1.762)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Ethyl Acetate") {
      setValue_S(80000)
      setDefault_S(80000)

      setValue_Hc(0.000134)
      setDefault_Hc(0.000134)

      setValue_Dair(0.0823158)
      setDefault_Dair(0.0823158)

      setValue_Dwater(0.0000097028)
      setDefault_Dwater(0.0000097028)

      setValue_DHvb(7633.66)
      setDefault_DHvb(7633.66)

      setValue_Tc(523.3)
      setDefault_Tc(523.3)

      setValue_Tb(350.1)
      setDefault_Tb(350.1)

      setValue_MW(88.107)
      setDefault_MW(88.107)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.07)
      setDefault_Rfc(0.07)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(18.34)
      setDefault_Koc(18.34)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Ethyl Acrylate") {
      setValue_S(15000)
      setDefault_S(15000)

      setValue_Hc(0.000339)
      setDefault_Hc(0.000339)

      setValue_Dair(0.0745392)
      setDefault_Dair(0.0745392)

      setValue_Dwater(0.0000091242)
      setDefault_Dwater(0.0000091242)

      setValue_DHvb(9362.76)
      setDefault_DHvb(9362.76)

      setValue_Tc(558.6)
      setDefault_Tc(558.6)

      setValue_Tb(372.4)
      setDefault_Tb(372.4)

      setValue_MW(100.12)
      setDefault_MW(100.12)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.008)
      setDefault_Rfc(0.008)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(38.87)
      setDefault_Koc(38.87)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Ethyl Chloride (Chloroethane)") {
      setValue_S(6710)
      setDefault_S(6710)

      setValue_Hc(0.0111)
      setDefault_Hc(0.0111)

      setValue_Dair(0.1037597)
      setDefault_Dair(0.1037597)

      setValue_Dwater(0.0000116)
      setDefault_Dwater(0.0000116)

      setValue_DHvb(5879.4)
      setDefault_DHvb(5879.4)

      setValue_Tc(460.4)
      setDefault_Tc(460.4)

      setValue_Tb(285.3)
      setDefault_Tb(285.3)

      setValue_MW(64.515)
      setDefault_MW(64.515)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(10.0)
      setDefault_Rfc(10.0)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(17.41)
      setDefault_Koc(17.41)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Ethyl Methacrylate") {
      setValue_S(5400)
      setDefault_S(5400)

      setValue_Hc(0.000573)
      setDefault_Hc(0.000573)

      setValue_Dair(0.0653441)
      setDefault_Dair(0.0653441)

      setValue_Dwater(0.0000083794)
      setDefault_Dwater(0.0000083794)

      setValue_DHvb(10957.44)
      setDefault_DHvb(10957.44)

      setValue_Tc(571.0)
      setDefault_Tc(571.0)

      setValue_Tb(390.0)
      setDefault_Tb(390.0)

      setValue_MW(114.15)
      setDefault_MW(114.15)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.3)
      setDefault_Rfc(0.3)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(85.62)
      setDefault_Koc(85.62)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Ethylbenzene") {
      setValue_S(169.0)
      setDefault_S(169.0)

      setValue_Hc(0.00788)
      setDefault_Hc(0.00788)

      setValue_Dair(0.0684652)
      setDefault_Dair(0.0684652)

      setValue_Dwater(0.0000084558)
      setDefault_Dwater(0.0000084558)

      setValue_DHvb(8501)
      setDefault_DHvb(8501)

      setValue_Tc(617.2)
      setDefault_Tc(617.2)

      setValue_Tb(409.1)
      setDefault_Tb(409.1)

      setValue_MW(106.17)
      setDefault_MW(106.17)

      setValue_IUR(0.0000025)
      setDefault_IUR(0.0000025)

      setValue_Rfc(1.0)
      setDefault_Rfc(1.0)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(541.4)
      setDefault_Koc(541.4)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Ethylene Diamine") {
      setValue_S(1000000)
      setDefault_S(1000000)

      setValue_Hc(0.00000000173)
      setDefault_Hc(0.00000000173)

      setValue_Dair(0.109446)
      setDefault_Dair(0.109446)

      setValue_Dwater(0.0000122)
      setDefault_Dwater(0.0000122)

      setValue_DHvb(9562.61)
      setDefault_DHvb(9562.61)

      setValue_Tc(585.225)
      setDefault_Tc(585.225)

      setValue_Tb(390.15)
      setDefault_Tb(390.15)

      setValue_MW(60.099)
      setDefault_MW(60.099)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(null)
      setDefault_Rfc(null)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(0.5664)
      setDefault_Koc(0.5664)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Ethylene Oxide") {
      setValue_S(1000000)
      setDefault_S(1000000)

      setValue_Hc(0.000148)
      setDefault_Hc(0.000148)

      setValue_Dair(0.1339638)
      setDefault_Dair(0.1339638)

      setValue_Dwater(0.0000145)
      setDefault_Dwater(0.0000145)

      setValue_DHvb(6104.06)
      setDefault_DHvb(6104.06)

      setValue_Tc(469.0)
      setDefault_Tc(469.0)

      setValue_Tb(283.6)
      setDefault_Tb(283.6)

      setValue_MW(44.054)
      setDefault_MW(44.054)

      setValue_IUR(0.003)
      setDefault_IUR(0.003)

      setValue_Rfc(0.03)
      setDefault_Rfc(0.03)

      setValue_Mut("Yes")
      setDefault_Mut("Yes")

      setValue_Koc(4.622)
      setDefault_Koc(4.622)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Fluorene") {
      setValue_S(1.69)
      setDefault_S(1.69)

      setValue_Hc(0.0000962)
      setDefault_Hc(0.0000962)

      setValue_Dair(0.0439743)
      setDefault_Dair(0.0439743)

      setValue_Dwater(0.000007889)
      setDefault_Dwater(0.000007889)

      setValue_DHvb(12666)
      setDefault_DHvb(12666)

      setValue_Tc(870.0)
      setDefault_Tc(870.0)

      setValue_Tb(568.0)
      setDefault_Tb(568.0)

      setValue_MW(166.22)
      setDefault_MW(166.22)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(null)
      setDefault_Rfc(null)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(4241)
      setDefault_Koc(4241)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Formaldehyde") {
      setValue_S(400000)
      setDefault_S(400000)

      setValue_Hc(0.000000337)
      setDefault_Hc(0.000000337)

      setValue_Dair(0.1670871)
      setDefault_Dair(0.1670871)

      setValue_Dwater(0.0000174)
      setDefault_Dwater(0.0000174)

      setValue_DHvb(5919.9)
      setDefault_DHvb(5919.9)

      setValue_Tc(412.35)
      setDefault_Tc(412.35)

      setValue_Tb(254.05)
      setDefault_Tb(254.05)

      setValue_MW(30.026)
      setDefault_MW(30.026)

      setValue_IUR(0.000013)
      setDefault_IUR(0.000013)

      setValue_Rfc(0.0098)
      setDefault_Rfc(0.0098)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(7.752)
      setDefault_Koc(7.752)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Formic Acid") {
      setValue_S(1000000)
      setDefault_S(1000000)

      setValue_Hc(0.000000167)
      setDefault_Hc(0.000000167)

      setValue_Dair(0.1478701)
      setDefault_Dair(0.1478701)

      setValue_Dwater(0.0000172)
      setDefault_Dwater(0.0000172)

      setValue_DHvb(4800.8046)
      setDefault_DHvb(4800.8046)

      setValue_Tc(588.0)
      setDefault_Tc(588.0)

      setValue_Tb(374.15)
      setDefault_Tb(374.15)

      setValue_MW(46.026)
      setDefault_MW(46.026)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.0003)
      setDefault_Rfc(0.0003)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(0.7195)
      setDefault_Koc(0.7195)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Furan") {
      setValue_S(10000)
      setDefault_S(10000)

      setValue_Hc(0.0054)
      setDefault_Hc(0.0054)

      setValue_Dair(0.1022757)
      setDefault_Dair(0.1022757)

      setValue_Dwater(0.0000117)
      setDefault_Dwater(0.0000117)

      setValue_DHvb(6476.9)
      setDefault_DHvb(6476.9)

      setValue_Tc(490.2)
      setDefault_Tc(490.2)

      setValue_Tb(304.5)
      setDefault_Tb(304.5)

      setValue_MW(68.076)
      setDefault_MW(68.076)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(null)
      setDefault_Rfc(null)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(14.54)
      setDefault_Koc(14.54)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Furfural") {
      setValue_S(74100)
      setDefault_S(74100)

      setValue_Hc(0.00000377)
      setDefault_Hc(0.00000377)

      setValue_Dair(0.0853213)
      setDefault_Dair(0.0853213)

      setValue_Dwater(0.0000107)
      setDefault_Dwater(0.0000107)

      setValue_DHvb(9219.4556)
      setDefault_DHvb(9219.4556)

      setValue_Tc(670.0)
      setDefault_Tc(670.0)

      setValue_Tb(434.85)
      setDefault_Tb(434.85)

      setValue_MW(96.086)
      setDefault_MW(96.086)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.05)
      setDefault_Rfc(0.05)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(8.368)
      setDefault_Koc(8.368)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Heptachlor") {
      setValue_S(0.18)
      setDefault_S(0.18)

      setValue_Hc(0.000294)
      setDefault_Hc(0.000294)

      setValue_Dair(0.0223441)
      setDefault_Dair(0.0223441)

      setValue_Dwater(0.0000056959)
      setDefault_Dwater(0.0000056959)

      setValue_DHvb(13000)
      setDefault_DHvb(13000)

      setValue_Tc(874.725)
      setDefault_Tc(874.725)

      setValue_Tb(583.15)
      setDefault_Tb(583.15)

      setValue_MW(373.32)
      setDefault_MW(373.32)

      setValue_IUR(0.0013)
      setDefault_IUR(0.0013)

      setValue_Rfc(null)
      setDefault_Rfc(null)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(55850)
      setDefault_Koc(55850)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Heptachlor Epoxide") {
      setValue_S(0.2)
      setDefault_S(0.2)

      setValue_Hc(0.000021)
      setDefault_Hc(0.000021)

      setValue_Dair(0.0240006)
      setDefault_Dair(0.0240006)

      setValue_Dwater(0.0000062475)
      setDefault_Dwater(0.0000062475)

      setValue_DHvb(16000)
      setDefault_DHvb(16000)

      setValue_Tc(920.94)
      setDefault_Tc(920.94)

      setValue_Tb(613.96)
      setDefault_Tb(613.96)

      setValue_MW(389.32)
      setDefault_MW(389.32)

      setValue_IUR(0.0026)
      setDefault_IUR(0.0026)

      setValue_Rfc(null)
      setDefault_Rfc(null)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(3882)
      setDefault_Koc(3882)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Hexachlorobenzene") {
      setValue_S(0.0062)
      setDefault_S(0.0062)

      setValue_Hc(0.0017)
      setDefault_Hc(0.0017)

      setValue_Dair(0.0289745)
      setDefault_Dair(0.0289745)

      setValue_Dwater(0.0000078497)
      setDefault_Dwater(0.0000078497)

      setValue_DHvb(11703.454)
      setDefault_DHvb(11703.454)

      setValue_Tc(897.225)
      setDefault_Tc(897.225)

      setValue_Tb(598.15)
      setDefault_Tb(598.15)

      setValue_MW(284.78)
      setDefault_MW(284.78)

      setValue_IUR(0.00046)
      setDefault_IUR(0.00046)

      setValue_Rfc(null)
      setDefault_Rfc(null)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(17340)
      setDefault_Koc(17340)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Hexachlorobutadiene") {
      setValue_S(3.2)
      setDefault_S(3.2)

      setValue_Hc(0.0103)
      setDefault_Hc(0.0103)

      setValue_Dair(0.0267445)
      setDefault_Dair(0.0267445)

      setValue_Dwater(0.0000070264)
      setDefault_Dwater(0.0000070264)

      setValue_DHvb(10206)
      setDefault_DHvb(10206)

      setValue_Tc(732.225)
      setDefault_Tc(732.225)

      setValue_Tb(488.15)
      setDefault_Tb(488.15)

      setValue_MW(260.76)
      setDefault_MW(260.76)

      setValue_IUR(0.000022)
      setDefault_IUR(0.000022)

      setValue_Rfc(null)
      setDefault_Rfc(null)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(14070)
      setDefault_Koc(14070)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Hexachlorocyclopentadiene") {
      setValue_S(1.8)
      setDefault_S(1.8)

      setValue_Hc(0.027)
      setDefault_Hc(0.027)

      setValue_Dair(0.0272382)
      setDefault_Dair(0.0272382)

      setValue_Dwater(0.000007217)
      setDefault_Dwater(0.000007217)

      setValue_DHvb(42992.28)
      setDefault_DHvb(42992.28)

      setValue_Tc(768.225)
      setDefault_Tc(768.225)

      setValue_Tb(512.15)
      setDefault_Tb(512.15)

      setValue_MW(272.77)
      setDefault_MW(272.77)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.0002)
      setDefault_Rfc(0.0002)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(23650)
      setDefault_Koc(23650)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Hexachloroethane") {
      setValue_S(50.0)
      setDefault_S(50.0)

      setValue_Hc(0.00389)
      setDefault_Hc(0.00389)

      setValue_Dair(0.0320938)
      setDefault_Dair(0.0320938)

      setValue_Dwater(0.0000088904)
      setDefault_Dwater(0.0000088904)

      setValue_DHvb(11711.3)
      setDefault_DHvb(11711.3)

      setValue_Tc(641.4)
      setDefault_Tc(641.4)

      setValue_Tb(427.6)
      setDefault_Tb(427.6)

      setValue_MW(236.74)
      setDefault_MW(236.74)

      setValue_IUR(0.000011)
      setDefault_IUR(0.000011)

      setValue_Rfc(0.03)
      setDefault_Rfc(0.03)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(3915)
      setDefault_Koc(3915)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Hexane, N-") {
      setValue_S(9.5)
      setDefault_S(9.5)

      setValue_Hc(1.8)
      setDefault_Hc(1.8)

      setValue_Dair(0.0731078)
      setDefault_Dair(0.0731078)

      setValue_Dwater(0.0000081658)
      setDefault_Dwater(0.0000081658)

      setValue_DHvb(6895.15)
      setDefault_DHvb(6895.15)

      setValue_Tc(508.0)
      setDefault_Tc(508.0)

      setValue_Tb(341.7)
      setDefault_Tb(341.7)

      setValue_MW(86.178)
      setDefault_MW(86.178)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.7)
      setDefault_Rfc(0.7)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(2423)
      setDefault_Koc(2423)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Hexanone, 2-") {
      setValue_S(17200)
      setDefault_S(17200)

      setValue_Hc(0.0000932)
      setDefault_Hc(0.0000932)

      setValue_Dair(0.0703564)
      setDefault_Dair(0.0703564)

      setValue_Dwater(0.0000084404)
      setDefault_Dwater(0.0000084404)

      setValue_DHvb(8610.39)
      setDefault_DHvb(8610.39)

      setValue_Tc(600.9)
      setDefault_Tc(600.9)

      setValue_Tb(400.6)
      setDefault_Tb(400.6)

      setValue_MW(100.16)
      setDefault_MW(100.16)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.03)
      setDefault_Rfc(0.03)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(76.56)
      setDefault_Koc(76.56)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Hydrazine") {
      setValue_S(1000000)
      setDefault_S(1000000)

      setValue_Hc(0.00000061)
      setDefault_Hc(0.00000061)

      setValue_Dair(0.1733034)
      setDefault_Dair(0.1733034)

      setValue_Dwater(0.000019)
      setDefault_Dwater(0.000019)

      setValue_DHvb(10812.55842)
      setDefault_DHvb(10812.55842)

      setValue_Tc(653.15)
      setDefault_Tc(653.15)

      setValue_Tb(386.65)
      setDefault_Tb(386.65)

      setValue_MW(32.045)
      setDefault_MW(32.045)

      setValue_IUR(0.0049)
      setDefault_IUR(0.0049)

      setValue_Rfc(0.00003)
      setDefault_Rfc(0.00003)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(0.01596)
      setDefault_Koc(0.01596)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Hydrogen Chloride") {
      setValue_S(673000)
      setDefault_S(673000)

      setValue_Hc(2040000)
      setDefault_Hc(2040000)

      setValue_Dair(0.1879912)
      setDefault_Dair(0.1879912)

      setValue_Dwater(0.0000227)
      setDefault_Dwater(0.0000227)

      setValue_DHvb(3855.476017)
      setDefault_DHvb(3855.476017)

      setValue_Tc(324.55)
      setDefault_Tc(324.55)

      setValue_Tb(188.1)
      setDefault_Tb(188.1)

      setValue_MW(35.45)
      setDefault_MW(35.45)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.02)
      setDefault_Rfc(0.02)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(2.939)
      setDefault_Koc(2.939)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Hydrogen Cyanide") {
      setValue_S(1000000)
      setDefault_S(1000000)

      setValue_Hc(0.000133)
      setDefault_Hc(0.000133)

      setValue_Dair(0.1678036)
      setDefault_Dair(0.1678036)

      setValue_Dwater(0.0000168)
      setDefault_Dwater(0.0000168)

      setValue_DHvb(6676.41)
      setDefault_DHvb(6676.41)

      setValue_Tc(456.7)
      setDefault_Tc(456.7)

      setValue_Tb(298.6)
      setDefault_Tb(298.6)

      setValue_MW(27.026)
      setDefault_MW(27.026)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.0008)
      setDefault_Rfc(0.0008)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(15.1)
      setDefault_Koc(15.1)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Hydrogen Fluoride") {
      setValue_S(1000000)
      setDefault_S(1000000)

      setValue_Hc(0.000104)
      setDefault_Hc(0.000104)

      setValue_Dair(0.2190996)
      setDefault_Dair(0.2190996)

      setValue_Dwater(0.0000223)
      setDefault_Dwater(0.0000223)

      setValue_DHvb(1789.673078)
      setDefault_DHvb(1789.673078)

      setValue_Tc(461.15)
      setDefault_Tc(461.15)

      setValue_Tb(292.66)
      setDefault_Tb(292.66)

      setValue_MW(20.006)
      setDefault_MW(20.006)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.014)
      setDefault_Rfc(0.014)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(1.582)
      setDefault_Koc(1.582)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Hydrogen Sulfide") {
      setValue_S(3740)
      setDefault_S(3740)

      setValue_Hc(0.00856)
      setDefault_Hc(0.00856)

      setValue_Dair(0.1880669)
      setDefault_Dair(0.1880669)

      setValue_Dwater(0.0000223)
      setDefault_Dwater(0.0000223)

      setValue_DHvb(4459.25482)
      setDefault_DHvb(4459.25482)

      setValue_Tc(373.1)
      setDefault_Tc(373.1)

      setValue_Tb(212.82)
      setDefault_Tb(212.82)

      setValue_MW(34.08)
      setDefault_MW(34.08)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.002)
      setDefault_Rfc(0.002)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(0.06337)
      setDefault_Koc(0.06337)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Isobutyl Alcohol") {
      setValue_S(85000)
      setDefault_S(85000)

      setValue_Hc(0.00000978)
      setDefault_Hc(0.00000978)

      setValue_Dair(0.0896677)
      setDefault_Dair(0.0896677)

      setValue_Dwater(0.00001)
      setDefault_Dwater(0.00001)

      setValue_DHvb(103496.65)
      setDefault_DHvb(103496.65)

      setValue_Tc(547.78)
      setDefault_Tc(547.78)

      setValue_Tb(380.95)
      setDefault_Tb(380.95)

      setValue_MW(74.124)
      setDefault_MW(74.124)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(null)
      setDefault_Rfc(null)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(8.591)
      setDefault_Koc(8.591)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Isopropanol") {
      setValue_S(1000000)
      setDefault_S(1000000)

      setValue_Hc(0.0000081)
      setDefault_Hc(0.0000081)

      setValue_Dair(0.1032261)
      setDefault_Dair(0.1032261)

      setValue_Dwater(0.0000112)
      setDefault_Dwater(0.0000112)

      setValue_DHvb(10841.21994)
      setDefault_DHvb(10841.21994)

      setValue_Tc(508.3)
      setDefault_Tc(508.3)

      setValue_Tb(355.45)
      setDefault_Tb(355.45)

      setValue_MW(60.097)
      setDefault_MW(60.097)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.2)
      setDefault_Rfc(0.2)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(3.478)
      setDefault_Koc(3.478)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Mercury (elemental)") {
      setValue_S(0.06)
      setDefault_S(0.06)

      setValue_Hc(0.008622)
      setDefault_Hc(0.008622)

      setValue_Dair(0.0307)
      setDefault_Dair(0.0307)

      setValue_Dwater(0.0000063)
      setDefault_Dwater(0.0000063)

      setValue_DHvb(14127)
      setDefault_DHvb(14127)

      setValue_Tc(1750)
      setDefault_Tc(1750)

      setValue_Tb(356.6)
      setDefault_Tb(356.6)

      setValue_MW(200.59)
      setDefault_MW(200.59)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.0003)
      setDefault_Rfc(0.0003)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(3.449)
      setDefault_Koc(3.449)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Methacrylonitrile") {
      setValue_S(25400)
      setDefault_S(25400)

      setValue_Hc(0.000247)
      setDefault_Hc(0.000247)

      setValue_Dair(0.0964299)
      setDefault_Dair(0.0964299)

      setValue_Dwater(0.0000106)
      setDefault_Dwater(0.0000106)

      setValue_DHvb(7600.2)
      setDefault_DHvb(7600.2)

      setValue_Tc(554.0)
      setDefault_Tc(554.0)

      setValue_Tb(363.3)
      setDefault_Tb(363.3)

      setValue_MW(67.091)
      setDefault_MW(67.091)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.03)
      setDefault_Rfc(0.03)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(49.36)
      setDefault_Koc(49.36)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Methanol") {
      setValue_S(1000000)
      setDefault_S(1000000)

      setValue_Hc(0.00000455)
      setDefault_Hc(0.00000455)

      setValue_Dair(0.1582741)
      setDefault_Dair(0.1582741)

      setValue_Dwater(0.0000165)
      setDefault_Dwater(0.0000165)

      setValue_DHvb(8918.50964)
      setDefault_DHvb(8918.50964)

      setValue_Tc(513.15)
      setDefault_Tc(513.15)

      setValue_Tb(337.85)
      setDefault_Tb(337.85)

      setValue_MW(32.042)
      setDefault_MW(32.042)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(20.0)
      setDefault_Rfc(20.0)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(1.224)
      setDefault_Koc(1.224)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Methoxyethanol Acetate, 2-") {
      setValue_S(1000000)
      setDefault_S(1000000)

      setValue_Hc(0.000000311)
      setDefault_Hc(0.000000311)

      setValue_Dair(0.0658347)
      setDefault_Dair(0.0658347)

      setValue_Dwater(0.0000087052)
      setDefault_Dwater(0.0000087052)

      setValue_DHvb(10485.3394)
      setDefault_DHvb(10485.3394)

      setValue_Tc(624.225)
      setDefault_Tc(624.225)

      setValue_Tb(416.15)
      setDefault_Tb(416.15)

      setValue_MW(118.13)
      setDefault_MW(118.13)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.001)
      setDefault_Rfc(0.001)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(6.671)
      setDefault_Koc(6.671)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Methoxyethanol, 2-") {
      setValue_S(1000000)
      setDefault_S(1000000)

      setValue_Hc(0.00000033)
      setDefault_Hc(0.00000033)

      setValue_Dair(0.0951557)
      setDefault_Dair(0.0951557)

      setValue_Dwater(0.000011)
      setDefault_Dwater(0.000011)

      setValue_DHvb(8966.27884)
      setDefault_DHvb(8966.27884)

      setValue_Tc(597.6)
      setDefault_Tc(597.6)

      setValue_Tb(397.25)
      setDefault_Tb(397.25)

      setValue_MW(76.096)
      setDefault_MW(76.096)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.02)
      setDefault_Rfc(0.02)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(0.9935)
      setDefault_Koc(0.9935)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Methyl Acetate") {
      setValue_S(243000)
      setDefault_S(243000)

      setValue_Hc(0.000115)
      setDefault_Hc(0.000115)

      setValue_Dair(0.0957763)
      setDefault_Dair(0.0957763)

      setValue_Dwater(0.000011)
      setDefault_Dwater(0.000011)

      setValue_DHvb(7260.0791)
      setDefault_DHvb(7260.0791)

      setValue_Tc(506.7)
      setDefault_Tc(506.7)

      setValue_Tb(365)
      setDefault_Tb(365)

      setValue_MW(74.08)
      setDefault_MW(74.08)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(null)
      setDefault_Rfc(null)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(9.101)
      setDefault_Koc(9.101)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Methyl Acrylate") {
      setValue_S(49400)
      setDefault_S(49400)

      setValue_Hc(0.000199)
      setDefault_Hc(0.000199)

      setValue_Dair(0.0859972)
      setDefault_Dair(0.0859972)

      setValue_Dwater(0.0000102)
      setDefault_Dwater(0.0000102)

      setValue_DHvb(7749)
      setDefault_DHvb(7749)

      setValue_Tc(536.0)
      setDefault_Tc(536.0)

      setValue_Tb(353.2)
      setDefault_Tb(353.2)

      setValue_MW(86.091)
      setDefault_MW(86.091)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.02)
      setDefault_Rfc(0.02)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(20.05)
      setDefault_Koc(20.05)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Methyl Ethyl Ketone (2-Butanone)") {
      setValue_S(223000)
      setDefault_S(223000)

      setValue_Hc(0.0000569)
      setDefault_Hc(0.0000569)

      setValue_Dair(0.0914462)
      setDefault_Dair(0.0914462)

      setValue_Dwater(0.0000102)
      setDefault_Dwater(0.0000102)

      setValue_DHvb(7480.7)
      setDefault_DHvb(7480.7)

      setValue_Tc(536.78)
      setDefault_Tc(536.78)

      setValue_Tb(352.5)
      setDefault_Tb(352.5)

      setValue_MW(72.108)
      setDefault_MW(72.108)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(5.0)
      setDefault_Rfc(5.0)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(19.1)
      setDefault_Koc(19.1)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Methyl Hydrazine") {
      setValue_S(1000000)
      setDefault_S(1000000)

      setValue_Hc(0.000003031)
      setDefault_Hc(0.000003031)

      setValue_Dair(0.1290894)
      setDefault_Dair(0.1290894)

      setValue_Dwater(0.000014)
      setDefault_Dwater(0.000014)

      setValue_DHvb(8887.937352)
      setDefault_DHvb(8887.937352)

      setValue_Tc(585.15)
      setDefault_Tc(585.15)

      setValue_Tb(360.65)
      setDefault_Tb(360.65)

      setValue_MW(46.072)
      setDefault_MW(46.072)

      setValue_IUR(0.001)
      setDefault_IUR(0.001)

      setValue_Rfc(0.00002)
      setDefault_Rfc(0.00002)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(2.101)
      setDefault_Koc(2.101)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (
      selectedChem === "Methyl Isobutyl Ketone (4-methyl-2-pentanone)"
    ) {
      setValue_S(19000)
      setDefault_S(19000)

      setValue_Hc(0.000138)
      setDefault_Hc(0.000138)

      setValue_Dair(0.0697797)
      setDefault_Dair(0.0697797)

      setValue_Dwater(0.0000083477)
      setDefault_Dwater(0.0000083477)

      setValue_DHvb(8243.11)
      setDefault_DHvb(8243.11)

      setValue_Tc(571.0)
      setDefault_Tc(571.0)

      setValue_Tb(389.5)
      setDefault_Tb(389.5)

      setValue_MW(100.16)
      setDefault_MW(100.16)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(3.0)
      setDefault_Rfc(3.0)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(70.03)
      setDefault_Koc(70.03)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Methyl Methacrylate") {
      setValue_S(15000)
      setDefault_S(15000)

      setValue_Hc(0.000319)
      setDefault_Hc(0.000319)

      setValue_Dair(0.0750447)
      setDefault_Dair(0.0750447)

      setValue_Dwater(0.0000092087)
      setDefault_Dwater(0.0000092087)

      setValue_DHvb(8974.9)
      setDefault_DHvb(8974.9)

      setValue_Tc(567.0)
      setDefault_Tc(567.0)

      setValue_Tb(373.5)
      setDefault_Tb(373.5)

      setValue_MW(100.12)
      setDefault_MW(100.12)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.7)
      setDefault_Rfc(0.7)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(41.96)
      setDefault_Koc(41.96)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Methyl Styrene (Mixed Isomers)") {
      setValue_S(89.0)
      setDefault_S(89.0)

      setValue_Hc(0.00262)
      setDefault_Hc(0.00262)

      setValue_Dair(0.017397)
      setDefault_Dair(0.017397)

      setValue_Dwater(0.0000041793)
      setDefault_Dwater(0.0000041793)

      setValue_DHvb(12027.44)
      setDefault_DHvb(12027.44)

      setValue_Tc(655.0)
      setDefault_Tc(655.0)

      setValue_Tb(437.65)
      setDefault_Tb(437.65)

      setValue_MW(354.54)
      setDefault_MW(354.54)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.04)
      setDefault_Rfc(0.04)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(966.4)
      setDefault_Koc(966.4)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Methyl tert-Butyl Ether (MTBE)") {
      setValue_S(51000)
      setDefault_S(51000)

      setValue_Hc(0.000587)
      setDefault_Hc(0.000587)

      setValue_Dair(0.0752672)
      setDefault_Dair(0.0752672)

      setValue_Dwater(0.0000085904)
      setDefault_Dwater(0.0000085904)

      setValue_DHvb(6677.66)
      setDefault_DHvb(6677.66)

      setValue_Tc(497.1)
      setDefault_Tc(497.1)

      setValue_Tb(328.2)
      setDefault_Tb(328.2)

      setValue_MW(88.151)
      setDefault_MW(88.151)

      setValue_IUR(0.00000026)
      setDefault_IUR(0.00000026)

      setValue_Rfc(3.0)
      setDefault_Rfc(3.0)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(22.62)
      setDefault_Koc(22.62)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Methylene Chloride") {
      setValue_S(13000)
      setDefault_S(13000)

      setValue_Hc(0.00325)
      setDefault_Hc(0.00325)

      setValue_Dair(0.0999362)
      setDefault_Dair(0.0999362)

      setValue_Dwater(0.0000125)
      setDefault_Dwater(0.0000125)

      setValue_DHvb(6706)
      setDefault_DHvb(6706)

      setValue_Tc(510.0)
      setDefault_Tc(510.0)

      setValue_Tb(313.0)
      setDefault_Tb(313.0)

      setValue_MW(84.933)
      setDefault_MW(84.933)

      setValue_IUR(0.00000001)
      setDefault_IUR(0.00000001)

      setValue_Rfc(0.6)
      setDefault_Rfc(0.6)

      setValue_Mut("Yes")
      setDefault_Mut("Yes")

      setValue_Koc(12.15)
      setDefault_Koc(12.15)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Methylnaphthalene, 1-") {
      setValue_S(25.8)
      setDefault_S(25.8)

      setValue_Hc(0.000514)
      setDefault_Hc(0.000514)

      setValue_Dair(0.0527705)
      setDefault_Dair(0.0527705)

      setValue_Dwater(0.0000078477)
      setDefault_Dwater(0.0000078477)

      setValue_DHvb(13690.65)
      setDefault_DHvb(13690.65)

      setValue_Tc(771.8)
      setDefault_Tc(771.8)

      setValue_Tb(517.7)
      setDefault_Tb(517.7)

      setValue_MW(142.2)
      setDefault_MW(142.2)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(null)
      setDefault_Rfc(null)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(2282)
      setDefault_Koc(2282)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Methylnaphthalene, 2-") {
      setValue_S(24.6)
      setDefault_S(24.6)

      setValue_Hc(0.000518)
      setDefault_Hc(0.000518)

      setValue_Dair(0.0524319)
      setDefault_Dair(0.0524319)

      setValue_Dwater(0.0000077811)
      setDefault_Dwater(0.0000077811)

      setValue_DHvb(12600)
      setDefault_DHvb(12600)

      setValue_Tc(761.0)
      setDefault_Tc(761.0)

      setValue_Tb(514.1)
      setDefault_Tb(514.1)

      setValue_MW(142.2)
      setDefault_MW(142.2)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(null)
      setDefault_Rfc(null)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(2237)
      setDefault_Koc(2237)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Methylstyrene, Alpha-") {
      setValue_S(116.0)
      setDefault_S(116.0)

      setValue_Hc(0.00255)
      setDefault_Hc(0.00255)

      setValue_Dair(0.062902)
      setDefault_Dair(0.062902)

      setValue_Dwater(0.0000081911)
      setDefault_Dwater(0.0000081911)

      setValue_DHvb(11419.16)
      setDefault_DHvb(11419.16)

      setValue_Tc(657.0)
      setDefault_Tc(657.0)

      setValue_Tb(438.4)
      setDefault_Tb(438.4)

      setValue_MW(118.18)
      setDefault_MW(118.18)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(null)
      setDefault_Rfc(null)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(1047)
      setDefault_Koc(1047)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Naphthalene") {
      setValue_S(31.0)
      setDefault_S(31.0)

      setValue_Hc(0.00044)
      setDefault_Hc(0.00044)

      setValue_Dair(0.0604994)
      setDefault_Dair(0.0604994)

      setValue_Dwater(0.000008377)
      setDefault_Dwater(0.000008377)

      setValue_DHvb(10373)
      setDefault_DHvb(10373)

      setValue_Tc(748.4)
      setDefault_Tc(748.4)

      setValue_Tb(490.9)
      setDefault_Tb(490.9)

      setValue_MW(128.18)
      setDefault_MW(128.18)

      setValue_IUR(0.000034)
      setDefault_IUR(0.000034)

      setValue_Rfc(0.003)
      setDefault_Rfc(0.003)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(731)
      setDefault_Koc(731)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Nickel Carbonyl") {
      setValue_S(180.0)
      setDefault_S(180.0)

      setValue_Hc(0.5)
      setDefault_Hc(0.5)

      setValue_Dair(0.0433019)
      setDefault_Dair(0.0433019)

      setValue_Dwater(0.0000081704)
      setDefault_Dwater(0.0000081704)

      setValue_DHvb(6829.36)
      setDefault_DHvb(6829.36)

      setValue_Tc(473.15)
      setDefault_Tc(473.15)

      setValue_Tb(316.15)
      setDefault_Tb(316.15)

      setValue_MW(170.734)
      setDefault_MW(170.734)

      setValue_IUR(0.00026)
      setDefault_IUR(0.00026)

      setValue_Rfc(0.000014)
      setDefault_Rfc(0.000014)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(null)
      setDefault_Koc(null)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Nitrobenzene") {
      setValue_S(2090)
      setDefault_S(2090)

      setValue_Hc(0.000024)
      setDefault_Hc(0.000024)

      setValue_Dair(0.068054)
      setDefault_Dair(0.068054)

      setValue_Dwater(0.0000094495)
      setDefault_Dwater(0.0000094495)

      setValue_DHvb(10566)
      setDefault_DHvb(10566)

      setValue_Tc(719.0)
      setDefault_Tc(719.0)

      setValue_Tb(483.8)
      setDefault_Tb(483.8)

      setValue_MW(123.11)
      setDefault_MW(123.11)

      setValue_IUR(0.00004)
      setDefault_IUR(0.00004)

      setValue_Rfc(0.009)
      setDefault_Rfc(0.009)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(147.1)
      setDefault_Koc(147.1)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Nitromethane") {
      setValue_S(111000)
      setDefault_S(111000)

      setValue_Hc(0.0000286)
      setDefault_Hc(0.0000286)

      setValue_Dair(0.1192837)
      setDefault_Dair(0.1192837)

      setValue_Dwater(0.0000139)
      setDefault_Dwater(0.0000139)

      setValue_DHvb(9140.63)
      setDefault_DHvb(9140.63)

      setValue_Tc(588.0)
      setDefault_Tc(588.0)

      setValue_Tb(374.1)
      setDefault_Tb(374.1)

      setValue_MW(61.041)
      setDefault_MW(61.041)

      setValue_IUR(0.0000088)
      setDefault_IUR(0.0000088)

      setValue_Rfc(0.005)
      setDefault_Rfc(0.005)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(8.925)
      setDefault_Koc(8.925)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Nitropropane, 2-") {
      setValue_S(17000)
      setDefault_S(17000)

      setValue_Hc(0.000119)
      setDefault_Hc(0.000119)

      setValue_Dair(0.0846934)
      setDefault_Dair(0.0846934)

      setValue_Dwater(0.0000102)
      setDefault_Dwater(0.0000102)

      setValue_DHvb(8383)
      setDefault_DHvb(8383)

      setValue_Tc(594.0)
      setDefault_Tc(594.0)

      setValue_Tb(393.2)
      setDefault_Tb(393.2)

      setValue_MW(89.095)
      setDefault_MW(89.095)

      setValue_IUR(0.0027)
      setDefault_IUR(0.0027)

      setValue_Rfc(0.02)
      setDefault_Rfc(0.02)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(45.56)
      setDefault_Koc(45.56)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Nitrotoluene, o-") {
      setValue_S(650.0)
      setDefault_S(650.0)

      setValue_Hc(0.0000125)
      setDefault_Hc(0.0000125)

      setValue_Dair(0.0587535)
      setDefault_Dair(0.0587535)

      setValue_Dwater(0.0000086675)
      setDefault_Dwater(0.0000086675)

      setValue_DHvb(12239.1)
      setDefault_DHvb(12239.1)

      setValue_Tc(720.0)
      setDefault_Tc(720.0)

      setValue_Tb(495.0)
      setDefault_Tb(495.0)

      setValue_MW(137.14)
      setDefault_MW(137.14)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(null)
      setDefault_Rfc(null)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(260.8)
      setDefault_Koc(260.8)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Nonane, n-") {
      setValue_S(0.22)
      setDefault_S(0.22)

      setValue_Hc(3.4)
      setDefault_Hc(3.4)

      setValue_Dair(0.051432)
      setDefault_Dair(0.051432)

      setValue_Dwater(0.000006769)
      setDefault_Dwater(0.000006769)

      setValue_DHvb(11082.45)
      setDefault_DHvb(11082.45)

      setValue_Tc(594.0)
      setDefault_Tc(594.0)

      setValue_Tb(423.8)
      setDefault_Tb(423.8)

      setValue_MW(128.26)
      setDefault_MW(128.26)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.02)
      setDefault_Rfc(0.02)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(80030)
      setDefault_Koc(80030)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Pentane, n-") {
      setValue_S(38.0)
      setDefault_S(38.0)

      setValue_Hc(1.25)
      setDefault_Hc(1.25)

      setValue_Dair(0.0821293)
      setDefault_Dair(0.0821293)

      setValue_Dwater(0.0000087974)
      setDefault_Dwater(0.0000087974)

      setValue_DHvb(6155.06)
      setDefault_DHvb(6155.06)

      setValue_Tc(469.7)
      setDefault_Tc(469.7)

      setValue_Tb(309.0)
      setDefault_Tb(309.0)

      setValue_MW(72.151)
      setDefault_MW(72.151)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(1.0)
      setDefault_Rfc(1.0)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(874.5)
      setDefault_Koc(874.5)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Phosgene") {
      setValue_S(6825.5)
      setDefault_S(6825.5)

      setValue_Hc(0.0167)
      setDefault_Hc(0.0167)

      setValue_Dair(0.0893282)
      setDefault_Dair(0.0893282)

      setValue_Dwater(0.0000117)
      setDefault_Dwater(0.0000117)

      setValue_DHvb(7352.39)
      setDefault_DHvb(7352.39)

      setValue_Tc(455.0)
      setDefault_Tc(455.0)

      setValue_Tb(281.2)
      setDefault_Tb(281.2)

      setValue_MW(98.917)
      setDefault_MW(98.917)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.0003)
      setDefault_Rfc(0.0003)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(2.01)
      setDefault_Koc(2.01)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Propionaldehyde") {
      setValue_S(306000)
      setDefault_S(306000)

      setValue_Hc(0.0000734)
      setDefault_Hc(0.0000734)

      setValue_Dair(0.1103767)
      setDefault_Dair(0.1103767)

      setValue_Dwater(0.0000122)
      setDefault_Dwater(0.0000122)

      setValue_DHvb(7074.62)
      setDefault_DHvb(7074.62)

      setValue_Tc(496.0)
      setDefault_Tc(496.0)

      setValue_Tb(321.0)
      setDefault_Tb(321.0)

      setValue_MW(58.081)
      setDefault_MW(58.081)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.008)
      setDefault_Rfc(0.008)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(10.52)
      setDefault_Koc(10.52)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Propyl benzene") {
      setValue_S(52.2)
      setDefault_S(52.2)

      setValue_Hc(0.0105)
      setDefault_Hc(0.0105)

      setValue_Dair(0.0601558)
      setDefault_Dair(0.0601558)

      setValue_Dwater(0.000007831)
      setDefault_Dwater(0.000007831)

      setValue_DHvb(9123)
      setDefault_DHvb(9123)

      setValue_Tc(630.0)
      setDefault_Tc(630.0)

      setValue_Tb(432.2)
      setDefault_Tb(432.2)

      setValue_MW(120.2)
      setDefault_MW(120.2)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(1.0)
      setDefault_Rfc(1.0)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(1593)
      setDefault_Koc(1593)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Propylene") {
      setValue_S(200.0)
      setDefault_S(200.0)

      setValue_Hc(0.196)
      setDefault_Hc(0.196)

      setValue_Dair(0.1096967)
      setDefault_Dair(0.1096967)

      setValue_Dwater(0.0000107)
      setDefault_Dwater(0.0000107)

      setValue_DHvb(4402.41)
      setDefault_DHvb(4402.41)

      setValue_Tc(364.95)
      setDefault_Tc(364.95)

      setValue_Tb(225.6)
      setDefault_Tb(225.6)

      setValue_MW(42.081)
      setDefault_MW(42.081)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(3.0)
      setDefault_Rfc(3.0)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(34.34)
      setDefault_Koc(34.34)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Propylene Glycol Monomethyl Ether") {
      setValue_S(1000000)
      setDefault_S(1000000)

      setValue_Hc(0.00000092)
      setDefault_Hc(0.00000092)

      setValue_Dair(0.083145)
      setDefault_Dair(0.083145)

      setValue_Dwater(0.0000099604)
      setDefault_Dwater(0.0000099604)

      setValue_DHvb(7795.93344)
      setDefault_DHvb(7795.93344)

      setValue_Tc(588.225)
      setDefault_Tc(588.225)

      setValue_Tb(392.15)
      setDefault_Tb(392.15)

      setValue_MW(90.123)
      setDefault_MW(90.123)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(2.0)
      setDefault_Rfc(2.0)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(1.419)
      setDefault_Koc(1.419)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Propylene Oxide") {
      setValue_S(590000)
      setDefault_S(590000)

      setValue_Hc(0.0000696)
      setDefault_Hc(0.0000696)

      setValue_Dair(0.1085105)
      setDefault_Dair(0.1085105)

      setValue_Dwater(0.0000119)
      setDefault_Dwater(0.0000119)

      setValue_DHvb(6621.12)
      setDefault_DHvb(6621.12)

      setValue_Tc(482.1)
      setDefault_Tc(482.1)

      setValue_Tb(308.0)
      setDefault_Tb(308.0)

      setValue_MW(58.081)
      setDefault_MW(58.081)

      setValue_IUR(0.0000037)
      setDefault_IUR(0.0000037)

      setValue_Rfc(0.03)
      setDefault_Rfc(0.03)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(7.097)
      setDefault_Koc(7.097)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Pyrene") {
      setValue_S(0.135)
      setDefault_S(0.135)

      setValue_Hc(0.0000119)
      setDefault_Hc(0.0000119)

      setValue_Dair(0.0277873)
      setDefault_Dair(0.0277873)

      setValue_Dwater(0.0000072479)
      setDefault_Dwater(0.0000072479)

      setValue_DHvb(14370)
      setDefault_DHvb(14370)

      setValue_Tc(936.0)
      setDefault_Tc(936.0)

      setValue_Tb(677.0)
      setDefault_Tb(677.0)

      setValue_MW(202.26)
      setDefault_MW(202.26)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(null)
      setDefault_Rfc(null)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(17180)
      setDefault_Koc(17180)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Pyridine") {
      setValue_S(1000000)
      setDefault_S(1000000)

      setValue_Hc(0.000011)
      setDefault_Hc(0.000011)

      setValue_Dair(0.0930883)
      setDefault_Dair(0.0930883)

      setValue_Dwater(0.0000109)
      setDefault_Dwater(0.0000109)

      setValue_DHvb(35.1)
      setDefault_DHvb(35.1)

      setValue_Tc(617.2)
      setDefault_Tc(617.2)

      setValue_Tb(388.2)
      setDefault_Tb(388.2)

      setValue_MW(79.102)
      setDefault_MW(79.102)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(null)
      setDefault_Rfc(null)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(28.91)
      setDefault_Koc(28.91)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Styrene") {
      setValue_S(310.0)
      setDefault_S(310.0)

      setValue_Hc(0.00275)
      setDefault_Hc(0.00275)

      setValue_Dair(0.071114)
      setDefault_Dair(0.071114)

      setValue_Dwater(0.0000087838)
      setDefault_Dwater(0.0000087838)

      setValue_DHvb(8737)
      setDefault_DHvb(8737)

      setValue_Tc(636.0)
      setDefault_Tc(636.0)

      setValue_Tb(418.0)
      setDefault_Tb(418.0)

      setValue_MW(104.15)
      setDefault_MW(104.15)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(1.0)
      setDefault_Rfc(1.0)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(363)
      setDefault_Koc(363)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Tetrachloroethane, 1,1,1,2-") {
      setValue_S(1070)
      setDefault_S(1070)

      setValue_Hc(0.0025)
      setDefault_Hc(0.0025)

      setValue_Dair(0.0481761)
      setDefault_Dair(0.0481761)

      setValue_Dwater(0.0000090977)
      setDefault_Dwater(0.0000090977)

      setValue_DHvb(9768.282525)
      setDefault_DHvb(9768.282525)

      setValue_Tc(624.0)
      setDefault_Tc(624.0)

      setValue_Tb(403.5)
      setDefault_Tb(403.5)

      setValue_MW(167.85)
      setDefault_MW(167.85)

      setValue_IUR(0.0000074)
      setDefault_IUR(0.0000074)

      setValue_Rfc(null)
      setDefault_Rfc(null)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(348.8)
      setDefault_Koc(348.8)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Tetrachloroethane, 1,1,2,2-") {
      setValue_S(2830)
      setDefault_S(2830)

      setValue_Hc(0.000367)
      setDefault_Hc(0.000367)

      setValue_Dair(0.0489206)
      setDefault_Dair(0.0489206)

      setValue_Dwater(0.0000092902)
      setDefault_Dwater(0.0000092902)

      setValue_DHvb(8996)
      setDefault_DHvb(8996)

      setValue_Tc(661.15)
      setDefault_Tc(661.15)

      setValue_Tb(419.5)
      setDefault_Tb(419.5)

      setValue_MW(167.85)
      setDefault_MW(167.85)

      setValue_IUR(0.000058)
      setDefault_IUR(0.000058)

      setValue_Rfc(null)
      setDefault_Rfc(null)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(118.5)
      setDefault_Koc(118.5)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Tetrachloroethylene") {
      setValue_S(206.0)
      setDefault_S(206.0)

      setValue_Hc(0.0177)
      setDefault_Hc(0.0177)

      setValue_Dair(0.0504664)
      setDefault_Dair(0.0504664)

      setValue_Dwater(0.0000094551)
      setDefault_Dwater(0.0000094551)

      setValue_DHvb(8288)
      setDefault_DHvb(8288)

      setValue_Tc(620.2)
      setDefault_Tc(620.2)

      setValue_Tb(394.3)
      setDefault_Tb(394.3)

      setValue_MW(165.83)
      setDefault_MW(165.83)

      setValue_IUR(0.00000026)
      setDefault_IUR(0.00000026)

      setValue_Rfc(0.04)
      setDefault_Rfc(0.04)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(892.2)
      setDefault_Koc(892.2)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Tetrafluoroethane, 1,1,1,2-") {
      setValue_S(2040)
      setDefault_S(2040)

      setValue_Hc(0.05)
      setDefault_Hc(0.05)

      setValue_Dair(0.0823066)
      setDefault_Dair(0.0823066)

      setValue_Dwater(0.0000106)
      setDefault_Dwater(0.0000106)

      setValue_DHvb(5933.96)
      setDefault_DHvb(5933.96)

      setValue_Tc(624.0)
      setDefault_Tc(624.0)

      setValue_Tb(403.5)
      setDefault_Tb(403.5)

      setValue_MW(102.03)
      setDefault_MW(102.03)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(80.0)
      setDefault_Rfc(80.0)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(28.69)
      setDefault_Koc(28.69)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Tetrahydrofuran") {
      setValue_S(1000000)
      setDefault_S(1000000)

      setValue_Hc(0.0000705)
      setDefault_Hc(0.0000705)

      setValue_Dair(0.0993751)
      setDefault_Dair(0.0993751)

      setValue_Dwater(0.0000108)
      setDefault_Dwater(0.0000108)

      setValue_DHvb(7073.991)
      setDefault_DHvb(7073.991)

      setValue_Tc(541.15)
      setDefault_Tc(541.15)

      setValue_Tb(339.0)
      setDefault_Tb(339.0)

      setValue_MW(72.108)
      setDefault_MW(72.108)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(2.0)
      setDefault_Rfc(2.0)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(12.27)
      setDefault_Koc(12.27)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Titanium Tetrachloride") {
      setValue_S(null)
      setDefault_S(null)

      setValue_Hc(null)
      setDefault_Hc(null)

      setValue_Dair(0.0379716)
      setDefault_Dair(0.0379716)

      setValue_Dwater(0.0000090633)
      setDefault_Dwater(0.0000090633)

      setValue_DHvb(8646.2252)
      setDefault_DHvb(8646.2252)

      setValue_Tc(643.15)
      setDefault_Tc(643.15)

      setValue_Tb(421.15)
      setDefault_Tb(421.15)

      setValue_MW(189.679)
      setDefault_MW(189.679)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.0001)
      setDefault_Rfc(0.0001)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(18.85)
      setDefault_Koc(18.85)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Toluene") {
      setValue_S(526.0)
      setDefault_S(526.0)

      setValue_Hc(0.00664)
      setDefault_Hc(0.00664)

      setValue_Dair(0.0778039)
      setDefault_Dair(0.0778039)

      setValue_Dwater(0.0000092043)
      setDefault_Dwater(0.0000092043)

      setValue_DHvb(7930)
      setDefault_DHvb(7930)

      setValue_Tc(591.79)
      setDefault_Tc(591.79)

      setValue_Tb(383.6)
      setDefault_Tb(383.6)

      setValue_MW(92.142)
      setDefault_MW(92.142)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(5.0)
      setDefault_Rfc(5.0)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(233.9)
      setDefault_Koc(233.9)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Trichloro,2,2-trifluoroethane, 1,1,2-") {
      setValue_S(170.0)
      setDefault_S(170.0)

      setValue_Hc(0.526)
      setDefault_Hc(0.526)

      setValue_Dair(0.0375658)
      setDefault_Dair(0.0375658)

      setValue_Dwater(0.000008592)
      setDefault_Dwater(0.000008592)

      setValue_DHvb(6462.56)
      setDefault_DHvb(6462.56)

      setValue_Tc(487.3)
      setDefault_Tc(487.3)

      setValue_Tb(320.7)
      setDefault_Tb(320.7)

      setValue_MW(187.38)
      setDefault_MW(187.38)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(5.0)
      setDefault_Rfc(5.0)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(552.3)
      setDefault_Koc(552.3)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Trichlorobenzene, 1,2,3-") {
      setValue_S(18.0)
      setDefault_S(18.0)

      setValue_Hc(0.00125)
      setDefault_Hc(0.00125)

      setValue_Dair(0.03953)
      setDefault_Dair(0.03953)

      setValue_Dwater(0.0000083836)
      setDefault_Dwater(0.0000083836)

      setValue_DHvb(12611.53)
      setDefault_DHvb(12611.53)

      setValue_Tc(762.5)
      setDefault_Tc(762.5)

      setValue_Tb(491.5)
      setDefault_Tb(491.5)

      setValue_MW(181.45)
      setDefault_MW(181.45)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(null)
      setDefault_Rfc(null)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(2040)
      setDefault_Koc(2040)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Trichlorobenzene, 1,2,4-") {
      setValue_S(49.0)
      setDefault_S(49.0)

      setValue_Hc(0.00142)
      setDefault_Hc(0.00142)

      setValue_Dair(0.0395992)
      setDefault_Dair(0.0395992)

      setValue_Dwater(0.0000084033)
      setDefault_Dwater(0.0000084033)

      setValue_DHvb(10471)
      setDefault_DHvb(10471)

      setValue_Tc(725.0)
      setDefault_Tc(725.0)

      setValue_Tb(486.5)
      setDefault_Tb(486.5)

      setValue_MW(181.45)
      setDefault_MW(181.45)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.002)
      setDefault_Rfc(0.002)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(1964)
      setDefault_Koc(1964)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Trichloroethane, 1,1,1-") {
      setValue_S(1290)
      setDefault_S(1290)

      setValue_Hc(0.0172)
      setDefault_Hc(0.0172)

      setValue_Dair(0.0648174)
      setDefault_Dair(0.0648174)

      setValue_Dwater(0.000009599)
      setDefault_Dwater(0.000009599)

      setValue_DHvb(7136)
      setDefault_DHvb(7136)

      setValue_Tc(545.0)
      setDefault_Tc(545.0)

      setValue_Tb(347.0)
      setDefault_Tb(347.0)

      setValue_MW(133.41)
      setDefault_MW(133.41)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(5.0)
      setDefault_Rfc(5.0)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(144.8)
      setDefault_Koc(144.8)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Trichloroethane, 1,1,2-") {
      setValue_S(4590)
      setDefault_S(4590)

      setValue_Hc(0.000824)
      setDefault_Hc(0.000824)

      setValue_Dair(0.0668904)
      setDefault_Dair(0.0668904)

      setValue_Dwater(0.00001)
      setDefault_Dwater(0.00001)

      setValue_DHvb(8322)
      setDefault_DHvb(8322)

      setValue_Tc(602.0)
      setDefault_Tc(602.0)

      setValue_Tb(386.8)
      setDefault_Tb(386.8)

      setValue_MW(133.41)
      setDefault_MW(133.41)

      setValue_IUR(0.000016)
      setDefault_IUR(0.000016)

      setValue_Rfc(0.0002)
      setDefault_Rfc(0.0002)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(43.64)
      setDefault_Koc(43.64)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Trichloroethylene") {
      setValue_S(1280)
      setDefault_S(1280)

      setValue_Hc(0.00985)
      setDefault_Hc(0.00985)

      setValue_Dair(0.0686618)
      setDefault_Dair(0.0686618)

      setValue_Dwater(0.0000102)
      setDefault_Dwater(0.0000102)

      setValue_DHvb(7505)
      setDefault_DHvb(7505)

      setValue_Tc(544.2)
      setDefault_Tc(544.2)

      setValue_Tb(360.2)
      setDefault_Tb(360.2)

      setValue_MW(131.39)
      setDefault_MW(131.39)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.002)
      setDefault_Rfc(0.002)

      setValue_Mut("Yes")
      setDefault_Mut("Yes")

      setValue_Koc(125.9)
      setDefault_Koc(125.9)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Trichlorofluoromethane") {
      setValue_S(1100)
      setDefault_S(1100)

      setValue_Hc(0.097)
      setDefault_Hc(0.097)

      setValue_Dair(0.065356)
      setDefault_Dair(0.065356)

      setValue_Dwater(0.00001)
      setDefault_Dwater(0.00001)

      setValue_DHvb(5998.9)
      setDefault_DHvb(5998.9)

      setValue_Tc(471.0)
      setDefault_Tc(471.0)

      setValue_Tb(296.7)
      setDefault_Tb(296.7)

      setValue_MW(137.37)
      setDefault_MW(137.37)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(null)
      setDefault_Rfc(null)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(156.8)
      setDefault_Koc(156.8)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Trichloropropane, 1,2,3-") {
      setValue_S(1750)
      setDefault_S(1750)

      setValue_Hc(0.000343)
      setDefault_Hc(0.000343)

      setValue_Dair(0.0574661)
      setDefault_Dair(0.0574661)

      setValue_Dwater(0.0000092411)
      setDefault_Dwater(0.0000092411)

      setValue_DHvb(9171)
      setDefault_DHvb(9171)

      setValue_Tc(652.0)
      setDefault_Tc(652.0)

      setValue_Tb(430.0)
      setDefault_Tb(430.0)

      setValue_MW(147.43)
      setDefault_MW(147.43)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.0003)
      setDefault_Rfc(0.0003)

      setValue_Mut("Yes")
      setDefault_Mut("Yes")

      setValue_Koc(93.27)
      setDefault_Koc(93.27)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Triethylamine") {
      setValue_S(68600)
      setDefault_S(68600)

      setValue_Hc(0.000149)
      setDefault_Hc(0.000149)

      setValue_Dair(0.0663631)
      setDefault_Dair(0.0663631)

      setValue_Dwater(0.0000078576)
      setDefault_Dwater(0.0000078576)

      setValue_DHvb(8095.2)
      setDefault_DHvb(8095.2)

      setValue_Tc(535.6)
      setDefault_Tc(535.6)

      setValue_Tb(362.0)
      setDefault_Tb(362.0)

      setValue_MW(101.19)
      setDefault_MW(101.19)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc()
      setDefault_Rfc()

      setValue_Mut(0.007)
      setDefault_Mut(0.007)

      setValue_Koc(45.9)
      setDefault_Koc(45.9)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Trifluoroethane, 1,1,1-") {
      setValue_S(760.9)
      setDefault_S(760.9)

      setValue_Hc(0.77)
      setDefault_Hc(0.77)

      setValue_Dair(0.0990283)
      setDefault_Dair(0.0990283)

      setValue_Dwater(0.0000116)
      setDefault_Dwater(0.0000116)

      setValue_DHvb(4.58891)
      setDefault_DHvb(4.58891)

      setValue_Tc(345.88)
      setDefault_Tc(345.88)

      setValue_Tb(228.15)
      setDefault_Tb(228.15)

      setValue_MW(84.041)
      setDefault_MW(84.041)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(20.0)
      setDefault_Rfc(20.0)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(32.34)
      setDefault_Koc(32.34)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Trimethylbenzene, 1,2,3-") {
      setValue_S(75.2)
      setDefault_S(75.2)

      setValue_Hc(0.00436)
      setDefault_Hc(0.00436)

      setValue_Dair(0.0612535)
      setDefault_Dair(0.0612535)

      setValue_Dwater(0.0000080214)
      setDefault_Dwater(0.0000080214)

      setValue_DHvb(11715.39)
      setDefault_DHvb(11715.39)

      setValue_Tc(664.5)
      setDefault_Tc(664.5)

      setValue_Tb(449.1)
      setDefault_Tb(449.1)

      setValue_MW(120.2)
      setDefault_MW(120.2)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.06)
      setDefault_Rfc(0.06)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(1500)
      setDefault_Koc(1500)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Trimethylbenzene, 1,2,4-") {
      setValue_S(57.0)
      setDefault_S(57.0)

      setValue_Hc(0.00616)
      setDefault_Hc(0.00616)

      setValue_Dair(0.0606754)
      setDefault_Dair(0.0606754)

      setValue_Dwater(0.0000079209)
      setDefault_Dwater(0.0000079209)

      setValue_DHvb(9368.8)
      setDefault_DHvb(9368.8)

      setValue_Tc(649.17)
      setDefault_Tc(649.17)

      setValue_Tb(442.3)
      setDefault_Tb(442.3)

      setValue_MW(120.2)
      setDefault_MW(120.2)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.06)
      setDefault_Rfc(0.06)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(1413)
      setDefault_Koc(1413)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Trimethylbenzene, 1,3,5-") {
      setValue_S(48.2)
      setDefault_S(48.2)

      setValue_Hc(0.00877)
      setDefault_Hc(0.00877)

      setValue_Dair(0.0602254)
      setDefault_Dair(0.0602254)

      setValue_Dwater(0.000007843)
      setDefault_Dwater(0.000007843)

      setValue_DHvb(9321)
      setDefault_DHvb(9321)

      setValue_Tc(637.25)
      setDefault_Tc(637.25)

      setValue_Tb(437.7)
      setDefault_Tb(437.7)

      setValue_MW(120.2)
      setDefault_MW(120.2)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.06)
      setDefault_Rfc(0.06)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(928.6)
      setDefault_Koc(928.6)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Vinyl Acetate") {
      setValue_S(20000)
      setDefault_S(20000)

      setValue_Hc(0.000511)
      setDefault_Hc(0.000511)

      setValue_Dair(0.0849016)
      setDefault_Dair(0.0849016)

      setValue_Dwater(0.00001)
      setDefault_Dwater(0.00001)

      setValue_DHvb(7800)
      setDefault_DHvb(7800)

      setValue_Tc(519.13)
      setDefault_Tc(519.13)

      setValue_Tb(345.5)
      setDefault_Tb(345.5)

      setValue_MW(86.091)
      setDefault_MW(86.091)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.2)
      setDefault_Rfc(0.2)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(18.34)
      setDefault_Koc(18.34)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Vinyl Bromide") {
      setValue_S(7600)
      setDefault_S(7600)

      setValue_Hc(0.0123)
      setDefault_Hc(0.0123)

      setValue_Dair(0.0862238)
      setDefault_Dair(0.0862238)

      setValue_Dwater(0.0000117)
      setDefault_Dwater(0.0000117)

      setValue_DHvb(5397.92)
      setDefault_DHvb(5397.92)

      setValue_Tc(463.51)
      setDefault_Tc(463.51)

      setValue_Tb(288.8)
      setDefault_Tb(288.8)

      setValue_MW(106.95)
      setDefault_MW(106.95)

      setValue_IUR(0.000032)
      setDefault_IUR(0.000032)

      setValue_Rfc(0.003)
      setDefault_Rfc(0.003)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(23.03)
      setDefault_Koc(23.03)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Vinyl Chloride") {
      setValue_S(8800)
      setDefault_S(8800)

      setValue_Hc(0.0278)
      setDefault_Hc(0.0278)

      setValue_Dair(0.1071202)
      setDefault_Dair(0.1071202)

      setValue_Dwater(0.000012)
      setDefault_Dwater(0.000012)

      setValue_DHvb(5250)
      setDefault_DHvb(5250)

      setValue_Tc(432.0)
      setDefault_Tc(432.0)

      setValue_Tb(259.7)
      setDefault_Tb(259.7)

      setValue_MW(62.499)
      setDefault_MW(62.499)

      setValue_IUR(0.0000044)
      setDefault_IUR(0.0000044)

      setValue_Rfc(0.1)
      setDefault_Rfc(0.1)

      setValue_Mut("VC")
      setDefault_Mut("VC")

      setValue_Koc(25.44)
      setDefault_Koc(25.44)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Xylene, m-") {
      setValue_S(161.0)
      setDefault_S(161.0)

      setValue_Hc(0.00718)
      setDefault_Hc(0.00718)

      setValue_Dair(0.0683659)
      setDefault_Dair(0.0683659)

      setValue_Dwater(0.0000084394)
      setDefault_Dwater(0.0000084394)

      setValue_DHvb(8523)
      setDefault_DHvb(8523)

      setValue_Tc(617.05)
      setDefault_Tc(617.05)

      setValue_Tb(412.1)
      setDefault_Tb(412.1)

      setValue_MW(106.17)
      setDefault_MW(106.17)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.1)
      setDefault_Rfc(0.1)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(598.2)
      setDefault_Koc(598.2)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Xylene, o-") {
      setValue_S(178.0)
      setDefault_S(178.0)

      setValue_Hc(0.00518)
      setDefault_Hc(0.00518)

      setValue_Dair(0.0689201)
      setDefault_Dair(0.0689201)

      setValue_Dwater(0.0000085315)
      setDefault_Dwater(0.0000085315)

      setValue_DHvb(8661)
      setDefault_DHvb(8661)

      setValue_Tc(630.3)
      setDefault_Tc(630.3)

      setValue_Tb(411.5)
      setDefault_Tb(411.5)

      setValue_MW(106.17)
      setDefault_MW(106.17)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.1)
      setDefault_Rfc(0.1)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(552.3)
      setDefault_Koc(552.3)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Xylene, P-") {
      setValue_S(162.0)
      setDefault_S(162.0)

      setValue_Hc(0.0069)
      setDefault_Hc(0.0069)

      setValue_Dair(0.0682485)
      setDefault_Dair(0.0682485)

      setValue_Dwater(0.0000084199)
      setDefault_Dwater(0.0000084199)

      setValue_DHvb(8525)
      setDefault_DHvb(8525)

      setValue_Tc(616.2)
      setDefault_Tc(616.2)

      setValue_Tb(411.3)
      setDefault_Tb(411.3)

      setValue_MW(106.17)
      setDefault_MW(106.17)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.1)
      setDefault_Rfc(0.1)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(541.4)
      setDefault_Koc(541.4)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "Xylenes") {
      setValue_S(106.0)
      setDefault_S(106.0)

      setValue_Hc(0.00663)
      setDefault_Hc(0.00663)

      setValue_Dair(0.0685148)
      setDefault_Dair(0.0685148)

      setValue_Dwater(0.0000084641)
      setDefault_Dwater(0.0000084641)

      setValue_DHvb(8523)
      setDefault_DHvb(8523)

      setValue_Tc(616.2)
      setDefault_Tc(616.2)

      setValue_Tb(411.3)
      setDefault_Tb(411.3)

      setValue_MW(106.17)
      setDefault_MW(106.17)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.1)
      setDefault_Rfc(0.1)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(552.3)
      setDefault_Koc(552.3)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "TPH - Aliph >C05-C06") {
      setValue_S(36)
      setDefault_S(36)

      setValue_Hc(32.47711492)
      setDefault_Hc(32.47711492)

      setValue_Dair(0.1)
      setDefault_Dair(0.1)

      setValue_Dwater(0.00001)
      setDefault_Dwater(0.00001)

      setValue_DHvb(8000)
      setDefault_DHvb(8000)

      setValue_Tc(500)
      setDefault_Tc(500)

      setValue_Tb(100)
      setDefault_Tb(100)

      setValue_MW(81)
      setDefault_MW(81)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(18)
      setDefault_Rfc(18)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(794.3)
      setDefault_Koc(794.3)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "TPH - Aliph >C06-C08") {
      setValue_S(36)
      setDefault_S(36)

      setValue_Hc(32.47711492)
      setDefault_Hc(32.47711492)

      setValue_Dair(0.1)
      setDefault_Dair(0.1)

      setValue_Dwater(0.00001)
      setDefault_Dwater(0.00001)

      setValue_DHvb(8000)
      setDefault_DHvb(8000)

      setValue_Tc(500)
      setDefault_Tc(500)

      setValue_Tb(100)
      setDefault_Tb(100)

      setValue_MW(81)
      setDefault_MW(81)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(18)
      setDefault_Rfc(18)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(794.3)
      setDefault_Koc(794.3)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "TPH - Aliph >C05-C06 (>53% n-hexane)") {
      setValue_S(5.4)
      setDefault_S(5.4)

      setValue_Hc(48.11424433)
      setDefault_Hc(48.11424433)

      setValue_Dair(0.1)
      setDefault_Dair(0.1)

      setValue_Dwater(0.00001)
      setDefault_Dwater(0.00001)

      setValue_DHvb(9000)
      setDefault_DHvb(9000)

      setValue_Tc(500)
      setDefault_Tc(500)

      setValue_Tb(100)
      setDefault_Tb(100)

      setValue_MW(100)
      setDefault_MW(100)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.67)
      setDefault_Rfc(0.67)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(862.9)
      setDefault_Koc(862.9)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "TPH - Aliph >C06-C08 (>53% n-hexane)") {
      setValue_S(5.4)
      setDefault_S(5.4)

      setValue_Hc(48.11424433)
      setDefault_Hc(48.11424433)

      setValue_Dair(0.1)
      setDefault_Dair(0.1)

      setValue_Dwater(0.00001)
      setDefault_Dwater(0.00001)

      setValue_DHvb(10000)
      setDefault_DHvb(10000)

      setValue_Tc(500)
      setDefault_Tc(500)

      setValue_Tb(100)
      setDefault_Tb(100)

      setValue_MW(100)
      setDefault_MW(100)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.67)
      setDefault_Rfc(0.67)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(862.9)
      setDefault_Koc(862.9)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "TPH - Aliph >C08-C10") {
      setValue_S(0.43)
      setDefault_S(0.43)

      setValue_Hc(78.54930121)
      setDefault_Hc(78.54930121)

      setValue_Dair(0.1)
      setDefault_Dair(0.1)

      setValue_Dwater(0.00001)
      setDefault_Dwater(0.00001)

      setValue_DHvb(12000)
      setDefault_DHvb(12000)

      setValue_Tc(500)
      setDefault_Tc(500)

      setValue_Tb(100)
      setDefault_Tb(100)

      setValue_MW(130)
      setDefault_MW(130)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.5)
      setDefault_Rfc(0.5)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(31622.7)
      setDefault_Koc(31622.7)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "TPH - Aliph >C10-C12") {
      setValue_S(0.034)
      setDefault_S(0.034)

      setValue_Hc(122.2667856)
      setDefault_Hc(122.2667856)

      setValue_Dair(0.1)
      setDefault_Dair(0.1)

      setValue_Dwater(0.00001)
      setDefault_Dwater(0.00001)

      setValue_DHvb(12000)
      setDefault_DHvb(12000)

      setValue_Tc(500)
      setDefault_Tc(500)

      setValue_Tb(100)
      setDefault_Tb(100)

      setValue_MW(160)
      setDefault_MW(160)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.5)
      setDefault_Rfc(0.5)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(251188.6)
      setDefault_Koc(251188.6)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "TPH - Aliph >C12-C16") {
      setValue_S(0.00076)
      setDefault_S(0.00076)

      setValue_Hc(520.9361792)
      setDefault_Hc(520.9361792)

      setValue_Dair(0.1)
      setDefault_Dair(0.1)

      setValue_Dwater(0.00001)
      setDefault_Dwater(0.00001)

      setValue_DHvb(16000)
      setDefault_DHvb(16000)

      setValue_Tc(500)
      setDefault_Tc(500)

      setValue_Tb(300)
      setDefault_Tb(300)

      setValue_MW(200)
      setDefault_MW(200)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.5)
      setDefault_Rfc(0.5)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(5011872.3)
      setDefault_Koc(5011872.3)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "TPH - Aliph >C16-C21") {
      setValue_S(0.0000025)
      setDefault_S(0.0000025)

      setValue_Hc(4899.404766)
      setDefault_Hc(4899.404766)

      setValue_Dair(0.1)
      setDefault_Dair(0.1)

      setValue_Dwater(0.00001)
      setDefault_Dwater(0.00001)

      setValue_DHvb(17000)
      setDefault_DHvb(17000)

      setValue_Tc(500)
      setDefault_Tc(500)

      setValue_Tb(300)
      setDefault_Tb(300)

      setValue_MW(270)
      setDefault_MW(270)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(null)
      setDefault_Rfc(null)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(630957344.4)
      setDefault_Koc(630957344.4)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "TPH - Aliph >C21-C34") {
      setValue_S(0.0000025)
      setDefault_S(0.0000025)

      setValue_Hc(7258.377431)
      setDefault_Hc(7258.377431)

      setValue_Dair(0.1)
      setDefault_Dair(0.1)

      setValue_Dwater(0.00001)
      setDefault_Dwater(0.00001)

      setValue_DHvb(20000)
      setDefault_DHvb(20000)

      setValue_Tc(500)
      setDefault_Tc(500)

      setValue_Tb(100)
      setDefault_Tb(100)

      setValue_MW(400)
      setDefault_MW(400)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(null)
      setDefault_Rfc(null)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(630957344.4)
      setDefault_Koc(630957344.4)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "TPH - Arom >C05-C07") {
      setValue_S(1800)
      setDefault_S(1800)

      setValue_Hc(0.232323065)
      setDefault_Hc(0.232323065)

      setValue_Dair(0.1)
      setDefault_Dair(0.1)

      setValue_Dwater(0.00001)
      setDefault_Dwater(0.00001)

      setValue_DHvb(8000)
      setDefault_DHvb(8000)

      setValue_Tc(500)
      setDefault_Tc(500)

      setValue_Tb(100)
      setDefault_Tb(100)

      setValue_MW(78)
      setDefault_MW(78)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.28)
      setDefault_Rfc(0.28)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(79.43)
      setDefault_Koc(79.43)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "TPH - Arom >C07-C08") {
      setValue_S(520)
      setDefault_S(520)

      setValue_Hc(0.277264942)
      setDefault_Hc(0.277264942)

      setValue_Dair(0.1)
      setDefault_Dair(0.1)

      setValue_Dwater(0.00001)
      setDefault_Dwater(0.00001)

      setValue_DHvb(10000)
      setDefault_DHvb(10000)

      setValue_Tc(500)
      setDefault_Tc(500)

      setValue_Tb(100)
      setDefault_Tb(100)

      setValue_MW(92)
      setDefault_MW(92)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(1.9)
      setDefault_Rfc(1.9)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(251.1)
      setDefault_Koc(251.1)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "TPH - Arom >C08-C10") {
      setValue_S(65)
      setDefault_S(65)

      setValue_Hc(0.479662005)
      setDefault_Hc(0.479662005)

      setValue_Dair(0.1)
      setDefault_Dair(0.1)

      setValue_Dwater(0.00001)
      setDefault_Dwater(0.00001)

      setValue_DHvb(10000)
      setDefault_DHvb(10000)

      setValue_Tc(500)
      setDefault_Tc(500)

      setValue_Tb(300)
      setDefault_Tb(300)

      setValue_MW(120)
      setDefault_MW(120)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.2)
      setDefault_Rfc(0.2)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(1584.8)
      setDefault_Koc(1584.8)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "TPH - Arom >C10-C12") {
      setValue_S(25)
      setDefault_S(25)

      setValue_Hc(0.135104789)
      setDefault_Hc(0.135104789)

      setValue_Dair(0.1)
      setDefault_Dair(0.1)

      setValue_Dwater(0.00001)
      setDefault_Dwater(0.00001)

      setValue_DHvb(12000)
      setDefault_DHvb(12000)

      setValue_Tc(500)
      setDefault_Tc(500)

      setValue_Tb(300)
      setDefault_Tb(300)

      setValue_MW(130)
      setDefault_MW(130)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.2)
      setDefault_Rfc(0.2)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(2511.8)
      setDefault_Koc(2511.8)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "TPH - Arom >C12-C16") {
      setValue_S(5.8)
      setDefault_S(5.8)

      setValue_Hc(0.051195452)
      setDefault_Hc(0.051195452)

      setValue_Dair(0.1)
      setDefault_Dair(0.1)

      setValue_Dwater(0.00001)
      setDefault_Dwater(0.00001)

      setValue_DHvb(16000)
      setDefault_DHvb(16000)

      setValue_Tc(500)
      setDefault_Tc(500)

      setValue_Tb(300)
      setDefault_Tb(300)

      setValue_MW(150)
      setDefault_MW(150)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.2)
      setDefault_Rfc(0.2)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(5011.8)
      setDefault_Koc(5011.8)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "TPH - Arom >C16-C121") {
      setValue_S(0.65)
      setDefault_S(0.65)

      setValue_Hc(0.013260497)
      setDefault_Hc(0.013260497)

      setValue_Dair(0.1)
      setDefault_Dair(0.1)

      setValue_Dwater(0.00001)
      setDefault_Dwater(0.00001)

      setValue_DHvb(17000)
      setDefault_DHvb(17000)

      setValue_Tc(500)
      setDefault_Tc(500)

      setValue_Tb(300)
      setDefault_Tb(300)

      setValue_MW(190)
      setDefault_MW(190)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(null)
      setDefault_Rfc(null)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(15848.9)
      setDefault_Koc(15848.9)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "TPH - Arom >C21-C35") {
      setValue_S(0.0066)
      setDefault_S(0.0066)

      setValue_Hc(0.000659852)
      setDefault_Hc(0.000659852)

      setValue_Dair(0.1)
      setDefault_Dair(0.1)

      setValue_Dwater(0.00001)
      setDefault_Dwater(0.00001)

      setValue_DHvb(20000)
      setDefault_DHvb(20000)

      setValue_Tc(500)
      setDefault_Tc(500)

      setValue_Tb(300)
      setDefault_Tb(300)

      setValue_MW(240)
      setDefault_MW(240)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(null)
      setDefault_Rfc(null)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(125892.5)
      setDefault_Koc(125892.5)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "TPH, TX1105, C6-C12") {
      setValue_S(65)
      setDefault_S(65)

      setValue_Hc(0.48)
      setDefault_Hc(0.48)

      setValue_Dair(0.1)
      setDefault_Dair(0.1)

      setValue_Dwater(0.00001)
      setDefault_Dwater(0.00001)

      setValue_DHvb(10000)
      setDefault_DHvb(10000)

      setValue_Tc(500)
      setDefault_Tc(500)

      setValue_Tb(100)
      setDefault_Tb(100)

      setValue_MW(120)
      setDefault_MW(120)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.2)
      setDefault_Rfc(0.2)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(1584.8)
      setDefault_Koc(1584.8)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "TPH, TX1105, >C12-C28") {
      setValue_S(5.8)
      setDefault_S(5.8)

      setValue_Hc(0.053)
      setDefault_Hc(0.053)

      setValue_Dair(0.1)
      setDefault_Dair(0.1)

      setValue_Dwater(0.00001)
      setDefault_Dwater(0.00001)

      setValue_DHvb(20000)
      setDefault_DHvb(20000)

      setValue_Tc(500)
      setDefault_Tc(500)

      setValue_Tb(100)
      setDefault_Tb(100)

      setValue_MW(150)
      setDefault_MW(150)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.2)
      setDefault_Rfc(0.2)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(5011.8)
      setDefault_Koc(5011.8)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "TPH, TX1105, >C12-C35") {
      setValue_S(5.8)
      setDefault_S(5.8)

      setValue_Hc(0.053)
      setDefault_Hc(0.053)

      setValue_Dair(0.1)
      setDefault_Dair(0.1)

      setValue_Dwater(0.00001)
      setDefault_Dwater(0.00001)

      setValue_DHvb(20000)
      setDefault_DHvb(20000)

      setValue_Tc(500)
      setDefault_Tc(500)

      setValue_Tb(100)
      setDefault_Tb(100)

      setValue_MW(150)
      setDefault_MW(150)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.2)
      setDefault_Rfc(0.2)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(5011.8)
      setDefault_Koc(5011.8)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    } else if (selectedChem === "TPH, TX1105, >C28-C35") {
      setValue_S(5.8)
      setDefault_S(5.8)

      setValue_Hc(0.053)
      setDefault_Hc(0.053)

      setValue_Dair(0.1)
      setDefault_Dair(0.1)

      setValue_Dwater(0.00001)
      setDefault_Dwater(0.00001)

      setValue_DHvb(20000)
      setDefault_DHvb(20000)

      setValue_Tc(500)
      setDefault_Tc(500)

      setValue_Tb(300)
      setDefault_Tb(100)

      setValue_MW(150)
      setDefault_MW(150)

      setValue_IUR(null)
      setDefault_IUR(null)

      setValue_Rfc(0.2)
      setDefault_Rfc(0.2)

      setValue_Mut("No")
      setDefault_Mut("No")

      setValue_Koc(5011.8)
      setDefault_Koc(5011.8)

      setValue_foc(0.0007)
      setDefault_foc(0.0007)
    }
  }

  const setNull = () => {
    if (value_IUR === null || value_IUR === "0") {
      setDisabled_IUR("disabled")
      setTypeIUR("text")
      setValue_IUR("NULL")
    } else if (value_IUR !== null && value_IUR !== "NULL") {
      setDisabled_IUR("")
      setTypeIUR("number")
    }
    if (value_Rfc === null || value_Rfc === "0") {
      setDisabled_Rfc("disabled")
      setTypeRfc("text")
      setValue_Rfc("NULL")
    } else if (value_Rfc !== null && value_Rfc !== "NULL") {
      setDisabled_Rfc("")
      setTypeRfc("number")
    }
  }

  const saveData = () => {
    sessionStorage.setItem("chem", chem)
    sessionStorage.setItem("value_S", value_S)
    sessionStorage.setItem("value_Hc", value_Hc)
    sessionStorage.setItem("value_Dair", value_Dair)
    sessionStorage.setItem("value_Dwater", value_Dwater)
    sessionStorage.setItem("value_DHvb", value_DHvb)
    sessionStorage.setItem("value_Tc", value_Tc)
    sessionStorage.setItem("value_Tb", value_Tb)
    sessionStorage.setItem("value_MW", value_MW)
    sessionStorage.setItem("value_IUR", value_IUR)
    sessionStorage.setItem("value_Rfc", value_Rfc)
    sessionStorage.setItem("value_Mut", value_Mut)
    sessionStorage.setItem("value_Koc", value_Koc)
    sessionStorage.setItem("value_foc", value_foc)
    sessionStorage.setItem("default_Koc", default_Koc)
    sessionStorage.setItem("default_foc", default_foc)
    sessionStorage.setItem("check_coc", true)
  }

  useEffect(() => {
    setNull()
  }, [value_Hc])

  useEffect(() => {
    getSession()
  }, [])

  const [option, setOption] = useState("inline-block")

  return (
    <>
      <Header />
      <S.Container>
        <Menu />
        <S.EvalContent>
          <S.PagePath>
            {t("coc.pagePath.text1")} <BiChevronRight /> Input
            <BiChevronRight /> {t("coc.pagePath.text2")} <BiChevronRight />{" "}
            {t("coc.pagePath.text3")}
          </S.PagePath>
          <S.PageTitle>{t("coc.pageTitle")}</S.PageTitle>
          <S.EvalArea>
            <form action="/input/source/depth2">
              <S.EvalBox>
                <table>
                  <thead>
                    <tr>
                      <S.Td>{t("coc.pageTitle")}</S.Td>
                      <S.Td>
                        <select
                          onChange={(e) => selectChem(e)}
                          value={chem}
                          required
                        >
                          <option value="" selected style={{ display: option }}>
                            {t("coc.placeholder")}
                          </option>
                          {CHEMICAL_LIST.map((chem, index) => (
                            <option key={index} value={chem}>
                              {chem}
                            </option>
                          ))}
                        </select>
                      </S.Td>
                    </tr>
                  </thead>
                </table>
                <S.PaddingBox>
                  <h5>{t("coc.info", { chem: chem || "오염물질" })}</h5>
                  <table>
                    <tbody>
                      <tr>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <S.Td>{t("coc.table.td1")}</S.Td>
                        <S.Td>{t("coc.table.td2")}</S.Td>
                      </tr>
                      <tr>
                        <S.Td>{t("coc.table.td3")}</S.Td>
                        <S.Td>S</S.Td>
                        <S.Td>mg/L</S.Td>
                        <S.Td>
                          <input
                            value={value_S}
                            onChange={(e) => {
                              setValue_S(e.target.value)
                            }}
                            placeholder={default_S}
                            required
                            type="number"
                          />
                        </S.Td>
                      </tr>
                      <tr>
                        <S.Td>{t("coc.table.td4")}</S.Td>
                        <S.Td>Hc</S.Td>
                        <S.Td>atm-m3/mol</S.Td>
                        <S.Td>
                          <input
                            value={value_Hc}
                            onChange={(e) => setValue_Hc(e.target.value)}
                            placeholder={default_Hc}
                            required
                            type="number"
                          />
                        </S.Td>
                      </tr>
                      <tr>
                        <S.Td>{t("coc.table.td5")}</S.Td>
                        <S.Td>Dair</S.Td>
                        <S.Td>cm2/s</S.Td>
                        <S.Td>
                          <input
                            value={value_Dair}
                            onChange={(e) => setValue_Dair(e.target.value)}
                            placeholder={default_Dair}
                            required
                            type="number"
                          />
                        </S.Td>
                      </tr>
                      <tr>
                        <S.Td>{t("coc.table.td6")}</S.Td>
                        <S.Td>Dwater</S.Td>
                        <S.Td>cm2/s</S.Td>
                        <S.Td>
                          <input
                            value={value_Dwater}
                            onChange={(e) => setValue_Dwater(e.target.value)}
                            placeholder={default_Dwater}
                            required
                            type="number"
                          />
                        </S.Td>
                      </tr>
                      <tr>
                        <S.Td>{t("coc.table.td7")}</S.Td>
                        <S.Td>DHvb</S.Td>
                        <S.Td>cal/mol</S.Td>
                        <S.Td>
                          <input
                            value={value_DHvb}
                            onChange={(e) => setValue_DHvb(e.target.value)}
                            placeholder={default_DHvb}
                            required
                            type="number"
                          />
                        </S.Td>
                      </tr>
                      <tr>
                        <S.Td>{t("coc.table.td8")}</S.Td>
                        <S.Td>Tc</S.Td>
                        <S.Td>K</S.Td>
                        <S.Td>
                          <input
                            value={value_Tc}
                            onChange={(e) => setValue_Tc(e.target.value)}
                            placeholder={default_Tc}
                            required
                            type="number"
                          />
                        </S.Td>
                      </tr>
                      <tr>
                        <S.Td>{t("coc.table.td9")}</S.Td>
                        <S.Td>Tb</S.Td>
                        <S.Td>K</S.Td>
                        <S.Td>
                          <input
                            value={value_Tb}
                            onChange={(e) => setValue_Tb(e.target.value)}
                            placeholder={default_Tb}
                            required
                            type="number"
                          />
                        </S.Td>
                      </tr>
                      <tr>
                        <S.Td>{t("coc.table.td10")}</S.Td>
                        <S.Td>MW</S.Td>
                        <S.Td>g/mol</S.Td>
                        <S.Td>
                          <input
                            value={value_MW}
                            onChange={(e) => setValue_MW(e.target.value)}
                            placeholder={default_MW}
                            required
                            type="number"
                          />
                        </S.Td>
                      </tr>
                      <tr>
                        <S.Td>IUR</S.Td>
                        <S.Td></S.Td>
                        <S.Td>(ug/m3)^-1</S.Td>
                        <S.Td>
                          <input
                            value={value_IUR}
                            onChange={(e) => setValue_IUR(e.target.value)}
                            placeholder={default_IUR}
                            disabled={disabled_IUR}
                            required
                            type={typeIUR}
                          />
                        </S.Td>
                      </tr>
                      <tr>
                        <S.Td>RfC</S.Td>
                        <S.Td></S.Td>
                        <S.Td>mg/m3</S.Td>
                        <S.Td>
                          <input
                            value={value_Rfc}
                            onChange={(e) => setValue_Rfc(e.target.value)}
                            placeholder={default_Rfc}
                            disabled={disabled_Rfc}
                            required
                            type={typeRfc}
                          />
                        </S.Td>
                      </tr>
                      <tr>
                        <S.Td>Mut</S.Td>
                        <S.Td></S.Td>
                        <S.Td></S.Td>
                        <S.Td>
                          <select
                            value={value_Mut}
                            onChange={(e) => setValue_Mut(e.target.value)}
                            placeholder={default_Mut}
                            required
                          >
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                        </S.Td>
                      </tr>
                    </tbody>
                  </table>
                </S.PaddingBox>
              </S.EvalBox>
              <S.BtnAreaTwin>
                <S.PrevBtn onClick={() => navigate(-1)}>
                  {t("coc.prev")}
                </S.PrevBtn>
                <S.NextBtn onClick={saveData}>{t("coc.next")}</S.NextBtn>
              </S.BtnAreaTwin>
            </form>
          </S.EvalArea>
        </S.EvalContent>
      </S.Container>
    </>
  )
}

export default Coc
