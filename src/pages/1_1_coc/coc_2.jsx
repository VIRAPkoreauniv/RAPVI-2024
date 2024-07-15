import { useEffect, useState } from "react";
import { BiChevronRight, BiChevronUp } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header";
import Menu from "../../components/menu";
import { CHEMICAL_LIST } from "../../data/chemicals";
import * as S from "../../styles/Home.style";

const CocPoint = () => {
  const navigate = useNavigate();
  // material 1
  const [default_S_1, setDefault_S_1] = useState(0);
  const [default_Hc_1, setDefault_Hc_1] = useState(0);
  const [default_Dair_1, setDefault_Dair_1] = useState(0);
  const [default_Dwater_1, setDefault_Dwater_1] = useState(0);
  const [default_DHvb_1, setDefault_DHvb_1] = useState(0);
  const [default_Tc_1, setDefault_Tc_1] = useState(0);
  const [default_Tb_1, setDefault_Tb_1] = useState(0);
  const [default_MW_1, setDefault_MW_1] = useState(0);
  const [default_IUR_1, setDefault_IUR_1] = useState(0);
  const [default_Rfc_1, setDefault_Rfc_1] = useState(0);
  const [default_Mut_1, setDefault_Mut_1] = useState(0);
  const [default_Koc_1, setDefault_Koc_1] = useState(0);
  const [default_foc_1, setDefault_foc_1] = useState(0);

  const [value_S_1, setValue_S_1] = useState();
  const [value_Hc_1, setValue_Hc_1] = useState();
  const [value_Dair_1, setValue_Dair_1] = useState();
  const [value_Dwater_1, setValue_Dwater_1] = useState();
  const [value_DHvb_1, setValue_DHvb_1] = useState();
  const [value_Tc_1, setValue_Tc_1] = useState();
  const [value_Tb_1, setValue_Tb_1] = useState();
  const [value_MW_1, setValue_MW_1] = useState();
  const [value_IUR_1, setValue_IUR_1] = useState();
  const [value_Rfc_1, setValue_Rfc_1] = useState();
  const [value_Mut_1, setValue_Mut_1] = useState();
  const [value_Koc_1, setValue_Koc_1] = useState();
  const [value_foc_1, setValue_foc_1] = useState();

  // material 2
  const [default_S_2, setDefault_S_2] = useState(0);
  const [default_Hc_2, setDefault_Hc_2] = useState(0);
  const [default_Dair_2, setDefault_Dair_2] = useState(0);
  const [default_Dwater_2, setDefault_Dwater_2] = useState(0);
  const [default_DHvb_2, setDefault_DHvb_2] = useState(0);
  const [default_Tc_2, setDefault_Tc_2] = useState(0);
  const [default_Tb_2, setDefault_Tb_2] = useState(0);
  const [default_MW_2, setDefault_MW_2] = useState(0);
  const [default_IUR_2, setDefault_IUR_2] = useState(0);
  const [default_Rfc_2, setDefault_Rfc_2] = useState(0);
  const [default_Mut_2, setDefault_Mut_2] = useState(0);
  const [default_Koc_2, setDefault_Koc_2] = useState(0);
  const [default_foc_2, setDefault_foc_2] = useState(0);

  const [value_S_2, setValue_S_2] = useState();
  const [value_Hc_2, setValue_Hc_2] = useState();
  const [value_Dair_2, setValue_Dair_2] = useState();
  const [value_Dwater_2, setValue_Dwater_2] = useState();
  const [value_DHvb_2, setValue_DHvb_2] = useState();
  const [value_Tc_2, setValue_Tc_2] = useState();
  const [value_Tb_2, setValue_Tb_2] = useState();
  const [value_MW_2, setValue_MW_2] = useState();
  const [value_IUR_2, setValue_IUR_2] = useState();
  const [value_Rfc_2, setValue_Rfc_2] = useState();
  const [value_Mut_2, setValue_Mut_2] = useState();
  const [value_Koc_2, setValue_Koc_2] = useState();
  const [value_foc_2, setValue_foc_2] = useState();

  // material 3
  const [default_S_3, setDefault_S_3] = useState(0);
  const [default_Hc_3, setDefault_Hc_3] = useState(0);
  const [default_Dair_3, setDefault_Dair_3] = useState(0);
  const [default_Dwater_3, setDefault_Dwater_3] = useState(0);
  const [default_DHvb_3, setDefault_DHvb_3] = useState(0);
  const [default_Tc_3, setDefault_Tc_3] = useState(0);
  const [default_Tb_3, setDefault_Tb_3] = useState(0);
  const [default_MW_3, setDefault_MW_3] = useState(0);
  const [default_IUR_3, setDefault_IUR_3] = useState(0);
  const [default_Rfc_3, setDefault_Rfc_3] = useState(0);
  const [default_Mut_3, setDefault_Mut_3] = useState(0);
  const [default_Koc_3, setDefault_Koc_3] = useState(0);
  const [default_foc_3, setDefault_foc_3] = useState(0);

  const [value_S_3, setValue_S_3] = useState();
  const [value_Hc_3, setValue_Hc_3] = useState();
  const [value_Dair_3, setValue_Dair_3] = useState();
  const [value_Dwater_3, setValue_Dwater_3] = useState();
  const [value_DHvb_3, setValue_DHvb_3] = useState();
  const [value_Tc_3, setValue_Tc_3] = useState();
  const [value_Tb_3, setValue_Tb_3] = useState();
  const [value_MW_3, setValue_MW_3] = useState();
  const [value_IUR_3, setValue_IUR_3] = useState();
  const [value_Rfc_3, setValue_Rfc_3] = useState();
  const [value_Mut_3, setValue_Mut_3] = useState();
  const [value_Koc_3, setValue_Koc_3] = useState();
  const [value_foc_3, setValue_foc_3] = useState();

  // material 4
  const [default_S_4, setDefault_S_4] = useState(0);
  const [default_Hc_4, setDefault_Hc_4] = useState(0);
  const [default_Dair_4, setDefault_Dair_4] = useState(0);
  const [default_Dwater_4, setDefault_Dwater_4] = useState(0);
  const [default_DHvb_4, setDefault_DHvb_4] = useState(0);
  const [default_Tc_4, setDefault_Tc_4] = useState(0);
  const [default_Tb_4, setDefault_Tb_4] = useState(0);
  const [default_MW_4, setDefault_MW_4] = useState(0);
  const [default_IUR_4, setDefault_IUR_4] = useState(0);
  const [default_Rfc_4, setDefault_Rfc_4] = useState(0);
  const [default_Mut_4, setDefault_Mut_4] = useState(0);
  const [default_Koc_4, setDefault_Koc_4] = useState(0);
  const [default_foc_4, setDefault_foc_4] = useState(0);

  const [value_S_4, setValue_S_4] = useState();
  const [value_Hc_4, setValue_Hc_4] = useState();
  const [value_Dair_4, setValue_Dair_4] = useState();
  const [value_Dwater_4, setValue_Dwater_4] = useState();
  const [value_DHvb_4, setValue_DHvb_4] = useState();
  const [value_Tc_4, setValue_Tc_4] = useState();
  const [value_Tb_4, setValue_Tb_4] = useState();
  const [value_MW_4, setValue_MW_4] = useState();
  const [value_IUR_4, setValue_IUR_4] = useState();
  const [value_Rfc_4, setValue_Rfc_4] = useState();
  const [value_Mut_4, setValue_Mut_4] = useState();
  const [value_Koc_4, setValue_Koc_4] = useState();
  const [value_foc_4, setValue_foc_4] = useState();

  // material 5
  const [default_S_5, setDefault_S_5] = useState(0);
  const [default_Hc_5, setDefault_Hc_5] = useState(0);
  const [default_Dair_5, setDefault_Dair_5] = useState(0);
  const [default_Dwater_5, setDefault_Dwater_5] = useState(0);
  const [default_DHvb_5, setDefault_DHvb_5] = useState(0);
  const [default_Tc_5, setDefault_Tc_5] = useState(0);
  const [default_Tb_5, setDefault_Tb_5] = useState(0);
  const [default_MW_5, setDefault_MW_5] = useState(0);
  const [default_IUR_5, setDefault_IUR_5] = useState(0);
  const [default_Rfc_5, setDefault_Rfc_5] = useState(0);
  const [default_Mut_5, setDefault_Mut_5] = useState(0);
  const [default_Koc_5, setDefault_Koc_5] = useState(0);
  const [default_foc_5, setDefault_foc_5] = useState(0);

  const [value_S_5, setValue_S_5] = useState();
  const [value_Hc_5, setValue_Hc_5] = useState();
  const [value_Dair_5, setValue_Dair_5] = useState();
  const [value_Dwater_5, setValue_Dwater_5] = useState();
  const [value_DHvb_5, setValue_DHvb_5] = useState();
  const [value_Tc_5, setValue_Tc_5] = useState();
  const [value_Tb_5, setValue_Tb_5] = useState();
  const [value_MW_5, setValue_MW_5] = useState();
  const [value_IUR_5, setValue_IUR_5] = useState();
  const [value_Rfc_5, setValue_Rfc_5] = useState();
  const [value_Mut_5, setValue_Mut_5] = useState();
  const [value_Koc_5, setValue_Koc_5] = useState();
  const [value_foc_5, setValue_foc_5] = useState();

  // 안내 문구용
  const [chem1, setChem1] = useState("오염물질");
  const [chem2, setChem2] = useState("오염물질");
  const [chem3, setChem3] = useState("오염물질");
  const [chem4, setChem4] = useState("오염물질");
  const [chem5, setChem5] = useState("오염물질");

  const [materialNum, setMaterialNum] = useState(0);
  const setInput = (e) => {
    setNumOption("none");
    let num = e.target.value;
    setMaterialNum(num);

    // 바꾸면 필요없는 값 다 지우기
    if (num === "1") {
      setMaterialNum(num);
      // remove 2,3,4,5
      remove2();
      remove3();
      remove4();
      remove5();
    }
    if (num === "2") {
      setMaterialNum(num);
      // remove 3,4,5
      remove3();
      remove4();
      remove5();
    }
    if (num === "3") {
      setMaterialNum(num);
      // remove 4,5
      remove4();
      remove5();
    }
    if (num === "4") {
      setMaterialNum(num);
      // remove 5
      remove5();
    }
    if (num === "5") {
      setMaterialNum(num);
    }
  };

  // 바꾸면 필요없는 값 다 지우기 함수
  const remove2 = () => {
    setChem2();
    setValue_S_2();
    setValue_Hc_2();
    setValue_Dair_2();
    setValue_Dwater_2();
    setValue_DHvb_2();
    setValue_Tc_2();
    setValue_Tb_2();
    setValue_MW_2();
    setValue_IUR_2();
    setValue_Rfc_2();
    setValue_Mut_2();
    setValue_Koc_2();
    setValue_foc_2();
    sessionStorage.removeItem("chem_2");
    sessionStorage.removeItem("value_S_2");
    sessionStorage.removeItem("value_Hc_2");
    sessionStorage.removeItem("value_Dair_2");
    sessionStorage.removeItem("value_Dwater_2");
    sessionStorage.removeItem("value_DHvb_2");
    sessionStorage.removeItem("value_Tc_2");
    sessionStorage.removeItem("value_Tb_2");
    sessionStorage.removeItem("value_MW_2");
    sessionStorage.removeItem("value_IUR_2");
    sessionStorage.removeItem("value_Rfc_2");
    sessionStorage.removeItem("value_Mut_2");
    sessionStorage.removeItem("value_Koc_2");
    sessionStorage.removeItem("value_foc_2");
    sessionStorage.removeItem("value_Kow_2");
  };
  const remove3 = () => {
    setChem3();
    setValue_S_3();
    setValue_Hc_3();
    setValue_Dair_3();
    setValue_Dwater_3();
    setValue_DHvb_3();
    setValue_Tc_3();
    setValue_Tb_3();
    setValue_MW_3();
    setValue_IUR_3();
    setValue_Rfc_3();
    setValue_Mut_3();
    setValue_Koc_3();
    setValue_foc_3();
    sessionStorage.removeItem("chem_3");
    sessionStorage.removeItem("value_S_3");
    sessionStorage.removeItem("value_Hc_3");
    sessionStorage.removeItem("value_Dair_3");
    sessionStorage.removeItem("value_Dwater_3");
    sessionStorage.removeItem("value_DHvb_3");
    sessionStorage.removeItem("value_Tc_3");
    sessionStorage.removeItem("value_Tb_3");
    sessionStorage.removeItem("value_MW_3");
    sessionStorage.removeItem("value_IUR_3");
    sessionStorage.removeItem("value_Rfc_3");
    sessionStorage.removeItem("value_Mut_3");
    sessionStorage.removeItem("value_Koc_3");
    sessionStorage.removeItem("value_foc_3");
    sessionStorage.removeItem("value_Kow_3");
  };
  const remove4 = () => {
    setChem4();
    setValue_S_4();
    setValue_Hc_4();
    setValue_Dair_4();
    setValue_Dwater_4();
    setValue_DHvb_4();
    setValue_Tc_4();
    setValue_Tb_4();
    setValue_MW_4();
    setValue_IUR_4();
    setValue_Rfc_4();
    setValue_Mut_4();
    setValue_Koc_4();
    setValue_foc_4();
    sessionStorage.removeItem("chem_4");
    sessionStorage.removeItem("value_S_4");
    sessionStorage.removeItem("value_Hc_4");
    sessionStorage.removeItem("value_Dair_4");
    sessionStorage.removeItem("value_Dwater_4");
    sessionStorage.removeItem("value_DHvb_4");
    sessionStorage.removeItem("value_Tc_4");
    sessionStorage.removeItem("value_Tb_4");
    sessionStorage.removeItem("value_MW_4");
    sessionStorage.removeItem("value_IUR_4");
    sessionStorage.removeItem("value_Rfc_4");
    sessionStorage.removeItem("value_Mut_4");
    sessionStorage.removeItem("value_Koc_4");
    sessionStorage.removeItem("value_foc_4");
    sessionStorage.removeItem("value_Kow_4");
  };
  const remove5 = () => {
    setChem5();
    setValue_S_5();
    setValue_Hc_5();
    setValue_Dair_5();
    setValue_Dwater_5();
    setValue_DHvb_5();
    setValue_Tc_5();
    setValue_Tb_5();
    setValue_MW_5();
    setValue_IUR_5();
    setValue_Rfc_5();
    setValue_Mut_5();
    setValue_Koc_5();
    setValue_foc_5();
    sessionStorage.removeItem("chem_5");
    sessionStorage.removeItem("value_S_5");
    sessionStorage.removeItem("value_Hc_5");
    sessionStorage.removeItem("value_Dair_5");
    sessionStorage.removeItem("value_Dwater_5");
    sessionStorage.removeItem("value_DHvb_5");
    sessionStorage.removeItem("value_Tc_5");
    sessionStorage.removeItem("value_Tb_5");
    sessionStorage.removeItem("value_MW_5");
    sessionStorage.removeItem("value_IUR_5");
    sessionStorage.removeItem("value_Rfc_5");
    sessionStorage.removeItem("value_Mut_5");
    sessionStorage.removeItem("value_Koc_5");
    sessionStorage.removeItem("value_foc_5");
    sessionStorage.removeItem("value_Kow_5");
  };
  // null 이면 input disabled
  const [disabled_IUR1, setDisabled_IUR1] = useState("disabled");
  const [disabled_IUR2, setDisabled_IUR2] = useState("disabled");
  const [disabled_IUR3, setDisabled_IUR3] = useState("disabled");
  const [disabled_IUR4, setDisabled_IUR4] = useState("disabled");
  const [disabled_IUR5, setDisabled_IUR5] = useState("disabled");

  const [disabled_Rfc1, setDisabled_Rfc1] = useState("disabled");
  const [disabled_Rfc2, setDisabled_Rfc2] = useState("disabled");
  const [disabled_Rfc3, setDisabled_Rfc3] = useState("disabled");
  const [disabled_Rfc4, setDisabled_Rfc4] = useState("disabled");
  const [disabled_Rfc5, setDisabled_Rfc5] = useState("disabled");

  const [disabled_Koc1, setDisabled_Koc1] = useState("disabled");
  const [disabled_Koc2, setDisabled_Koc2] = useState("disabled");
  const [disabled_Koc3, setDisabled_Koc3] = useState("disabled");
  const [disabled_Koc4, setDisabled_Koc4] = useState("disabled");
  const [disabled_Koc5, setDisabled_Koc5] = useState("disabled");

  const [typeIUR1, setTypeIUR1] = useState("number");
  const [typeIUR2, setTypeIUR2] = useState("number");
  const [typeIUR3, setTypeIUR3] = useState("number");
  const [typeIUR4, setTypeIUR4] = useState("number");
  const [typeIUR5, setTypeIUR5] = useState("number");

  const [typeRfc1, setTypeRfc1] = useState("number");
  const [typeRfc2, setTypeRfc2] = useState("number");
  const [typeRfc3, setTypeRfc3] = useState("number");
  const [typeRfc4, setTypeRfc4] = useState("number");
  const [typeRfc5, setTypeRfc5] = useState("number");

  const [typeKoc1, setTypeKoc1] = useState("number");
  const [typeKoc2, setTypeKoc2] = useState("number");
  const [typeKoc3, setTypeKoc3] = useState("number");
  const [typeKoc4, setTypeKoc4] = useState("number");
  const [typeKoc5, setTypeKoc5] = useState("number");

  const setNull1 = () => {
    if (value_IUR_1 === null || value_IUR_1 === "0") {
      setDisabled_IUR1("disabled");
      setTypeIUR1("text");
      setValue_IUR_1("NULL");
    } else if (value_IUR_1 !== null && value_IUR_1 !== "NULL") {
      setDisabled_IUR1("");
      setTypeIUR1("number");
    }
    if (value_Rfc_1 === null || value_Rfc_1 === "0") {
      setDisabled_Rfc1("disabled");
      setTypeRfc1("text");
      setValue_Rfc_1("NULL");
    } else if (value_Rfc_1 !== null && value_Rfc_1 !== "NULL") {
      setDisabled_Rfc1("");
      setTypeRfc1("number");
    }
    if (value_Koc_1 === null || value_Koc_1 === "0") {
      setDisabled_Koc1("disabled");
      setTypeKoc1("text");
      setValue_Koc_1("NULL");
    } else if (value_Koc_1 !== null && value_Koc_1 !== "NULL") {
      setDisabled_Koc1("");
      setTypeKoc1("number");
    }
  };

  const setNull2 = () => {
    if (value_IUR_2 === null || value_IUR_2 === "0") {
      setDisabled_IUR2("disabled");
      setTypeIUR2("text");
      setValue_IUR_2("NULL");
    } else if (value_IUR_2 !== null && value_IUR_2 !== "NULL") {
      setDisabled_IUR2("");
      setTypeIUR2("number");
    }
    if (value_Rfc_2 === null || value_Rfc_2 === "0") {
      setDisabled_Rfc2("disabled");
      setTypeRfc2("text");
      setValue_Rfc_2("NULL");
    } else if (value_Rfc_2 !== null && value_Rfc_2 !== "NULL") {
      setDisabled_Rfc2("");
      setTypeRfc2("number");
    }
    if (value_Koc_2 === null || value_Koc_2 === "0") {
      setDisabled_Koc2("disabled");
      setTypeKoc2("text");
      setValue_Koc_2("NULL");
    } else if (value_Koc_2 !== null && value_Koc_2 !== "NULL") {
      setDisabled_Koc2("");
      setTypeKoc2("number");
    }
  };
  const setNull3 = () => {
    if (value_IUR_3 === null || value_IUR_3 === "0") {
      setDisabled_IUR3("disabled");
      setTypeIUR3("text");
      setValue_IUR_3("NULL");
    } else if (value_IUR_3 !== null && value_IUR_3 !== "NULL") {
      setDisabled_IUR3("");
      setTypeIUR3("number");
    }
    if (value_Rfc_3 === null || value_Rfc_3 === "0") {
      setDisabled_Rfc3("disabled");
      setTypeRfc3("text");
      setValue_Rfc_3("NULL");
    } else if (value_Rfc_3 !== null && value_Rfc_3 !== "NULL") {
      setDisabled_Rfc3("");
      setTypeRfc3("number");
    }
    if (value_Koc_3 === null || value_Koc_3 === "0") {
      setDisabled_Koc3("disabled");
      setTypeKoc3("text");
      setValue_Koc_3("NULL");
    } else if (value_Koc_3 !== null && value_Koc_3 !== "NULL") {
      setDisabled_Koc3("");
      setTypeKoc3("number");
    }
  };
  const setNull4 = () => {
    if (value_IUR_4 === null || value_IUR_4 === "0") {
      setDisabled_IUR4("disabled");
      setTypeIUR4("text");
      setValue_IUR_4("NULL");
    } else if (value_IUR_4 !== null && value_IUR_4 !== "NULL") {
      setDisabled_IUR4("");
      setTypeIUR4("number");
    }
    if (value_Rfc_4 === null || value_Rfc_4 === "0") {
      setDisabled_Rfc4("disabled");
      setTypeRfc4("text");
      setValue_Rfc_4("NULL");
    } else if (value_Rfc_4 !== null && value_Rfc_4 !== "NULL") {
      setDisabled_Rfc4("");
      setTypeRfc4("number");
    }
    if (value_Koc_4 === null || value_Koc_4 === "0") {
      setDisabled_Koc4("disabled");
      setTypeKoc4("text");
      setValue_Koc_4("NULL");
    } else if (value_Koc_4 !== null && value_Koc_4 !== "NULL") {
      setDisabled_Koc4("");
      setTypeKoc4("number");
    }
  };
  const setNull5 = () => {
    if (value_IUR_5 === null || value_IUR_5 === "0") {
      setDisabled_IUR5("disabled");
      setTypeIUR5("text");
      setValue_IUR_5("NULL");
    } else if (value_IUR_5 !== null && value_IUR_5 !== "NULL") {
      setDisabled_IUR5("");
      setTypeIUR5("number");
    }
    if (value_Rfc_5 === null || value_Rfc_5 === "0") {
      setDisabled_Rfc5("disabled");
      setTypeRfc5("text");
      setValue_Rfc_5("NULL");
    } else if (value_Rfc_5 !== null && value_Rfc_5 !== "NULL") {
      setDisabled_Rfc5("");
      setTypeRfc5("number");
    }
    if (value_Koc_5 === null || value_Koc_5 === "0") {
      setDisabled_Koc5("disabled");
      setTypeKoc5("text");
      setValue_Koc_5("NULL");
    } else if (value_Koc_5 !== null && value_Koc_5 !== "NULL") {
      setDisabled_Koc5("");
      setTypeKoc5("number");
    }
  };

  useEffect(() => {
    setNull1();
  }, [value_Hc_1]);
  useEffect(() => {
    setNull2();
  }, [value_Hc_2]);
  useEffect(() => {
    setNull3();
  }, [value_Hc_3]);
  useEffect(() => {
    setNull4();
  }, [value_Hc_4]);
  useEffect(() => {
    setNull5();
  }, [value_Hc_5]);

  // 검색창 클릭하면 해당 오염물질 값 세팅
  const selectChem1 = (e) => {
    setOption1("none");
    let selectedChem = e.target.value;
    setChem1(selectedChem);

    if (selectedChem === "Acenaphthene") {
      setValue_S_1(3.9);
      setDefault_S_1(3.9);

      setValue_Hc_1(0.000184);
      setDefault_Hc_1(0.000184);

      setValue_Dair_1(0.0506143);
      setDefault_Dair_1(0.0506143);

      setValue_Dwater_1(0.00000833);
      setDefault_Dwater_1(0.00000833);

      setValue_DHvb_1(12155);
      setDefault_DHvb_1(12155);

      setValue_Tc_1(803.15);
      setDefault_Tc_1(803.15);

      setValue_Tb_1(552);
      setDefault_Tb_1(552);

      setValue_MW_1(154.21);
      setDefault_MW_1(154.21);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(null);
      setDefault_Rfc_1(null);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(2522);
      setDefault_Koc_1(2522);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Acetaldehyde") {
      setValue_S_1(1000000);
      setDefault_S_1(1000000);

      setValue_Hc_1(0.0000667);
      setDefault_Hc_1(0.0000667);

      setValue_Dair_1(0.1277026);
      setDefault_Dair_1(0.1277026);

      setValue_Dwater_1(0.0000135);
      setDefault_Dwater_1(0.0000135);

      setValue_DHvb_1(6156.64);
      setDefault_DHvb_1(6156.64);

      setValue_Tc_1(466);
      setDefault_Tc_1(466);

      setValue_Tb_1(293.1);
      setDefault_Tb_1(293.1);

      setValue_MW_1(293.1);
      setDefault_MW_1(293.1);

      setValue_IUR_1(0.0000022);
      setDefault_IUR_1(0.0000022);

      setValue_Rfc_1(0.009);
      setDefault_Rfc_1(0.009);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(3.219);
      setDefault_Koc_1(3.219);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Acetone") {
      setValue_S_1(1000000);
      setDefault_S_1(1000000);

      setValue_Hc_1(0.000035);
      setDefault_Hc_1(0.000035);

      setValue_Dair_1(0.1059215);
      setDefault_Dair_1(0.1059215);

      setValue_Dwater_1(0.0000115);
      setDefault_Dwater_1(0.0000115);

      setValue_DHvb_1(6955);
      setDefault_DHvb_1(6955);

      setValue_Tc_1(508.1);
      setDefault_Tc_1(508.1);

      setValue_Tb_1(328.5);
      setDefault_Tb_1(328.5);

      setValue_MW_1(58.081);
      setDefault_MW_1(58.081);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(31);
      setDefault_Rfc_1(31);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(9.726);
      setDefault_Koc_1(9.726);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Acetonitrile") {
      setValue_S_1(1000000);
      setDefault_S_1(1000000);

      setValue_Hc_1(0.0000345);
      setDefault_Hc_1(0.0000345);

      setValue_Dair_1(0.1339939);
      setDefault_Dair_1(0.1339939);

      setValue_Dwater_1(0.0000141);
      setDefault_Dwater_1(0.0000141);

      setValue_DHvb_1(7110.25);
      setDefault_DHvb_1(7110.25);

      setValue_Tc_1(545.5);
      setDefault_Tc_1(545.5);

      setValue_Tb_1(332.6);
      setDefault_Tb_1(332.6);

      setValue_MW_1(41.053);
      setDefault_MW_1(41.053);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.06);
      setDefault_Rfc_1(0.06);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(13.46);
      setDefault_Koc_1(13.46);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Acetophenone") {
      setValue_S_1(6130);
      setDefault_S_1(6130);

      setValue_Hc_1(0.0000104);
      setDefault_Hc_1(0.0000104);

      setValue_Dair_1(0.0652221);
      setDefault_Dair_1(0.0652221);

      setValue_Dwater_1(0.0000087229);
      setDefault_Dwater_1(0.0000087229);

      setValue_DHvb_1(11731.5);
      setDefault_DHvb_1(11731.5);

      setValue_Tc_1(709.5);
      setDefault_Tc_1(709.5);

      setValue_Tb_1(475.0);
      setDefault_Tb_1(475.0);

      setValue_MW_1(120.15);
      setDefault_MW_1(120.15);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(null);
      setDefault_Rfc_1(null);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(98.77);
      setDefault_Koc_1(98.77);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Acrolein") {
      setValue_S_1(212000);
      setDefault_S_1(212000);

      setValue_Hc_1(0.000122);
      setDefault_Hc_1(0.000122);

      setValue_Dair_1(0.1116862);
      setDefault_Dair_1(0.1116862);

      setValue_Dwater_1(0.0000122);
      setDefault_Dwater_1(0.0000122);

      setValue_DHvb_1(6730.7658);
      setDefault_DHvb_1(6730.7658);

      setValue_Tc_1(506.0);
      setDefault_Tc_1(506.0);

      setValue_Tb_1(325.6);
      setDefault_Tb_1(325.6);

      setValue_MW_1(56.065);
      setDefault_MW_1(56.065);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.00002);
      setDefault_Rfc_1(0.00002);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(4.901);
      setDefault_Koc_1(4.901);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Acrylic Acid") {
      setValue_S_1(1000000);
      setDefault_S_1(1000000);

      setValue_Hc_1(0.00000037);
      setDefault_Hc_1(0.00000037);

      setValue_Dair_1(0.1027173);
      setDefault_Dair_1(0.1027173);

      setValue_Dwater_1(0.000012);
      setDefault_Dwater_1(0.000012);

      setValue_DHvb_1(10955.1);
      setDefault_DHvb_1(10955.1);

      setValue_Tc_1(615.15);
      setDefault_Tc_1(615.15);

      setValue_Tb_1(414.35);
      setDefault_Tb_1(414.35);

      setValue_MW_1(72.064);
      setDefault_MW_1(72.064);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.001);
      setDefault_Rfc_1(0.001);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(2.235);
      setDefault_Koc_1(2.235);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Acrylonitrile") {
      setValue_S_1(74500);
      setDefault_S_1(74500);

      setValue_Hc_1(0.000138);
      setDefault_Hc_1(0.000138);

      setValue_Dair_1(0.1136836);
      setDefault_Dair_1(0.1136836);

      setValue_Dwater_1(0.0000123);
      setDefault_Dwater_1(0.0000123);

      setValue_DHvb_1(7786);
      setDefault_DHvb_1(7786);

      setValue_Tc_1(519.0);
      setDefault_Tc_1(519.0);

      setValue_Tb_1(350.3);
      setDefault_Tb_1(350.3);

      setValue_MW_1(53.064);
      setDefault_MW_1(53.064);

      setValue_IUR_1(0.000068);
      setDefault_IUR_1(0.000068);

      setValue_Rfc_1(0.002);
      setDefault_Rfc_1(0.002);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(28.55);
      setDefault_Koc_1(28.55);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Aldrin") {
      setValue_S_1(0.017);
      setDefault_S_1(0.017);

      setValue_Hc_1(0.000044);
      setDefault_Hc_1(0.000044);

      setValue_Dair_1(0.0228116);
      setDefault_Dair_1(0.0228116);

      setValue_Dwater_1(0.0000058402);
      setDefault_Dwater_1(0.0000058402);

      setValue_DHvb_1(15000);
      setDefault_DHvb_1(15000);

      setValue_Tc_1(627.225);
      setDefault_Tc_1(627.225);

      setValue_Tb_1(418.15);
      setDefault_Tb_1(418.15);

      setValue_MW_1(364.92);
      setDefault_MW_1(364.92);

      setValue_IUR_1(0.0049);
      setDefault_IUR_1(0.0049);

      setValue_Rfc_1(null);
      setDefault_Rfc_1(null);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(437500);
      setDefault_Koc_1(437500);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Allyl Alcohol") {
      setValue_S_1(1000000);
      setDefault_S_1(1000000);

      setValue_Hc_1(0.00000499);
      setDefault_Hc_1(0.00000499);

      setValue_Dair_1(0.1097535);
      setDefault_Dair_1(0.1097535);

      setValue_Dwater_1(0.0000121);
      setDefault_Dwater_1(0.0000121);

      setValue_DHvb_1(9553.84);
      setDefault_DHvb_1(9553.84);

      setValue_Tc_1(539.8);
      setDefault_Tc_1(539.8);

      setValue_Tb_1(370.15);
      setDefault_Tb_1(370.15);

      setValue_MW_1(58.081);
      setDefault_MW_1(58.081);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.0001);
      setDefault_Rfc_1(0.0001);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(4.052);
      setDefault_Koc_1(4.052);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Allyl Chloride") {
      setValue_S_1(3370);
      setDefault_S_1(3370);

      setValue_Hc_1(0.011);
      setDefault_Hc_1(0.011);

      setValue_Dair_1(0.093611);
      setDefault_Dair_1(0.093611);

      setValue_Dwater_1(0.0000108);
      setDefault_Dwater_1(0.0000108);

      setValue_DHvb_1(6936.08);
      setDefault_DHvb_1(6936.08);

      setValue_Tc_1(514.26);
      setDefault_Tc_1(514.26);

      setValue_Tb_1(318.1);
      setDefault_Tb_1(318.1);

      setValue_MW_1(76.526);
      setDefault_MW_1(76.526);

      setValue_IUR_1(0.000006);
      setDefault_IUR_1(0.000006);

      setValue_Rfc_1(0.001);
      setDefault_Rfc_1(0.001);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(47.28);
      setDefault_Koc_1(47.28);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Ammonia") {
      setValue_S_1(482000);
      setDefault_S_1(482000);

      setValue_Hc_1(0.0000161);
      setDefault_Hc_1(0.0000161);

      setValue_Dair_1(0.2305471);
      setDefault_Dair_1(0.2305471);

      setValue_Dwater_1(0.0000223);
      setDefault_Dwater_1(0.0000223);

      setValue_DHvb_1(5581);
      setDefault_DHvb_1(5581);

      setValue_Tc_1(405.55);
      setDefault_Tc_1(405.55);

      setValue_Tb_1(239.8);
      setDefault_Tb_1(239.8);

      setValue_MW_1(17.031);
      setDefault_MW_1(17.031);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.5);
      setDefault_Rfc_1(0.5);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(0.06337);
      setDefault_Koc_1(0.06337);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Amyl Alcohol, tert-") {
      setValue_S_1(110000);
      setDefault_S_1(110000);

      setValue_Hc_1(0.0000138);
      setDefault_Hc_1(0.0000138);

      setValue_Dair_1(0.0785447);
      setDefault_Dair_1(0.0785447);

      setValue_Dwater_1(0.0000091012);
      setDefault_Dwater_1(0.0000091012);

      setValue_DHvb_1(9586.520076);
      setDefault_DHvb_1(9586.520076);

      setValue_Tc_1(545.15);
      setDefault_Tc_1(545.15);

      setValue_Tb_1(375.55);
      setDefault_Tb_1(375.55);

      setValue_MW_1(88.151);
      setDefault_MW_1(88.151);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.003);
      setDefault_Rfc_1(0.003);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(10.14);
      setDefault_Koc_1(10.14);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Anthracene") {
      setValue_S_1(0.0434);
      setDefault_S_1(0.0434);

      setValue_Hc_1(0.0000556);
      setDefault_Hc_1(0.0000556);

      setValue_Dair_1(0.0389732);
      setDefault_Dair_1(0.0389732);

      setValue_Dwater_1(0.0000078523);
      setDefault_Dwater_1(0.0000078523);

      setValue_DHvb_1(13121);
      setDefault_DHvb_1(13121);

      setValue_Tc_1(873.0);
      setDefault_Tc_1(873.0);

      setValue_Tb_1(612.9);
      setDefault_Tb_1(612.9);

      setValue_MW_1(178.24);
      setDefault_MW_1(178.24);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(null);
      setDefault_Rfc_1(null);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(7274);
      setDefault_Koc_1(7274);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Benz[a]anthracene") {
      setValue_S_1(0.0094);
      setDefault_S_1(0.0094);

      setValue_Hc_1(0.000012);
      setDefault_Hc_1(0.000012);

      setValue_Dair_1(0.0261138);
      setDefault_Dair_1(0.0261138);

      setValue_Dwater_1(0.0000067495);
      setDefault_Dwater_1(0.0000067495);

      setValue_DHvb_1(16000);
      setDefault_DHvb_1(16000);

      setValue_Tc_1(1066.125);
      setDefault_Tc_1(1066.125);

      setValue_Tb_1(710.75);
      setDefault_Tb_1(710.75);

      setValue_MW_1(228.3);
      setDefault_MW_1(228.3);

      setValue_IUR_1(0.00006);
      setDefault_IUR_1(0.00006);

      setValue_Rfc_1(null);
      setDefault_Rfc_1(null);

      setValue_Mut_1("Yes");
      setDefault_Mut_1("Yes");

      setValue_Koc_1(99700);
      setDefault_Koc_1(99700);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Benzaldehyde") {
      setValue_S_1(6950);
      setDefault_S_1(6950);

      setValue_Hc_1(0.0000267);
      setDefault_Hc_1(0.0000267);

      setValue_Dair_1(0.074393);
      setDefault_Dair_1(0.074393);

      setValue_Dwater_1(0.0000094627);
      setDefault_Dwater_1(0.0000094627);

      setValue_DHvb_1(11657.8);
      setDefault_DHvb_1(11657.8);

      setValue_Tc_1(695.0);
      setDefault_Tc_1(695.0);

      setValue_Tb_1(452.0);
      setDefault_Tb_1(452.0);

      setValue_MW_1(106.13);
      setDefault_MW_1(106.13);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(null);
      setDefault_Rfc_1(null);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(32.69);
      setDefault_Koc_1(32.69);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Benzene") {
      setValue_S_1(1790);
      setDefault_S_1(1790);

      setValue_Hc_1(0.00555);
      setDefault_Hc_1(0.00555);

      setValue_Dair_1(0.089534);
      setDefault_Dair_1(0.089534);

      setValue_Dwater_1(0.0000103);
      setDefault_Dwater_1(0.0000103);

      setValue_DHvb_1(7342);
      setDefault_DHvb_1(7342);

      setValue_Tc_1(562.16);
      setDefault_Tc_1(562.16);

      setValue_Tb_1(353);
      setDefault_Tb_1(353);

      setValue_MW_1(78.115);
      setDefault_MW_1(78.115);

      setValue_IUR_1(0.0000078);
      setDefault_IUR_1(0.0000078);

      setValue_Rfc_1(0.03);
      setDefault_Rfc_1(0.03);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(70.51);
      setDefault_Koc_1(70.51);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Benzenethiol") {
      setValue_S_1(835.0);
      setDefault_S_1(835.0);

      setValue_Hc_1(0.000335);
      setDefault_Hc_1(0.000335);

      setValue_Dair_1(0.0728564);
      setDefault_Dair_1(0.0728564);

      setValue_Dwater_1(0.0000094506);
      setDefault_Dwater_1(0.0000094506);

      setValue_DHvb_1(11359.51);
      setDefault_DHvb_1(11359.51);

      setValue_Tc_1(663.15);
      setDefault_Tc_1(663.15);

      setValue_Tb_1(442.1);
      setDefault_Tb_1(442.1);

      setValue_MW_1(110.18);
      setDefault_MW_1(110.18);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(null);
      setDefault_Rfc_1(null);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(153.7);
      setDefault_Koc_1(153.7);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Benzyl Chloride") {
      setValue_S_1(525.0);
      setDefault_S_1(525.0);

      setValue_Hc_1(0.000412);
      setDefault_Hc_1(0.000412);

      setValue_Dair_1(0.0633618);
      setDefault_Dair_1(0.0633618);

      setValue_Dwater_1(0.0000088057);
      setDefault_Dwater_1(0.0000088057);

      setValue_DHvb_1(8773.2598);
      setDefault_DHvb_1(8773.2598);

      setValue_Tc_1(685.0);
      setDefault_Tc_1(685.0);

      setValue_Tb_1(452);
      setDefault_Tb_1(452);

      setValue_MW_1(126.59);
      setDefault_MW_1(126.59);

      setValue_IUR_1(0.000049);
      setDefault_IUR_1(0.000049);

      setValue_Rfc_1(0.001);
      setDefault_Rfc_1(0.001);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(99.03);
      setDefault_Koc_1(99.03);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Biphenyl, 1,1'-") {
      setValue_S_1(7.48);
      setDefault_S_1(7.48);

      setValue_Hc_1(0.000308);
      setDefault_Hc_1(0.000308);

      setValue_Dair_1(0.0470592);
      setDefault_Dair_1(0.0470592);

      setValue_Dwater_1(0.0000075618);
      setDefault_Dwater_1(0.0000075618);

      setValue_DHvb_1(10890);
      setDefault_DHvb_1(10890);

      setValue_Tc_1(789.0);
      setDefault_Tc_1(789.0);

      setValue_Tb_1(529.1);
      setDefault_Tb_1(529.1);

      setValue_MW_1(154.21);
      setDefault_MW_1(154.21);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.0004);
      setDefault_Rfc_1(0.0004);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(3019);
      setDefault_Koc_1(3019);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Bis(2-chloro-methylethyl) ether") {
      setValue_S_1(1700);
      setDefault_S_1(1700);

      setValue_Hc_1(0.0000742);
      setDefault_Hc_1(0.0000742);

      setValue_Dair_1(0.0398891);
      setDefault_Dair_1(0.0398891);

      setValue_Dwater_1(0.0000073606);
      setDefault_Dwater_1(0.0000073606);

      setValue_DHvb_1(9694.9215);
      setDefault_DHvb_1(9694.9215);

      setValue_Tc_1(690.0);
      setDefault_Tc_1(690.0);

      setValue_Tb_1(460.0);
      setDefault_Tb_1(460.0);

      setValue_MW_1(171.07);
      setDefault_MW_1(171.07);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(null);
      setDefault_Rfc_1(null);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(160.8);
      setDefault_Koc_1(160.8);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Bis(2-chloroethyl)ether") {
      setValue_S_1(17200);
      setDefault_S_1(17200);

      setValue_Hc_1(0.000017);
      setDefault_Hc_1(0.000017);

      setValue_Dair_1(0.0567192);
      setDefault_Dair_1(0.0567192);

      setValue_Dwater_1(0.000008707);
      setDefault_Dwater_1(0.000008707);

      setValue_DHvb_1(10803);
      setDefault_DHvb_1(10803);

      setValue_Tc_1(659.79);
      setDefault_Tc_1(659.79);

      setValue_Tb_1(451.5);
      setDefault_Tb_1(451.5);

      setValue_MW_1(143.01);
      setDefault_MW_1(143.01);

      setValue_IUR_1(0.00033);
      setDefault_IUR_1(0.00033);

      setValue_Rfc_1(null);
      setDefault_Rfc_1(null);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(35.32);
      setDefault_Koc_1(35.32);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Bromo-2-chloroethane, 1-") {
      setValue_S_1(6900);
      setDefault_S_1(6900);

      setValue_Hc_1(0.000909);
      setDefault_Hc_1(0.000909);

      setValue_Dair_1(0.0659248);
      setDefault_Dair_1(0.0659248);

      setValue_Dwater_1(0.0000108);
      setDefault_Dwater_1(0.0000108);

      setValue_DHvb_1(9107.19);
      setDefault_DHvb_1(9107.19);

      setValue_Tc_1(570.0);
      setDefault_Tc_1(570.0);

      setValue_Tb_1(380.0);
      setDefault_Tb_1(380.0);

      setValue_MW_1(143.41);
      setDefault_MW_1(143.41);

      setValue_IUR_1(0.0006);
      setDefault_IUR_1(0.0006);

      setValue_Rfc_1(null);
      setDefault_Rfc_1(null);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(46.34);
      setDefault_Koc_1(46.34);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Bromobenzene") {
      setValue_S_1(446.0);
      setDefault_S_1(446.0);

      setValue_Hc_1(0.00247);
      setDefault_Hc_1(0.00247);

      setValue_Dair_1(0.0537132);
      setDefault_Dair_1(0.0537132);

      setValue_Dwater_1(0.0000093004);
      setDefault_Dwater_1(0.0000093004);

      setValue_DHvb_1(10628.64);
      setDefault_DHvb_1(10628.64);

      setValue_Tc_1(670.0);
      setDefault_Tc_1(670.0);

      setValue_Tb_1(429.0);
      setDefault_Tb_1(429.0);

      setValue_MW_1(157.01);
      setDefault_MW_1(157.01);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.06);
      setDefault_Rfc_1(0.06);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(393.2);
      setDefault_Koc_1(393.2);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Bromochloromethane") {
      setValue_S_1(16700);
      setDefault_S_1(16700);

      setValue_Hc_1(0.00146);
      setDefault_Hc_1(0.00146);

      setValue_Dair_1(0.078692);
      setDefault_Dair_1(0.078692);

      setValue_Dwater_1(0.0000122);
      setDefault_Dwater_1(0.0000122);

      setValue_DHvb_1(7167.65);
      setDefault_DHvb_1(7167.65);

      setValue_Tc_1(511.5);
      setDefault_Tc_1(511.5);

      setValue_Tb_1(341.0);
      setDefault_Tb_1(341.0);

      setValue_MW_1(129.38);
      setDefault_MW_1(129.38);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.04);
      setDefault_Rfc_1(0.04);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(16.72);
      setDefault_Koc_1(16.72);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Bromodichloromethane") {
      setValue_S_1(3032);
      setDefault_S_1(3032);

      setValue_Hc_1(0.00212);
      setDefault_Hc_1(0.00212);

      setValue_Dair_1(0.0562629);
      setDefault_Dair_1(0.0562629);

      setValue_Dwater_1(0.0000107);
      setDefault_Dwater_1(0.0000107);

      setValue_DHvb_1(7800);
      setDefault_DHvb_1(7800);

      setValue_Tc_1(585.85);
      setDefault_Tc_1(585.85);

      setValue_Tb_1(363.0);
      setDefault_Tb_1(363.0);

      setValue_MW_1(163.83);
      setDefault_MW_1(163.83);

      setValue_IUR_1(0.000037);
      setDefault_IUR_1(0.000037);

      setValue_Rfc_1(null);
      setDefault_Rfc_1(null);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(54.38);
      setDefault_Koc_1(54.38);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Bromoform") {
      setValue_S_1(3100);
      setDefault_S_1(3100);

      setValue_Hc_1(0.000535);
      setDefault_Hc_1(0.000535);

      setValue_Dair_1(0.0357324);
      setDefault_Dair_1(0.0357324);

      setValue_Dwater_1(0.0000104);
      setDefault_Dwater_1(0.0000104);

      setValue_DHvb_1(9472.63236);
      setDefault_DHvb_1(9472.63236);

      setValue_Tc_1(633.375);
      setDefault_Tc_1(633.375);

      setValue_Tb_1(422.25);
      setDefault_Tb_1(422.25);

      setValue_MW_1(252.73);
      setDefault_MW_1(252.73);

      setValue_IUR_1(0.0000011);
      setDefault_IUR_1(0.0000011);

      setValue_Rfc_1(null);
      setDefault_Rfc_1(null);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(120.9);
      setDefault_Koc_1(120.9);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Bromomethane") {
      setValue_S_1(15200);
      setDefault_S_1(15200);

      setValue_Hc_1(0.00734);
      setDefault_Hc_1(0.00734);

      setValue_Dair_1(0.1004976);
      setDefault_Dair_1(0.1004976);

      setValue_Dwater_1(0.0000135);
      setDefault_Dwater_1(0.0000135);

      setValue_DHvb_1(5714);
      setDefault_DHvb_1(5714);

      setValue_Tc_1(467.0);
      setDefault_Tc_1(467.0);

      setValue_Tb_1(276.5);
      setDefault_Tb_1(276.5);

      setValue_MW_1(94.939);
      setDefault_MW_1(94.939);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.005);
      setDefault_Rfc_1(0.005);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(10.77);
      setDefault_Koc_1(10.77);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Butadiene, 1,3-") {
      setValue_S_1(735.0);
      setDefault_S_1(735.0);

      setValue_Hc_1(0.0736);
      setDefault_Hc_1(0.0736);

      setValue_Dair_1(0.1003488);
      setDefault_Dair_1(0.1003488);

      setValue_Dwater_1(0.0000103);
      setDefault_Dwater_1(0.0000103);

      setValue_DHvb_1(5370.33);
      setDefault_DHvb_1(5370.33);

      setValue_Tc_1(425.0);
      setDefault_Tc_1(425.0);

      setValue_Tb_1(268.6);
      setDefault_Tb_1(268.6);

      setValue_MW_1(54.092);
      setDefault_MW_1(54.092);

      setValue_IUR_1(0.00003);
      setDefault_IUR_1(0.00003);

      setValue_Rfc_1(0.002);
      setDefault_Rfc_1(0.002);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(53.3);
      setDefault_Koc_1(53.3);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Butanol, N-") {
      setValue_S_1(63200);
      setDefault_S_1(63200);

      setValue_Hc_1(0.00000881);
      setDefault_Hc_1(0.00000881);

      setValue_Dair_1(0.0900387);
      setDefault_Dair_1(0.0900387);

      setValue_Dwater_1(0.0000101);
      setDefault_Dwater_1(0.0000101);

      setValue_DHvb_1(134572.18);
      setDefault_DHvb_1(134572.18);

      setValue_Tc_1(586.275);
      setDefault_Tc_1(586.275);

      setValue_Tb_1(390.85);
      setDefault_Tb_1(390.85);

      setValue_MW_1(74.124);
      setDefault_MW_1(74.124);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(null);
      setDefault_Rfc_1(null);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(10.01);
      setDefault_Koc_1(10.01);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Butyl alcohol, sec-") {
      setValue_S_1(181000);
      setDefault_S_1(181000);

      setValue_Hc_1(0.00000906);
      setDefault_Hc_1(0.00000906);

      setValue_Dair_1(0.0898848);
      setDefault_Dair_1(0.0898848);

      setValue_Dwater_1(0.0000101);
      setDefault_Dwater_1(0.0000101);

      setValue_DHvb_1(11875.42312);
      setDefault_DHvb_1(11875.42312);

      setValue_Tc_1(536.2);
      setDefault_Tc_1(536.2);

      setValue_Tb_1(372.65);
      setDefault_Tb_1(372.65);

      setValue_MW_1(74.124);
      setDefault_MW_1(74.124);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(30.0);
      setDefault_Rfc_1(30.0);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(7.097);
      setDefault_Koc_1(7.097);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Butylbenzene, n-") {
      setValue_S_1(11.8);
      setDefault_S_1(11.8);

      setValue_Hc_1(0.0159);
      setDefault_Hc_1(0.0159);

      setValue_Dair_1(0.0527732);
      setDefault_Dair_1(0.0527732);

      setValue_Dwater_1(0.0000073335);
      setDefault_Dwater_1(0.0000073335);

      setValue_DHvb_1(12267.12);
      setDefault_DHvb_1(12267.12);

      setValue_Tc_1(720);
      setDefault_Tc_1(720);

      setValue_Tb_1(456.3);
      setDefault_Tb_1(456.3);

      setValue_MW_1(134.22);
      setDefault_MW_1(134.22);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(null);
      setDefault_Rfc_1(null);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(6324);
      setDefault_Koc_1(6324);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Butylbenzene, sec-") {
      setValue_S_1(17.6);
      setDefault_S_1(17.6);

      setValue_Hc_1(0.0176);
      setDefault_Hc_1(0.0176);

      setValue_Dair_1(0.0527928);
      setDefault_Dair_1(0.0527928);

      setValue_Dwater_1(0.0000073371);
      setDefault_Dwater_1(0.0000073371);

      setValue_DHvb_1(11467.5);
      setDefault_DHvb_1(11467.5);

      setValue_Tc_1(677.25);
      setDefault_Tc_1(677.25);

      setValue_Tb_1(451.5);
      setDefault_Tb_1(451.5);

      setValue_MW_1(134.22);
      setDefault_MW_1(134.22);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(null);
      setDefault_Rfc_1(null);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(9245);
      setDefault_Koc_1(9245);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Butylbenzene, tert-") {
      setValue_S_1(29.5);
      setDefault_S_1(29.5);

      setValue_Hc_1(0.0132);
      setDefault_Hc_1(0.0132);

      setValue_Dair_1(0.0529525);
      setDefault_Dair_1(0.0529525);

      setValue_Dwater_1(0.0000073662);
      setDefault_Dwater_1(0.0000073662);

      setValue_DHvb_1(11405.35);
      setDefault_DHvb_1(11405.35);

      setValue_Tc_1(664.725);
      setDefault_Tc_1(664.725);

      setValue_Tb_1(443.15);
      setDefault_Tb_1(443.15);

      setValue_MW_1(134.22);
      setDefault_MW_1(134.22);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(null);
      setDefault_Rfc_1(null);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(3687);
      setDefault_Koc_1(3687);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Carbon Disulfide") {
      setValue_S_1(2160);
      setDefault_S_1(2160);

      setValue_Hc_1(0.0144);
      setDefault_Hc_1(0.0144);

      setValue_Dair_1(0.1064373);
      setDefault_Dair_1(0.1064373);

      setValue_Dwater_1(0.000013);
      setDefault_Dwater_1(0.000013);

      setValue_DHvb_1(6391);
      setDefault_DHvb_1(6391);

      setValue_Tc_1(552.0);
      setDefault_Tc_1(552.0);

      setValue_Tb_1(319.0);
      setDefault_Tb_1(319.0);

      setValue_MW_1(76.139);
      setDefault_MW_1(76.139);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.7);
      setDefault_Rfc_1(0.7);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(48.23);
      setDefault_Koc_1(48.23);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Carbon Tetrachloride") {
      setValue_S_1(793.0);
      setDefault_S_1(793.0);

      setValue_Hc_1(0.0276);
      setDefault_Hc_1(0.0276);

      setValue_Dair_1(0.0571435);
      setDefault_Dair_1(0.0571435);

      setValue_Dwater_1(0.0000097849);
      setDefault_Dwater_1(0.0000097849);

      setValue_DHvb_1(7127);
      setDefault_DHvb_1(7127);

      setValue_Tc_1(556.6);
      setDefault_Tc_1(556.6);

      setValue_Tb_1(349.8);
      setDefault_Tb_1(349.8);

      setValue_MW_1(153.82);
      setDefault_MW_1(153.82);

      setValue_IUR_1(0.000006);
      setDefault_IUR_1(0.000006);

      setValue_Rfc_1(0.1);
      setDefault_Rfc_1(0.1);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(285.6);
      setDefault_Koc_1(285.6);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Carbonyl Sulfide") {
      setValue_S_1(1220);
      setDefault_S_1(1220);

      setValue_Hc_1(0.61);
      setDefault_Hc_1(0.61);

      setValue_Dair_1(0.1157542);
      setDefault_Dair_1(0.1157542);

      setValue_Dwater_1(0.0000132);
      setDefault_Dwater_1(0.0000132);

      setValue_DHvb_1(4.66);
      setDefault_DHvb_1(4.66);

      setValue_Tc_1(378.15);
      setDefault_Tc_1(378.15);

      setValue_Tb_1(223.0);
      setDefault_Tb_1(223.0);

      setValue_MW_1(60.075);
      setDefault_MW_1(60.075);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.1);
      setDefault_Rfc_1(0.1);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(0.9123);
      setDefault_Koc_1(0.9123);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Chloral Hydrate") {
      setValue_S_1(793000);
      setDefault_S_1(793000);

      setValue_Hc_1(0.00000000571);
      setDefault_Hc_1(0.00000000571);

      setValue_Dair_1(0.0543991);
      setDefault_Dair_1(0.0543991);

      setValue_Dwater_1(0.0000104);
      setDefault_Dwater_1(0.0000104);

      setValue_DHvb_1(7520.55);
      setDefault_DHvb_1(7520.55);

      setValue_Tc_1(556.725);
      setDefault_Tc_1(556.725);

      setValue_Tb_1(371.15);
      setDefault_Tb_1(371.15);

      setValue_MW_1(165.4);
      setDefault_MW_1(165.4);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(null);
      setDefault_Rfc_1(null);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(4.465);
      setDefault_Koc_1(4.465);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Chlordane") {
      setValue_S_1(0.056);
      setDefault_S_1(0.056);

      setValue_Hc_1(0.0000486);
      setDefault_Hc_1(0.0000486);

      setValue_Dair_1(0.021493);
      setDefault_Dair_1(0.021493);

      setValue_Dwater_1(0.0000054477);
      setDefault_Dwater_1(0.0000054477);

      setValue_DHvb_1(14000);
      setDefault_DHvb_1(14000);

      setValue_Tc_1(672.225);
      setDefault_Tc_1(672.225);

      setValue_Tb_1(448.15);
      setDefault_Tb_1(448.15);

      setValue_MW_1(409.78);
      setDefault_MW_1(409.78);

      setValue_IUR_1(0.0001);
      setDefault_IUR_1(0.0001);

      setValue_Rfc_1(0.0007);
      setDefault_Rfc_1(0.0007);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(250000);
      setDefault_Koc_1(250000);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Chlorine") {
      setValue_S_1(6300);
      setDefault_S_1(6300);

      setValue_Hc_1(0.0117);
      setDefault_Hc_1(0.0117);

      setValue_Dair_1(0.1542088);
      setDefault_Dair_1(0.1542088);

      setValue_Dwater_1(0.0000223);
      setDefault_Dwater_1(0.0000223);

      setValue_DHvb_1(68572.6866);
      setDefault_DHvb_1(68572.6866);

      setValue_Tc_1(417.15);
      setDefault_Tc_1(417.15);

      setValue_Tb_1(239.1);
      setDefault_Tb_1(239.1);

      setValue_MW_1(70.906);
      setDefault_MW_1(70.906);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.00015);
      setDefault_Rfc_1(0.00015);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(5.462);
      setDefault_Koc_1(5.462);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Chloro,1-difluoroethane, 1-") {
      setValue_S_1(1400);
      setDefault_S_1(1400);

      setValue_Hc_1(0.0588);
      setDefault_Hc_1(0.0588);

      setValue_Dair_1(0.0803925);
      setDefault_Dair_1(0.0803925);

      setValue_Dwater_1(0.0000101);
      setDefault_Dwater_1(0.0000101);

      setValue_DHvb_1(53298.46);
      setDefault_DHvb_1(53298.46);

      setValue_Tc_1(409.85);
      setDefault_Tc_1(409.85);

      setValue_Tb_1(263.3);
      setDefault_Tb_1(263.3);

      setValue_MW_1(100.5);
      setDefault_MW_1(100.5);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(50.0);
      setDefault_Rfc_1(50.0);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(60.09);
      setDefault_Koc_1(60.09);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Chloro,3-butadiene, 2-") {
      setValue_S_1(874.9);
      setDefault_S_1(874.9);

      setValue_Hc_1(0.0561);
      setDefault_Hc_1(0.0561);

      setValue_Dair_1(0.0841489);
      setDefault_Dair_1(0.0841489);

      setValue_Dwater_1(0.00001);
      setDefault_Dwater_1(0.00001);

      setValue_DHvb_1(8074.848);
      setDefault_DHvb_1(8074.848);

      setValue_Tc_1(525);
      setDefault_Tc_1(525);

      setValue_Tb_1(332.4);
      setDefault_Tb_1(332.4);

      setValue_MW_1(88.537);
      setDefault_MW_1(88.537);

      setValue_IUR_1(0.0003);
      setDefault_IUR_1(0.0003);

      setValue_Rfc_1(0.02);
      setDefault_Rfc_1(0.02);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(156.8);
      setDefault_Koc_1(156.8);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Chlorobenzene") {
      setValue_S_1(498.0);
      setDefault_S_1(498.0);

      setValue_Hc_1(0.00311);
      setDefault_Hc_1(0.00311);

      setValue_Dair_1(0.0721306);
      setDefault_Dair_1(0.0721306);

      setValue_Dwater_1(0.0000094765);
      setDefault_Dwater_1(0.0000094765);

      setValue_DHvb_1(8410);
      setDefault_DHvb_1(8410);

      setValue_Tc_1(632.4);
      setDefault_Tc_1(632.4);

      setValue_Tb_1(404.7);
      setDefault_Tb_1(404.7);

      setValue_MW_1(112.56);
      setDefault_MW_1(112.56);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.05);
      setDefault_Rfc_1(0.05);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(291.4);
      setDefault_Koc_1(291.4);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Chlorobutane, 1-") {
      setValue_S_1(1100);
      setDefault_S_1(1100);

      setValue_Hc_1(0.0167);
      setDefault_Hc_1(0.0167);

      setValue_Dair_1(0.0784137);
      setDefault_Dair_1(0.0784137);

      setValue_Dwater_1(0.0000093275);
      setDefault_Dwater_1(0.0000093275);

      setValue_DHvb_1(7263.21);
      setDefault_DHvb_1(7263.21);

      setValue_Tc_1(542.0);
      setDefault_Tc_1(542.0);

      setValue_Tb_1(351.6);
      setDefault_Tb_1(351.6);

      setValue_MW_1(92.569);
      setDefault_MW_1(92.569);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(null);
      setDefault_Rfc_1(null);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(195.4);
      setDefault_Koc_1(195.4);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Chlorodifluoromethane") {
      setValue_S_1(2770);
      setDefault_S_1(2770);

      setValue_Hc_1(0.0406);
      setDefault_Hc_1(0.0406);

      setValue_Dair_1(0.1033788);
      setDefault_Dair_1(0.1033788);

      setValue_Dwater_1(0.0000133);
      setDefault_Dwater_1(0.0000133);

      setValue_DHvb_1(4835.92122);
      setDefault_DHvb_1(4835.92122);

      setValue_Tc_1(369.3);
      setDefault_Tc_1(369.3);

      setValue_Tb_1(232.3);
      setDefault_Tb_1(232.3);

      setValue_MW_1(86.469);
      setDefault_MW_1(86.469);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(50.0);
      setDefault_Rfc_1(50.0);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(8.648);
      setDefault_Koc_1(8.648);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Chloroethanol, 2-") {
      setValue_S_1(1000000);
      setDefault_S_1(1000000);

      setValue_Hc_1(0.000000761);
      setDefault_Hc_1(0.000000761);

      setValue_Dair_1(0.0999813);
      setDefault_Dair_1(0.0999813);

      setValue_Dwater_1(0.0000122);
      setDefault_Dwater_1(0.0000122);

      setValue_DHvb_1(9956.97);
      setDefault_DHvb_1(9956.97);

      setValue_Tc_1(602.625);
      setDefault_Tc_1(602.625);

      setValue_Tb_1(401.75);
      setDefault_Tb_1(401.75);

      setValue_MW_1(80.515);
      setDefault_MW_1(80.515);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(null);
      setDefault_Rfc_1(null);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(3.39);
      setDefault_Koc_1(3.39);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Chloroform") {
      setValue_S_1(7950);
      setDefault_S_1(7950);

      setValue_Hc_1(0.00367);
      setDefault_Hc_1(0.00367);

      setValue_Dair_1(0.0769197);
      setDefault_Dair_1(0.0769197);

      setValue_Dwater_1(0.0000109);
      setDefault_Dwater_1(0.0000109);

      setValue_DHvb_1(6988);
      setDefault_DHvb_1(6988);

      setValue_Tc_1(536.4);
      setDefault_Tc_1(536.4);

      setValue_Tb_1(334.1);
      setDefault_Tb_1(334.1);

      setValue_MW_1(119.38);
      setDefault_MW_1(119.38);

      setValue_IUR_1(0.000023);
      setDefault_IUR_1(0.000023);

      setValue_Rfc_1(0.098);
      setDefault_Rfc_1(0.098);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(51.21);
      setDefault_Koc_1(51.21);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Chloromethane") {
      setValue_S_1(5320);
      setDefault_S_1(5320);

      setValue_Hc_1(0.00882);
      setDefault_Hc_1(0.00882);

      setValue_Dair_1(0.1239651);
      setDefault_Dair_1(0.1239651);

      setValue_Dwater_1(0.0000136);
      setDefault_Dwater_1(0.0000136);

      setValue_DHvb_1(5114.6);
      setDefault_DHvb_1(5114.6);

      setValue_Tc_1(416.25);
      setDefault_Tc_1(416.25);

      setValue_Tb_1(249.0);
      setDefault_Tb_1(249.0);

      setValue_MW_1(50.488);
      setDefault_MW_1(50.488);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.09);
      setDefault_Rfc_1(0.09);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(6.157);
      setDefault_Koc_1(6.157);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Chloronaphthalene, Beta-") {
      setValue_S_1(11.7);
      setDefault_S_1(11.7);

      setValue_Hc_1(0.00032);
      setDefault_Hc_1(0.00032);

      setValue_Dair_1(0.0446914);
      setDefault_Dair_1(0.0446914);

      setValue_Dwater_1(0.0000077301);
      setDefault_Dwater_1(0.0000077301);

      setValue_DHvb_1(11311.936);
      setDefault_DHvb_1(11311.936);

      setValue_Tc_1(793.5);
      setDefault_Tc_1(793.5);

      setValue_Tb_1(529.0);
      setDefault_Tb_1(529.0);

      setValue_MW_1(162.62);
      setDefault_MW_1(162.62);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(2423);
      setDefault_Rfc_1(2423);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(null);
      setDefault_Koc_1(null);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Chlorophenol, 2-") {
      setValue_S_1(11300);
      setDefault_S_1(11300);

      setValue_Hc_1(0.0000112);
      setDefault_Hc_1(0.0000112);

      setValue_Dair_1(0.0661175);
      setDefault_Dair_1(0.0661175);

      setValue_Dwater_1(0.0000094784);
      setDefault_Dwater_1(0.0000094784);

      setValue_DHvb_1(9572);
      setDefault_DHvb_1(9572);

      setValue_Tc_1(675);
      setDefault_Tc_1(675);

      setValue_Tb_1(447.9);
      setDefault_Tb_1(447.9);

      setValue_MW_1(128.56);
      setDefault_MW_1(128.56);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(null);
      setDefault_Rfc_1(null);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(191.1);
      setDefault_Koc_1(191.1);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Chlorotoluene, o-") {
      setValue_S_1(374.0);
      setDefault_S_1(374.0);

      setValue_Hc_1(0.00357);
      setDefault_Hc_1(0.00357);

      setValue_Dair_1(0.0629025);
      setDefault_Dair_1(0.0629025);

      setValue_Dwater_1(0.0000087194);
      setDefault_Dwater_1(0.0000087194);

      setValue_DHvb_1(9950.5);
      setDefault_DHvb_1(9950.5);

      setValue_Tc_1(654.1);
      setDefault_Tc_1(654.1);

      setValue_Tb_1(432.0);
      setDefault_Tb_1(432.0);

      setValue_MW_1(126.59);
      setDefault_MW_1(126.59);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(null);
      setDefault_Rfc_1(null);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(928.6);
      setDefault_Koc_1(928.6);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Chlorotoluene, p-") {
      setValue_S_1(106.0);
      setDefault_S_1(106.0);

      setValue_Hc_1(0.00438);
      setDefault_Hc_1(0.00438);

      setValue_Dair_1(0.062571);
      setDefault_Dair_1(0.062571);

      setValue_Dwater_1(0.0000086574);
      setDefault_Dwater_1(0.0000086574);

      setValue_DHvb_1(10144.98);
      setDefault_DHvb_1(10144.98);

      setValue_Tc_1(658.7);
      setDefault_Tc_1(658.7);

      setValue_Tb_1(435.4);
      setDefault_Tb_1(435.4);

      setValue_MW_1(126.59);
      setDefault_MW_1(126.59);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(null);
      setDefault_Rfc_1(null);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(775.7);
      setDefault_Koc_1(775.7);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Crotonaldehyde, trans-") {
      setValue_S_1(150000);
      setDefault_S_1(150000);

      setValue_Hc_1(0.0000194);
      setDefault_Hc_1(0.0000194);

      setValue_Dair_1(0.0959235);
      setDefault_Dair_1(0.0959235);

      setValue_Dwater_1(0.0000108);
      setDefault_Dwater_1(0.0000108);

      setValue_DHvb_1(8.62);
      setDefault_DHvb_1(8.62);

      setValue_Tc_1(568.0);
      setDefault_Tc_1(568.0);

      setValue_Tb_1(377.0);
      setDefault_Tb_1(377.0);

      setValue_MW_1(70.092);
      setDefault_MW_1(70.092);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(null);
      setDefault_Rfc_1(null);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(10.66);
      setDefault_Koc_1(10.66);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Cumene") {
      setValue_S_1(61.3);
      setDefault_S_1(61.3);

      setValue_Hc_1(7);
      setDefault_Hc_1(7);

      setValue_Dair_1(0.0603044);
      setDefault_Dair_1(0.0603044);

      setValue_Dwater_1(0.0000078566);
      setDefault_Dwater_1(0.0000078566);

      setValue_DHvb_1(10335.3);
      setDefault_DHvb_1(10335.3);

      setValue_Tc_1(631.1);
      setDefault_Tc_1(631.1);

      setValue_Tb_1(425.4);
      setDefault_Tb_1(425.4);

      setValue_MW_1(120.2);
      setDefault_MW_1(120.2);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.4);
      setDefault_Rfc_1(0.4);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(1500);
      setDefault_Koc_1(1500);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Cyanogen") {
      setValue_S_1(8000);
      setDefault_S_1(8000);

      setValue_Hc_1(0.0054);
      setDefault_Hc_1(0.0054);

      setValue_Dair_1(0.1237533);
      setDefault_Dair_1(0.1237533);

      setValue_Dwater_1(0.0000138);
      setDefault_Dwater_1(0.0000138);

      setValue_DHvb_1(5778);
      setDefault_DHvb_1(5778);

      setValue_Tc_1(401.3);
      setDefault_Tc_1(401.3);

      setValue_Tb_1(251.9);
      setDefault_Tb_1(251.9);

      setValue_MW_1(52.036);
      setDefault_MW_1(52.036);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(null);
      setDefault_Rfc_1(null);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(56);
      setDefault_Koc_1(56);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Cyanogen Chloride") {
      setValue_S_1(60000);
      setDefault_S_1(60000);

      setValue_Hc_1(0.0019412);
      setDefault_Hc_1(0.0019412);

      setValue_Dair_1(0.1207454);
      setDefault_Dair_1(0.1207454);

      setValue_Dwater_1(0.0000142);
      setDefault_Dwater_1(0.0000142);

      setValue_DHvb_1(6389.13);
      setDefault_DHvb_1(6389.13);

      setValue_Tc_1(429.0);
      setDefault_Tc_1(429.0);

      setValue_Tb_1(286.0);
      setDefault_Tb_1(286.0);

      setValue_MW_1(61.471);
      setDefault_MW_1(61.471);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(null);
      setDefault_Rfc_1(null);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(12.8);
      setDefault_Koc_1(12.8);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Cyclohexane") {
      setValue_S_1(55.0);
      setDefault_S_1(55.0);

      setValue_Hc_1(0.15);
      setDefault_Hc_1(0.15);

      setValue_Dair_1(0.0799729);
      setDefault_Dair_1(0.0799729);

      setValue_Dwater_1(0.0000091077);
      setDefault_Dwater_1(0.0000091077);

      setValue_DHvb_1(7153.6);
      setDefault_DHvb_1(7153.6);

      setValue_Tc_1(553.4);
      setDefault_Tc_1(553.4);

      setValue_Tb_1(353.7);
      setDefault_Tb_1(353.7);

      setValue_MW_1(84.163);
      setDefault_MW_1(84.163);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(6.0);
      setDefault_Rfc_1(6.0);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(966.4);
      setDefault_Koc_1(966.4);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Cyclohexanone") {
      setValue_S_1(25000);
      setDefault_S_1(25000);

      setValue_Hc_1(0.000009);
      setDefault_Hc_1(0.000009);

      setValue_Dair_1(0.0767599);
      setDefault_Dair_1(0.0767599);

      setValue_Dwater_1(0.0000093795);
      setDefault_Dwater_1(0.0000093795);

      setValue_DHvb_1(10762.40076);
      setDefault_DHvb_1(10762.40076);

      setValue_Tc_1(629.0);
      setDefault_Tc_1(629.0);

      setValue_Tb_1(428.55);
      setDefault_Tb_1(428.55);

      setValue_MW_1(98.146);
      setDefault_MW_1(98.146);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.7);
      setDefault_Rfc_1(0.7);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(37.05);
      setDefault_Koc_1(37.05);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Cyclohexene") {
      setValue_S_1(213.0);
      setDefault_S_1(213.0);

      setValue_Hc_1(0.0455);
      setDefault_Hc_1(0.0455);

      setValue_Dair_1(0.0831876);
      setDefault_Dair_1(0.0831876);

      setValue_Dwater_1(0.0000094975);
      setDefault_Dwater_1(0.0000094975);

      setValue_DHvb_1(7279.94);
      setDefault_DHvb_1(7279.94);

      setValue_Tc_1(560.55);
      setDefault_Tc_1(560.55);

      setValue_Tb_1(356.15);
      setDefault_Tb_1(356.15);

      setValue_MW_1(82.147);
      setDefault_MW_1(82.147);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(1.0);
      setDefault_Rfc_1(1.0);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(303.2);
      setDefault_Koc_1(303.2);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Cyclohexylamine") {
      setValue_S_1(1000000);
      setDefault_S_1(1000000);

      setValue_Hc_1(0.00000416);
      setDefault_Hc_1(0.00000416);

      setValue_Dair_1(0.0712945);
      setDefault_Dair_1(0.0712945);

      setValue_Dwater_1(0.0000085394);
      setDefault_Dwater_1(0.0000085394);

      setValue_DHvb_1(10444.55);
      setDefault_DHvb_1(10444.55);

      setValue_Tc_1(610.725);
      setDefault_Tc_1(610.725);

      setValue_Tb_1(407.15);
      setDefault_Tb_1(407.15);

      setValue_MW_1(99.177);
      setDefault_MW_1(99.177);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(null);
      setDefault_Rfc_1(null);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(24.64);
      setDefault_Koc_1(24.64);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "DDE, p,p'-") {
      setValue_S_1(0.04);
      setDefault_S_1(0.04);

      setValue_Hc_1(0.0000416);
      setDefault_Hc_1(0.0000416);

      setValue_Dair_1(0.0229959);
      setDefault_Dair_1(0.0229959);

      setValue_Dwater_1(0.0000058592);
      setDefault_Dwater_1(0.0000058592);

      setValue_DHvb_1(15000);
      setDefault_DHvb_1(15000);

      setValue_Tc_1(913.725);
      setDefault_Tc_1(913.725);

      setValue_Tb_1(609.15);
      setDefault_Tb_1(609.15);

      setValue_MW_1(318.03);
      setDefault_MW_1(318.03);

      setValue_IUR_1(0.000097);
      setDefault_IUR_1(0.000097);

      setValue_Rfc_1(null);
      setDefault_Rfc_1(null);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(446300);
      setDefault_Koc_1(446300);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Dibenzofuran") {
      setValue_S_1(3.1);
      setDefault_S_1(3.1);

      setValue_Hc_1(0.000213);
      setDefault_Hc_1(0.000213);

      setValue_Dair_1(0.0650663);
      setDefault_Dair_1(0.0650663);

      setValue_Dwater_1(0.0000073773);
      setDefault_Dwater_1(0.0000073773);

      setValue_DHvb_1(66400);
      setDefault_DHvb_1(66400);

      setValue_Tc_1(824.0);
      setDefault_Tc_1(824.0);

      setValue_Tb_1(560.0);
      setDefault_Tb_1(560.0);

      setValue_MW_1(168.2);
      setDefault_MW_1(168.2);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(null);
      setDefault_Rfc_1(null);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(3761);
      setDefault_Koc_1(3761);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Dibenzothiophene") {
      setValue_S_1(1.47);
      setDefault_S_1(1.47);

      setValue_Hc_1(0.0000338);
      setDefault_Hc_1(0.0000338);

      setValue_Dair_1(0.0355475);
      setDefault_Dair_1(0.0355475);

      setValue_Dwater_1(0.0000075958);
      setDefault_Dwater_1(0.0000075958);

      setValue_DHvb_1(22299.23518);
      setDefault_DHvb_1(22299.23518);

      setValue_Tc_1(908.475);
      setDefault_Tc_1(908.475);

      setValue_Tb_1(605.65);
      setDefault_Tb_1(605.65);

      setValue_MW_1(184.26);
      setDefault_MW_1(184.26);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(null);
      setDefault_Rfc_1(null);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(6324);
      setDefault_Koc_1(6324);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Dibromo-3-chloropropane, 1,2-") {
      setValue_S_1(1230);
      setDefault_S_1(1230);

      setValue_Hc_1(0.000147);
      setDefault_Hc_1(0.000147);

      setValue_Dair_1(0.0321351);
      setDefault_Dair_1(0.0321351);

      setValue_Dwater_1(0.0000089048);
      setDefault_Dwater_1(0.0000089048);

      setValue_DHvb_1(9960.045);
      setDefault_DHvb_1(9960.045);

      setValue_Tc_1(703.5);
      setDefault_Tc_1(703.5);

      setValue_Tb_1(469.0);
      setDefault_Tb_1(469.0);

      setValue_MW_1(236.33);
      setDefault_MW_1(236.33);

      setValue_IUR_1(0.006);
      setDefault_IUR_1(0.006);

      setValue_Rfc_1(0.0002);
      setDefault_Rfc_1(0.0002);

      setValue_Mut_1("Yes");
      setDefault_Mut_1("Yes");

      setValue_Koc_1(370.3);
      setDefault_Koc_1(370.3);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Dibromochloromethane") {
      setValue_S_1(2700);
      setDefault_S_1(2700);

      setValue_Hc_1(0.000783);
      setDefault_Hc_1(0.000783);

      setValue_Dair_1(0.0366356);
      setDefault_Dair_1(0.0366356);

      setValue_Dwater_1(0.0000106);
      setDefault_Dwater_1(0.0000106);

      setValue_DHvb_1(5900);
      setDefault_DHvb_1(5900);

      setValue_Tc_1(678.2);
      setDefault_Tc_1(678.2);

      setValue_Tb_1(393.0);
      setDefault_Tb_1(393.0);

      setValue_MW_1(208.28);
      setDefault_MW_1(208.28);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(null);
      setDefault_Rfc_1(null);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(74.86);
      setDefault_Koc_1(74.86);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Dibromoethane, 1,2-") {
      setValue_S_1(3910);
      setDefault_S_1(3910);

      setValue_Hc_1(0.00065);
      setDefault_Hc_1(0.00065);

      setValue_Dair_1(0.0430348);
      setDefault_Dair_1(0.0430348);

      setValue_Dwater_1(0.0000104);
      setDefault_Dwater_1(0.0000104);

      setValue_DHvb_1(8310.03);
      setDefault_DHvb_1(8310.03);

      setValue_Tc_1(583.0);
      setDefault_Tc_1(583.0);

      setValue_Tb_1(404.6);
      setDefault_Tb_1(404.6);

      setValue_MW_1(187.86);
      setDefault_MW_1(187.86);

      setValue_IUR_1(0.0006);
      setDefault_IUR_1(0.0006);

      setValue_Rfc_1(0.009);
      setDefault_Rfc_1(0.009);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(50.2);
      setDefault_Koc_1(50.2);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Dibromomethane (Methylene Bromide)") {
      setValue_S_1(11900);
      setDefault_S_1(11900);

      setValue_Hc_1(0.000822);
      setDefault_Hc_1(0.000822);

      setValue_Dair_1(0.0551373);
      setDefault_Dair_1(0.0551373);

      setValue_Dwater_1(0.0000119);
      setDefault_Dwater_1(0.0000119);

      setValue_DHvb_1(7867.88);
      setDefault_DHvb_1(7867.88);

      setValue_Tc_1(583.0);
      setDefault_Tc_1(583.0);

      setValue_Tb_1(370.0);
      setDefault_Tb_1(370.0);

      setValue_MW_1(173.84);
      setDefault_MW_1(173.84);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.004);
      setDefault_Rfc_1(0.004);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(29.86);
      setDefault_Koc_1(29.86);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Dichloro-2-butene, cis,4-") {
      setValue_S_1(580.2);
      setDefault_S_1(580.2);

      setValue_Hc_1(0.000664);
      setDefault_Hc_1(0.000664);

      setValue_Dair_1(0.0665047);
      setDefault_Dair_1(0.0665047);

      setValue_Dwater_1(0.00000929);
      setDefault_Dwater_1(0.00000929);

      setValue_DHvb_1(9125);
      setDefault_DHvb_1(9125);

      setValue_Tc_1(640.0);
      setDefault_Tc_1(640.0);

      setValue_Tb_1(425.5);
      setDefault_Tb_1(425.5);

      setValue_MW_1(125);
      setDefault_MW_1(125);

      setValue_IUR_1(0.0042);
      setDefault_IUR_1(0.0042);

      setValue_Rfc_1(null);
      setDefault_Rfc_1(null);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(180.4);
      setDefault_Koc_1(180.4);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Dichloro-2-butene, trans,4-") {
      setValue_S_1(850.0);
      setDefault_S_1(850.0);

      setValue_Hc_1(0.000664);
      setDefault_Hc_1(0.000664);

      setValue_Dair_1(0.0663818);
      setDefault_Dair_1(0.0663818);

      setValue_Dwater_1(0.0000092665);
      setDefault_Dwater_1(0.0000092665);

      setValue_DHvb_1(9125);
      setDefault_DHvb_1(9125);

      setValue_Tc_1(646.0);
      setDefault_Tc_1(646.0);

      setValue_Tb_1(428.4);
      setDefault_Tb_1(428.4);

      setValue_MW_1(125);
      setDefault_MW_1(125);

      setValue_IUR_1(0.0042);
      setDefault_IUR_1(0.0042);

      setValue_Rfc_1(null);
      setDefault_Rfc_1(null);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(180.4);
      setDefault_Koc_1(180.4);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Dichlorobenzene, 1,2-") {
      setValue_S_1(156.0);
      setDefault_S_1(156.0);

      setValue_Hc_1(0.00192);
      setDefault_Hc_1(0.00192);

      setValue_Dair_1(0.0561703);
      setDefault_Dair_1(0.0561703);

      setValue_Dwater_1(0.0000089213);
      setDefault_Dwater_1(0.0000089213);

      setValue_DHvb_1(9700);
      setDefault_DHvb_1(9700);

      setValue_Tc_1(705.0);
      setDefault_Tc_1(705.0);

      setValue_Tb_1(453.0);
      setDefault_Tb_1(453.0);

      setValue_MW_1(147);
      setDefault_MW_1(147);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.2);
      setDefault_Rfc_1(0.2);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(947.3);
      setDefault_Koc_1(947.3);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Dichlorobenzene, 1,4-") {
      setValue_S_1(81.3);
      setDefault_S_1(81.3);

      setValue_Hc_1(0.00241);
      setDefault_Hc_1(0.00241);

      setValue_Dair_1(0.0550429);
      setDefault_Dair_1(0.0550429);

      setValue_Dwater_1(0.0000086797);
      setDefault_Dwater_1(0.0000086797);

      setValue_DHvb_1(9271);
      setDefault_DHvb_1(9271);

      setValue_Tc_1(684.75);
      setDefault_Tc_1(684.75);

      setValue_Tb_1(447.0);
      setDefault_Tb_1(447.0);

      setValue_MW_1(147);
      setDefault_MW_1(147);

      setValue_IUR_1(0.000011);
      setDefault_IUR_1(0.000011);

      setValue_Rfc_1(0.8);
      setDefault_Rfc_1(0.8);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(966.4);
      setDefault_Koc_1(966.4);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Dichlorodifluoromethane") {
      setValue_S_1(280);
      setDefault_S_1(280);

      setValue_Hc_1(0.343);
      setDefault_Hc_1(0.343);

      setValue_Dair_1(0.0760293);
      setDefault_Dair_1(0.0760293);

      setValue_Dwater_1(0.0000108);
      setDefault_Dwater_1(0.0000108);

      setValue_DHvb_1(9421.36088);
      setDefault_DHvb_1(9421.36088);

      setValue_Tc_1(384.95);
      setDefault_Tc_1(384.95);

      setValue_Tb_1(243.2);
      setDefault_Tb_1(243.2);

      setValue_MW_1(120.91);
      setDefault_MW_1(120.91);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.1);
      setDefault_Rfc_1(0.1);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(74.86);
      setDefault_Koc_1(74.86);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Dichloroethane, 1,1-") {
      setValue_S_1(5040);
      setDefault_S_1(5040);

      setValue_Hc_1(0.00562);
      setDefault_Hc_1(0.00562);

      setValue_Dair_1(0.0836446);
      setDefault_Dair_1(0.0836446);

      setValue_Dwater_1(0.0000106);
      setDefault_Dwater_1(0.0000106);

      setValue_DHvb_1(6895);
      setDefault_DHvb_1(6895);

      setValue_Tc_1(523.0);
      setDefault_Tc_1(523.0);

      setValue_Tb_1(330.4);
      setDefault_Tb_1(330.4);

      setValue_MW_1(98.96);
      setDefault_MW_1(98.96);

      setValue_IUR_1(0.0000016);
      setDefault_IUR_1(0.0000016);

      setValue_Rfc_1(null);
      setDefault_Rfc_1(null);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(35.74);
      setDefault_Koc_1(35.74);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Dichloroethane, 1,2-") {
      setValue_S_1(8600);
      setDefault_S_1(8600);

      setValue_Hc_1(0.00118);
      setDefault_Hc_1(0.00118);

      setValue_Dair_1(0.0857221);
      setDefault_Dair_1(0.0857221);

      setValue_Dwater_1(0.000011);
      setDefault_Dwater_1(0.000011);

      setValue_DHvb_1(7643);
      setDefault_DHvb_1(7643);

      setValue_Tc_1(561.0);
      setDefault_Tc_1(561.0);

      setValue_Tb_1(356.5);
      setDefault_Tb_1(356.5);

      setValue_MW_1(98.96);
      setDefault_MW_1(98.96);

      setValue_IUR_1(0.000026);
      setDefault_IUR_1(0.000026);

      setValue_Rfc_1(0.007);
      setDefault_Rfc_1(0.007);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(19.23);
      setDefault_Koc_1(19.23);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Dichloroethylene, 1,1-") {
      setValue_S_1(2420);
      setDefault_S_1(2420);

      setValue_Hc_1(0.0261);
      setDefault_Hc_1(0.0261);

      setValue_Dair_1(0.0863107);
      setDefault_Dair_1(0.0863107);

      setValue_Dwater_1(0.000011);
      setDefault_Dwater_1(0.000011);

      setValue_DHvb_1(6247);
      setDefault_DHvb_1(6247);

      setValue_Tc_1(576.05);
      setDefault_Tc_1(576.05);

      setValue_Tb_1(304.6);
      setDefault_Tb_1(304.6);

      setValue_MW_1(96.944);
      setDefault_MW_1(96.944);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.2);
      setDefault_Rfc_1(0.2);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(70.51);
      setDefault_Koc_1(70.51);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Dichloroethylene, 1,2-cis-") {
      setValue_S_1(6410);
      setDefault_S_1(6410);

      setValue_Hc_1(0.00408);
      setDefault_Hc_1(0.00408);

      setValue_Dair_1(0.0884056);
      setDefault_Dair_1(0.0884056);

      setValue_Dwater_1(0.0000113);
      setDefault_Dwater_1(0.0000113);

      setValue_DHvb_1(7192);
      setDefault_DHvb_1(7192);

      setValue_Tc_1(544.0);
      setDefault_Tc_1(544.0);

      setValue_Tb_1(328.0);
      setDefault_Tb_1(328.0);

      setValue_MW_1(96.944);
      setDefault_MW_1(96.944);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(null);
      setDefault_Rfc_1(null);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(54.38);
      setDefault_Koc_1(54.38);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Dichloroethylene, 1,2-trans-") {
      setValue_S_1(4520);
      setDefault_S_1(4520);

      setValue_Hc_1(0.00938);
      setDefault_Hc_1(0.00938);

      setValue_Dair_1(0.0876094);
      setDefault_Dair_1(0.0876094);

      setValue_Dwater_1(0.0000112);
      setDefault_Dwater_1(0.0000112);

      setValue_DHvb_1(6717);
      setDefault_DHvb_1(6717);

      setValue_Tc_1(516.5);
      setDefault_Tc_1(516.5);

      setValue_Tb_1(328.0);
      setDefault_Tb_1(328.0);

      setValue_MW_1(96.944);
      setDefault_MW_1(96.944);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(null);
      setDefault_Rfc_1(null);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(54.39);
      setDefault_Koc_1(54.38);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Dichloropropane, 1,2-") {
      setValue_S_1(2800);
      setDefault_S_1(2800);

      setValue_Hc_1(0.00282);
      setDefault_Hc_1(0.00282);

      setValue_Dair_1(0.0733402);
      setDefault_Dair_1(0.0733402);

      setValue_Dwater_1(0.0000097252);
      setDefault_Dwater_1(0.0000097252);

      setValue_DHvb_1(7590);
      setDefault_DHvb_1(7590);

      setValue_Tc_1(572.0);
      setDefault_Tc_1(572.0);

      setValue_Tb_1(368.5);
      setDefault_Tb_1(368.5);

      setValue_MW_1(112.99);
      setDefault_MW_1(112.99);

      setValue_IUR_1(0.0000037);
      setDefault_IUR_1(0.0000037);

      setValue_Rfc_1(0.004);
      setDefault_Rfc_1(0.004);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(52.24);
      setDefault_Koc_1(52.24);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Dichloropropane, 1,3-") {
      setValue_S_1(2750);
      setDefault_S_1(2750);

      setValue_Hc_1(0.000976);
      setDefault_Hc_1(0.000976);

      setValue_Dair_1(0.0738738);
      setDefault_Dair_1(0.0738738);

      setValue_Dwater_1(0.000009823);
      setDefault_Dwater_1(0.000009823);

      setValue_DHvb_1(8102.51);
      setDefault_DHvb_1(8102.51);

      setValue_Tc_1(590.85);
      setDefault_Tc_1(590.85);

      setValue_Tb_1(393.9);
      setDefault_Tb_1(393.9);

      setValue_MW_1(112.99);
      setDefault_MW_1(112.99);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(null);
      setDefault_Rfc_1(null);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(54.38);
      setDefault_Koc_1(54.38);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Dichloropropene, 1,3-") {
      setValue_S_1(2800);
      setDefault_S_1(2800);

      setValue_Hc_1(0.00355);
      setDefault_Hc_1(0.00355);

      setValue_Dair_1(0.0762725);
      setDefault_Dair_1(0.0762725);

      setValue_Dwater_1(0.0000101);
      setDefault_Dwater_1(0.0000101);

      setValue_DHvb_1(7900);
      setDefault_DHvb_1(7900);

      setValue_Tc_1(587.38);
      setDefault_Tc_1(587.38);

      setValue_Tb_1(385.0);
      setDefault_Tb_1(385.0);

      setValue_MW_1(110.97);
      setDefault_MW_1(110.97);

      setValue_IUR_1(0.000004);
      setDefault_IUR_1(0.000004);

      setValue_Rfc_1(0.02);
      setDefault_Rfc_1(0.02);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(57.73);
      setDefault_Koc_1(57.73);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Dicyclopentadiene") {
      setValue_S_1(26.47);
      setDefault_S_1(26.47);

      setValue_Hc_1(0.0625);
      setDefault_Hc_1(0.0625);

      setValue_Dair_1(0.0557455);
      setDefault_Dair_1(0.0557455);

      setValue_Dwater_1(0.0000077554);
      setDefault_Dwater_1(0.0000077554);

      setValue_DHvb_1(2197.38);
      setDefault_DHvb_1(2197.38);

      setValue_Tc_1(664.5);
      setDefault_Tc_1(664.5);

      setValue_Tb_1(443.0);
      setDefault_Tb_1(443.0);

      setValue_MW_1(132.21);
      setDefault_MW_1(132.21);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.0003);
      setDefault_Rfc_1(0.0003);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(552.3);
      setDefault_Koc_1(552.3);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Diethylformamide") {
      setValue_S_1(1000000);
      setDefault_S_1(1000000);

      setValue_Hc_1(0.00000013);
      setDefault_Hc_1(0.00000013);

      setValue_Dair_1(0.073301);
      setDefault_Dair_1(0.073301);

      setValue_Dwater_1(0.0000089773);
      setDefault_Dwater_1(0.0000089773);

      setValue_DHvb_1(11687.38);
      setDefault_DHvb_1(11687.38);

      setValue_Tc_1(675.975);
      setDefault_Tc_1(675.975);

      setValue_Tb_1(450.65);
      setDefault_Tb_1(450.65);

      setValue_MW_1(101.15);
      setDefault_MW_1(101.15);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(null);
      setDefault_Rfc_1(null);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(4.785);
      setDefault_Koc_1(4.785);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Difluoroethane, 1,1-") {
      setValue_S_1(3200);
      setDefault_S_1(3200);

      setValue_Hc_1(0.0203);
      setDefault_Hc_1(0.0203);

      setValue_Dair_1(0.1023145);
      setDefault_Dair_1(0.1023145);

      setValue_Dwater_1(0.0000115);
      setDefault_Dwater_1(0.0000115);

      setValue_DHvb_1(5153.88);
      setDefault_DHvb_1(5153.88);

      setValue_Tc_1(372.15);
      setDefault_Tc_1(372.15);

      setValue_Tb_1(248.1);
      setDefault_Tb_1(248.1);

      setValue_MW_1(66.051);
      setDefault_MW_1(66.051);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(40.0);
      setDefault_Rfc_1(40.0);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(4.472);
      setDefault_Koc_1(4.472);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Dimethylaniline, N,N-") {
      setValue_S_1(1450);
      setDefault_S_1(1450);

      setValue_Hc_1(0.0000568);
      setDefault_Hc_1(0.0000568);

      setValue_Dair_1(0.0625411);
      setDefault_Dair_1(0.0625411);

      setValue_Dwater_1(0.0000083063);
      setDefault_Dwater_1(0.0000083063);

      setValue_DHvb_1(12276.68);
      setDefault_DHvb_1(12276.68);

      setValue_Tc_1(687.0);
      setDefault_Tc_1(687.0);

      setValue_Tb_1(466.45);
      setDefault_Tb_1(466.45);

      setValue_MW_1(121.18);
      setDefault_MW_1(121.18);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(null);
      setDefault_Rfc_1(null);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(137.3);
      setDefault_Koc_1(137.3);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Dimethylformamide") {
      setValue_S_1(1000000);
      setDefault_S_1(1000000);

      setValue_Hc_1(0.0000000739);
      setDefault_Hc_1(0.0000000739);

      setValue_Dair_1(0.0971846);
      setDefault_Dair_1(0.0971846);

      setValue_Dwater_1(0.0000112);
      setDefault_Dwater_1(0.0000112);

      setValue_DHvb_1(11369.0696);
      setDefault_DHvb_1(11369.0696);

      setValue_Tc_1(647.15);
      setDefault_Tc_1(647.15);

      setValue_Tb_1(426.15);
      setDefault_Tb_1(426.15);

      setValue_MW_1(73.095);
      setDefault_MW_1(73.095);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.03);
      setDefault_Rfc_1(0.03);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(1.24);
      setDefault_Koc_1(1.24);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Dimethylhydrazine, 1,1-") {
      setValue_S_1(1000000);
      setDefault_S_1(1000000);

      setValue_Hc_1(0.0000129);
      setDefault_Hc_1(0.0000129);

      setValue_Dair_1(0.1037857);
      setDefault_Dair_1(0.1037857);

      setValue_Dwater_1(0.0000113);
      setDefault_Dwater_1(0.0000113);

      setValue_DHvb_1(7791.873058);
      setDefault_DHvb_1(7791.873058);

      setValue_Tc_1(523.15);
      setDefault_Tc_1(523.15);

      setValue_Tb_1(337.05);
      setDefault_Tb_1(337.05);

      setValue_MW_1(60.099);
      setDefault_MW_1(60.099);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.000002);
      setDefault_Rfc_1(0.000002);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(1.672);
      setDefault_Koc_1(1.672);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Dioxane, 1,4-") {
      setValue_S_1(1000000);
      setDefault_S_1(1000000);

      setValue_Hc_1(0.0000048);
      setDefault_Hc_1(0.0000048);

      setValue_Dair_1(0.0873739);
      setDefault_Dair_1(0.0873739);

      setValue_Dwater_1(0.0000105);
      setDefault_Dwater_1(0.0000105);

      setValue_DHvb_1(8687.3502);
      setDefault_DHvb_1(8687.3502);

      setValue_Tc_1(585.15);
      setDefault_Tc_1(585.15);

      setValue_Tb_1(374.65);
      setDefault_Tb_1(374.65);

      setValue_MW_1(88.107);
      setDefault_MW_1(88.107);

      setValue_IUR_1(0.000005);
      setDefault_IUR_1(0.000005);

      setValue_Rfc_1(0.03);
      setDefault_Rfc_1(0.03);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(3.931);
      setDefault_Koc_1(3.931);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Epichlorohydrin") {
      setValue_S_1(65900);
      setDefault_S_1(65900);

      setValue_Hc_1(0.0000304);
      setDefault_Hc_1(0.0000304);

      setValue_Dair_1(0.0888682);
      setDefault_Dair_1(0.0888682);

      setValue_Dwater_1(0.0000111);
      setDefault_Dwater_1(0.0000111);

      setValue_DHvb_1(10.1);
      setDefault_DHvb_1(10.1);

      setValue_Tc_1(600.0);
      setDefault_Tc_1(600.0);

      setValue_Tb_1(390.0);
      setDefault_Tb_1(390.0);

      setValue_MW_1(92.526);
      setDefault_MW_1(92.526);

      setValue_IUR_1(0.0000012);
      setDefault_IUR_1(0.0000012);

      setValue_Rfc_1(0.001);
      setDefault_Rfc_1(0.001);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(12.12);
      setDefault_Koc_1(12.12);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Epoxybutane, 1,2-") {
      setValue_S_1(95000);
      setDefault_S_1(95000);

      setValue_Hc_1(0.00018);
      setDefault_Hc_1(0.00018);

      setValue_Dair_1(0.0928958);
      setDefault_Dair_1(0.0928958);

      setValue_Dwater_1(0.0000104);
      setDefault_Dwater_1(0.0000104);

      setValue_DHvb_1(7211);
      setDefault_DHvb_1(7211);

      setValue_Tc_1(516.0);
      setDefault_Tc_1(516.0);

      setValue_Tb_1(336.3);
      setDefault_Tb_1(336.3);

      setValue_MW_1(72.108);
      setDefault_MW_1(72.108);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.02);
      setDefault_Rfc_1(0.02);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(20.43);
      setDefault_Koc_1(20.43);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Ethoxyethanol Acetate, 2-") {
      setValue_S_1(187000);
      setDefault_S_1(187000);

      setValue_Hc_1(0.0000032);
      setDefault_Hc_1(0.0000032);

      setValue_Dair_1(0.0569504);
      setDefault_Dair_1(0.0569504);

      setValue_Dwater_1(0.0000079753);
      setDefault_Dwater_1(0.0000079753);

      setValue_DHvb_1(9779.84);
      setDefault_DHvb_1(9779.84);

      setValue_Tc_1(607.0);
      setDefault_Tc_1(607.0);

      setValue_Tb_1(429.55);
      setDefault_Tb_1(429.55);

      setValue_MW_1(132.16);
      setDefault_MW_1(132.16);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.06);
      setDefault_Rfc_1(0.06);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(12.45);
      setDefault_Koc_1(12.45);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Ethoxyethanol, 2-") {
      setValue_S_1(1000000);
      setDefault_S_1(1000000);

      setValue_Hc_1(0.00000047);
      setDefault_Hc_1(0.00000047);

      setValue_Dair_1(0.0817537);
      setDefault_Dair_1(0.0817537);

      setValue_Dwater_1(0.0000097306);
      setDefault_Dwater_1(0.0000097306);

      setValue_DHvb_1(9680.42838);
      setDefault_DHvb_1(9680.42838);

      setValue_Tc_1(612.225);
      setDefault_Tc_1(612.225);

      setValue_Tb_1(408.15);
      setDefault_Tb_1(408.15);

      setValue_MW_1(90.123);
      setDefault_MW_1(90.123);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.2);
      setDefault_Rfc_1(0.2);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(1.762);
      setDefault_Koc_1(1.762);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Ethyl Acetate") {
      setValue_S_1(80000);
      setDefault_S_1(80000);

      setValue_Hc_1(0.000134);
      setDefault_Hc_1(0.000134);

      setValue_Dair_1(0.0823158);
      setDefault_Dair_1(0.0823158);

      setValue_Dwater_1(0.0000097028);
      setDefault_Dwater_1(0.0000097028);

      setValue_DHvb_1(7633.66);
      setDefault_DHvb_1(7633.66);

      setValue_Tc_1(523.3);
      setDefault_Tc_1(523.3);

      setValue_Tb_1(350.1);
      setDefault_Tb_1(350.1);

      setValue_MW_1(88.107);
      setDefault_MW_1(88.107);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.07);
      setDefault_Rfc_1(0.07);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(18.34);
      setDefault_Koc_1(18.34);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Ethyl Acrylate") {
      setValue_S_1(15000);
      setDefault_S_1(15000);

      setValue_Hc_1(0.000339);
      setDefault_Hc_1(0.000339);

      setValue_Dair_1(0.0745392);
      setDefault_Dair_1(0.0745392);

      setValue_Dwater_1(0.0000091242);
      setDefault_Dwater_1(0.0000091242);

      setValue_DHvb_1(9362.76);
      setDefault_DHvb_1(9362.76);

      setValue_Tc_1(558.6);
      setDefault_Tc_1(558.6);

      setValue_Tb_1(372.4);
      setDefault_Tb_1(372.4);

      setValue_MW_1(100.12);
      setDefault_MW_1(100.12);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.008);
      setDefault_Rfc_1(0.008);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(38.87);
      setDefault_Koc_1(38.87);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Ethyl Chloride (Chloroethane)") {
      setValue_S_1(6710);
      setDefault_S_1(6710);

      setValue_Hc_1(0.0111);
      setDefault_Hc_1(0.0111);

      setValue_Dair_1(0.1037597);
      setDefault_Dair_1(0.1037597);

      setValue_Dwater_1(0.0000116);
      setDefault_Dwater_1(0.0000116);

      setValue_DHvb_1(5879.4);
      setDefault_DHvb_1(5879.4);

      setValue_Tc_1(460.4);
      setDefault_Tc_1(460.4);

      setValue_Tb_1(285.3);
      setDefault_Tb_1(285.3);

      setValue_MW_1(64.515);
      setDefault_MW_1(64.515);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(10.0);
      setDefault_Rfc_1(10.0);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(17.41);
      setDefault_Koc_1(17.41);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Ethyl Methacrylate") {
      setValue_S_1(5400);
      setDefault_S_1(5400);

      setValue_Hc_1(0.000573);
      setDefault_Hc_1(0.000573);

      setValue_Dair_1(0.0653441);
      setDefault_Dair_1(0.0653441);

      setValue_Dwater_1(0.0000083794);
      setDefault_Dwater_1(0.0000083794);

      setValue_DHvb_1(10957.44);
      setDefault_DHvb_1(10957.44);

      setValue_Tc_1(571.0);
      setDefault_Tc_1(571.0);

      setValue_Tb_1(390.0);
      setDefault_Tb_1(390.0);

      setValue_MW_1(114.15);
      setDefault_MW_1(114.15);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.3);
      setDefault_Rfc_1(0.3);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(85.62);
      setDefault_Koc_1(85.62);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Ethylbenzene") {
      setValue_S_1(169.0);
      setDefault_S_1(169.0);

      setValue_Hc_1(0.00788);
      setDefault_Hc_1(0.00788);

      setValue_Dair_1(0.0684652);
      setDefault_Dair_1(0.0684652);

      setValue_Dwater_1(0.0000084558);
      setDefault_Dwater_1(0.0000084558);

      setValue_DHvb_1(8501);
      setDefault_DHvb_1(8501);

      setValue_Tc_1(617.2);
      setDefault_Tc_1(617.2);

      setValue_Tb_1(409.1);
      setDefault_Tb_1(409.1);

      setValue_MW_1(106.17);
      setDefault_MW_1(106.17);

      setValue_IUR_1(0.0000025);
      setDefault_IUR_1(0.0000025);

      setValue_Rfc_1(1.0);
      setDefault_Rfc_1(1.0);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(541.4);
      setDefault_Koc_1(541.4);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Ethylene Diamine") {
      setValue_S_1(1000000);
      setDefault_S_1(1000000);

      setValue_Hc_1(0.00000000173);
      setDefault_Hc_1(0.00000000173);

      setValue_Dair_1(0.109446);
      setDefault_Dair_1(0.109446);

      setValue_Dwater_1(0.0000122);
      setDefault_Dwater_1(0.0000122);

      setValue_DHvb_1(9562.61);
      setDefault_DHvb_1(9562.61);

      setValue_Tc_1(585.225);
      setDefault_Tc_1(585.225);

      setValue_Tb_1(390.15);
      setDefault_Tb_1(390.15);

      setValue_MW_1(60.099);
      setDefault_MW_1(60.099);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(null);
      setDefault_Rfc_1(null);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(0.5664);
      setDefault_Koc_1(0.5664);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Ethylene Oxide") {
      setValue_S_1(1000000);
      setDefault_S_1(1000000);

      setValue_Hc_1(0.000148);
      setDefault_Hc_1(0.000148);

      setValue_Dair_1(0.1339638);
      setDefault_Dair_1(0.1339638);

      setValue_Dwater_1(0.0000145);
      setDefault_Dwater_1(0.0000145);

      setValue_DHvb_1(6104.06);
      setDefault_DHvb_1(6104.06);

      setValue_Tc_1(469.0);
      setDefault_Tc_1(469.0);

      setValue_Tb_1(283.6);
      setDefault_Tb_1(283.6);

      setValue_MW_1(44.054);
      setDefault_MW_1(44.054);

      setValue_IUR_1(0.003);
      setDefault_IUR_1(0.003);

      setValue_Rfc_1(0.03);
      setDefault_Rfc_1(0.03);

      setValue_Mut_1("Yes");
      setDefault_Mut_1("Yes");

      setValue_Koc_1(4.622);
      setDefault_Koc_1(4.622);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Fluorene") {
      setValue_S_1(1.69);
      setDefault_S_1(1.69);

      setValue_Hc_1(0.0000962);
      setDefault_Hc_1(0.0000962);

      setValue_Dair_1(0.0439743);
      setDefault_Dair_1(0.0439743);

      setValue_Dwater_1(0.000007889);
      setDefault_Dwater_1(0.000007889);

      setValue_DHvb_1(12666);
      setDefault_DHvb_1(12666);

      setValue_Tc_1(870.0);
      setDefault_Tc_1(870.0);

      setValue_Tb_1(568.0);
      setDefault_Tb_1(568.0);

      setValue_MW_1(166.22);
      setDefault_MW_1(166.22);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(null);
      setDefault_Rfc_1(null);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(4241);
      setDefault_Koc_1(4241);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Formaldehyde") {
      setValue_S_1(400000);
      setDefault_S_1(400000);

      setValue_Hc_1(0.000000337);
      setDefault_Hc_1(0.000000337);

      setValue_Dair_1(0.1670871);
      setDefault_Dair_1(0.1670871);

      setValue_Dwater_1(0.0000174);
      setDefault_Dwater_1(0.0000174);

      setValue_DHvb_1(5919.9);
      setDefault_DHvb_1(5919.9);

      setValue_Tc_1(412.35);
      setDefault_Tc_1(412.35);

      setValue_Tb_1(254.05);
      setDefault_Tb_1(254.05);

      setValue_MW_1(30.026);
      setDefault_MW_1(30.026);

      setValue_IUR_1(0.000013);
      setDefault_IUR_1(0.000013);

      setValue_Rfc_1(0.0098);
      setDefault_Rfc_1(0.0098);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(7.752);
      setDefault_Koc_1(7.752);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Formic Acid") {
      setValue_S_1(1000000);
      setDefault_S_1(1000000);

      setValue_Hc_1(0.000000167);
      setDefault_Hc_1(0.000000167);

      setValue_Dair_1(0.1478701);
      setDefault_Dair_1(0.1478701);

      setValue_Dwater_1(0.0000172);
      setDefault_Dwater_1(0.0000172);

      setValue_DHvb_1(4800.8046);
      setDefault_DHvb_1(4800.8046);

      setValue_Tc_1(588.0);
      setDefault_Tc_1(588.0);

      setValue_Tb_1(374.15);
      setDefault_Tb_1(374.15);

      setValue_MW_1(46.026);
      setDefault_MW_1(46.026);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.0003);
      setDefault_Rfc_1(0.0003);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(0.7195);
      setDefault_Koc_1(0.7195);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Furan") {
      setValue_S_1(10000);
      setDefault_S_1(10000);

      setValue_Hc_1(0.0054);
      setDefault_Hc_1(0.0054);

      setValue_Dair_1(0.1022757);
      setDefault_Dair_1(0.1022757);

      setValue_Dwater_1(0.0000117);
      setDefault_Dwater_1(0.0000117);

      setValue_DHvb_1(6476.9);
      setDefault_DHvb_1(6476.9);

      setValue_Tc_1(490.2);
      setDefault_Tc_1(490.2);

      setValue_Tb_1(304.5);
      setDefault_Tb_1(304.5);

      setValue_MW_1(68.076);
      setDefault_MW_1(68.076);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(null);
      setDefault_Rfc_1(null);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(14.54);
      setDefault_Koc_1(14.54);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Furfural") {
      setValue_S_1(74100);
      setDefault_S_1(74100);

      setValue_Hc_1(0.00000377);
      setDefault_Hc_1(0.00000377);

      setValue_Dair_1(0.0853213);
      setDefault_Dair_1(0.0853213);

      setValue_Dwater_1(0.0000107);
      setDefault_Dwater_1(0.0000107);

      setValue_DHvb_1(9219.4556);
      setDefault_DHvb_1(9219.4556);

      setValue_Tc_1(670.0);
      setDefault_Tc_1(670.0);

      setValue_Tb_1(434.85);
      setDefault_Tb_1(434.85);

      setValue_MW_1(96.086);
      setDefault_MW_1(96.086);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.05);
      setDefault_Rfc_1(0.05);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(8.368);
      setDefault_Koc_1(8.368);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Heptachlor") {
      setValue_S_1(0.18);
      setDefault_S_1(0.18);

      setValue_Hc_1(0.000294);
      setDefault_Hc_1(0.000294);

      setValue_Dair_1(0.0223441);
      setDefault_Dair_1(0.0223441);

      setValue_Dwater_1(0.0000056959);
      setDefault_Dwater_1(0.0000056959);

      setValue_DHvb_1(13000);
      setDefault_DHvb_1(13000);

      setValue_Tc_1(874.725);
      setDefault_Tc_1(874.725);

      setValue_Tb_1(583.15);
      setDefault_Tb_1(583.15);

      setValue_MW_1(373.32);
      setDefault_MW_1(373.32);

      setValue_IUR_1(0.0013);
      setDefault_IUR_1(0.0013);

      setValue_Rfc_1(null);
      setDefault_Rfc_1(null);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(55850);
      setDefault_Koc_1(55850);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Heptachlor Epoxide") {
      setValue_S_1(0.2);
      setDefault_S_1(0.2);

      setValue_Hc_1(0.000021);
      setDefault_Hc_1(0.000021);

      setValue_Dair_1(0.0240006);
      setDefault_Dair_1(0.0240006);

      setValue_Dwater_1(0.0000062475);
      setDefault_Dwater_1(0.0000062475);

      setValue_DHvb_1(16000);
      setDefault_DHvb_1(16000);

      setValue_Tc_1(920.94);
      setDefault_Tc_1(920.94);

      setValue_Tb_1(613.96);
      setDefault_Tb_1(613.96);

      setValue_MW_1(389.32);
      setDefault_MW_1(389.32);

      setValue_IUR_1(0.0026);
      setDefault_IUR_1(0.0026);

      setValue_Rfc_1(null);
      setDefault_Rfc_1(null);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(3882);
      setDefault_Koc_1(3882);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Hexachlorobenzene") {
      setValue_S_1(0.0062);
      setDefault_S_1(0.0062);

      setValue_Hc_1(0.0017);
      setDefault_Hc_1(0.0017);

      setValue_Dair_1(0.0289745);
      setDefault_Dair_1(0.0289745);

      setValue_Dwater_1(0.0000078497);
      setDefault_Dwater_1(0.0000078497);

      setValue_DHvb_1(11703.454);
      setDefault_DHvb_1(11703.454);

      setValue_Tc_1(897.225);
      setDefault_Tc_1(897.225);

      setValue_Tb_1(598.15);
      setDefault_Tb_1(598.15);

      setValue_MW_1(284.78);
      setDefault_MW_1(284.78);

      setValue_IUR_1(0.00046);
      setDefault_IUR_1(0.00046);

      setValue_Rfc_1(null);
      setDefault_Rfc_1(null);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(17340);
      setDefault_Koc_1(17340);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Hexachlorobutadiene") {
      setValue_S_1(3.2);
      setDefault_S_1(3.2);

      setValue_Hc_1(0.0103);
      setDefault_Hc_1(0.0103);

      setValue_Dair_1(0.0267445);
      setDefault_Dair_1(0.0267445);

      setValue_Dwater_1(0.0000070264);
      setDefault_Dwater_1(0.0000070264);

      setValue_DHvb_1(10206);
      setDefault_DHvb_1(10206);

      setValue_Tc_1(732.225);
      setDefault_Tc_1(732.225);

      setValue_Tb_1(488.15);
      setDefault_Tb_1(488.15);

      setValue_MW_1(260.76);
      setDefault_MW_1(260.76);

      setValue_IUR_1(0.000022);
      setDefault_IUR_1(0.000022);

      setValue_Rfc_1(null);
      setDefault_Rfc_1(null);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(14070);
      setDefault_Koc_1(14070);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Hexachlorocyclopentadiene") {
      setValue_S_1(1.8);
      setDefault_S_1(1.8);

      setValue_Hc_1(0.027);
      setDefault_Hc_1(0.027);

      setValue_Dair_1(0.0272382);
      setDefault_Dair_1(0.0272382);

      setValue_Dwater_1(0.000007217);
      setDefault_Dwater_1(0.000007217);

      setValue_DHvb_1(42992.28);
      setDefault_DHvb_1(42992.28);

      setValue_Tc_1(768.225);
      setDefault_Tc_1(768.225);

      setValue_Tb_1(512.15);
      setDefault_Tb_1(512.15);

      setValue_MW_1(272.77);
      setDefault_MW_1(272.77);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.0002);
      setDefault_Rfc_1(0.0002);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(23650);
      setDefault_Koc_1(23650);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Hexachloroethane") {
      setValue_S_1(50.0);
      setDefault_S_1(50.0);

      setValue_Hc_1(0.00389);
      setDefault_Hc_1(0.00389);

      setValue_Dair_1(0.0320938);
      setDefault_Dair_1(0.0320938);

      setValue_Dwater_1(0.0000088904);
      setDefault_Dwater_1(0.0000088904);

      setValue_DHvb_1(11711.3);
      setDefault_DHvb_1(11711.3);

      setValue_Tc_1(641.4);
      setDefault_Tc_1(641.4);

      setValue_Tb_1(427.6);
      setDefault_Tb_1(427.6);

      setValue_MW_1(236.74);
      setDefault_MW_1(236.74);

      setValue_IUR_1(0.000011);
      setDefault_IUR_1(0.000011);

      setValue_Rfc_1(0.03);
      setDefault_Rfc_1(0.03);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(3915);
      setDefault_Koc_1(3915);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Hexane, N-") {
      setValue_S_1(9.5);
      setDefault_S_1(9.5);

      setValue_Hc_1(1.8);
      setDefault_Hc_1(1.8);

      setValue_Dair_1(0.0731078);
      setDefault_Dair_1(0.0731078);

      setValue_Dwater_1(0.0000081658);
      setDefault_Dwater_1(0.0000081658);

      setValue_DHvb_1(6895.15);
      setDefault_DHvb_1(6895.15);

      setValue_Tc_1(508.0);
      setDefault_Tc_1(508.0);

      setValue_Tb_1(341.7);
      setDefault_Tb_1(341.7);

      setValue_MW_1(86.178);
      setDefault_MW_1(86.178);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.7);
      setDefault_Rfc_1(0.7);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(2423);
      setDefault_Koc_1(2423);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Hexanone, 2-") {
      setValue_S_1(17200);
      setDefault_S_1(17200);

      setValue_Hc_1(0.0000932);
      setDefault_Hc_1(0.0000932);

      setValue_Dair_1(0.0703564);
      setDefault_Dair_1(0.0703564);

      setValue_Dwater_1(0.0000084404);
      setDefault_Dwater_1(0.0000084404);

      setValue_DHvb_1(8610.39);
      setDefault_DHvb_1(8610.39);

      setValue_Tc_1(600.9);
      setDefault_Tc_1(600.9);

      setValue_Tb_1(400.6);
      setDefault_Tb_1(400.6);

      setValue_MW_1(100.16);
      setDefault_MW_1(100.16);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.03);
      setDefault_Rfc_1(0.03);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(76.56);
      setDefault_Koc_1(76.56);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Hydrazine") {
      setValue_S_1(1000000);
      setDefault_S_1(1000000);

      setValue_Hc_1(0.00000061);
      setDefault_Hc_1(0.00000061);

      setValue_Dair_1(0.1733034);
      setDefault_Dair_1(0.1733034);

      setValue_Dwater_1(0.000019);
      setDefault_Dwater_1(0.000019);

      setValue_DHvb_1(10812.55842);
      setDefault_DHvb_1(10812.55842);

      setValue_Tc_1(653.15);
      setDefault_Tc_1(653.15);

      setValue_Tb_1(386.65);
      setDefault_Tb_1(386.65);

      setValue_MW_1(32.045);
      setDefault_MW_1(32.045);

      setValue_IUR_1(0.0049);
      setDefault_IUR_1(0.0049);

      setValue_Rfc_1(0.00003);
      setDefault_Rfc_1(0.00003);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(0.01596);
      setDefault_Koc_1(0.01596);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Hydrogen Chloride") {
      setValue_S_1(673000);
      setDefault_S_1(673000);

      setValue_Hc_1(2040000);
      setDefault_Hc_1(2040000);

      setValue_Dair_1(0.1879912);
      setDefault_Dair_1(0.1879912);

      setValue_Dwater_1(0.0000227);
      setDefault_Dwater_1(0.0000227);

      setValue_DHvb_1(3855.476017);
      setDefault_DHvb_1(3855.476017);

      setValue_Tc_1(324.55);
      setDefault_Tc_1(324.55);

      setValue_Tb_1(188.1);
      setDefault_Tb_1(188.1);

      setValue_MW_1(35.45);
      setDefault_MW_1(35.45);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.02);
      setDefault_Rfc_1(0.02);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(2.939);
      setDefault_Koc_1(2.939);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Hydrogen Cyanide") {
      setValue_S_1(1000000);
      setDefault_S_1(1000000);

      setValue_Hc_1(0.000133);
      setDefault_Hc_1(0.000133);

      setValue_Dair_1(0.1678036);
      setDefault_Dair_1(0.1678036);

      setValue_Dwater_1(0.0000168);
      setDefault_Dwater_1(0.0000168);

      setValue_DHvb_1(6676.41);
      setDefault_DHvb_1(6676.41);

      setValue_Tc_1(456.7);
      setDefault_Tc_1(456.7);

      setValue_Tb_1(298.6);
      setDefault_Tb_1(298.6);

      setValue_MW_1(27.026);
      setDefault_MW_1(27.026);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.0008);
      setDefault_Rfc_1(0.0008);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(15.1);
      setDefault_Koc_1(15.1);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Hydrogen Fluoride") {
      setValue_S_1(1000000);
      setDefault_S_1(1000000);

      setValue_Hc_1(0.000104);
      setDefault_Hc_1(0.000104);

      setValue_Dair_1(0.2190996);
      setDefault_Dair_1(0.2190996);

      setValue_Dwater_1(0.0000223);
      setDefault_Dwater_1(0.0000223);

      setValue_DHvb_1(1789.673078);
      setDefault_DHvb_1(1789.673078);

      setValue_Tc_1(461.15);
      setDefault_Tc_1(461.15);

      setValue_Tb_1(292.66);
      setDefault_Tb_1(292.66);

      setValue_MW_1(20.006);
      setDefault_MW_1(20.006);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.014);
      setDefault_Rfc_1(0.014);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(1.582);
      setDefault_Koc_1(1.582);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Hydrogen Sulfide") {
      setValue_S_1(3740);
      setDefault_S_1(3740);

      setValue_Hc_1(0.00856);
      setDefault_Hc_1(0.00856);

      setValue_Dair_1(0.1880669);
      setDefault_Dair_1(0.1880669);

      setValue_Dwater_1(0.0000223);
      setDefault_Dwater_1(0.0000223);

      setValue_DHvb_1(4459.25482);
      setDefault_DHvb_1(4459.25482);

      setValue_Tc_1(373.1);
      setDefault_Tc_1(373.1);

      setValue_Tb_1(212.82);
      setDefault_Tb_1(212.82);

      setValue_MW_1(34.08);
      setDefault_MW_1(34.08);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.002);
      setDefault_Rfc_1(0.002);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(0.06337);
      setDefault_Koc_1(0.06337);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Isobutyl Alcohol") {
      setValue_S_1(85000);
      setDefault_S_1(85000);

      setValue_Hc_1(0.00000978);
      setDefault_Hc_1(0.00000978);

      setValue_Dair_1(0.0896677);
      setDefault_Dair_1(0.0896677);

      setValue_Dwater_1(0.00001);
      setDefault_Dwater_1(0.00001);

      setValue_DHvb_1(103496.65);
      setDefault_DHvb_1(103496.65);

      setValue_Tc_1(547.78);
      setDefault_Tc_1(547.78);

      setValue_Tb_1(380.95);
      setDefault_Tb_1(380.95);

      setValue_MW_1(74.124);
      setDefault_MW_1(74.124);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(null);
      setDefault_Rfc_1(null);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(8.591);
      setDefault_Koc_1(8.591);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Isopropanol") {
      setValue_S_1(1000000);
      setDefault_S_1(1000000);

      setValue_Hc_1(0.0000081);
      setDefault_Hc_1(0.0000081);

      setValue_Dair_1(0.1032261);
      setDefault_Dair_1(0.1032261);

      setValue_Dwater_1(0.0000112);
      setDefault_Dwater_1(0.0000112);

      setValue_DHvb_1(10841.21994);
      setDefault_DHvb_1(10841.21994);

      setValue_Tc_1(508.3);
      setDefault_Tc_1(508.3);

      setValue_Tb_1(355.45);
      setDefault_Tb_1(355.45);

      setValue_MW_1(60.097);
      setDefault_MW_1(60.097);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.2);
      setDefault_Rfc_1(0.2);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(3.478);
      setDefault_Koc_1(3.478);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Mercury (elemental)") {
      setValue_S_1(0.06);
      setDefault_S_1(0.06);

      setValue_Hc_1(0.008622);
      setDefault_Hc_1(0.008622);

      setValue_Dair_1(0.0307);
      setDefault_Dair_1(0.0307);

      setValue_Dwater_1(0.0000063);
      setDefault_Dwater_1(0.0000063);

      setValue_DHvb_1(14127);
      setDefault_DHvb_1(14127);

      setValue_Tc_1(1750);
      setDefault_Tc_1(1750);

      setValue_Tb_1(356.6);
      setDefault_Tb_1(356.6);

      setValue_MW_1(200.59);
      setDefault_MW_1(200.59);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.0003);
      setDefault_Rfc_1(0.0003);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(3.449);
      setDefault_Koc_1(3.449);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Methacrylonitrile") {
      setValue_S_1(25400);
      setDefault_S_1(25400);

      setValue_Hc_1(0.000247);
      setDefault_Hc_1(0.000247);

      setValue_Dair_1(0.0964299);
      setDefault_Dair_1(0.0964299);

      setValue_Dwater_1(0.0000106);
      setDefault_Dwater_1(0.0000106);

      setValue_DHvb_1(7600.2);
      setDefault_DHvb_1(7600.2);

      setValue_Tc_1(554.0);
      setDefault_Tc_1(554.0);

      setValue_Tb_1(363.3);
      setDefault_Tb_1(363.3);

      setValue_MW_1(67.091);
      setDefault_MW_1(67.091);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.03);
      setDefault_Rfc_1(0.03);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(49.36);
      setDefault_Koc_1(49.36);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Methanol") {
      setValue_S_1(1000000);
      setDefault_S_1(1000000);

      setValue_Hc_1(0.00000455);
      setDefault_Hc_1(0.00000455);

      setValue_Dair_1(0.1582741);
      setDefault_Dair_1(0.1582741);

      setValue_Dwater_1(0.0000165);
      setDefault_Dwater_1(0.0000165);

      setValue_DHvb_1(8918.50964);
      setDefault_DHvb_1(8918.50964);

      setValue_Tc_1(513.15);
      setDefault_Tc_1(513.15);

      setValue_Tb_1(337.85);
      setDefault_Tb_1(337.85);

      setValue_MW_1(32.042);
      setDefault_MW_1(32.042);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(20.0);
      setDefault_Rfc_1(20.0);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(1.224);
      setDefault_Koc_1(1.224);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Methoxyethanol Acetate, 2-") {
      setValue_S_1(1000000);
      setDefault_S_1(1000000);

      setValue_Hc_1(0.000000311);
      setDefault_Hc_1(0.000000311);

      setValue_Dair_1(0.0658347);
      setDefault_Dair_1(0.0658347);

      setValue_Dwater_1(0.0000087052);
      setDefault_Dwater_1(0.0000087052);

      setValue_DHvb_1(10485.3394);
      setDefault_DHvb_1(10485.3394);

      setValue_Tc_1(624.225);
      setDefault_Tc_1(624.225);

      setValue_Tb_1(416.15);
      setDefault_Tb_1(416.15);

      setValue_MW_1(118.13);
      setDefault_MW_1(118.13);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.001);
      setDefault_Rfc_1(0.001);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(6.671);
      setDefault_Koc_1(6.671);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Methoxyethanol, 2-") {
      setValue_S_1(1000000);
      setDefault_S_1(1000000);

      setValue_Hc_1(0.00000033);
      setDefault_Hc_1(0.00000033);

      setValue_Dair_1(0.0951557);
      setDefault_Dair_1(0.0951557);

      setValue_Dwater_1(0.000011);
      setDefault_Dwater_1(0.000011);

      setValue_DHvb_1(8966.27884);
      setDefault_DHvb_1(8966.27884);

      setValue_Tc_1(597.6);
      setDefault_Tc_1(597.6);

      setValue_Tb_1(397.25);
      setDefault_Tb_1(397.25);

      setValue_MW_1(76.096);
      setDefault_MW_1(76.096);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.02);
      setDefault_Rfc_1(0.02);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(0.9935);
      setDefault_Koc_1(0.9935);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Methyl Acetate") {
      setValue_S_1(243000);
      setDefault_S_1(243000);

      setValue_Hc_1(0.000115);
      setDefault_Hc_1(0.000115);

      setValue_Dair_1(0.0957763);
      setDefault_Dair_1(0.0957763);

      setValue_Dwater_1(0.000011);
      setDefault_Dwater_1(0.000011);

      setValue_DHvb_1(7260.0791);
      setDefault_DHvb_1(7260.0791);

      setValue_Tc_1(506.7);
      setDefault_Tc_1(506.7);

      setValue_Tb_1(365);
      setDefault_Tb_1(365);

      setValue_MW_1(74.08);
      setDefault_MW_1(74.08);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(null);
      setDefault_Rfc_1(null);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(9.101);
      setDefault_Koc_1(9.101);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Methyl Acrylate") {
      setValue_S_1(49400);
      setDefault_S_1(49400);

      setValue_Hc_1(0.000199);
      setDefault_Hc_1(0.000199);

      setValue_Dair_1(0.0859972);
      setDefault_Dair_1(0.0859972);

      setValue_Dwater_1(0.0000102);
      setDefault_Dwater_1(0.0000102);

      setValue_DHvb_1(7749);
      setDefault_DHvb_1(7749);

      setValue_Tc_1(536.0);
      setDefault_Tc_1(536.0);

      setValue_Tb_1(353.2);
      setDefault_Tb_1(353.2);

      setValue_MW_1(86.091);
      setDefault_MW_1(86.091);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.02);
      setDefault_Rfc_1(0.02);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(20.05);
      setDefault_Koc_1(20.05);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Methyl Ethyl Ketone (2-Butanone)") {
      setValue_S_1(223000);
      setDefault_S_1(223000);

      setValue_Hc_1(0.0000569);
      setDefault_Hc_1(0.0000569);

      setValue_Dair_1(0.0914462);
      setDefault_Dair_1(0.0914462);

      setValue_Dwater_1(0.0000102);
      setDefault_Dwater_1(0.0000102);

      setValue_DHvb_1(7480.7);
      setDefault_DHvb_1(7480.7);

      setValue_Tc_1(536.78);
      setDefault_Tc_1(536.78);

      setValue_Tb_1(352.5);
      setDefault_Tb_1(352.5);

      setValue_MW_1(72.108);
      setDefault_MW_1(72.108);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(5.0);
      setDefault_Rfc_1(5.0);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(19.1);
      setDefault_Koc_1(19.1);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Methyl Hydrazine") {
      setValue_S_1(1000000);
      setDefault_S_1(1000000);

      setValue_Hc_1(0.000003031);
      setDefault_Hc_1(0.000003031);

      setValue_Dair_1(0.1290894);
      setDefault_Dair_1(0.1290894);

      setValue_Dwater_1(0.000014);
      setDefault_Dwater_1(0.000014);

      setValue_DHvb_1(8887.937352);
      setDefault_DHvb_1(8887.937352);

      setValue_Tc_1(585.15);
      setDefault_Tc_1(585.15);

      setValue_Tb_1(360.65);
      setDefault_Tb_1(360.65);

      setValue_MW_1(46.072);
      setDefault_MW_1(46.072);

      setValue_IUR_1(0.001);
      setDefault_IUR_1(0.001);

      setValue_Rfc_1(0.00002);
      setDefault_Rfc_1(0.00002);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(2.101);
      setDefault_Koc_1(2.101);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (
      selectedChem === "Methyl Isobutyl Ketone (4-methyl-2-pentanone)"
    ) {
      setValue_S_1(19000);
      setDefault_S_1(19000);

      setValue_Hc_1(0.000138);
      setDefault_Hc_1(0.000138);

      setValue_Dair_1(0.0697797);
      setDefault_Dair_1(0.0697797);

      setValue_Dwater_1(0.0000083477);
      setDefault_Dwater_1(0.0000083477);

      setValue_DHvb_1(8243.11);
      setDefault_DHvb_1(8243.11);

      setValue_Tc_1(571.0);
      setDefault_Tc_1(571.0);

      setValue_Tb_1(389.5);
      setDefault_Tb_1(389.5);

      setValue_MW_1(100.16);
      setDefault_MW_1(100.16);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(3.0);
      setDefault_Rfc_1(3.0);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(70.03);
      setDefault_Koc_1(70.03);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Methyl Methacrylate") {
      setValue_S_1(15000);
      setDefault_S_1(15000);

      setValue_Hc_1(0.000319);
      setDefault_Hc_1(0.000319);

      setValue_Dair_1(0.0750447);
      setDefault_Dair_1(0.0750447);

      setValue_Dwater_1(0.0000092087);
      setDefault_Dwater_1(0.0000092087);

      setValue_DHvb_1(8974.9);
      setDefault_DHvb_1(8974.9);

      setValue_Tc_1(567.0);
      setDefault_Tc_1(567.0);

      setValue_Tb_1(373.5);
      setDefault_Tb_1(373.5);

      setValue_MW_1(100.12);
      setDefault_MW_1(100.12);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.7);
      setDefault_Rfc_1(0.7);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(41.96);
      setDefault_Koc_1(41.96);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Methyl Styrene (Mixed Isomers)") {
      setValue_S_1(89.0);
      setDefault_S_1(89.0);

      setValue_Hc_1(0.00262);
      setDefault_Hc_1(0.00262);

      setValue_Dair_1(0.017397);
      setDefault_Dair_1(0.017397);

      setValue_Dwater_1(0.0000041793);
      setDefault_Dwater_1(0.0000041793);

      setValue_DHvb_1(12027.44);
      setDefault_DHvb_1(12027.44);

      setValue_Tc_1(655.0);
      setDefault_Tc_1(655.0);

      setValue_Tb_1(437.65);
      setDefault_Tb_1(437.65);

      setValue_MW_1(354.54);
      setDefault_MW_1(354.54);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.04);
      setDefault_Rfc_1(0.04);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(966.4);
      setDefault_Koc_1(966.4);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Methyl tert-Butyl Ether (MTBE)") {
      setValue_S_1(51000);
      setDefault_S_1(51000);

      setValue_Hc_1(0.000587);
      setDefault_Hc_1(0.000587);

      setValue_Dair_1(0.0752672);
      setDefault_Dair_1(0.0752672);

      setValue_Dwater_1(0.0000085904);
      setDefault_Dwater_1(0.0000085904);

      setValue_DHvb_1(6677.66);
      setDefault_DHvb_1(6677.66);

      setValue_Tc_1(497.1);
      setDefault_Tc_1(497.1);

      setValue_Tb_1(328.2);
      setDefault_Tb_1(328.2);

      setValue_MW_1(88.151);
      setDefault_MW_1(88.151);

      setValue_IUR_1(0.00000026);
      setDefault_IUR_1(0.00000026);

      setValue_Rfc_1(3.0);
      setDefault_Rfc_1(3.0);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(22.62);
      setDefault_Koc_1(22.62);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Methylene Chloride") {
      setValue_S_1(13000);
      setDefault_S_1(13000);

      setValue_Hc_1(0.00325);
      setDefault_Hc_1(0.00325);

      setValue_Dair_1(0.0999362);
      setDefault_Dair_1(0.0999362);

      setValue_Dwater_1(0.0000125);
      setDefault_Dwater_1(0.0000125);

      setValue_DHvb_1(6706);
      setDefault_DHvb_1(6706);

      setValue_Tc_1(510.0);
      setDefault_Tc_1(510.0);

      setValue_Tb_1(313.0);
      setDefault_Tb_1(313.0);

      setValue_MW_1(84.933);
      setDefault_MW_1(84.933);

      setValue_IUR_1(0.00000001);
      setDefault_IUR_1(0.00000001);

      setValue_Rfc_1(0.6);
      setDefault_Rfc_1(0.6);

      setValue_Mut_1("Yes");
      setDefault_Mut_1("Yes");

      setValue_Koc_1(12.15);
      setDefault_Koc_1(12.15);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Methylnaphthalene, 1-") {
      setValue_S_1(25.8);
      setDefault_S_1(25.8);

      setValue_Hc_1(0.000514);
      setDefault_Hc_1(0.000514);

      setValue_Dair_1(0.0527705);
      setDefault_Dair_1(0.0527705);

      setValue_Dwater_1(0.0000078477);
      setDefault_Dwater_1(0.0000078477);

      setValue_DHvb_1(13690.65);
      setDefault_DHvb_1(13690.65);

      setValue_Tc_1(771.8);
      setDefault_Tc_1(771.8);

      setValue_Tb_1(517.7);
      setDefault_Tb_1(517.7);

      setValue_MW_1(142.2);
      setDefault_MW_1(142.2);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(null);
      setDefault_Rfc_1(null);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(2282);
      setDefault_Koc_1(2282);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Methylnaphthalene, 2-") {
      setValue_S_1(24.6);
      setDefault_S_1(24.6);

      setValue_Hc_1(0.000518);
      setDefault_Hc_1(0.000518);

      setValue_Dair_1(0.0524319);
      setDefault_Dair_1(0.0524319);

      setValue_Dwater_1(0.0000077811);
      setDefault_Dwater_1(0.0000077811);

      setValue_DHvb_1(12600);
      setDefault_DHvb_1(12600);

      setValue_Tc_1(761.0);
      setDefault_Tc_1(761.0);

      setValue_Tb_1(514.1);
      setDefault_Tb_1(514.1);

      setValue_MW_1(142.2);
      setDefault_MW_1(142.2);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(null);
      setDefault_Rfc_1(null);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(2237);
      setDefault_Koc_1(2237);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Methylstyrene, Alpha-") {
      setValue_S_1(116.0);
      setDefault_S_1(116.0);

      setValue_Hc_1(0.00255);
      setDefault_Hc_1(0.00255);

      setValue_Dair_1(0.062902);
      setDefault_Dair_1(0.062902);

      setValue_Dwater_1(0.0000081911);
      setDefault_Dwater_1(0.0000081911);

      setValue_DHvb_1(11419.16);
      setDefault_DHvb_1(11419.16);

      setValue_Tc_1(657.0);
      setDefault_Tc_1(657.0);

      setValue_Tb_1(438.4);
      setDefault_Tb_1(438.4);

      setValue_MW_1(118.18);
      setDefault_MW_1(118.18);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(null);
      setDefault_Rfc_1(null);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(1047);
      setDefault_Koc_1(1047);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Naphthalene") {
      setValue_S_1(31.0);
      setDefault_S_1(31.0);

      setValue_Hc_1(0.00044);
      setDefault_Hc_1(0.00044);

      setValue_Dair_1(0.0604994);
      setDefault_Dair_1(0.0604994);

      setValue_Dwater_1(0.000008377);
      setDefault_Dwater_1(0.000008377);

      setValue_DHvb_1(10373);
      setDefault_DHvb_1(10373);

      setValue_Tc_1(748.4);
      setDefault_Tc_1(748.4);

      setValue_Tb_1(490.9);
      setDefault_Tb_1(490.9);

      setValue_MW_1(128.18);
      setDefault_MW_1(128.18);

      setValue_IUR_1(0.000034);
      setDefault_IUR_1(0.000034);

      setValue_Rfc_1(0.003);
      setDefault_Rfc_1(0.003);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(731);
      setDefault_Koc_1(731);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Nickel Carbonyl") {
      setValue_S_1(180.0);
      setDefault_S_1(180.0);

      setValue_Hc_1(0.5);
      setDefault_Hc_1(0.5);

      setValue_Dair_1(0.0433019);
      setDefault_Dair_1(0.0433019);

      setValue_Dwater_1(0.0000081704);
      setDefault_Dwater_1(0.0000081704);

      setValue_DHvb_1(6829.36);
      setDefault_DHvb_1(6829.36);

      setValue_Tc_1(473.15);
      setDefault_Tc_1(473.15);

      setValue_Tb_1(316.15);
      setDefault_Tb_1(316.15);

      setValue_MW_1(170.734);
      setDefault_MW_1(170.734);

      setValue_IUR_1(0.00026);
      setDefault_IUR_1(0.00026);

      setValue_Rfc_1(0.000014);
      setDefault_Rfc_1(0.000014);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(null);
      setDefault_Koc_1(null);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Nitrobenzene") {
      setValue_S_1(2090);
      setDefault_S_1(2090);

      setValue_Hc_1(0.000024);
      setDefault_Hc_1(0.000024);

      setValue_Dair_1(0.068054);
      setDefault_Dair_1(0.068054);

      setValue_Dwater_1(0.0000094495);
      setDefault_Dwater_1(0.0000094495);

      setValue_DHvb_1(10566);
      setDefault_DHvb_1(10566);

      setValue_Tc_1(719.0);
      setDefault_Tc_1(719.0);

      setValue_Tb_1(483.8);
      setDefault_Tb_1(483.8);

      setValue_MW_1(123.11);
      setDefault_MW_1(123.11);

      setValue_IUR_1(0.00004);
      setDefault_IUR_1(0.00004);

      setValue_Rfc_1(0.009);
      setDefault_Rfc_1(0.009);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(147.1);
      setDefault_Koc_1(147.1);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Nitromethane") {
      setValue_S_1(111000);
      setDefault_S_1(111000);

      setValue_Hc_1(0.0000286);
      setDefault_Hc_1(0.0000286);

      setValue_Dair_1(0.1192837);
      setDefault_Dair_1(0.1192837);

      setValue_Dwater_1(0.0000139);
      setDefault_Dwater_1(0.0000139);

      setValue_DHvb_1(9140.63);
      setDefault_DHvb_1(9140.63);

      setValue_Tc_1(588.0);
      setDefault_Tc_1(588.0);

      setValue_Tb_1(374.1);
      setDefault_Tb_1(374.1);

      setValue_MW_1(61.041);
      setDefault_MW_1(61.041);

      setValue_IUR_1(0.0000088);
      setDefault_IUR_1(0.0000088);

      setValue_Rfc_1(0.005);
      setDefault_Rfc_1(0.005);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(8.925);
      setDefault_Koc_1(8.925);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Nitropropane, 2-") {
      setValue_S_1(17000);
      setDefault_S_1(17000);

      setValue_Hc_1(0.000119);
      setDefault_Hc_1(0.000119);

      setValue_Dair_1(0.0846934);
      setDefault_Dair_1(0.0846934);

      setValue_Dwater_1(0.0000102);
      setDefault_Dwater_1(0.0000102);

      setValue_DHvb_1(8383);
      setDefault_DHvb_1(8383);

      setValue_Tc_1(594.0);
      setDefault_Tc_1(594.0);

      setValue_Tb_1(393.2);
      setDefault_Tb_1(393.2);

      setValue_MW_1(89.095);
      setDefault_MW_1(89.095);

      setValue_IUR_1(0.0027);
      setDefault_IUR_1(0.0027);

      setValue_Rfc_1(0.02);
      setDefault_Rfc_1(0.02);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(45.56);
      setDefault_Koc_1(45.56);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Nitrotoluene, o-") {
      setValue_S_1(650.0);
      setDefault_S_1(650.0);

      setValue_Hc_1(0.0000125);
      setDefault_Hc_1(0.0000125);

      setValue_Dair_1(0.0587535);
      setDefault_Dair_1(0.0587535);

      setValue_Dwater_1(0.0000086675);
      setDefault_Dwater_1(0.0000086675);

      setValue_DHvb_1(12239.1);
      setDefault_DHvb_1(12239.1);

      setValue_Tc_1(720.0);
      setDefault_Tc_1(720.0);

      setValue_Tb_1(495.0);
      setDefault_Tb_1(495.0);

      setValue_MW_1(137.14);
      setDefault_MW_1(137.14);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(null);
      setDefault_Rfc_1(null);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(260.8);
      setDefault_Koc_1(260.8);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Nonane, n-") {
      setValue_S_1(0.22);
      setDefault_S_1(0.22);

      setValue_Hc_1(3.4);
      setDefault_Hc_1(3.4);

      setValue_Dair_1(0.051432);
      setDefault_Dair_1(0.051432);

      setValue_Dwater_1(0.000006769);
      setDefault_Dwater_1(0.000006769);

      setValue_DHvb_1(11082.45);
      setDefault_DHvb_1(11082.45);

      setValue_Tc_1(594.0);
      setDefault_Tc_1(594.0);

      setValue_Tb_1(423.8);
      setDefault_Tb_1(423.8);

      setValue_MW_1(128.26);
      setDefault_MW_1(128.26);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.02);
      setDefault_Rfc_1(0.02);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(80030);
      setDefault_Koc_1(80030);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Pentane, n-") {
      setValue_S_1(38.0);
      setDefault_S_1(38.0);

      setValue_Hc_1(1.25);
      setDefault_Hc_1(1.25);

      setValue_Dair_1(0.0821293);
      setDefault_Dair_1(0.0821293);

      setValue_Dwater_1(0.0000087974);
      setDefault_Dwater_1(0.0000087974);

      setValue_DHvb_1(6155.06);
      setDefault_DHvb_1(6155.06);

      setValue_Tc_1(469.7);
      setDefault_Tc_1(469.7);

      setValue_Tb_1(309.0);
      setDefault_Tb_1(309.0);

      setValue_MW_1(72.151);
      setDefault_MW_1(72.151);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(1.0);
      setDefault_Rfc_1(1.0);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(874.5);
      setDefault_Koc_1(874.5);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Phosgene") {
      setValue_S_1(6825.5);
      setDefault_S_1(6825.5);

      setValue_Hc_1(0.0167);
      setDefault_Hc_1(0.0167);

      setValue_Dair_1(0.0893282);
      setDefault_Dair_1(0.0893282);

      setValue_Dwater_1(0.0000117);
      setDefault_Dwater_1(0.0000117);

      setValue_DHvb_1(7352.39);
      setDefault_DHvb_1(7352.39);

      setValue_Tc_1(455.0);
      setDefault_Tc_1(455.0);

      setValue_Tb_1(281.2);
      setDefault_Tb_1(281.2);

      setValue_MW_1(98.917);
      setDefault_MW_1(98.917);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.0003);
      setDefault_Rfc_1(0.0003);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(2.01);
      setDefault_Koc_1(2.01);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Propionaldehyde") {
      setValue_S_1(306000);
      setDefault_S_1(306000);

      setValue_Hc_1(0.0000734);
      setDefault_Hc_1(0.0000734);

      setValue_Dair_1(0.1103767);
      setDefault_Dair_1(0.1103767);

      setValue_Dwater_1(0.0000122);
      setDefault_Dwater_1(0.0000122);

      setValue_DHvb_1(7074.62);
      setDefault_DHvb_1(7074.62);

      setValue_Tc_1(496.0);
      setDefault_Tc_1(496.0);

      setValue_Tb_1(321.0);
      setDefault_Tb_1(321.0);

      setValue_MW_1(58.081);
      setDefault_MW_1(58.081);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.008);
      setDefault_Rfc_1(0.008);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(10.52);
      setDefault_Koc_1(10.52);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Propyl benzene") {
      setValue_S_1(52.2);
      setDefault_S_1(52.2);

      setValue_Hc_1(0.0105);
      setDefault_Hc_1(0.0105);

      setValue_Dair_1(0.0601558);
      setDefault_Dair_1(0.0601558);

      setValue_Dwater_1(0.000007831);
      setDefault_Dwater_1(0.000007831);

      setValue_DHvb_1(9123);
      setDefault_DHvb_1(9123);

      setValue_Tc_1(630.0);
      setDefault_Tc_1(630.0);

      setValue_Tb_1(432.2);
      setDefault_Tb_1(432.2);

      setValue_MW_1(120.2);
      setDefault_MW_1(120.2);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(1.0);
      setDefault_Rfc_1(1.0);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(1593);
      setDefault_Koc_1(1593);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Propylene") {
      setValue_S_1(200.0);
      setDefault_S_1(200.0);

      setValue_Hc_1(0.196);
      setDefault_Hc_1(0.196);

      setValue_Dair_1(0.1096967);
      setDefault_Dair_1(0.1096967);

      setValue_Dwater_1(0.0000107);
      setDefault_Dwater_1(0.0000107);

      setValue_DHvb_1(4402.41);
      setDefault_DHvb_1(4402.41);

      setValue_Tc_1(364.95);
      setDefault_Tc_1(364.95);

      setValue_Tb_1(225.6);
      setDefault_Tb_1(225.6);

      setValue_MW_1(42.081);
      setDefault_MW_1(42.081);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(3.0);
      setDefault_Rfc_1(3.0);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(34.34);
      setDefault_Koc_1(34.34);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Propylene Glycol Monomethyl Ether") {
      setValue_S_1(1000000);
      setDefault_S_1(1000000);

      setValue_Hc_1(0.00000092);
      setDefault_Hc_1(0.00000092);

      setValue_Dair_1(0.083145);
      setDefault_Dair_1(0.083145);

      setValue_Dwater_1(0.0000099604);
      setDefault_Dwater_1(0.0000099604);

      setValue_DHvb_1(7795.93344);
      setDefault_DHvb_1(7795.93344);

      setValue_Tc_1(588.225);
      setDefault_Tc_1(588.225);

      setValue_Tb_1(392.15);
      setDefault_Tb_1(392.15);

      setValue_MW_1(90.123);
      setDefault_MW_1(90.123);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(2.0);
      setDefault_Rfc_1(2.0);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(1.419);
      setDefault_Koc_1(1.419);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Propylene Oxide") {
      setValue_S_1(590000);
      setDefault_S_1(590000);

      setValue_Hc_1(0.0000696);
      setDefault_Hc_1(0.0000696);

      setValue_Dair_1(0.1085105);
      setDefault_Dair_1(0.1085105);

      setValue_Dwater_1(0.0000119);
      setDefault_Dwater_1(0.0000119);

      setValue_DHvb_1(6621.12);
      setDefault_DHvb_1(6621.12);

      setValue_Tc_1(482.1);
      setDefault_Tc_1(482.1);

      setValue_Tb_1(308.0);
      setDefault_Tb_1(308.0);

      setValue_MW_1(58.081);
      setDefault_MW_1(58.081);

      setValue_IUR_1(0.0000037);
      setDefault_IUR_1(0.0000037);

      setValue_Rfc_1(0.03);
      setDefault_Rfc_1(0.03);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(7.097);
      setDefault_Koc_1(7.097);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Pyrene") {
      setValue_S_1(0.135);
      setDefault_S_1(0.135);

      setValue_Hc_1(0.0000119);
      setDefault_Hc_1(0.0000119);

      setValue_Dair_1(0.0277873);
      setDefault_Dair_1(0.0277873);

      setValue_Dwater_1(0.0000072479);
      setDefault_Dwater_1(0.0000072479);

      setValue_DHvb_1(14370);
      setDefault_DHvb_1(14370);

      setValue_Tc_1(936.0);
      setDefault_Tc_1(936.0);

      setValue_Tb_1(677.0);
      setDefault_Tb_1(677.0);

      setValue_MW_1(202.26);
      setDefault_MW_1(202.26);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(null);
      setDefault_Rfc_1(null);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(17180);
      setDefault_Koc_1(17180);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Pyridine") {
      setValue_S_1(1000000);
      setDefault_S_1(1000000);

      setValue_Hc_1(0.000011);
      setDefault_Hc_1(0.000011);

      setValue_Dair_1(0.0930883);
      setDefault_Dair_1(0.0930883);

      setValue_Dwater_1(0.0000109);
      setDefault_Dwater_1(0.0000109);

      setValue_DHvb_1(35.1);
      setDefault_DHvb_1(35.1);

      setValue_Tc_1(617.2);
      setDefault_Tc_1(617.2);

      setValue_Tb_1(388.2);
      setDefault_Tb_1(388.2);

      setValue_MW_1(79.102);
      setDefault_MW_1(79.102);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(null);
      setDefault_Rfc_1(null);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(28.91);
      setDefault_Koc_1(28.91);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Styrene") {
      setValue_S_1(310.0);
      setDefault_S_1(310.0);

      setValue_Hc_1(0.00275);
      setDefault_Hc_1(0.00275);

      setValue_Dair_1(0.071114);
      setDefault_Dair_1(0.071114);

      setValue_Dwater_1(0.0000087838);
      setDefault_Dwater_1(0.0000087838);

      setValue_DHvb_1(8737);
      setDefault_DHvb_1(8737);

      setValue_Tc_1(636.0);
      setDefault_Tc_1(636.0);

      setValue_Tb_1(418.0);
      setDefault_Tb_1(418.0);

      setValue_MW_1(104.15);
      setDefault_MW_1(104.15);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(1.0);
      setDefault_Rfc_1(1.0);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(363);
      setDefault_Koc_1(363);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Tetrachloroethane, 1,1,1,2-") {
      setValue_S_1(1070);
      setDefault_S_1(1070);

      setValue_Hc_1(0.0025);
      setDefault_Hc_1(0.0025);

      setValue_Dair_1(0.0481761);
      setDefault_Dair_1(0.0481761);

      setValue_Dwater_1(0.0000090977);
      setDefault_Dwater_1(0.0000090977);

      setValue_DHvb_1(9768.282525);
      setDefault_DHvb_1(9768.282525);

      setValue_Tc_1(624.0);
      setDefault_Tc_1(624.0);

      setValue_Tb_1(403.5);
      setDefault_Tb_1(403.5);

      setValue_MW_1(167.85);
      setDefault_MW_1(167.85);

      setValue_IUR_1(0.0000074);
      setDefault_IUR_1(0.0000074);

      setValue_Rfc_1(null);
      setDefault_Rfc_1(null);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(348.8);
      setDefault_Koc_1(348.8);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Tetrachloroethane, 1,1,2,2-") {
      setValue_S_1(2830);
      setDefault_S_1(2830);

      setValue_Hc_1(0.000367);
      setDefault_Hc_1(0.000367);

      setValue_Dair_1(0.0489206);
      setDefault_Dair_1(0.0489206);

      setValue_Dwater_1(0.0000092902);
      setDefault_Dwater_1(0.0000092902);

      setValue_DHvb_1(8996);
      setDefault_DHvb_1(8996);

      setValue_Tc_1(661.15);
      setDefault_Tc_1(661.15);

      setValue_Tb_1(419.5);
      setDefault_Tb_1(419.5);

      setValue_MW_1(167.85);
      setDefault_MW_1(167.85);

      setValue_IUR_1(0.000058);
      setDefault_IUR_1(0.000058);

      setValue_Rfc_1(null);
      setDefault_Rfc_1(null);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(118.5);
      setDefault_Koc_1(118.5);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Tetrachloroethylene") {
      setValue_S_1(206.0);
      setDefault_S_1(206.0);

      setValue_Hc_1(0.0177);
      setDefault_Hc_1(0.0177);

      setValue_Dair_1(0.0504664);
      setDefault_Dair_1(0.0504664);

      setValue_Dwater_1(0.0000094551);
      setDefault_Dwater_1(0.0000094551);

      setValue_DHvb_1(8288);
      setDefault_DHvb_1(8288);

      setValue_Tc_1(620.2);
      setDefault_Tc_1(620.2);

      setValue_Tb_1(394.3);
      setDefault_Tb_1(394.3);

      setValue_MW_1(165.83);
      setDefault_MW_1(165.83);

      setValue_IUR_1(0.00000026);
      setDefault_IUR_1(0.00000026);

      setValue_Rfc_1(0.04);
      setDefault_Rfc_1(0.04);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(892.2);
      setDefault_Koc_1(892.2);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Tetrafluoroethane, 1,1,1,2-") {
      setValue_S_1(2040);
      setDefault_S_1(2040);

      setValue_Hc_1(0.05);
      setDefault_Hc_1(0.05);

      setValue_Dair_1(0.0823066);
      setDefault_Dair_1(0.0823066);

      setValue_Dwater_1(0.0000106);
      setDefault_Dwater_1(0.0000106);

      setValue_DHvb_1(5933.96);
      setDefault_DHvb_1(5933.96);

      setValue_Tc_1(624.0);
      setDefault_Tc_1(624.0);

      setValue_Tb_1(403.5);
      setDefault_Tb_1(403.5);

      setValue_MW_1(102.03);
      setDefault_MW_1(102.03);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(80.0);
      setDefault_Rfc_1(80.0);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(28.69);
      setDefault_Koc_1(28.69);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Tetrahydrofuran") {
      setValue_S_1(1000000);
      setDefault_S_1(1000000);

      setValue_Hc_1(0.0000705);
      setDefault_Hc_1(0.0000705);

      setValue_Dair_1(0.0993751);
      setDefault_Dair_1(0.0993751);

      setValue_Dwater_1(0.0000108);
      setDefault_Dwater_1(0.0000108);

      setValue_DHvb_1(7073.991);
      setDefault_DHvb_1(7073.991);

      setValue_Tc_1(541.15);
      setDefault_Tc_1(541.15);

      setValue_Tb_1(339.0);
      setDefault_Tb_1(339.0);

      setValue_MW_1(72.108);
      setDefault_MW_1(72.108);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(2.0);
      setDefault_Rfc_1(2.0);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(12.27);
      setDefault_Koc_1(12.27);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Titanium Tetrachloride") {
      setValue_S_1(null);
      setDefault_S_1(null);

      setValue_Hc_1(null);
      setDefault_Hc_1(null);

      setValue_Dair_1(0.0379716);
      setDefault_Dair_1(0.0379716);

      setValue_Dwater_1(0.0000090633);
      setDefault_Dwater_1(0.0000090633);

      setValue_DHvb_1(8646.2252);
      setDefault_DHvb_1(8646.2252);

      setValue_Tc_1(643.15);
      setDefault_Tc_1(643.15);

      setValue_Tb_1(421.15);
      setDefault_Tb_1(421.15);

      setValue_MW_1(189.679);
      setDefault_MW_1(189.679);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.0001);
      setDefault_Rfc_1(0.0001);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(18.85);
      setDefault_Koc_1(18.85);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Toluene") {
      setValue_S_1(526.0);
      setDefault_S_1(526.0);

      setValue_Hc_1(0.00664);
      setDefault_Hc_1(0.00664);

      setValue_Dair_1(0.0778039);
      setDefault_Dair_1(0.0778039);

      setValue_Dwater_1(0.0000092043);
      setDefault_Dwater_1(0.0000092043);

      setValue_DHvb_1(7930);
      setDefault_DHvb_1(7930);

      setValue_Tc_1(591.79);
      setDefault_Tc_1(591.79);

      setValue_Tb_1(383.6);
      setDefault_Tb_1(383.6);

      setValue_MW_1(92.142);
      setDefault_MW_1(92.142);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(5.0);
      setDefault_Rfc_1(5.0);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(233.9);
      setDefault_Koc_1(233.9);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Trichloro,2,2-trifluoroethane, 1,1,2-") {
      setValue_S_1(170.0);
      setDefault_S_1(170.0);

      setValue_Hc_1(0.526);
      setDefault_Hc_1(0.526);

      setValue_Dair_1(0.0375658);
      setDefault_Dair_1(0.0375658);

      setValue_Dwater_1(0.000008592);
      setDefault_Dwater_1(0.000008592);

      setValue_DHvb_1(6462.56);
      setDefault_DHvb_1(6462.56);

      setValue_Tc_1(487.3);
      setDefault_Tc_1(487.3);

      setValue_Tb_1(320.7);
      setDefault_Tb_1(320.7);

      setValue_MW_1(187.38);
      setDefault_MW_1(187.38);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(5.0);
      setDefault_Rfc_1(5.0);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(552.3);
      setDefault_Koc_1(552.3);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Trichlorobenzene, 1,2,3-") {
      setValue_S_1(18.0);
      setDefault_S_1(18.0);

      setValue_Hc_1(0.00125);
      setDefault_Hc_1(0.00125);

      setValue_Dair_1(0.03953);
      setDefault_Dair_1(0.03953);

      setValue_Dwater_1(0.0000083836);
      setDefault_Dwater_1(0.0000083836);

      setValue_DHvb_1(12611.53);
      setDefault_DHvb_1(12611.53);

      setValue_Tc_1(762.5);
      setDefault_Tc_1(762.5);

      setValue_Tb_1(491.5);
      setDefault_Tb_1(491.5);

      setValue_MW_1(181.45);
      setDefault_MW_1(181.45);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(null);
      setDefault_Rfc_1(null);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(2040);
      setDefault_Koc_1(2040);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Trichlorobenzene, 1,2,4-") {
      setValue_S_1(49.0);
      setDefault_S_1(49.0);

      setValue_Hc_1(0.00142);
      setDefault_Hc_1(0.00142);

      setValue_Dair_1(0.0395992);
      setDefault_Dair_1(0.0395992);

      setValue_Dwater_1(0.0000084033);
      setDefault_Dwater_1(0.0000084033);

      setValue_DHvb_1(10471);
      setDefault_DHvb_1(10471);

      setValue_Tc_1(725.0);
      setDefault_Tc_1(725.0);

      setValue_Tb_1(486.5);
      setDefault_Tb_1(486.5);

      setValue_MW_1(181.45);
      setDefault_MW_1(181.45);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.002);
      setDefault_Rfc_1(0.002);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(1964);
      setDefault_Koc_1(1964);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Trichloroethane, 1,1,1-") {
      setValue_S_1(1290);
      setDefault_S_1(1290);

      setValue_Hc_1(0.0172);
      setDefault_Hc_1(0.0172);

      setValue_Dair_1(0.0648174);
      setDefault_Dair_1(0.0648174);

      setValue_Dwater_1(0.000009599);
      setDefault_Dwater_1(0.000009599);

      setValue_DHvb_1(7136);
      setDefault_DHvb_1(7136);

      setValue_Tc_1(545.0);
      setDefault_Tc_1(545.0);

      setValue_Tb_1(347.0);
      setDefault_Tb_1(347.0);

      setValue_MW_1(133.41);
      setDefault_MW_1(133.41);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(5.0);
      setDefault_Rfc_1(5.0);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(144.8);
      setDefault_Koc_1(144.8);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Trichloroethane, 1,1,2-") {
      setValue_S_1(4590);
      setDefault_S_1(4590);

      setValue_Hc_1(0.000824);
      setDefault_Hc_1(0.000824);

      setValue_Dair_1(0.0668904);
      setDefault_Dair_1(0.0668904);

      setValue_Dwater_1(0.00001);
      setDefault_Dwater_1(0.00001);

      setValue_DHvb_1(8322);
      setDefault_DHvb_1(8322);

      setValue_Tc_1(602.0);
      setDefault_Tc_1(602.0);

      setValue_Tb_1(386.8);
      setDefault_Tb_1(386.8);

      setValue_MW_1(133.41);
      setDefault_MW_1(133.41);

      setValue_IUR_1(0.000016);
      setDefault_IUR_1(0.000016);

      setValue_Rfc_1(0.0002);
      setDefault_Rfc_1(0.0002);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(43.64);
      setDefault_Koc_1(43.64);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Trichloroethylene") {
      setValue_S_1(1280);
      setDefault_S_1(1280);

      setValue_Hc_1(0.00985);
      setDefault_Hc_1(0.00985);

      setValue_Dair_1(0.0686618);
      setDefault_Dair_1(0.0686618);

      setValue_Dwater_1(0.0000102);
      setDefault_Dwater_1(0.0000102);

      setValue_DHvb_1(7505);
      setDefault_DHvb_1(7505);

      setValue_Tc_1(544.2);
      setDefault_Tc_1(544.2);

      setValue_Tb_1(360.2);
      setDefault_Tb_1(360.2);

      setValue_MW_1(131.39);
      setDefault_MW_1(131.39);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.002);
      setDefault_Rfc_1(0.002);

      setValue_Mut_1("Yes");
      setDefault_Mut_1("Yes");

      setValue_Koc_1(125.9);
      setDefault_Koc_1(125.9);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Trichlorofluoromethane") {
      setValue_S_1(1100);
      setDefault_S_1(1100);

      setValue_Hc_1(0.097);
      setDefault_Hc_1(0.097);

      setValue_Dair_1(0.065356);
      setDefault_Dair_1(0.065356);

      setValue_Dwater_1(0.00001);
      setDefault_Dwater_1(0.00001);

      setValue_DHvb_1(5998.9);
      setDefault_DHvb_1(5998.9);

      setValue_Tc_1(471.0);
      setDefault_Tc_1(471.0);

      setValue_Tb_1(296.7);
      setDefault_Tb_1(296.7);

      setValue_MW_1(137.37);
      setDefault_MW_1(137.37);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(null);
      setDefault_Rfc_1(null);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(156.8);
      setDefault_Koc_1(156.8);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Trichloropropane, 1,2,3-") {
      setValue_S_1(1750);
      setDefault_S_1(1750);

      setValue_Hc_1(0.000343);
      setDefault_Hc_1(0.000343);

      setValue_Dair_1(0.0574661);
      setDefault_Dair_1(0.0574661);

      setValue_Dwater_1(0.0000092411);
      setDefault_Dwater_1(0.0000092411);

      setValue_DHvb_1(9171);
      setDefault_DHvb_1(9171);

      setValue_Tc_1(652.0);
      setDefault_Tc_1(652.0);

      setValue_Tb_1(430.0);
      setDefault_Tb_1(430.0);

      setValue_MW_1(147.43);
      setDefault_MW_1(147.43);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.0003);
      setDefault_Rfc_1(0.0003);

      setValue_Mut_1("Yes");
      setDefault_Mut_1("Yes");

      setValue_Koc_1(93.27);
      setDefault_Koc_1(93.27);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Triethylamine") {
      setValue_S_1(68600);
      setDefault_S_1(68600);

      setValue_Hc_1(0.000149);
      setDefault_Hc_1(0.000149);

      setValue_Dair_1(0.0663631);
      setDefault_Dair_1(0.0663631);

      setValue_Dwater_1(0.0000078576);
      setDefault_Dwater_1(0.0000078576);

      setValue_DHvb_1(8095.2);
      setDefault_DHvb_1(8095.2);

      setValue_Tc_1(535.6);
      setDefault_Tc_1(535.6);

      setValue_Tb_1(362.0);
      setDefault_Tb_1(362.0);

      setValue_MW_1(101.19);
      setDefault_MW_1(101.19);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1();
      setDefault_Rfc_1();

      setValue_Mut_1(0.007);
      setDefault_Mut_1(0.007);

      setValue_Koc_1(45.9);
      setDefault_Koc_1(45.9);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Trifluoroethane, 1,1,1-") {
      setValue_S_1(760.9);
      setDefault_S_1(760.9);

      setValue_Hc_1(0.77);
      setDefault_Hc_1(0.77);

      setValue_Dair_1(0.0990283);
      setDefault_Dair_1(0.0990283);

      setValue_Dwater_1(0.0000116);
      setDefault_Dwater_1(0.0000116);

      setValue_DHvb_1(4.58891);
      setDefault_DHvb_1(4.58891);

      setValue_Tc_1(345.88);
      setDefault_Tc_1(345.88);

      setValue_Tb_1(228.15);
      setDefault_Tb_1(228.15);

      setValue_MW_1(84.041);
      setDefault_MW_1(84.041);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(20.0);
      setDefault_Rfc_1(20.0);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(32.34);
      setDefault_Koc_1(32.34);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Trimethylbenzene, 1,2,3-") {
      setValue_S_1(75.2);
      setDefault_S_1(75.2);

      setValue_Hc_1(0.00436);
      setDefault_Hc_1(0.00436);

      setValue_Dair_1(0.0612535);
      setDefault_Dair_1(0.0612535);

      setValue_Dwater_1(0.0000080214);
      setDefault_Dwater_1(0.0000080214);

      setValue_DHvb_1(11715.39);
      setDefault_DHvb_1(11715.39);

      setValue_Tc_1(664.5);
      setDefault_Tc_1(664.5);

      setValue_Tb_1(449.1);
      setDefault_Tb_1(449.1);

      setValue_MW_1(120.2);
      setDefault_MW_1(120.2);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.06);
      setDefault_Rfc_1(0.06);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(1500);
      setDefault_Koc_1(1500);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Trimethylbenzene, 1,2,4-") {
      setValue_S_1(57.0);
      setDefault_S_1(57.0);

      setValue_Hc_1(0.00616);
      setDefault_Hc_1(0.00616);

      setValue_Dair_1(0.0606754);
      setDefault_Dair_1(0.0606754);

      setValue_Dwater_1(0.0000079209);
      setDefault_Dwater_1(0.0000079209);

      setValue_DHvb_1(9368.8);
      setDefault_DHvb_1(9368.8);

      setValue_Tc_1(649.17);
      setDefault_Tc_1(649.17);

      setValue_Tb_1(442.3);
      setDefault_Tb_1(442.3);

      setValue_MW_1(120.2);
      setDefault_MW_1(120.2);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.06);
      setDefault_Rfc_1(0.06);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(1413);
      setDefault_Koc_1(1413);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Trimethylbenzene, 1,3,5-") {
      setValue_S_1(48.2);
      setDefault_S_1(48.2);

      setValue_Hc_1(0.00877);
      setDefault_Hc_1(0.00877);

      setValue_Dair_1(0.0602254);
      setDefault_Dair_1(0.0602254);

      setValue_Dwater_1(0.000007843);
      setDefault_Dwater_1(0.000007843);

      setValue_DHvb_1(9321);
      setDefault_DHvb_1(9321);

      setValue_Tc_1(637.25);
      setDefault_Tc_1(637.25);

      setValue_Tb_1(437.7);
      setDefault_Tb_1(437.7);

      setValue_MW_1(120.2);
      setDefault_MW_1(120.2);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.06);
      setDefault_Rfc_1(0.06);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(928.6);
      setDefault_Koc_1(928.6);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Vinyl Acetate") {
      setValue_S_1(20000);
      setDefault_S_1(20000);

      setValue_Hc_1(0.000511);
      setDefault_Hc_1(0.000511);

      setValue_Dair_1(0.0849016);
      setDefault_Dair_1(0.0849016);

      setValue_Dwater_1(0.00001);
      setDefault_Dwater_1(0.00001);

      setValue_DHvb_1(7800);
      setDefault_DHvb_1(7800);

      setValue_Tc_1(519.13);
      setDefault_Tc_1(519.13);

      setValue_Tb_1(345.5);
      setDefault_Tb_1(345.5);

      setValue_MW_1(86.091);
      setDefault_MW_1(86.091);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.2);
      setDefault_Rfc_1(0.2);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(18.34);
      setDefault_Koc_1(18.34);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Vinyl Bromide") {
      setValue_S_1(7600);
      setDefault_S_1(7600);

      setValue_Hc_1(0.0123);
      setDefault_Hc_1(0.0123);

      setValue_Dair_1(0.0862238);
      setDefault_Dair_1(0.0862238);

      setValue_Dwater_1(0.0000117);
      setDefault_Dwater_1(0.0000117);

      setValue_DHvb_1(5397.92);
      setDefault_DHvb_1(5397.92);

      setValue_Tc_1(463.51);
      setDefault_Tc_1(463.51);

      setValue_Tb_1(288.8);
      setDefault_Tb_1(288.8);

      setValue_MW_1(106.95);
      setDefault_MW_1(106.95);

      setValue_IUR_1(0.000032);
      setDefault_IUR_1(0.000032);

      setValue_Rfc_1(0.003);
      setDefault_Rfc_1(0.003);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(23.03);
      setDefault_Koc_1(23.03);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Vinyl Chloride") {
      setValue_S_1(8800);
      setDefault_S_1(8800);

      setValue_Hc_1(0.0278);
      setDefault_Hc_1(0.0278);

      setValue_Dair_1(0.1071202);
      setDefault_Dair_1(0.1071202);

      setValue_Dwater_1(0.000012);
      setDefault_Dwater_1(0.000012);

      setValue_DHvb_1(5250);
      setDefault_DHvb_1(5250);

      setValue_Tc_1(432.0);
      setDefault_Tc_1(432.0);

      setValue_Tb_1(259.7);
      setDefault_Tb_1(259.7);

      setValue_MW_1(62.499);
      setDefault_MW_1(62.499);

      setValue_IUR_1(0.0000044);
      setDefault_IUR_1(0.0000044);

      setValue_Rfc_1(0.1);
      setDefault_Rfc_1(0.1);

      setValue_Mut_1("VC");
      setDefault_Mut_1("VC");

      setValue_Koc_1(25.44);
      setDefault_Koc_1(25.44);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Xylene, m-") {
      setValue_S_1(161.0);
      setDefault_S_1(161.0);

      setValue_Hc_1(0.00718);
      setDefault_Hc_1(0.00718);

      setValue_Dair_1(0.0683659);
      setDefault_Dair_1(0.0683659);

      setValue_Dwater_1(0.0000084394);
      setDefault_Dwater_1(0.0000084394);

      setValue_DHvb_1(8523);
      setDefault_DHvb_1(8523);

      setValue_Tc_1(617.05);
      setDefault_Tc_1(617.05);

      setValue_Tb_1(412.1);
      setDefault_Tb_1(412.1);

      setValue_MW_1(106.17);
      setDefault_MW_1(106.17);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.1);
      setDefault_Rfc_1(0.1);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(598.2);
      setDefault_Koc_1(598.2);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Xylene, o-") {
      setValue_S_1(178.0);
      setDefault_S_1(178.0);

      setValue_Hc_1(0.00518);
      setDefault_Hc_1(0.00518);

      setValue_Dair_1(0.0689201);
      setDefault_Dair_1(0.0689201);

      setValue_Dwater_1(0.0000085315);
      setDefault_Dwater_1(0.0000085315);

      setValue_DHvb_1(8661);
      setDefault_DHvb_1(8661);

      setValue_Tc_1(630.3);
      setDefault_Tc_1(630.3);

      setValue_Tb_1(411.5);
      setDefault_Tb_1(411.5);

      setValue_MW_1(106.17);
      setDefault_MW_1(106.17);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.1);
      setDefault_Rfc_1(0.1);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(552.3);
      setDefault_Koc_1(552.3);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Xylene, P-") {
      setValue_S_1(162.0);
      setDefault_S_1(162.0);

      setValue_Hc_1(0.0069);
      setDefault_Hc_1(0.0069);

      setValue_Dair_1(0.0682485);
      setDefault_Dair_1(0.0682485);

      setValue_Dwater_1(0.0000084199);
      setDefault_Dwater_1(0.0000084199);

      setValue_DHvb_1(8525);
      setDefault_DHvb_1(8525);

      setValue_Tc_1(616.2);
      setDefault_Tc_1(616.2);

      setValue_Tb_1(411.3);
      setDefault_Tb_1(411.3);

      setValue_MW_1(106.17);
      setDefault_MW_1(106.17);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.1);
      setDefault_Rfc_1(0.1);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(541.4);
      setDefault_Koc_1(541.4);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "Xylenes") {
      setValue_S_1(106.0);
      setDefault_S_1(106.0);

      setValue_Hc_1(0.00663);
      setDefault_Hc_1(0.00663);

      setValue_Dair_1(0.0685148);
      setDefault_Dair_1(0.0685148);

      setValue_Dwater_1(0.0000084641);
      setDefault_Dwater_1(0.0000084641);

      setValue_DHvb_1(8523);
      setDefault_DHvb_1(8523);

      setValue_Tc_1(616.2);
      setDefault_Tc_1(616.2);

      setValue_Tb_1(411.3);
      setDefault_Tb_1(411.3);

      setValue_MW_1(106.17);
      setDefault_MW_1(106.17);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.1);
      setDefault_Rfc_1(0.1);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(552.3);
      setDefault_Koc_1(552.3);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "TPH - Aliph >C05-C06") {
      setValue_S_1(36);
      setDefault_S_1(36);

      setValue_Hc_1(32.47711492);
      setDefault_Hc_1(32.47711492);

      setValue_Dair_1(0.1);
      setDefault_Dair_1(0.1);

      setValue_Dwater_1(0.00001);
      setDefault_Dwater_1(0.00001);

      setValue_DHvb_1(8000);
      setDefault_DHvb_1(8000);

      setValue_Tc_1(500);
      setDefault_Tc_1(500);

      setValue_Tb_1(100);
      setDefault_Tb_1(100);

      setValue_MW_1(81);
      setDefault_MW_1(81);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(18);
      setDefault_Rfc_1(18);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(794.3);
      setDefault_Koc_1(794.3);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "TPH - Aliph >C06-C08") {
      setValue_S_1(36);
      setDefault_S_1(36);

      setValue_Hc_1(32.47711492);
      setDefault_Hc_1(32.47711492);

      setValue_Dair_1(0.1);
      setDefault_Dair_1(0.1);

      setValue_Dwater_1(0.00001);
      setDefault_Dwater_1(0.00001);

      setValue_DHvb_1(8000);
      setDefault_DHvb_1(8000);

      setValue_Tc_1(500);
      setDefault_Tc_1(500);

      setValue_Tb_1(100);
      setDefault_Tb_1(100);

      setValue_MW_1(81);
      setDefault_MW_1(81);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(18);
      setDefault_Rfc_1(18);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(794.3);
      setDefault_Koc_1(794.3);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "TPH - Aliph >C05-C06 (>53% n-hexane)") {
      setValue_S_1(5.4);
      setDefault_S_1(5.4);

      setValue_Hc_1(48.11424433);
      setDefault_Hc_1(48.11424433);

      setValue_Dair_1(0.1);
      setDefault_Dair_1(0.1);

      setValue_Dwater_1(0.00001);
      setDefault_Dwater_1(0.00001);

      setValue_DHvb_1(9000);
      setDefault_DHvb_1(9000);

      setValue_Tc_1(500);
      setDefault_Tc_1(500);

      setValue_Tb_1(100);
      setDefault_Tb_1(100);

      setValue_MW_1(100);
      setDefault_MW_1(100);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.67);
      setDefault_Rfc_1(0.67);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(862.9);
      setDefault_Koc_1(862.9);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "TPH - Aliph >C06-C08 (>53% n-hexane)") {
      setValue_S_1(5.4);
      setDefault_S_1(5.4);

      setValue_Hc_1(48.11424433);
      setDefault_Hc_1(48.11424433);

      setValue_Dair_1(0.1);
      setDefault_Dair_1(0.1);

      setValue_Dwater_1(0.00001);
      setDefault_Dwater_1(0.00001);

      setValue_DHvb_1(10000);
      setDefault_DHvb_1(10000);

      setValue_Tc_1(500);
      setDefault_Tc_1(500);

      setValue_Tb_1(100);
      setDefault_Tb_1(100);

      setValue_MW_1(100);
      setDefault_MW_1(100);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.67);
      setDefault_Rfc_1(0.67);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(862.9);
      setDefault_Koc_1(862.9);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "TPH - Aliph >C08-C10") {
      setValue_S_1(0.43);
      setDefault_S_1(0.43);

      setValue_Hc_1(78.54930121);
      setDefault_Hc_1(78.54930121);

      setValue_Dair_1(0.1);
      setDefault_Dair_1(0.1);

      setValue_Dwater_1(0.00001);
      setDefault_Dwater_1(0.00001);

      setValue_DHvb_1(12000);
      setDefault_DHvb_1(12000);

      setValue_Tc_1(500);
      setDefault_Tc_1(500);

      setValue_Tb_1(100);
      setDefault_Tb_1(100);

      setValue_MW_1(130);
      setDefault_MW_1(130);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.5);
      setDefault_Rfc_1(0.5);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(31, 622.7);
      setDefault_Koc_1(31, 622.7);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "TPH - Aliph >C10-C12") {
      setValue_S_1(0.034);
      setDefault_S_1(0.034);

      setValue_Hc_1(122.2667856);
      setDefault_Hc_1(122.2667856);

      setValue_Dair_1(0.1);
      setDefault_Dair_1(0.1);

      setValue_Dwater_1(0.00001);
      setDefault_Dwater_1(0.00001);

      setValue_DHvb_1(12000);
      setDefault_DHvb_1(12000);

      setValue_Tc_1(500);
      setDefault_Tc_1(500);

      setValue_Tb_1(100);
      setDefault_Tb_1(100);

      setValue_MW_1(160);
      setDefault_MW_1(160);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.5);
      setDefault_Rfc_1(0.5);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(251188.6);
      setDefault_Koc_1(251188.6);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "TPH - Aliph >C12-C16") {
      setValue_S_1(0.00076);
      setDefault_S_1(0.00076);

      setValue_Hc_1(520.9361792);
      setDefault_Hc_1(520.9361792);

      setValue_Dair_1(0.1);
      setDefault_Dair_1(0.1);

      setValue_Dwater_1(0.00001);
      setDefault_Dwater_1(0.00001);

      setValue_DHvb_1(16000);
      setDefault_DHvb_1(16000);

      setValue_Tc_1(500);
      setDefault_Tc_1(500);

      setValue_Tb_1(300);
      setDefault_Tb_1(300);

      setValue_MW_1(200);
      setDefault_MW_1(200);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.5);
      setDefault_Rfc_1(0.5);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(5011872.3);
      setDefault_Koc_1(5011872.3);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "TPH - Aliph >C16-C21") {
      setValue_S_1(0.0000025);
      setDefault_S_1(0.0000025);

      setValue_Hc_1(4899.404766);
      setDefault_Hc_1(4899.404766);

      setValue_Dair_1(0.1);
      setDefault_Dair_1(0.1);

      setValue_Dwater_1(0.00001);
      setDefault_Dwater_1(0.00001);

      setValue_DHvb_1(17000);
      setDefault_DHvb_1(17000);

      setValue_Tc_1(500);
      setDefault_Tc_1(500);

      setValue_Tb_1(300);
      setDefault_Tb_1(300);

      setValue_MW_1(270);
      setDefault_MW_1(270);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(null);
      setDefault_Rfc_1(null);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(630957344.4);
      setDefault_Koc_1(630957344.4);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "TPH - Aliph >C21-C34") {
      setValue_S_1(0.0000025);
      setDefault_S_1(0.0000025);

      setValue_Hc_1(7258.377431);
      setDefault_Hc_1(7258.377431);

      setValue_Dair_1(0.1);
      setDefault_Dair_1(0.1);

      setValue_Dwater_1(0.00001);
      setDefault_Dwater_1(0.00001);

      setValue_DHvb_1(20000);
      setDefault_DHvb_1(20000);

      setValue_Tc_1(500);
      setDefault_Tc_1(500);

      setValue_Tb_1(100);
      setDefault_Tb_1(100);

      setValue_MW_1(400);
      setDefault_MW_1(400);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(null);
      setDefault_Rfc_1(null);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(630957344.4);
      setDefault_Koc_1(630957344.4);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "TPH - Arom >C05-C07") {
      setValue_S_1(1800);
      setDefault_S_1(1800);

      setValue_Hc_1(0.232323065);
      setDefault_Hc_1(0.232323065);

      setValue_Dair_1(0.1);
      setDefault_Dair_1(0.1);

      setValue_Dwater_1(0.00001);
      setDefault_Dwater_1(0.00001);

      setValue_DHvb_1(8000);
      setDefault_DHvb_1(8000);

      setValue_Tc_1(500);
      setDefault_Tc_1(500);

      setValue_Tb_1(100);
      setDefault_Tb_1(100);

      setValue_MW_1(78);
      setDefault_MW_1(78);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.28);
      setDefault_Rfc_1(0.28);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(79.43);
      setDefault_Koc_1(79.43);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "TPH - Arom >C07-C08") {
      setValue_S_1(520);
      setDefault_S_1(520);

      setValue_Hc_1(0.277264942);
      setDefault_Hc_1(0.277264942);

      setValue_Dair_1(0.1);
      setDefault_Dair_1(0.1);

      setValue_Dwater_1(0.00001);
      setDefault_Dwater_1(0.00001);

      setValue_DHvb_1(10000);
      setDefault_DHvb_1(10000);

      setValue_Tc_1(500);
      setDefault_Tc_1(500);

      setValue_Tb_1(100);
      setDefault_Tb_1(100);

      setValue_MW_1(92);
      setDefault_MW_1(92);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(1.9);
      setDefault_Rfc_1(1.9);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(251.1);
      setDefault_Koc_1(251.1);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "TPH - Arom >C08-C10") {
      setValue_S_1(65);
      setDefault_S_1(65);

      setValue_Hc_1(0.479662005);
      setDefault_Hc_1(0.479662005);

      setValue_Dair_1(0.1);
      setDefault_Dair_1(0.1);

      setValue_Dwater_1(0.00001);
      setDefault_Dwater_1(0.00001);

      setValue_DHvb_1(10000);
      setDefault_DHvb_1(10000);

      setValue_Tc_1(500);
      setDefault_Tc_1(500);

      setValue_Tb_1(300);
      setDefault_Tb_1(300);

      setValue_MW_1(120);
      setDefault_MW_1(120);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.2);
      setDefault_Rfc_1(0.2);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(1584.8);
      setDefault_Koc_1(1584.8);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "TPH - Arom >C10-C12") {
      setValue_S_1(25);
      setDefault_S_1(25);

      setValue_Hc_1(0.135104789);
      setDefault_Hc_1(0.135104789);

      setValue_Dair_1(0.1);
      setDefault_Dair_1(0.1);

      setValue_Dwater_1(0.00001);
      setDefault_Dwater_1(0.00001);

      setValue_DHvb_1(12000);
      setDefault_DHvb_1(12000);

      setValue_Tc_1(500);
      setDefault_Tc_1(500);

      setValue_Tb_1(300);
      setDefault_Tb_1(300);

      setValue_MW_1(130);
      setDefault_MW_1(130);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.2);
      setDefault_Rfc_1(0.2);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(2511.8);
      setDefault_Koc_1(2511.8);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "TPH - Arom >C12-C16") {
      setValue_S_1(5.8);
      setDefault_S_1(5.8);

      setValue_Hc_1(0.051195452);
      setDefault_Hc_1(0.051195452);

      setValue_Dair_1(0.1);
      setDefault_Dair_1(0.1);

      setValue_Dwater_1(0.00001);
      setDefault_Dwater_1(0.00001);

      setValue_DHvb_1(16000);
      setDefault_DHvb_1(16000);

      setValue_Tc_1(500);
      setDefault_Tc_1(500);

      setValue_Tb_1(300);
      setDefault_Tb_1(300);

      setValue_MW_1(150);
      setDefault_MW_1(150);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.2);
      setDefault_Rfc_1(0.2);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(5011.8);
      setDefault_Koc_1(5011.8);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "TPH - Arom >C16-C121") {
      setValue_S_1(0.65);
      setDefault_S_1(0.65);

      setValue_Hc_1(0.013260497);
      setDefault_Hc_1(0.013260497);

      setValue_Dair_1(0.1);
      setDefault_Dair_1(0.1);

      setValue_Dwater_1(0.00001);
      setDefault_Dwater_1(0.00001);

      setValue_DHvb_1(17000);
      setDefault_DHvb_1(17000);

      setValue_Tc_1(500);
      setDefault_Tc_1(500);

      setValue_Tb_1(300);
      setDefault_Tb_1(300);

      setValue_MW_1(190);
      setDefault_MW_1(190);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(null);
      setDefault_Rfc_1(null);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(15848.9);
      setDefault_Koc_1(15848.9);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "TPH - Arom >C21-C35") {
      setValue_S_1(0.0066);
      setDefault_S_1(0.0066);

      setValue_Hc_1(0.000659852);
      setDefault_Hc_1(0.000659852);

      setValue_Dair_1(0.1);
      setDefault_Dair_1(0.1);

      setValue_Dwater_1(0.00001);
      setDefault_Dwater_1(0.00001);

      setValue_DHvb_1(20000);
      setDefault_DHvb_1(20000);

      setValue_Tc_1(500);
      setDefault_Tc_1(500);

      setValue_Tb_1(300);
      setDefault_Tb_1(300);

      setValue_MW_1(240);
      setDefault_MW_1(240);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(null);
      setDefault_Rfc_1(null);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(125892.5);
      setDefault_Koc_1(125892.5);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "TPH, TX1105, C6-C12") {
      setValue_S_1(65);
      setDefault_S_1(65);

      setValue_Hc_1(0.48);
      setDefault_Hc_1(0.48);

      setValue_Dair_1(0.1);
      setDefault_Dair_1(0.1);

      setValue_Dwater_1(0.00001);
      setDefault_Dwater_1(0.00001);

      setValue_DHvb_1(10000);
      setDefault_DHvb_1(10000);

      setValue_Tc_1(500);
      setDefault_Tc_1(500);

      setValue_Tb_1(100);
      setDefault_Tb_1(100);

      setValue_MW_1(120);
      setDefault_MW_1(120);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.2);
      setDefault_Rfc_1(0.2);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(1584.8);
      setDefault_Koc_1(1584.8);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "TPH, TX1105, >C12-C28") {
      setValue_S_1(5.8);
      setDefault_S_1(5.8);

      setValue_Hc_1(0.053);
      setDefault_Hc_1(0.053);

      setValue_Dair_1(0.1);
      setDefault_Dair_1(0.1);

      setValue_Dwater_1(0.00001);
      setDefault_Dwater_1(0.00001);

      setValue_DHvb_1(20000);
      setDefault_DHvb_1(20000);

      setValue_Tc_1(500);
      setDefault_Tc_1(500);

      setValue_Tb_1(100);
      setDefault_Tb_1(100);

      setValue_MW_1(150);
      setDefault_MW_1(150);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.2);
      setDefault_Rfc_1(0.2);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(5011.8);
      setDefault_Koc_1(5011.8);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "TPH, TX1105, >C12-C35") {
      setValue_S_1(5.8);
      setDefault_S_1(5.8);

      setValue_Hc_1(0.053);
      setDefault_Hc_1(0.053);

      setValue_Dair_1(0.1);
      setDefault_Dair_1(0.1);

      setValue_Dwater_1(0.00001);
      setDefault_Dwater_1(0.00001);

      setValue_DHvb_1(20000);
      setDefault_DHvb_1(20000);

      setValue_Tc_1(500);
      setDefault_Tc_1(500);

      setValue_Tb_1(100);
      setDefault_Tb_1(100);

      setValue_MW_1(150);
      setDefault_MW_1(150);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.2);
      setDefault_Rfc_1(0.2);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(5011.8);
      setDefault_Koc_1(5011.8);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    } else if (selectedChem === "TPH, TX1105, >C28-C35") {
      setValue_S_1(5.8);
      setDefault_S_1(5.8);

      setValue_Hc_1(0.053);
      setDefault_Hc_1(0.053);

      setValue_Dair_1(0.1);
      setDefault_Dair_1(0.1);

      setValue_Dwater_1(0.00001);
      setDefault_Dwater_1(0.00001);

      setValue_DHvb_1(20000);
      setDefault_DHvb_1(20000);

      setValue_Tc_1(500);
      setDefault_Tc_1(500);

      setValue_Tb_1(300);
      setDefault_Tb_1(100);

      setValue_MW_1(150);
      setDefault_MW_1(150);

      setValue_IUR_1(null);
      setDefault_IUR_1(null);

      setValue_Rfc_1(0.2);
      setDefault_Rfc_1(0.2);

      setValue_Mut_1("No");
      setDefault_Mut_1("No");

      setValue_Koc_1(5011.8);
      setDefault_Koc_1(5011.8);

      setValue_foc_1(0.0007);
      setDefault_foc_1(0.0007);
    }
  };

  const selectChem2 = (e) => {
    setOption2("none");
    let selectedChem = e.target.value;
    setChem2(selectedChem);

    if (selectedChem === "Acenaphthene") {
      setValue_S_2(3.9);
      setDefault_S_2(3.9);

      setValue_Hc_2(0.000184);
      setDefault_Hc_2(0.000184);

      setValue_Dair_2(0.0506143);
      setDefault_Dair_2(0.0506143);

      setValue_Dwater_2(0.00000833);
      setDefault_Dwater_2(0.00000833);

      setValue_DHvb_2(12155);
      setDefault_DHvb_2(12155);

      setValue_Tc_2(803.15);
      setDefault_Tc_2(803.15);

      setValue_Tb_2(552);
      setDefault_Tb_2(552);

      setValue_MW_2(154.21);
      setDefault_MW_2(154.21);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(null);
      setDefault_Rfc_2(null);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(2522);
      setDefault_Koc_2(2522);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Acetaldehyde") {
      setValue_S_2(1000000);
      setDefault_S_2(1000000);

      setValue_Hc_2(0.0000667);
      setDefault_Hc_2(0.0000667);

      setValue_Dair_2(0.1277026);
      setDefault_Dair_2(0.1277026);

      setValue_Dwater_2(0.0000135);
      setDefault_Dwater_2(0.0000135);

      setValue_DHvb_2(6156.64);
      setDefault_DHvb_2(6156.64);

      setValue_Tc_2(466);
      setDefault_Tc_2(466);

      setValue_Tb_2(293.1);
      setDefault_Tb_2(293.1);

      setValue_MW_2(293.1);
      setDefault_MW_2(293.1);

      setValue_IUR_2(0.0000022);
      setDefault_IUR_2(0.0000022);

      setValue_Rfc_2(0.009);
      setDefault_Rfc_2(0.009);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(3.219);
      setDefault_Koc_2(3.219);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Acetone") {
      setValue_S_2(1000000);
      setDefault_S_2(1000000);

      setValue_Hc_2(0.000035);
      setDefault_Hc_2(0.000035);

      setValue_Dair_2(0.1059215);
      setDefault_Dair_2(0.1059215);

      setValue_Dwater_2(0.0000115);
      setDefault_Dwater_2(0.0000115);

      setValue_DHvb_2(6955);
      setDefault_DHvb_2(6955);

      setValue_Tc_2(508.1);
      setDefault_Tc_2(508.1);

      setValue_Tb_2(328.5);
      setDefault_Tb_2(328.5);

      setValue_MW_2(58.081);
      setDefault_MW_2(58.081);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(31);
      setDefault_Rfc_2(31);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(9.726);
      setDefault_Koc_2(9.726);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Acetonitrile") {
      setValue_S_2(1000000);
      setDefault_S_2(1000000);

      setValue_Hc_2(0.0000345);
      setDefault_Hc_2(0.0000345);

      setValue_Dair_2(0.1339939);
      setDefault_Dair_2(0.1339939);

      setValue_Dwater_2(0.0000141);
      setDefault_Dwater_2(0.0000141);

      setValue_DHvb_2(7110.25);
      setDefault_DHvb_2(7110.25);

      setValue_Tc_2(545.5);
      setDefault_Tc_2(545.5);

      setValue_Tb_2(332.6);
      setDefault_Tb_2(332.6);

      setValue_MW_2(41.053);
      setDefault_MW_2(41.053);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.06);
      setDefault_Rfc_2(0.06);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(13.46);
      setDefault_Koc_2(13.46);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Acetophenone") {
      setValue_S_2(6130);
      setDefault_S_2(6130);

      setValue_Hc_2(0.0000104);
      setDefault_Hc_2(0.0000104);

      setValue_Dair_2(0.0652221);
      setDefault_Dair_2(0.0652221);

      setValue_Dwater_2(0.0000087229);
      setDefault_Dwater_2(0.0000087229);

      setValue_DHvb_2(11731.5);
      setDefault_DHvb_2(11731.5);

      setValue_Tc_2(709.5);
      setDefault_Tc_2(709.5);

      setValue_Tb_2(475.0);
      setDefault_Tb_2(475.0);

      setValue_MW_2(120.15);
      setDefault_MW_2(120.15);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(null);
      setDefault_Rfc_2(null);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(98.77);
      setDefault_Koc_2(98.77);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Acrolein") {
      setValue_S_2(212000);
      setDefault_S_2(212000);

      setValue_Hc_2(0.000122);
      setDefault_Hc_2(0.000122);

      setValue_Dair_2(0.1116862);
      setDefault_Dair_2(0.1116862);

      setValue_Dwater_2(0.0000122);
      setDefault_Dwater_2(0.0000122);

      setValue_DHvb_2(6730.7658);
      setDefault_DHvb_2(6730.7658);

      setValue_Tc_2(506.0);
      setDefault_Tc_2(506.0);

      setValue_Tb_2(325.6);
      setDefault_Tb_2(325.6);

      setValue_MW_2(56.065);
      setDefault_MW_2(56.065);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.00002);
      setDefault_Rfc_2(0.00002);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(4.901);
      setDefault_Koc_2(4.901);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Acrylic Acid") {
      setValue_S_2(1000000);
      setDefault_S_2(1000000);

      setValue_Hc_2(0.00000037);
      setDefault_Hc_2(0.00000037);

      setValue_Dair_2(0.1027173);
      setDefault_Dair_2(0.1027173);

      setValue_Dwater_2(0.000012);
      setDefault_Dwater_2(0.000012);

      setValue_DHvb_2(10955.1);
      setDefault_DHvb_2(10955.1);

      setValue_Tc_2(615.15);
      setDefault_Tc_2(615.15);

      setValue_Tb_2(414.35);
      setDefault_Tb_2(414.35);

      setValue_MW_2(72.064);
      setDefault_MW_2(72.064);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.001);
      setDefault_Rfc_2(0.001);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(2.235);
      setDefault_Koc_2(2.235);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Acrylonitrile") {
      setValue_S_2(74500);
      setDefault_S_2(74500);

      setValue_Hc_2(0.000138);
      setDefault_Hc_2(0.000138);

      setValue_Dair_2(0.1136836);
      setDefault_Dair_2(0.1136836);

      setValue_Dwater_2(0.0000123);
      setDefault_Dwater_2(0.0000123);

      setValue_DHvb_2(7786);
      setDefault_DHvb_2(7786);

      setValue_Tc_2(519.0);
      setDefault_Tc_2(519.0);

      setValue_Tb_2(350.3);
      setDefault_Tb_2(350.3);

      setValue_MW_2(53.064);
      setDefault_MW_2(53.064);

      setValue_IUR_2(0.000068);
      setDefault_IUR_2(0.000068);

      setValue_Rfc_2(0.002);
      setDefault_Rfc_2(0.002);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(28.55);
      setDefault_Koc_2(28.55);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Aldrin") {
      setValue_S_2(0.017);
      setDefault_S_2(0.017);

      setValue_Hc_2(0.000044);
      setDefault_Hc_2(0.000044);

      setValue_Dair_2(0.0228116);
      setDefault_Dair_2(0.0228116);

      setValue_Dwater_2(0.0000058402);
      setDefault_Dwater_2(0.0000058402);

      setValue_DHvb_2(15000);
      setDefault_DHvb_2(15000);

      setValue_Tc_2(627.225);
      setDefault_Tc_2(627.225);

      setValue_Tb_2(418.15);
      setDefault_Tb_2(418.15);

      setValue_MW_2(364.92);
      setDefault_MW_2(364.92);

      setValue_IUR_2(0.0049);
      setDefault_IUR_2(0.0049);

      setValue_Rfc_2(null);
      setDefault_Rfc_2(null);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(437500);
      setDefault_Koc_2(437500);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Allyl Alcohol") {
      setValue_S_2(1000000);
      setDefault_S_2(1000000);

      setValue_Hc_2(0.00000499);
      setDefault_Hc_2(0.00000499);

      setValue_Dair_2(0.1097535);
      setDefault_Dair_2(0.1097535);

      setValue_Dwater_2(0.0000121);
      setDefault_Dwater_2(0.0000121);

      setValue_DHvb_2(9553.84);
      setDefault_DHvb_2(9553.84);

      setValue_Tc_2(539.8);
      setDefault_Tc_2(539.8);

      setValue_Tb_2(370.15);
      setDefault_Tb_2(370.15);

      setValue_MW_2(58.081);
      setDefault_MW_2(58.081);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.0001);
      setDefault_Rfc_2(0.0001);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(4.052);
      setDefault_Koc_2(4.052);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Allyl Chloride") {
      setValue_S_2(3370);
      setDefault_S_2(3370);

      setValue_Hc_2(0.011);
      setDefault_Hc_2(0.011);

      setValue_Dair_2(0.093611);
      setDefault_Dair_2(0.093611);

      setValue_Dwater_2(0.0000108);
      setDefault_Dwater_2(0.0000108);

      setValue_DHvb_2(6936.08);
      setDefault_DHvb_2(6936.08);

      setValue_Tc_2(514.26);
      setDefault_Tc_2(514.26);

      setValue_Tb_2(318.1);
      setDefault_Tb_2(318.1);

      setValue_MW_2(76.526);
      setDefault_MW_2(76.526);

      setValue_IUR_2(0.000006);
      setDefault_IUR_2(0.000006);

      setValue_Rfc_2(0.001);
      setDefault_Rfc_2(0.001);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(47.28);
      setDefault_Koc_2(47.28);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Ammonia") {
      setValue_S_2(482000);
      setDefault_S_2(482000);

      setValue_Hc_2(0.0000161);
      setDefault_Hc_2(0.0000161);

      setValue_Dair_2(0.2305471);
      setDefault_Dair_2(0.2305471);

      setValue_Dwater_2(0.0000223);
      setDefault_Dwater_2(0.0000223);

      setValue_DHvb_2(5581);
      setDefault_DHvb_2(5581);

      setValue_Tc_2(405.55);
      setDefault_Tc_2(405.55);

      setValue_Tb_2(239.8);
      setDefault_Tb_2(239.8);

      setValue_MW_2(17.031);
      setDefault_MW_2(17.031);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.5);
      setDefault_Rfc_2(0.5);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(0.06337);
      setDefault_Koc_2(0.06337);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Amyl Alcohol, tert-") {
      setValue_S_2(110000);
      setDefault_S_2(110000);

      setValue_Hc_2(0.0000138);
      setDefault_Hc_2(0.0000138);

      setValue_Dair_2(0.0785447);
      setDefault_Dair_2(0.0785447);

      setValue_Dwater_2(0.0000091012);
      setDefault_Dwater_2(0.0000091012);

      setValue_DHvb_2(9586.520076);
      setDefault_DHvb_2(9586.520076);

      setValue_Tc_2(545.15);
      setDefault_Tc_2(545.15);

      setValue_Tb_2(375.55);
      setDefault_Tb_2(375.55);

      setValue_MW_2(88.151);
      setDefault_MW_2(88.151);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.003);
      setDefault_Rfc_2(0.003);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(10.14);
      setDefault_Koc_2(10.14);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Anthracene") {
      setValue_S_2(0.0434);
      setDefault_S_2(0.0434);

      setValue_Hc_2(0.0000556);
      setDefault_Hc_2(0.0000556);

      setValue_Dair_2(0.0389732);
      setDefault_Dair_2(0.0389732);

      setValue_Dwater_2(0.0000078523);
      setDefault_Dwater_2(0.0000078523);

      setValue_DHvb_2(13121);
      setDefault_DHvb_2(13121);

      setValue_Tc_2(873.0);
      setDefault_Tc_2(873.0);

      setValue_Tb_2(612.9);
      setDefault_Tb_2(612.9);

      setValue_MW_2(178.24);
      setDefault_MW_2(178.24);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(null);
      setDefault_Rfc_2(null);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(7274);
      setDefault_Koc_2(7274);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Benz[a]anthracene") {
      setValue_S_2(0.0094);
      setDefault_S_2(0.0094);

      setValue_Hc_2(0.000012);
      setDefault_Hc_2(0.000012);

      setValue_Dair_2(0.0261138);
      setDefault_Dair_2(0.0261138);

      setValue_Dwater_2(0.0000067495);
      setDefault_Dwater_2(0.0000067495);

      setValue_DHvb_2(16000);
      setDefault_DHvb_2(16000);

      setValue_Tc_2(1066.125);
      setDefault_Tc_2(1066.125);

      setValue_Tb_2(710.75);
      setDefault_Tb_2(710.75);

      setValue_MW_2(228.3);
      setDefault_MW_2(228.3);

      setValue_IUR_2(0.00006);
      setDefault_IUR_2(0.00006);

      setValue_Rfc_2(null);
      setDefault_Rfc_2(null);

      setValue_Mut_2("Yes");
      setDefault_Mut_2("Yes");

      setValue_Koc_2(99700);
      setDefault_Koc_2(99700);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Benzaldehyde") {
      setValue_S_2(6950);
      setDefault_S_2(6950);

      setValue_Hc_2(0.0000267);
      setDefault_Hc_2(0.0000267);

      setValue_Dair_2(0.074393);
      setDefault_Dair_2(0.074393);

      setValue_Dwater_2(0.0000094627);
      setDefault_Dwater_2(0.0000094627);

      setValue_DHvb_2(11657.8);
      setDefault_DHvb_2(11657.8);

      setValue_Tc_2(695.0);
      setDefault_Tc_2(695.0);

      setValue_Tb_2(452.0);
      setDefault_Tb_2(452.0);

      setValue_MW_2(106.13);
      setDefault_MW_2(106.13);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(null);
      setDefault_Rfc_2(null);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(32.69);
      setDefault_Koc_2(32.69);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Benzene") {
      setValue_S_2(1790);
      setDefault_S_2(1790);

      setValue_Hc_2(0.00555);
      setDefault_Hc_2(0.00555);

      setValue_Dair_2(0.089534);
      setDefault_Dair_2(0.089534);

      setValue_Dwater_2(0.0000103);
      setDefault_Dwater_2(0.0000103);

      setValue_DHvb_2(7342);
      setDefault_DHvb_2(7342);

      setValue_Tc_2(562.16);
      setDefault_Tc_2(562.16);

      setValue_Tb_2(353);
      setDefault_Tb_2(353);

      setValue_MW_2(78.115);
      setDefault_MW_2(78.115);

      setValue_IUR_2(0.0000078);
      setDefault_IUR_2(0.0000078);

      setValue_Rfc_2(0.03);
      setDefault_Rfc_2(0.03);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(70.51);
      setDefault_Koc_2(70.51);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Benzenethiol") {
      setValue_S_2(835.0);
      setDefault_S_2(835.0);

      setValue_Hc_2(0.000335);
      setDefault_Hc_2(0.000335);

      setValue_Dair_2(0.0728564);
      setDefault_Dair_2(0.0728564);

      setValue_Dwater_2(0.0000094506);
      setDefault_Dwater_2(0.0000094506);

      setValue_DHvb_2(11359.51);
      setDefault_DHvb_2(11359.51);

      setValue_Tc_2(663.15);
      setDefault_Tc_2(663.15);

      setValue_Tb_2(442.1);
      setDefault_Tb_2(442.1);

      setValue_MW_2(110.18);
      setDefault_MW_2(110.18);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(null);
      setDefault_Rfc_2(null);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(153.7);
      setDefault_Koc_2(153.7);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Benzyl Chloride") {
      setValue_S_2(525.0);
      setDefault_S_2(525.0);

      setValue_Hc_2(0.000412);
      setDefault_Hc_2(0.000412);

      setValue_Dair_2(0.0633618);
      setDefault_Dair_2(0.0633618);

      setValue_Dwater_2(0.0000088057);
      setDefault_Dwater_2(0.0000088057);

      setValue_DHvb_2(8773.2598);
      setDefault_DHvb_2(8773.2598);

      setValue_Tc_2(685.0);
      setDefault_Tc_2(685.0);

      setValue_Tb_2(452);
      setDefault_Tb_2(452);

      setValue_MW_2(126.59);
      setDefault_MW_2(126.59);

      setValue_IUR_2(0.000049);
      setDefault_IUR_2(0.000049);

      setValue_Rfc_2(0.001);
      setDefault_Rfc_2(0.001);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(99.03);
      setDefault_Koc_2(99.03);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Biphenyl, 1,1'-") {
      setValue_S_2(7.48);
      setDefault_S_2(7.48);

      setValue_Hc_2(0.000308);
      setDefault_Hc_2(0.000308);

      setValue_Dair_2(0.0470592);
      setDefault_Dair_2(0.0470592);

      setValue_Dwater_2(0.0000075618);
      setDefault_Dwater_2(0.0000075618);

      setValue_DHvb_2(10890);
      setDefault_DHvb_2(10890);

      setValue_Tc_2(789.0);
      setDefault_Tc_2(789.0);

      setValue_Tb_2(529.1);
      setDefault_Tb_2(529.1);

      setValue_MW_2(154.21);
      setDefault_MW_2(154.21);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.0004);
      setDefault_Rfc_2(0.0004);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(3019);
      setDefault_Koc_2(3019);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Bis(2-chloro-methylethyl) ether") {
      setValue_S_2(1700);
      setDefault_S_2(1700);

      setValue_Hc_2(0.0000742);
      setDefault_Hc_2(0.0000742);

      setValue_Dair_2(0.0398891);
      setDefault_Dair_2(0.0398891);

      setValue_Dwater_2(0.0000073606);
      setDefault_Dwater_2(0.0000073606);

      setValue_DHvb_2(9694.9215);
      setDefault_DHvb_2(9694.9215);

      setValue_Tc_2(690.0);
      setDefault_Tc_2(690.0);

      setValue_Tb_2(460.0);
      setDefault_Tb_2(460.0);

      setValue_MW_2(171.07);
      setDefault_MW_2(171.07);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(null);
      setDefault_Rfc_2(null);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(160.8);
      setDefault_Koc_2(160.8);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Bis(2-chloroethyl)ether") {
      setValue_S_2(17200);
      setDefault_S_2(17200);

      setValue_Hc_2(0.000017);
      setDefault_Hc_2(0.000017);

      setValue_Dair_2(0.0567192);
      setDefault_Dair_2(0.0567192);

      setValue_Dwater_2(0.000008707);
      setDefault_Dwater_2(0.000008707);

      setValue_DHvb_2(10803);
      setDefault_DHvb_2(10803);

      setValue_Tc_2(659.79);
      setDefault_Tc_2(659.79);

      setValue_Tb_2(451.5);
      setDefault_Tb_2(451.5);

      setValue_MW_2(143.01);
      setDefault_MW_2(143.01);

      setValue_IUR_2(0.00033);
      setDefault_IUR_2(0.00033);

      setValue_Rfc_2(null);
      setDefault_Rfc_2(null);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(35.32);
      setDefault_Koc_2(35.32);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Bromo-2-chloroethane, 1-") {
      setValue_S_2(6900);
      setDefault_S_2(6900);

      setValue_Hc_2(0.000909);
      setDefault_Hc_2(0.000909);

      setValue_Dair_2(0.0659248);
      setDefault_Dair_2(0.0659248);

      setValue_Dwater_2(0.0000108);
      setDefault_Dwater_2(0.0000108);

      setValue_DHvb_2(9107.19);
      setDefault_DHvb_2(9107.19);

      setValue_Tc_2(570.0);
      setDefault_Tc_2(570.0);

      setValue_Tb_2(380.0);
      setDefault_Tb_2(380.0);

      setValue_MW_2(143.41);
      setDefault_MW_2(143.41);

      setValue_IUR_2(0.0006);
      setDefault_IUR_2(0.0006);

      setValue_Rfc_2(null);
      setDefault_Rfc_2(null);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(46.34);
      setDefault_Koc_2(46.34);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Bromobenzene") {
      setValue_S_2(446.0);
      setDefault_S_2(446.0);

      setValue_Hc_2(0.00247);
      setDefault_Hc_2(0.00247);

      setValue_Dair_2(0.0537132);
      setDefault_Dair_2(0.0537132);

      setValue_Dwater_2(0.0000093004);
      setDefault_Dwater_2(0.0000093004);

      setValue_DHvb_2(10628.64);
      setDefault_DHvb_2(10628.64);

      setValue_Tc_2(670.0);
      setDefault_Tc_2(670.0);

      setValue_Tb_2(429.0);
      setDefault_Tb_2(429.0);

      setValue_MW_2(157.01);
      setDefault_MW_2(157.01);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.06);
      setDefault_Rfc_2(0.06);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(393.2);
      setDefault_Koc_2(393.2);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Bromochloromethane") {
      setValue_S_2(16700);
      setDefault_S_2(16700);

      setValue_Hc_2(0.00146);
      setDefault_Hc_2(0.00146);

      setValue_Dair_2(0.078692);
      setDefault_Dair_2(0.078692);

      setValue_Dwater_2(0.0000122);
      setDefault_Dwater_2(0.0000122);

      setValue_DHvb_2(7167.65);
      setDefault_DHvb_2(7167.65);

      setValue_Tc_2(511.5);
      setDefault_Tc_2(511.5);

      setValue_Tb_2(341.0);
      setDefault_Tb_2(341.0);

      setValue_MW_2(129.38);
      setDefault_MW_2(129.38);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.04);
      setDefault_Rfc_2(0.04);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(16.72);
      setDefault_Koc_2(16.72);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Bromodichloromethane") {
      setValue_S_2(3032);
      setDefault_S_2(3032);

      setValue_Hc_2(0.00212);
      setDefault_Hc_2(0.00212);

      setValue_Dair_2(0.0562629);
      setDefault_Dair_2(0.0562629);

      setValue_Dwater_2(0.0000107);
      setDefault_Dwater_2(0.0000107);

      setValue_DHvb_2(7800);
      setDefault_DHvb_2(7800);

      setValue_Tc_2(585.85);
      setDefault_Tc_2(585.85);

      setValue_Tb_2(363.0);
      setDefault_Tb_2(363.0);

      setValue_MW_2(163.83);
      setDefault_MW_2(163.83);

      setValue_IUR_2(0.000037);
      setDefault_IUR_2(0.000037);

      setValue_Rfc_2(null);
      setDefault_Rfc_2(null);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(54.38);
      setDefault_Koc_2(54.38);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Bromoform") {
      setValue_S_2(3100);
      setDefault_S_2(3100);

      setValue_Hc_2(0.000535);
      setDefault_Hc_2(0.000535);

      setValue_Dair_2(0.0357324);
      setDefault_Dair_2(0.0357324);

      setValue_Dwater_2(0.0000104);
      setDefault_Dwater_2(0.0000104);

      setValue_DHvb_2(9472.63236);
      setDefault_DHvb_2(9472.63236);

      setValue_Tc_2(633.375);
      setDefault_Tc_2(633.375);

      setValue_Tb_2(422.25);
      setDefault_Tb_2(422.25);

      setValue_MW_2(252.73);
      setDefault_MW_2(252.73);

      setValue_IUR_2(0.0000011);
      setDefault_IUR_2(0.0000011);

      setValue_Rfc_2(null);
      setDefault_Rfc_2(null);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(120.9);
      setDefault_Koc_2(120.9);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Bromomethane") {
      setValue_S_2(15200);
      setDefault_S_2(15200);

      setValue_Hc_2(0.00734);
      setDefault_Hc_2(0.00734);

      setValue_Dair_2(0.1004976);
      setDefault_Dair_2(0.1004976);

      setValue_Dwater_2(0.0000135);
      setDefault_Dwater_2(0.0000135);

      setValue_DHvb_2(5714);
      setDefault_DHvb_2(5714);

      setValue_Tc_2(467.0);
      setDefault_Tc_2(467.0);

      setValue_Tb_2(276.5);
      setDefault_Tb_2(276.5);

      setValue_MW_2(94.939);
      setDefault_MW_2(94.939);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.005);
      setDefault_Rfc_2(0.005);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(10.77);
      setDefault_Koc_2(10.77);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Butadiene, 1,3-") {
      setValue_S_2(735.0);
      setDefault_S_2(735.0);

      setValue_Hc_2(0.0736);
      setDefault_Hc_2(0.0736);

      setValue_Dair_2(0.1003488);
      setDefault_Dair_2(0.1003488);

      setValue_Dwater_2(0.0000103);
      setDefault_Dwater_2(0.0000103);

      setValue_DHvb_2(5370.33);
      setDefault_DHvb_2(5370.33);

      setValue_Tc_2(425.0);
      setDefault_Tc_2(425.0);

      setValue_Tb_2(268.6);
      setDefault_Tb_2(268.6);

      setValue_MW_2(54.092);
      setDefault_MW_2(54.092);

      setValue_IUR_2(0.00003);
      setDefault_IUR_2(0.00003);

      setValue_Rfc_2(0.002);
      setDefault_Rfc_2(0.002);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(53.3);
      setDefault_Koc_2(53.3);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Butanol, N-") {
      setValue_S_2(63200);
      setDefault_S_2(63200);

      setValue_Hc_2(0.00000881);
      setDefault_Hc_2(0.00000881);

      setValue_Dair_2(0.0900387);
      setDefault_Dair_2(0.0900387);

      setValue_Dwater_2(0.0000101);
      setDefault_Dwater_2(0.0000101);

      setValue_DHvb_2(134572.18);
      setDefault_DHvb_2(134572.18);

      setValue_Tc_2(586.275);
      setDefault_Tc_2(586.275);

      setValue_Tb_2(390.85);
      setDefault_Tb_2(390.85);

      setValue_MW_2(74.124);
      setDefault_MW_2(74.124);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(null);
      setDefault_Rfc_2(null);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(10.01);
      setDefault_Koc_2(10.01);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Butyl alcohol, sec-") {
      setValue_S_2(181000);
      setDefault_S_2(181000);

      setValue_Hc_2(0.00000906);
      setDefault_Hc_2(0.00000906);

      setValue_Dair_2(0.0898848);
      setDefault_Dair_2(0.0898848);

      setValue_Dwater_2(0.0000101);
      setDefault_Dwater_2(0.0000101);

      setValue_DHvb_2(11875.42312);
      setDefault_DHvb_2(11875.42312);

      setValue_Tc_2(536.2);
      setDefault_Tc_2(536.2);

      setValue_Tb_2(372.65);
      setDefault_Tb_2(372.65);

      setValue_MW_2(74.124);
      setDefault_MW_2(74.124);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(30.0);
      setDefault_Rfc_2(30.0);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(7.097);
      setDefault_Koc_2(7.097);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Butylbenzene, n-") {
      setValue_S_2(11.8);
      setDefault_S_2(11.8);

      setValue_Hc_2(0.0159);
      setDefault_Hc_2(0.0159);

      setValue_Dair_2(0.0527732);
      setDefault_Dair_2(0.0527732);

      setValue_Dwater_2(0.0000073335);
      setDefault_Dwater_2(0.0000073335);

      setValue_DHvb_2(12267.12);
      setDefault_DHvb_2(12267.12);

      setValue_Tc_2(720);
      setDefault_Tc_2(720);

      setValue_Tb_2(456.3);
      setDefault_Tb_2(456.3);

      setValue_MW_2(134.22);
      setDefault_MW_2(134.22);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(null);
      setDefault_Rfc_2(null);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(6324);
      setDefault_Koc_2(6324);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Butylbenzene, sec-") {
      setValue_S_2(17.6);
      setDefault_S_2(17.6);

      setValue_Hc_2(0.0176);
      setDefault_Hc_2(0.0176);

      setValue_Dair_2(0.0527928);
      setDefault_Dair_2(0.0527928);

      setValue_Dwater_2(0.0000073371);
      setDefault_Dwater_2(0.0000073371);

      setValue_DHvb_2(11467.5);
      setDefault_DHvb_2(11467.5);

      setValue_Tc_2(677.25);
      setDefault_Tc_2(677.25);

      setValue_Tb_2(451.5);
      setDefault_Tb_2(451.5);

      setValue_MW_2(134.22);
      setDefault_MW_2(134.22);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(null);
      setDefault_Rfc_2(null);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(9245);
      setDefault_Koc_2(9245);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Butylbenzene, tert-") {
      setValue_S_2(29.5);
      setDefault_S_2(29.5);

      setValue_Hc_2(0.0132);
      setDefault_Hc_2(0.0132);

      setValue_Dair_2(0.0529525);
      setDefault_Dair_2(0.0529525);

      setValue_Dwater_2(0.0000073662);
      setDefault_Dwater_2(0.0000073662);

      setValue_DHvb_2(11405.35);
      setDefault_DHvb_2(11405.35);

      setValue_Tc_2(664.725);
      setDefault_Tc_2(664.725);

      setValue_Tb_2(443.15);
      setDefault_Tb_2(443.15);

      setValue_MW_2(134.22);
      setDefault_MW_2(134.22);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(null);
      setDefault_Rfc_2(null);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(3687);
      setDefault_Koc_2(3687);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Carbon Disulfide") {
      setValue_S_2(2160);
      setDefault_S_2(2160);

      setValue_Hc_2(0.0144);
      setDefault_Hc_2(0.0144);

      setValue_Dair_2(0.1064373);
      setDefault_Dair_2(0.1064373);

      setValue_Dwater_2(0.000013);
      setDefault_Dwater_2(0.000013);

      setValue_DHvb_2(6391);
      setDefault_DHvb_2(6391);

      setValue_Tc_2(552.0);
      setDefault_Tc_2(552.0);

      setValue_Tb_2(319.0);
      setDefault_Tb_2(319.0);

      setValue_MW_2(76.139);
      setDefault_MW_2(76.139);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.7);
      setDefault_Rfc_2(0.7);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(48.23);
      setDefault_Koc_2(48.23);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Carbon Tetrachloride") {
      setValue_S_2(793.0);
      setDefault_S_2(793.0);

      setValue_Hc_2(0.0276);
      setDefault_Hc_2(0.0276);

      setValue_Dair_2(0.0571435);
      setDefault_Dair_2(0.0571435);

      setValue_Dwater_2(0.0000097849);
      setDefault_Dwater_2(0.0000097849);

      setValue_DHvb_2(7127);
      setDefault_DHvb_2(7127);

      setValue_Tc_2(556.6);
      setDefault_Tc_2(556.6);

      setValue_Tb_2(349.8);
      setDefault_Tb_2(349.8);

      setValue_MW_2(153.82);
      setDefault_MW_2(153.82);

      setValue_IUR_2(0.000006);
      setDefault_IUR_2(0.000006);

      setValue_Rfc_2(0.1);
      setDefault_Rfc_2(0.1);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(285.6);
      setDefault_Koc_2(285.6);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Carbonyl Sulfide") {
      setValue_S_2(1220);
      setDefault_S_2(1220);

      setValue_Hc_2(0.61);
      setDefault_Hc_2(0.61);

      setValue_Dair_2(0.1157542);
      setDefault_Dair_2(0.1157542);

      setValue_Dwater_2(0.0000132);
      setDefault_Dwater_2(0.0000132);

      setValue_DHvb_2(4.66);
      setDefault_DHvb_2(4.66);

      setValue_Tc_2(378.15);
      setDefault_Tc_2(378.15);

      setValue_Tb_2(223.0);
      setDefault_Tb_2(223.0);

      setValue_MW_2(60.075);
      setDefault_MW_2(60.075);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.1);
      setDefault_Rfc_2(0.1);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(0.9123);
      setDefault_Koc_2(0.9123);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Chloral Hydrate") {
      setValue_S_2(793000);
      setDefault_S_2(793000);

      setValue_Hc_2(0.00000000571);
      setDefault_Hc_2(0.00000000571);

      setValue_Dair_2(0.0543991);
      setDefault_Dair_2(0.0543991);

      setValue_Dwater_2(0.0000104);
      setDefault_Dwater_2(0.0000104);

      setValue_DHvb_2(7520.55);
      setDefault_DHvb_2(7520.55);

      setValue_Tc_2(556.725);
      setDefault_Tc_2(556.725);

      setValue_Tb_2(371.15);
      setDefault_Tb_2(371.15);

      setValue_MW_2(165.4);
      setDefault_MW_2(165.4);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(null);
      setDefault_Rfc_2(null);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(4.465);
      setDefault_Koc_2(4.465);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Chlordane") {
      setValue_S_2(0.056);
      setDefault_S_2(0.056);

      setValue_Hc_2(0.0000486);
      setDefault_Hc_2(0.0000486);

      setValue_Dair_2(0.021493);
      setDefault_Dair_2(0.021493);

      setValue_Dwater_2(0.0000054477);
      setDefault_Dwater_2(0.0000054477);

      setValue_DHvb_2(14000);
      setDefault_DHvb_2(14000);

      setValue_Tc_2(672.225);
      setDefault_Tc_2(672.225);

      setValue_Tb_2(448.15);
      setDefault_Tb_2(448.15);

      setValue_MW_2(409.78);
      setDefault_MW_2(409.78);

      setValue_IUR_2(0.0001);
      setDefault_IUR_2(0.0001);

      setValue_Rfc_2(0.0007);
      setDefault_Rfc_2(0.0007);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(250000);
      setDefault_Koc_2(250000);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Chlorine") {
      setValue_S_2(6300);
      setDefault_S_2(6300);

      setValue_Hc_2(0.0117);
      setDefault_Hc_2(0.0117);

      setValue_Dair_2(0.1542088);
      setDefault_Dair_2(0.1542088);

      setValue_Dwater_2(0.0000223);
      setDefault_Dwater_2(0.0000223);

      setValue_DHvb_2(68572.6866);
      setDefault_DHvb_2(68572.6866);

      setValue_Tc_2(417.15);
      setDefault_Tc_2(417.15);

      setValue_Tb_2(239.1);
      setDefault_Tb_2(239.1);

      setValue_MW_2(70.906);
      setDefault_MW_2(70.906);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.00015);
      setDefault_Rfc_2(0.00015);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(5.462);
      setDefault_Koc_2(5.462);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Chloro,1-difluoroethane, 1-") {
      setValue_S_2(1400);
      setDefault_S_2(1400);

      setValue_Hc_2(0.0588);
      setDefault_Hc_2(0.0588);

      setValue_Dair_2(0.0803925);
      setDefault_Dair_2(0.0803925);

      setValue_Dwater_2(0.0000101);
      setDefault_Dwater_2(0.0000101);

      setValue_DHvb_2(53298.46);
      setDefault_DHvb_2(53298.46);

      setValue_Tc_2(409.85);
      setDefault_Tc_2(409.85);

      setValue_Tb_2(263.3);
      setDefault_Tb_2(263.3);

      setValue_MW_2(100.5);
      setDefault_MW_2(100.5);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(50.0);
      setDefault_Rfc_2(50.0);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(60.09);
      setDefault_Koc_2(60.09);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Chloro,3-butadiene, 2-") {
      setValue_S_2(874.9);
      setDefault_S_2(874.9);

      setValue_Hc_2(0.0561);
      setDefault_Hc_2(0.0561);

      setValue_Dair_2(0.0841489);
      setDefault_Dair_2(0.0841489);

      setValue_Dwater_2(0.00001);
      setDefault_Dwater_2(0.00001);

      setValue_DHvb_2(8074.848);
      setDefault_DHvb_2(8074.848);

      setValue_Tc_2(525);
      setDefault_Tc_2(525);

      setValue_Tb_2(332.4);
      setDefault_Tb_2(332.4);

      setValue_MW_2(88.537);
      setDefault_MW_2(88.537);

      setValue_IUR_2(0.0003);
      setDefault_IUR_2(0.0003);

      setValue_Rfc_2(0.02);
      setDefault_Rfc_2(0.02);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(156.8);
      setDefault_Koc_2(156.8);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Chlorobenzene") {
      setValue_S_2(498.0);
      setDefault_S_2(498.0);

      setValue_Hc_2(0.00311);
      setDefault_Hc_2(0.00311);

      setValue_Dair_2(0.0721306);
      setDefault_Dair_2(0.0721306);

      setValue_Dwater_2(0.0000094765);
      setDefault_Dwater_2(0.0000094765);

      setValue_DHvb_2(8410);
      setDefault_DHvb_2(8410);

      setValue_Tc_2(632.4);
      setDefault_Tc_2(632.4);

      setValue_Tb_2(404.7);
      setDefault_Tb_2(404.7);

      setValue_MW_2(112.56);
      setDefault_MW_2(112.56);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.05);
      setDefault_Rfc_2(0.05);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(291.4);
      setDefault_Koc_2(291.4);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Chlorobutane, 1-") {
      setValue_S_2(1100);
      setDefault_S_2(1100);

      setValue_Hc_2(0.0167);
      setDefault_Hc_2(0.0167);

      setValue_Dair_2(0.0784137);
      setDefault_Dair_2(0.0784137);

      setValue_Dwater_2(0.0000093275);
      setDefault_Dwater_2(0.0000093275);

      setValue_DHvb_2(7263.21);
      setDefault_DHvb_2(7263.21);

      setValue_Tc_2(542.0);
      setDefault_Tc_2(542.0);

      setValue_Tb_2(351.6);
      setDefault_Tb_2(351.6);

      setValue_MW_2(92.569);
      setDefault_MW_2(92.569);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(null);
      setDefault_Rfc_2(null);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(195.4);
      setDefault_Koc_2(195.4);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Chlorodifluoromethane") {
      setValue_S_2(2770);
      setDefault_S_2(2770);

      setValue_Hc_2(0.0406);
      setDefault_Hc_2(0.0406);

      setValue_Dair_2(0.1033788);
      setDefault_Dair_2(0.1033788);

      setValue_Dwater_2(0.0000133);
      setDefault_Dwater_2(0.0000133);

      setValue_DHvb_2(4835.92122);
      setDefault_DHvb_2(4835.92122);

      setValue_Tc_2(369.3);
      setDefault_Tc_2(369.3);

      setValue_Tb_2(232.3);
      setDefault_Tb_2(232.3);

      setValue_MW_2(86.469);
      setDefault_MW_2(86.469);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(50.0);
      setDefault_Rfc_2(50.0);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(8.648);
      setDefault_Koc_2(8.648);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Chloroethanol, 2-") {
      setValue_S_2(1000000);
      setDefault_S_2(1000000);

      setValue_Hc_2(0.000000761);
      setDefault_Hc_2(0.000000761);

      setValue_Dair_2(0.0999813);
      setDefault_Dair_2(0.0999813);

      setValue_Dwater_2(0.0000122);
      setDefault_Dwater_2(0.0000122);

      setValue_DHvb_2(9956.97);
      setDefault_DHvb_2(9956.97);

      setValue_Tc_2(602.625);
      setDefault_Tc_2(602.625);

      setValue_Tb_2(401.75);
      setDefault_Tb_2(401.75);

      setValue_MW_2(80.515);
      setDefault_MW_2(80.515);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(null);
      setDefault_Rfc_2(null);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(3.39);
      setDefault_Koc_2(3.39);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Chloroform") {
      setValue_S_2(7950);
      setDefault_S_2(7950);

      setValue_Hc_2(0.00367);
      setDefault_Hc_2(0.00367);

      setValue_Dair_2(0.0769197);
      setDefault_Dair_2(0.0769197);

      setValue_Dwater_2(0.0000109);
      setDefault_Dwater_2(0.0000109);

      setValue_DHvb_2(6988);
      setDefault_DHvb_2(6988);

      setValue_Tc_2(536.4);
      setDefault_Tc_2(536.4);

      setValue_Tb_2(334.1);
      setDefault_Tb_2(334.1);

      setValue_MW_2(119.38);
      setDefault_MW_2(119.38);

      setValue_IUR_2(0.000023);
      setDefault_IUR_2(0.000023);

      setValue_Rfc_2(0.098);
      setDefault_Rfc_2(0.098);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(51.21);
      setDefault_Koc_2(51.21);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Chloromethane") {
      setValue_S_2(5320);
      setDefault_S_2(5320);

      setValue_Hc_2(0.00882);
      setDefault_Hc_2(0.00882);

      setValue_Dair_2(0.1239651);
      setDefault_Dair_2(0.1239651);

      setValue_Dwater_2(0.0000136);
      setDefault_Dwater_2(0.0000136);

      setValue_DHvb_2(5114.6);
      setDefault_DHvb_2(5114.6);

      setValue_Tc_2(416.25);
      setDefault_Tc_2(416.25);

      setValue_Tb_2(249.0);
      setDefault_Tb_2(249.0);

      setValue_MW_2(50.488);
      setDefault_MW_2(50.488);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.09);
      setDefault_Rfc_2(0.09);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(6.157);
      setDefault_Koc_2(6.157);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Chloronaphthalene, Beta-") {
      setValue_S_2(11.7);
      setDefault_S_2(11.7);

      setValue_Hc_2(0.00032);
      setDefault_Hc_2(0.00032);

      setValue_Dair_2(0.0446914);
      setDefault_Dair_2(0.0446914);

      setValue_Dwater_2(0.0000077301);
      setDefault_Dwater_2(0.0000077301);

      setValue_DHvb_2(11311.936);
      setDefault_DHvb_2(11311.936);

      setValue_Tc_2(793.5);
      setDefault_Tc_2(793.5);

      setValue_Tb_2(529.0);
      setDefault_Tb_2(529.0);

      setValue_MW_2(162.62);
      setDefault_MW_2(162.62);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(2423);
      setDefault_Rfc_2(2423);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(null);
      setDefault_Koc_2(null);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Chlorophenol, 2-") {
      setValue_S_2(11300);
      setDefault_S_2(11300);

      setValue_Hc_2(0.0000112);
      setDefault_Hc_2(0.0000112);

      setValue_Dair_2(0.0661175);
      setDefault_Dair_2(0.0661175);

      setValue_Dwater_2(0.0000094784);
      setDefault_Dwater_2(0.0000094784);

      setValue_DHvb_2(9572);
      setDefault_DHvb_2(9572);

      setValue_Tc_2(675);
      setDefault_Tc_2(675);

      setValue_Tb_2(447.9);
      setDefault_Tb_2(447.9);

      setValue_MW_2(128.56);
      setDefault_MW_2(128.56);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(null);
      setDefault_Rfc_2(null);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(191.1);
      setDefault_Koc_2(191.1);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Chlorotoluene, o-") {
      setValue_S_2(374.0);
      setDefault_S_2(374.0);

      setValue_Hc_2(0.00357);
      setDefault_Hc_2(0.00357);

      setValue_Dair_2(0.0629025);
      setDefault_Dair_2(0.0629025);

      setValue_Dwater_2(0.0000087194);
      setDefault_Dwater_2(0.0000087194);

      setValue_DHvb_2(9950.5);
      setDefault_DHvb_2(9950.5);

      setValue_Tc_2(654.1);
      setDefault_Tc_2(654.1);

      setValue_Tb_2(432.0);
      setDefault_Tb_2(432.0);

      setValue_MW_2(126.59);
      setDefault_MW_2(126.59);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(null);
      setDefault_Rfc_2(null);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(928.6);
      setDefault_Koc_2(928.6);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Chlorotoluene, p-") {
      setValue_S_2(106.0);
      setDefault_S_2(106.0);

      setValue_Hc_2(0.00438);
      setDefault_Hc_2(0.00438);

      setValue_Dair_2(0.062571);
      setDefault_Dair_2(0.062571);

      setValue_Dwater_2(0.0000086574);
      setDefault_Dwater_2(0.0000086574);

      setValue_DHvb_2(10144.98);
      setDefault_DHvb_2(10144.98);

      setValue_Tc_2(658.7);
      setDefault_Tc_2(658.7);

      setValue_Tb_2(435.4);
      setDefault_Tb_2(435.4);

      setValue_MW_2(126.59);
      setDefault_MW_2(126.59);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(null);
      setDefault_Rfc_2(null);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(775.7);
      setDefault_Koc_2(775.7);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Crotonaldehyde, trans-") {
      setValue_S_2(150000);
      setDefault_S_2(150000);

      setValue_Hc_2(0.0000194);
      setDefault_Hc_2(0.0000194);

      setValue_Dair_2(0.0959235);
      setDefault_Dair_2(0.0959235);

      setValue_Dwater_2(0.0000108);
      setDefault_Dwater_2(0.0000108);

      setValue_DHvb_2(8.62);
      setDefault_DHvb_2(8.62);

      setValue_Tc_2(568.0);
      setDefault_Tc_2(568.0);

      setValue_Tb_2(377.0);
      setDefault_Tb_2(377.0);

      setValue_MW_2(70.092);
      setDefault_MW_2(70.092);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(null);
      setDefault_Rfc_2(null);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(10.66);
      setDefault_Koc_2(10.66);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Cumene") {
      setValue_S_2(61.3);
      setDefault_S_2(61.3);

      setValue_Hc_2(7);
      setDefault_Hc_2(7);

      setValue_Dair_2(0.0603044);
      setDefault_Dair_2(0.0603044);

      setValue_Dwater_2(0.0000078566);
      setDefault_Dwater_2(0.0000078566);

      setValue_DHvb_2(10335.3);
      setDefault_DHvb_2(10335.3);

      setValue_Tc_2(631.1);
      setDefault_Tc_2(631.1);

      setValue_Tb_2(425.4);
      setDefault_Tb_2(425.4);

      setValue_MW_2(120.2);
      setDefault_MW_2(120.2);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.4);
      setDefault_Rfc_2(0.4);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(1500);
      setDefault_Koc_2(1500);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Cyanogen") {
      setValue_S_2(8000);
      setDefault_S_2(8000);

      setValue_Hc_2(0.0054);
      setDefault_Hc_2(0.0054);

      setValue_Dair_2(0.1237533);
      setDefault_Dair_2(0.1237533);

      setValue_Dwater_2(0.0000138);
      setDefault_Dwater_2(0.0000138);

      setValue_DHvb_2(5778);
      setDefault_DHvb_2(5778);

      setValue_Tc_2(401.3);
      setDefault_Tc_2(401.3);

      setValue_Tb_2(251.9);
      setDefault_Tb_2(251.9);

      setValue_MW_2(52.036);
      setDefault_MW_2(52.036);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(null);
      setDefault_Rfc_2(null);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(56);
      setDefault_Koc_2(56);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Cyanogen Chloride") {
      setValue_S_2(60000);
      setDefault_S_2(60000);

      setValue_Hc_2(0.0019412);
      setDefault_Hc_2(0.0019412);

      setValue_Dair_2(0.1207454);
      setDefault_Dair_2(0.1207454);

      setValue_Dwater_2(0.0000142);
      setDefault_Dwater_2(0.0000142);

      setValue_DHvb_2(6389.13);
      setDefault_DHvb_2(6389.13);

      setValue_Tc_2(429.0);
      setDefault_Tc_2(429.0);

      setValue_Tb_2(286.0);
      setDefault_Tb_2(286.0);

      setValue_MW_2(61.471);
      setDefault_MW_2(61.471);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(null);
      setDefault_Rfc_2(null);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(12.8);
      setDefault_Koc_2(12.8);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Cyclohexane") {
      setValue_S_2(55.0);
      setDefault_S_2(55.0);

      setValue_Hc_2(0.15);
      setDefault_Hc_2(0.15);

      setValue_Dair_2(0.0799729);
      setDefault_Dair_2(0.0799729);

      setValue_Dwater_2(0.0000091077);
      setDefault_Dwater_2(0.0000091077);

      setValue_DHvb_2(7153.6);
      setDefault_DHvb_2(7153.6);

      setValue_Tc_2(553.4);
      setDefault_Tc_2(553.4);

      setValue_Tb_2(353.7);
      setDefault_Tb_2(353.7);

      setValue_MW_2(84.163);
      setDefault_MW_2(84.163);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(6.0);
      setDefault_Rfc_2(6.0);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(966.4);
      setDefault_Koc_2(966.4);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Cyclohexanone") {
      setValue_S_2(25000);
      setDefault_S_2(25000);

      setValue_Hc_2(0.000009);
      setDefault_Hc_2(0.000009);

      setValue_Dair_2(0.0767599);
      setDefault_Dair_2(0.0767599);

      setValue_Dwater_2(0.0000093795);
      setDefault_Dwater_2(0.0000093795);

      setValue_DHvb_2(10762.40076);
      setDefault_DHvb_2(10762.40076);

      setValue_Tc_2(629.0);
      setDefault_Tc_2(629.0);

      setValue_Tb_2(428.55);
      setDefault_Tb_2(428.55);

      setValue_MW_2(98.146);
      setDefault_MW_2(98.146);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.7);
      setDefault_Rfc_2(0.7);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(37.05);
      setDefault_Koc_2(37.05);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Cyclohexene") {
      setValue_S_2(213.0);
      setDefault_S_2(213.0);

      setValue_Hc_2(0.0455);
      setDefault_Hc_2(0.0455);

      setValue_Dair_2(0.0831876);
      setDefault_Dair_2(0.0831876);

      setValue_Dwater_2(0.0000094975);
      setDefault_Dwater_2(0.0000094975);

      setValue_DHvb_2(7279.94);
      setDefault_DHvb_2(7279.94);

      setValue_Tc_2(560.55);
      setDefault_Tc_2(560.55);

      setValue_Tb_2(356.15);
      setDefault_Tb_2(356.15);

      setValue_MW_2(82.147);
      setDefault_MW_2(82.147);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(1.0);
      setDefault_Rfc_2(1.0);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(303.2);
      setDefault_Koc_2(303.2);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Cyclohexylamine") {
      setValue_S_2(1000000);
      setDefault_S_2(1000000);

      setValue_Hc_2(0.00000416);
      setDefault_Hc_2(0.00000416);

      setValue_Dair_2(0.0712945);
      setDefault_Dair_2(0.0712945);

      setValue_Dwater_2(0.0000085394);
      setDefault_Dwater_2(0.0000085394);

      setValue_DHvb_2(10444.55);
      setDefault_DHvb_2(10444.55);

      setValue_Tc_2(610.725);
      setDefault_Tc_2(610.725);

      setValue_Tb_2(407.15);
      setDefault_Tb_2(407.15);

      setValue_MW_2(99.177);
      setDefault_MW_2(99.177);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(null);
      setDefault_Rfc_2(null);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(24.64);
      setDefault_Koc_2(24.64);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "DDE, p,p'-") {
      setValue_S_2(0.04);
      setDefault_S_2(0.04);

      setValue_Hc_2(0.0000416);
      setDefault_Hc_2(0.0000416);

      setValue_Dair_2(0.0229959);
      setDefault_Dair_2(0.0229959);

      setValue_Dwater_2(0.0000058592);
      setDefault_Dwater_2(0.0000058592);

      setValue_DHvb_2(15000);
      setDefault_DHvb_2(15000);

      setValue_Tc_2(913.725);
      setDefault_Tc_2(913.725);

      setValue_Tb_2(609.15);
      setDefault_Tb_2(609.15);

      setValue_MW_2(318.03);
      setDefault_MW_2(318.03);

      setValue_IUR_2(0.000097);
      setDefault_IUR_2(0.000097);

      setValue_Rfc_2(null);
      setDefault_Rfc_2(null);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(446300);
      setDefault_Koc_2(446300);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Dibenzofuran") {
      setValue_S_2(3.1);
      setDefault_S_2(3.1);

      setValue_Hc_2(0.000213);
      setDefault_Hc_2(0.000213);

      setValue_Dair_2(0.0650663);
      setDefault_Dair_2(0.0650663);

      setValue_Dwater_2(0.0000073773);
      setDefault_Dwater_2(0.0000073773);

      setValue_DHvb_2(66400);
      setDefault_DHvb_2(66400);

      setValue_Tc_2(824.0);
      setDefault_Tc_2(824.0);

      setValue_Tb_2(560.0);
      setDefault_Tb_2(560.0);

      setValue_MW_2(168.2);
      setDefault_MW_2(168.2);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(null);
      setDefault_Rfc_2(null);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(3761);
      setDefault_Koc_2(3761);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Dibenzothiophene") {
      setValue_S_2(1.47);
      setDefault_S_2(1.47);

      setValue_Hc_2(0.0000338);
      setDefault_Hc_2(0.0000338);

      setValue_Dair_2(0.0355475);
      setDefault_Dair_2(0.0355475);

      setValue_Dwater_2(0.0000075958);
      setDefault_Dwater_2(0.0000075958);

      setValue_DHvb_2(22299.23518);
      setDefault_DHvb_2(22299.23518);

      setValue_Tc_2(908.475);
      setDefault_Tc_2(908.475);

      setValue_Tb_2(605.65);
      setDefault_Tb_2(605.65);

      setValue_MW_2(184.26);
      setDefault_MW_2(184.26);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(null);
      setDefault_Rfc_2(null);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(6324);
      setDefault_Koc_2(6324);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Dibromo-3-chloropropane, 1,2-") {
      setValue_S_2(1230);
      setDefault_S_2(1230);

      setValue_Hc_2(0.000147);
      setDefault_Hc_2(0.000147);

      setValue_Dair_2(0.0321351);
      setDefault_Dair_2(0.0321351);

      setValue_Dwater_2(0.0000089048);
      setDefault_Dwater_2(0.0000089048);

      setValue_DHvb_2(9960.045);
      setDefault_DHvb_2(9960.045);

      setValue_Tc_2(703.5);
      setDefault_Tc_2(703.5);

      setValue_Tb_2(469.0);
      setDefault_Tb_2(469.0);

      setValue_MW_2(236.33);
      setDefault_MW_2(236.33);

      setValue_IUR_2(0.006);
      setDefault_IUR_2(0.006);

      setValue_Rfc_2(0.0002);
      setDefault_Rfc_2(0.0002);

      setValue_Mut_2("Yes");
      setDefault_Mut_2("Yes");

      setValue_Koc_2(370.3);
      setDefault_Koc_2(370.3);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Dibromochloromethane") {
      setValue_S_2(2700);
      setDefault_S_2(2700);

      setValue_Hc_2(0.000783);
      setDefault_Hc_2(0.000783);

      setValue_Dair_2(0.0366356);
      setDefault_Dair_2(0.0366356);

      setValue_Dwater_2(0.0000106);
      setDefault_Dwater_2(0.0000106);

      setValue_DHvb_2(5900);
      setDefault_DHvb_2(5900);

      setValue_Tc_2(678.2);
      setDefault_Tc_2(678.2);

      setValue_Tb_2(393.0);
      setDefault_Tb_2(393.0);

      setValue_MW_2(208.28);
      setDefault_MW_2(208.28);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(null);
      setDefault_Rfc_2(null);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(74.86);
      setDefault_Koc_2(74.86);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Dibromoethane, 1,2-") {
      setValue_S_2(3910);
      setDefault_S_2(3910);

      setValue_Hc_2(0.00065);
      setDefault_Hc_2(0.00065);

      setValue_Dair_2(0.0430348);
      setDefault_Dair_2(0.0430348);

      setValue_Dwater_2(0.0000104);
      setDefault_Dwater_2(0.0000104);

      setValue_DHvb_2(8310.03);
      setDefault_DHvb_2(8310.03);

      setValue_Tc_2(583.0);
      setDefault_Tc_2(583.0);

      setValue_Tb_2(404.6);
      setDefault_Tb_2(404.6);

      setValue_MW_2(187.86);
      setDefault_MW_2(187.86);

      setValue_IUR_2(0.0006);
      setDefault_IUR_2(0.0006);

      setValue_Rfc_2(0.009);
      setDefault_Rfc_2(0.009);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(50.2);
      setDefault_Koc_2(50.2);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Dibromomethane (Methylene Bromide)") {
      setValue_S_2(11900);
      setDefault_S_2(11900);

      setValue_Hc_2(0.000822);
      setDefault_Hc_2(0.000822);

      setValue_Dair_2(0.0551373);
      setDefault_Dair_2(0.0551373);

      setValue_Dwater_2(0.0000119);
      setDefault_Dwater_2(0.0000119);

      setValue_DHvb_2(7867.88);
      setDefault_DHvb_2(7867.88);

      setValue_Tc_2(583.0);
      setDefault_Tc_2(583.0);

      setValue_Tb_2(370.0);
      setDefault_Tb_2(370.0);

      setValue_MW_2(173.84);
      setDefault_MW_2(173.84);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.004);
      setDefault_Rfc_2(0.004);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(29.86);
      setDefault_Koc_2(29.86);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Dichloro-2-butene, cis,4-") {
      setValue_S_2(580.2);
      setDefault_S_2(580.2);

      setValue_Hc_2(0.000664);
      setDefault_Hc_2(0.000664);

      setValue_Dair_2(0.0665047);
      setDefault_Dair_2(0.0665047);

      setValue_Dwater_2(0.00000929);
      setDefault_Dwater_2(0.00000929);

      setValue_DHvb_2(9125);
      setDefault_DHvb_2(9125);

      setValue_Tc_2(640.0);
      setDefault_Tc_2(640.0);

      setValue_Tb_2(425.5);
      setDefault_Tb_2(425.5);

      setValue_MW_2(125);
      setDefault_MW_2(125);

      setValue_IUR_2(0.0042);
      setDefault_IUR_2(0.0042);

      setValue_Rfc_2(null);
      setDefault_Rfc_2(null);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(180.4);
      setDefault_Koc_2(180.4);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Dichloro-2-butene, trans,4-") {
      setValue_S_2(850.0);
      setDefault_S_2(850.0);

      setValue_Hc_2(0.000664);
      setDefault_Hc_2(0.000664);

      setValue_Dair_2(0.0663818);
      setDefault_Dair_2(0.0663818);

      setValue_Dwater_2(0.0000092665);
      setDefault_Dwater_2(0.0000092665);

      setValue_DHvb_2(9125);
      setDefault_DHvb_2(9125);

      setValue_Tc_2(646.0);
      setDefault_Tc_2(646.0);

      setValue_Tb_2(428.4);
      setDefault_Tb_2(428.4);

      setValue_MW_2(125);
      setDefault_MW_2(125);

      setValue_IUR_2(0.0042);
      setDefault_IUR_2(0.0042);

      setValue_Rfc_2(null);
      setDefault_Rfc_2(null);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(180.4);
      setDefault_Koc_2(180.4);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Dichlorobenzene, 1,2-") {
      setValue_S_2(156.0);
      setDefault_S_2(156.0);

      setValue_Hc_2(0.00192);
      setDefault_Hc_2(0.00192);

      setValue_Dair_2(0.0561703);
      setDefault_Dair_2(0.0561703);

      setValue_Dwater_2(0.0000089213);
      setDefault_Dwater_2(0.0000089213);

      setValue_DHvb_2(9700);
      setDefault_DHvb_2(9700);

      setValue_Tc_2(705.0);
      setDefault_Tc_2(705.0);

      setValue_Tb_2(453.0);
      setDefault_Tb_2(453.0);

      setValue_MW_2(147);
      setDefault_MW_2(147);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.2);
      setDefault_Rfc_2(0.2);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(947.3);
      setDefault_Koc_2(947.3);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Dichlorobenzene, 1,4-") {
      setValue_S_2(81.3);
      setDefault_S_2(81.3);

      setValue_Hc_2(0.00241);
      setDefault_Hc_2(0.00241);

      setValue_Dair_2(0.0550429);
      setDefault_Dair_2(0.0550429);

      setValue_Dwater_2(0.0000086797);
      setDefault_Dwater_2(0.0000086797);

      setValue_DHvb_2(9271);
      setDefault_DHvb_2(9271);

      setValue_Tc_2(684.75);
      setDefault_Tc_2(684.75);

      setValue_Tb_2(447.0);
      setDefault_Tb_2(447.0);

      setValue_MW_2(147);
      setDefault_MW_2(147);

      setValue_IUR_2(0.000011);
      setDefault_IUR_2(0.000011);

      setValue_Rfc_2(0.8);
      setDefault_Rfc_2(0.8);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(966.4);
      setDefault_Koc_2(966.4);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Dichlorodifluoromethane") {
      setValue_S_2(280);
      setDefault_S_2(280);

      setValue_Hc_2(0.343);
      setDefault_Hc_2(0.343);

      setValue_Dair_2(0.0760293);
      setDefault_Dair_2(0.0760293);

      setValue_Dwater_2(0.0000108);
      setDefault_Dwater_2(0.0000108);

      setValue_DHvb_2(9421.36088);
      setDefault_DHvb_2(9421.36088);

      setValue_Tc_2(384.95);
      setDefault_Tc_2(384.95);

      setValue_Tb_2(243.2);
      setDefault_Tb_2(243.2);

      setValue_MW_2(120.91);
      setDefault_MW_2(120.91);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.1);
      setDefault_Rfc_2(0.1);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(74.86);
      setDefault_Koc_2(74.86);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Dichloroethane, 1,1-") {
      setValue_S_2(5040);
      setDefault_S_2(5040);

      setValue_Hc_2(0.00562);
      setDefault_Hc_2(0.00562);

      setValue_Dair_2(0.0836446);
      setDefault_Dair_2(0.0836446);

      setValue_Dwater_2(0.0000106);
      setDefault_Dwater_2(0.0000106);

      setValue_DHvb_2(6895);
      setDefault_DHvb_2(6895);

      setValue_Tc_2(523.0);
      setDefault_Tc_2(523.0);

      setValue_Tb_2(330.4);
      setDefault_Tb_2(330.4);

      setValue_MW_2(98.96);
      setDefault_MW_2(98.96);

      setValue_IUR_2(0.0000016);
      setDefault_IUR_2(0.0000016);

      setValue_Rfc_2(null);
      setDefault_Rfc_2(null);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(35.74);
      setDefault_Koc_2(35.74);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Dichloroethane, 1,2-") {
      setValue_S_2(8600);
      setDefault_S_2(8600);

      setValue_Hc_2(0.00118);
      setDefault_Hc_2(0.00118);

      setValue_Dair_2(0.0857221);
      setDefault_Dair_2(0.0857221);

      setValue_Dwater_2(0.000011);
      setDefault_Dwater_2(0.000011);

      setValue_DHvb_2(7643);
      setDefault_DHvb_2(7643);

      setValue_Tc_2(561.0);
      setDefault_Tc_2(561.0);

      setValue_Tb_2(356.5);
      setDefault_Tb_2(356.5);

      setValue_MW_2(98.96);
      setDefault_MW_2(98.96);

      setValue_IUR_2(0.000026);
      setDefault_IUR_2(0.000026);

      setValue_Rfc_2(0.007);
      setDefault_Rfc_2(0.007);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(19.23);
      setDefault_Koc_2(19.23);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Dichloroethylene, 1,1-") {
      setValue_S_2(2420);
      setDefault_S_2(2420);

      setValue_Hc_2(0.0261);
      setDefault_Hc_2(0.0261);

      setValue_Dair_2(0.0863107);
      setDefault_Dair_2(0.0863107);

      setValue_Dwater_2(0.000011);
      setDefault_Dwater_2(0.000011);

      setValue_DHvb_2(6247);
      setDefault_DHvb_2(6247);

      setValue_Tc_2(576.05);
      setDefault_Tc_2(576.05);

      setValue_Tb_2(304.6);
      setDefault_Tb_2(304.6);

      setValue_MW_2(96.944);
      setDefault_MW_2(96.944);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.2);
      setDefault_Rfc_2(0.2);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(70.51);
      setDefault_Koc_2(70.51);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Dichloroethylene, 1,2-cis-") {
      setValue_S_2(6410);
      setDefault_S_2(6410);

      setValue_Hc_2(0.00408);
      setDefault_Hc_2(0.00408);

      setValue_Dair_2(0.0884056);
      setDefault_Dair_2(0.0884056);

      setValue_Dwater_2(0.0000113);
      setDefault_Dwater_2(0.0000113);

      setValue_DHvb_2(7192);
      setDefault_DHvb_2(7192);

      setValue_Tc_2(544.0);
      setDefault_Tc_2(544.0);

      setValue_Tb_2(328.0);
      setDefault_Tb_2(328.0);

      setValue_MW_2(96.944);
      setDefault_MW_2(96.944);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(null);
      setDefault_Rfc_2(null);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(54.38);
      setDefault_Koc_2(54.38);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Dichloroethylene, 1,2-trans-") {
      setValue_S_2(4520);
      setDefault_S_2(4520);

      setValue_Hc_2(0.00938);
      setDefault_Hc_2(0.00938);

      setValue_Dair_2(0.0876094);
      setDefault_Dair_2(0.0876094);

      setValue_Dwater_2(0.0000112);
      setDefault_Dwater_2(0.0000112);

      setValue_DHvb_2(6717);
      setDefault_DHvb_2(6717);

      setValue_Tc_2(516.5);
      setDefault_Tc_2(516.5);

      setValue_Tb_2(328.0);
      setDefault_Tb_2(328.0);

      setValue_MW_2(96.944);
      setDefault_MW_2(96.944);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(null);
      setDefault_Rfc_2(null);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(54.39);
      setDefault_Koc_2(54.38);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Dichloropropane, 1,2-") {
      setValue_S_2(2800);
      setDefault_S_2(2800);

      setValue_Hc_2(0.00282);
      setDefault_Hc_2(0.00282);

      setValue_Dair_2(0.0733402);
      setDefault_Dair_2(0.0733402);

      setValue_Dwater_2(0.0000097252);
      setDefault_Dwater_2(0.0000097252);

      setValue_DHvb_2(7590);
      setDefault_DHvb_2(7590);

      setValue_Tc_2(572.0);
      setDefault_Tc_2(572.0);

      setValue_Tb_2(368.5);
      setDefault_Tb_2(368.5);

      setValue_MW_2(112.99);
      setDefault_MW_2(112.99);

      setValue_IUR_2(0.0000037);
      setDefault_IUR_2(0.0000037);

      setValue_Rfc_2(0.004);
      setDefault_Rfc_2(0.004);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(52.24);
      setDefault_Koc_2(52.24);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Dichloropropane, 1,3-") {
      setValue_S_2(2750);
      setDefault_S_2(2750);

      setValue_Hc_2(0.000976);
      setDefault_Hc_2(0.000976);

      setValue_Dair_2(0.0738738);
      setDefault_Dair_2(0.0738738);

      setValue_Dwater_2(0.000009823);
      setDefault_Dwater_2(0.000009823);

      setValue_DHvb_2(8102.51);
      setDefault_DHvb_2(8102.51);

      setValue_Tc_2(590.85);
      setDefault_Tc_2(590.85);

      setValue_Tb_2(393.9);
      setDefault_Tb_2(393.9);

      setValue_MW_2(112.99);
      setDefault_MW_2(112.99);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(null);
      setDefault_Rfc_2(null);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(54.38);
      setDefault_Koc_2(54.38);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Dichloropropene, 1,3-") {
      setValue_S_2(2800);
      setDefault_S_2(2800);

      setValue_Hc_2(0.00355);
      setDefault_Hc_2(0.00355);

      setValue_Dair_2(0.0762725);
      setDefault_Dair_2(0.0762725);

      setValue_Dwater_2(0.0000101);
      setDefault_Dwater_2(0.0000101);

      setValue_DHvb_2(7900);
      setDefault_DHvb_2(7900);

      setValue_Tc_2(587.38);
      setDefault_Tc_2(587.38);

      setValue_Tb_2(385.0);
      setDefault_Tb_2(385.0);

      setValue_MW_2(110.97);
      setDefault_MW_2(110.97);

      setValue_IUR_2(0.000004);
      setDefault_IUR_2(0.000004);

      setValue_Rfc_2(0.02);
      setDefault_Rfc_2(0.02);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(57.73);
      setDefault_Koc_2(57.73);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Dicyclopentadiene") {
      setValue_S_2(26.47);
      setDefault_S_2(26.47);

      setValue_Hc_2(0.0625);
      setDefault_Hc_2(0.0625);

      setValue_Dair_2(0.0557455);
      setDefault_Dair_2(0.0557455);

      setValue_Dwater_2(0.0000077554);
      setDefault_Dwater_2(0.0000077554);

      setValue_DHvb_2(2197.38);
      setDefault_DHvb_2(2197.38);

      setValue_Tc_2(664.5);
      setDefault_Tc_2(664.5);

      setValue_Tb_2(443.0);
      setDefault_Tb_2(443.0);

      setValue_MW_2(132.21);
      setDefault_MW_2(132.21);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.0003);
      setDefault_Rfc_2(0.0003);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(552.3);
      setDefault_Koc_2(552.3);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Diethylformamide") {
      setValue_S_2(1000000);
      setDefault_S_2(1000000);

      setValue_Hc_2(0.00000013);
      setDefault_Hc_2(0.00000013);

      setValue_Dair_2(0.073301);
      setDefault_Dair_2(0.073301);

      setValue_Dwater_2(0.0000089773);
      setDefault_Dwater_2(0.0000089773);

      setValue_DHvb_2(11687.38);
      setDefault_DHvb_2(11687.38);

      setValue_Tc_2(675.975);
      setDefault_Tc_2(675.975);

      setValue_Tb_2(450.65);
      setDefault_Tb_2(450.65);

      setValue_MW_2(101.15);
      setDefault_MW_2(101.15);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(null);
      setDefault_Rfc_2(null);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(4.785);
      setDefault_Koc_2(4.785);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Difluoroethane, 1,1-") {
      setValue_S_2(3200);
      setDefault_S_2(3200);

      setValue_Hc_2(0.0203);
      setDefault_Hc_2(0.0203);

      setValue_Dair_2(0.1023145);
      setDefault_Dair_2(0.1023145);

      setValue_Dwater_2(0.0000115);
      setDefault_Dwater_2(0.0000115);

      setValue_DHvb_2(5153.88);
      setDefault_DHvb_2(5153.88);

      setValue_Tc_2(372.15);
      setDefault_Tc_2(372.15);

      setValue_Tb_2(248.1);
      setDefault_Tb_2(248.1);

      setValue_MW_2(66.051);
      setDefault_MW_2(66.051);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(40.0);
      setDefault_Rfc_2(40.0);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(4.472);
      setDefault_Koc_2(4.472);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Dimethylaniline, N,N-") {
      setValue_S_2(1450);
      setDefault_S_2(1450);

      setValue_Hc_2(0.0000568);
      setDefault_Hc_2(0.0000568);

      setValue_Dair_2(0.0625411);
      setDefault_Dair_2(0.0625411);

      setValue_Dwater_2(0.0000083063);
      setDefault_Dwater_2(0.0000083063);

      setValue_DHvb_2(12276.68);
      setDefault_DHvb_2(12276.68);

      setValue_Tc_2(687.0);
      setDefault_Tc_2(687.0);

      setValue_Tb_2(466.45);
      setDefault_Tb_2(466.45);

      setValue_MW_2(121.18);
      setDefault_MW_2(121.18);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(null);
      setDefault_Rfc_2(null);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(137.3);
      setDefault_Koc_2(137.3);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Dimethylformamide") {
      setValue_S_2(1000000);
      setDefault_S_2(1000000);

      setValue_Hc_2(0.0000000739);
      setDefault_Hc_2(0.0000000739);

      setValue_Dair_2(0.0971846);
      setDefault_Dair_2(0.0971846);

      setValue_Dwater_2(0.0000112);
      setDefault_Dwater_2(0.0000112);

      setValue_DHvb_2(11369.0696);
      setDefault_DHvb_2(11369.0696);

      setValue_Tc_2(647.15);
      setDefault_Tc_2(647.15);

      setValue_Tb_2(426.15);
      setDefault_Tb_2(426.15);

      setValue_MW_2(73.095);
      setDefault_MW_2(73.095);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.03);
      setDefault_Rfc_2(0.03);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(1.24);
      setDefault_Koc_2(1.24);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Dimethylhydrazine, 1,1-") {
      setValue_S_2(1000000);
      setDefault_S_2(1000000);

      setValue_Hc_2(0.0000129);
      setDefault_Hc_2(0.0000129);

      setValue_Dair_2(0.1037857);
      setDefault_Dair_2(0.1037857);

      setValue_Dwater_2(0.0000113);
      setDefault_Dwater_2(0.0000113);

      setValue_DHvb_2(7791.873058);
      setDefault_DHvb_2(7791.873058);

      setValue_Tc_2(523.15);
      setDefault_Tc_2(523.15);

      setValue_Tb_2(337.05);
      setDefault_Tb_2(337.05);

      setValue_MW_2(60.099);
      setDefault_MW_2(60.099);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.000002);
      setDefault_Rfc_2(0.000002);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(1.672);
      setDefault_Koc_2(1.672);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Dioxane, 1,4-") {
      setValue_S_2(1000000);
      setDefault_S_2(1000000);

      setValue_Hc_2(0.0000048);
      setDefault_Hc_2(0.0000048);

      setValue_Dair_2(0.0873739);
      setDefault_Dair_2(0.0873739);

      setValue_Dwater_2(0.0000105);
      setDefault_Dwater_2(0.0000105);

      setValue_DHvb_2(8687.3502);
      setDefault_DHvb_2(8687.3502);

      setValue_Tc_2(585.15);
      setDefault_Tc_2(585.15);

      setValue_Tb_2(374.65);
      setDefault_Tb_2(374.65);

      setValue_MW_2(88.107);
      setDefault_MW_2(88.107);

      setValue_IUR_2(0.000005);
      setDefault_IUR_2(0.000005);

      setValue_Rfc_2(0.03);
      setDefault_Rfc_2(0.03);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(3.931);
      setDefault_Koc_2(3.931);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Epichlorohydrin") {
      setValue_S_2(65900);
      setDefault_S_2(65900);

      setValue_Hc_2(0.0000304);
      setDefault_Hc_2(0.0000304);

      setValue_Dair_2(0.0888682);
      setDefault_Dair_2(0.0888682);

      setValue_Dwater_2(0.0000111);
      setDefault_Dwater_2(0.0000111);

      setValue_DHvb_2(10.1);
      setDefault_DHvb_2(10.1);

      setValue_Tc_2(600.0);
      setDefault_Tc_2(600.0);

      setValue_Tb_2(390.0);
      setDefault_Tb_2(390.0);

      setValue_MW_2(92.526);
      setDefault_MW_2(92.526);

      setValue_IUR_2(0.0000012);
      setDefault_IUR_2(0.0000012);

      setValue_Rfc_2(0.001);
      setDefault_Rfc_2(0.001);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(12.12);
      setDefault_Koc_2(12.12);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Epoxybutane, 1,2-") {
      setValue_S_2(95000);
      setDefault_S_2(95000);

      setValue_Hc_2(0.00018);
      setDefault_Hc_2(0.00018);

      setValue_Dair_2(0.0928958);
      setDefault_Dair_2(0.0928958);

      setValue_Dwater_2(0.0000104);
      setDefault_Dwater_2(0.0000104);

      setValue_DHvb_2(7211);
      setDefault_DHvb_2(7211);

      setValue_Tc_2(516.0);
      setDefault_Tc_2(516.0);

      setValue_Tb_2(336.3);
      setDefault_Tb_2(336.3);

      setValue_MW_2(72.108);
      setDefault_MW_2(72.108);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.02);
      setDefault_Rfc_2(0.02);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(20.43);
      setDefault_Koc_2(20.43);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Ethoxyethanol Acetate, 2-") {
      setValue_S_2(187000);
      setDefault_S_2(187000);

      setValue_Hc_2(0.0000032);
      setDefault_Hc_2(0.0000032);

      setValue_Dair_2(0.0569504);
      setDefault_Dair_2(0.0569504);

      setValue_Dwater_2(0.0000079753);
      setDefault_Dwater_2(0.0000079753);

      setValue_DHvb_2(9779.84);
      setDefault_DHvb_2(9779.84);

      setValue_Tc_2(607.0);
      setDefault_Tc_2(607.0);

      setValue_Tb_2(429.55);
      setDefault_Tb_2(429.55);

      setValue_MW_2(132.16);
      setDefault_MW_2(132.16);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.06);
      setDefault_Rfc_2(0.06);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(12.45);
      setDefault_Koc_2(12.45);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Ethoxyethanol, 2-") {
      setValue_S_2(1000000);
      setDefault_S_2(1000000);

      setValue_Hc_2(0.00000047);
      setDefault_Hc_2(0.00000047);

      setValue_Dair_2(0.0817537);
      setDefault_Dair_2(0.0817537);

      setValue_Dwater_2(0.0000097306);
      setDefault_Dwater_2(0.0000097306);

      setValue_DHvb_2(9680.42838);
      setDefault_DHvb_2(9680.42838);

      setValue_Tc_2(612.225);
      setDefault_Tc_2(612.225);

      setValue_Tb_2(408.15);
      setDefault_Tb_2(408.15);

      setValue_MW_2(90.123);
      setDefault_MW_2(90.123);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.2);
      setDefault_Rfc_2(0.2);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(1.762);
      setDefault_Koc_2(1.762);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Ethyl Acetate") {
      setValue_S_2(80000);
      setDefault_S_2(80000);

      setValue_Hc_2(0.000134);
      setDefault_Hc_2(0.000134);

      setValue_Dair_2(0.0823158);
      setDefault_Dair_2(0.0823158);

      setValue_Dwater_2(0.0000097028);
      setDefault_Dwater_2(0.0000097028);

      setValue_DHvb_2(7633.66);
      setDefault_DHvb_2(7633.66);

      setValue_Tc_2(523.3);
      setDefault_Tc_2(523.3);

      setValue_Tb_2(350.1);
      setDefault_Tb_2(350.1);

      setValue_MW_2(88.107);
      setDefault_MW_2(88.107);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.07);
      setDefault_Rfc_2(0.07);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(18.34);
      setDefault_Koc_2(18.34);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Ethyl Acrylate") {
      setValue_S_2(15000);
      setDefault_S_2(15000);

      setValue_Hc_2(0.000339);
      setDefault_Hc_2(0.000339);

      setValue_Dair_2(0.0745392);
      setDefault_Dair_2(0.0745392);

      setValue_Dwater_2(0.0000091242);
      setDefault_Dwater_2(0.0000091242);

      setValue_DHvb_2(9362.76);
      setDefault_DHvb_2(9362.76);

      setValue_Tc_2(558.6);
      setDefault_Tc_2(558.6);

      setValue_Tb_2(372.4);
      setDefault_Tb_2(372.4);

      setValue_MW_2(100.12);
      setDefault_MW_2(100.12);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.008);
      setDefault_Rfc_2(0.008);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(38.87);
      setDefault_Koc_2(38.87);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Ethyl Chloride (Chloroethane)") {
      setValue_S_2(6710);
      setDefault_S_2(6710);

      setValue_Hc_2(0.0111);
      setDefault_Hc_2(0.0111);

      setValue_Dair_2(0.1037597);
      setDefault_Dair_2(0.1037597);

      setValue_Dwater_2(0.0000116);
      setDefault_Dwater_2(0.0000116);

      setValue_DHvb_2(5879.4);
      setDefault_DHvb_2(5879.4);

      setValue_Tc_2(460.4);
      setDefault_Tc_2(460.4);

      setValue_Tb_2(285.3);
      setDefault_Tb_2(285.3);

      setValue_MW_2(64.515);
      setDefault_MW_2(64.515);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(10.0);
      setDefault_Rfc_2(10.0);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(17.41);
      setDefault_Koc_2(17.41);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Ethyl Methacrylate") {
      setValue_S_2(5400);
      setDefault_S_2(5400);

      setValue_Hc_2(0.000573);
      setDefault_Hc_2(0.000573);

      setValue_Dair_2(0.0653441);
      setDefault_Dair_2(0.0653441);

      setValue_Dwater_2(0.0000083794);
      setDefault_Dwater_2(0.0000083794);

      setValue_DHvb_2(10957.44);
      setDefault_DHvb_2(10957.44);

      setValue_Tc_2(571.0);
      setDefault_Tc_2(571.0);

      setValue_Tb_2(390.0);
      setDefault_Tb_2(390.0);

      setValue_MW_2(114.15);
      setDefault_MW_2(114.15);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.3);
      setDefault_Rfc_2(0.3);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(85.62);
      setDefault_Koc_2(85.62);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Ethylbenzene") {
      setValue_S_2(169.0);
      setDefault_S_2(169.0);

      setValue_Hc_2(0.00788);
      setDefault_Hc_2(0.00788);

      setValue_Dair_2(0.0684652);
      setDefault_Dair_2(0.0684652);

      setValue_Dwater_2(0.0000084558);
      setDefault_Dwater_2(0.0000084558);

      setValue_DHvb_2(8501);
      setDefault_DHvb_2(8501);

      setValue_Tc_2(617.2);
      setDefault_Tc_2(617.2);

      setValue_Tb_2(409.1);
      setDefault_Tb_2(409.1);

      setValue_MW_2(106.17);
      setDefault_MW_2(106.17);

      setValue_IUR_2(0.0000025);
      setDefault_IUR_2(0.0000025);

      setValue_Rfc_2(1.0);
      setDefault_Rfc_2(1.0);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(541.4);
      setDefault_Koc_2(541.4);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Ethylene Diamine") {
      setValue_S_2(1000000);
      setDefault_S_2(1000000);

      setValue_Hc_2(0.00000000173);
      setDefault_Hc_2(0.00000000173);

      setValue_Dair_2(0.109446);
      setDefault_Dair_2(0.109446);

      setValue_Dwater_2(0.0000122);
      setDefault_Dwater_2(0.0000122);

      setValue_DHvb_2(9562.61);
      setDefault_DHvb_2(9562.61);

      setValue_Tc_2(585.225);
      setDefault_Tc_2(585.225);

      setValue_Tb_2(390.15);
      setDefault_Tb_2(390.15);

      setValue_MW_2(60.099);
      setDefault_MW_2(60.099);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(null);
      setDefault_Rfc_2(null);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(0.5664);
      setDefault_Koc_2(0.5664);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Ethylene Oxide") {
      setValue_S_2(1000000);
      setDefault_S_2(1000000);

      setValue_Hc_2(0.000148);
      setDefault_Hc_2(0.000148);

      setValue_Dair_2(0.1339638);
      setDefault_Dair_2(0.1339638);

      setValue_Dwater_2(0.0000145);
      setDefault_Dwater_2(0.0000145);

      setValue_DHvb_2(6104.06);
      setDefault_DHvb_2(6104.06);

      setValue_Tc_2(469.0);
      setDefault_Tc_2(469.0);

      setValue_Tb_2(283.6);
      setDefault_Tb_2(283.6);

      setValue_MW_2(44.054);
      setDefault_MW_2(44.054);

      setValue_IUR_2(0.003);
      setDefault_IUR_2(0.003);

      setValue_Rfc_2(0.03);
      setDefault_Rfc_2(0.03);

      setValue_Mut_2("Yes");
      setDefault_Mut_2("Yes");

      setValue_Koc_2(4.622);
      setDefault_Koc_2(4.622);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Fluorene") {
      setValue_S_2(1.69);
      setDefault_S_2(1.69);

      setValue_Hc_2(0.0000962);
      setDefault_Hc_2(0.0000962);

      setValue_Dair_2(0.0439743);
      setDefault_Dair_2(0.0439743);

      setValue_Dwater_2(0.000007889);
      setDefault_Dwater_2(0.000007889);

      setValue_DHvb_2(12666);
      setDefault_DHvb_2(12666);

      setValue_Tc_2(870.0);
      setDefault_Tc_2(870.0);

      setValue_Tb_2(568.0);
      setDefault_Tb_2(568.0);

      setValue_MW_2(166.22);
      setDefault_MW_2(166.22);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(null);
      setDefault_Rfc_2(null);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(4241);
      setDefault_Koc_2(4241);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Formaldehyde") {
      setValue_S_2(400000);
      setDefault_S_2(400000);

      setValue_Hc_2(0.000000337);
      setDefault_Hc_2(0.000000337);

      setValue_Dair_2(0.1670871);
      setDefault_Dair_2(0.1670871);

      setValue_Dwater_2(0.0000174);
      setDefault_Dwater_2(0.0000174);

      setValue_DHvb_2(5919.9);
      setDefault_DHvb_2(5919.9);

      setValue_Tc_2(412.35);
      setDefault_Tc_2(412.35);

      setValue_Tb_2(254.05);
      setDefault_Tb_2(254.05);

      setValue_MW_2(30.026);
      setDefault_MW_2(30.026);

      setValue_IUR_2(0.000013);
      setDefault_IUR_2(0.000013);

      setValue_Rfc_2(0.0098);
      setDefault_Rfc_2(0.0098);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(7.752);
      setDefault_Koc_2(7.752);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Formic Acid") {
      setValue_S_2(1000000);
      setDefault_S_2(1000000);

      setValue_Hc_2(0.000000167);
      setDefault_Hc_2(0.000000167);

      setValue_Dair_2(0.1478701);
      setDefault_Dair_2(0.1478701);

      setValue_Dwater_2(0.0000172);
      setDefault_Dwater_2(0.0000172);

      setValue_DHvb_2(4800.8046);
      setDefault_DHvb_2(4800.8046);

      setValue_Tc_2(588.0);
      setDefault_Tc_2(588.0);

      setValue_Tb_2(374.15);
      setDefault_Tb_2(374.15);

      setValue_MW_2(46.026);
      setDefault_MW_2(46.026);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.0003);
      setDefault_Rfc_2(0.0003);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(0.7195);
      setDefault_Koc_2(0.7195);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Furan") {
      setValue_S_2(10000);
      setDefault_S_2(10000);

      setValue_Hc_2(0.0054);
      setDefault_Hc_2(0.0054);

      setValue_Dair_2(0.1022757);
      setDefault_Dair_2(0.1022757);

      setValue_Dwater_2(0.0000117);
      setDefault_Dwater_2(0.0000117);

      setValue_DHvb_2(6476.9);
      setDefault_DHvb_2(6476.9);

      setValue_Tc_2(490.2);
      setDefault_Tc_2(490.2);

      setValue_Tb_2(304.5);
      setDefault_Tb_2(304.5);

      setValue_MW_2(68.076);
      setDefault_MW_2(68.076);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(null);
      setDefault_Rfc_2(null);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(14.54);
      setDefault_Koc_2(14.54);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Furfural") {
      setValue_S_2(74100);
      setDefault_S_2(74100);

      setValue_Hc_2(0.00000377);
      setDefault_Hc_2(0.00000377);

      setValue_Dair_2(0.0853213);
      setDefault_Dair_2(0.0853213);

      setValue_Dwater_2(0.0000107);
      setDefault_Dwater_2(0.0000107);

      setValue_DHvb_2(9219.4556);
      setDefault_DHvb_2(9219.4556);

      setValue_Tc_2(670.0);
      setDefault_Tc_2(670.0);

      setValue_Tb_2(434.85);
      setDefault_Tb_2(434.85);

      setValue_MW_2(96.086);
      setDefault_MW_2(96.086);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.05);
      setDefault_Rfc_2(0.05);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(8.368);
      setDefault_Koc_2(8.368);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Heptachlor") {
      setValue_S_2(0.18);
      setDefault_S_2(0.18);

      setValue_Hc_2(0.000294);
      setDefault_Hc_2(0.000294);

      setValue_Dair_2(0.0223441);
      setDefault_Dair_2(0.0223441);

      setValue_Dwater_2(0.0000056959);
      setDefault_Dwater_2(0.0000056959);

      setValue_DHvb_2(13000);
      setDefault_DHvb_2(13000);

      setValue_Tc_2(874.725);
      setDefault_Tc_2(874.725);

      setValue_Tb_2(583.15);
      setDefault_Tb_2(583.15);

      setValue_MW_2(373.32);
      setDefault_MW_2(373.32);

      setValue_IUR_2(0.0013);
      setDefault_IUR_2(0.0013);

      setValue_Rfc_2(null);
      setDefault_Rfc_2(null);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(55850);
      setDefault_Koc_2(55850);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Heptachlor Epoxide") {
      setValue_S_2(0.2);
      setDefault_S_2(0.2);

      setValue_Hc_2(0.000021);
      setDefault_Hc_2(0.000021);

      setValue_Dair_2(0.0240006);
      setDefault_Dair_2(0.0240006);

      setValue_Dwater_2(0.0000062475);
      setDefault_Dwater_2(0.0000062475);

      setValue_DHvb_2(16000);
      setDefault_DHvb_2(16000);

      setValue_Tc_2(920.94);
      setDefault_Tc_2(920.94);

      setValue_Tb_2(613.96);
      setDefault_Tb_2(613.96);

      setValue_MW_2(389.32);
      setDefault_MW_2(389.32);

      setValue_IUR_2(0.0026);
      setDefault_IUR_2(0.0026);

      setValue_Rfc_2(null);
      setDefault_Rfc_2(null);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(3882);
      setDefault_Koc_2(3882);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Hexachlorobenzene") {
      setValue_S_2(0.0062);
      setDefault_S_2(0.0062);

      setValue_Hc_2(0.0017);
      setDefault_Hc_2(0.0017);

      setValue_Dair_2(0.0289745);
      setDefault_Dair_2(0.0289745);

      setValue_Dwater_2(0.0000078497);
      setDefault_Dwater_2(0.0000078497);

      setValue_DHvb_2(11703.454);
      setDefault_DHvb_2(11703.454);

      setValue_Tc_2(897.225);
      setDefault_Tc_2(897.225);

      setValue_Tb_2(598.15);
      setDefault_Tb_2(598.15);

      setValue_MW_2(284.78);
      setDefault_MW_2(284.78);

      setValue_IUR_2(0.00046);
      setDefault_IUR_2(0.00046);

      setValue_Rfc_2(null);
      setDefault_Rfc_2(null);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(17340);
      setDefault_Koc_2(17340);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Hexachlorobutadiene") {
      setValue_S_2(3.2);
      setDefault_S_2(3.2);

      setValue_Hc_2(0.0103);
      setDefault_Hc_2(0.0103);

      setValue_Dair_2(0.0267445);
      setDefault_Dair_2(0.0267445);

      setValue_Dwater_2(0.0000070264);
      setDefault_Dwater_2(0.0000070264);

      setValue_DHvb_2(10206);
      setDefault_DHvb_2(10206);

      setValue_Tc_2(732.225);
      setDefault_Tc_2(732.225);

      setValue_Tb_2(488.15);
      setDefault_Tb_2(488.15);

      setValue_MW_2(260.76);
      setDefault_MW_2(260.76);

      setValue_IUR_2(0.000022);
      setDefault_IUR_2(0.000022);

      setValue_Rfc_2(null);
      setDefault_Rfc_2(null);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(14070);
      setDefault_Koc_2(14070);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Hexachlorocyclopentadiene") {
      setValue_S_2(1.8);
      setDefault_S_2(1.8);

      setValue_Hc_2(0.027);
      setDefault_Hc_2(0.027);

      setValue_Dair_2(0.0272382);
      setDefault_Dair_2(0.0272382);

      setValue_Dwater_2(0.000007217);
      setDefault_Dwater_2(0.000007217);

      setValue_DHvb_2(42992.28);
      setDefault_DHvb_2(42992.28);

      setValue_Tc_2(768.225);
      setDefault_Tc_2(768.225);

      setValue_Tb_2(512.15);
      setDefault_Tb_2(512.15);

      setValue_MW_2(272.77);
      setDefault_MW_2(272.77);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.0002);
      setDefault_Rfc_2(0.0002);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(23650);
      setDefault_Koc_2(23650);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Hexachloroethane") {
      setValue_S_2(50.0);
      setDefault_S_2(50.0);

      setValue_Hc_2(0.00389);
      setDefault_Hc_2(0.00389);

      setValue_Dair_2(0.0320938);
      setDefault_Dair_2(0.0320938);

      setValue_Dwater_2(0.0000088904);
      setDefault_Dwater_2(0.0000088904);

      setValue_DHvb_2(11711.3);
      setDefault_DHvb_2(11711.3);

      setValue_Tc_2(641.4);
      setDefault_Tc_2(641.4);

      setValue_Tb_2(427.6);
      setDefault_Tb_2(427.6);

      setValue_MW_2(236.74);
      setDefault_MW_2(236.74);

      setValue_IUR_2(0.000011);
      setDefault_IUR_2(0.000011);

      setValue_Rfc_2(0.03);
      setDefault_Rfc_2(0.03);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(3915);
      setDefault_Koc_2(3915);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Hexane, N-") {
      setValue_S_2(9.5);
      setDefault_S_2(9.5);

      setValue_Hc_2(1.8);
      setDefault_Hc_2(1.8);

      setValue_Dair_2(0.0731078);
      setDefault_Dair_2(0.0731078);

      setValue_Dwater_2(0.0000081658);
      setDefault_Dwater_2(0.0000081658);

      setValue_DHvb_2(6895.15);
      setDefault_DHvb_2(6895.15);

      setValue_Tc_2(508.0);
      setDefault_Tc_2(508.0);

      setValue_Tb_2(341.7);
      setDefault_Tb_2(341.7);

      setValue_MW_2(86.178);
      setDefault_MW_2(86.178);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.7);
      setDefault_Rfc_2(0.7);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(2423);
      setDefault_Koc_2(2423);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Hexanone, 2-") {
      setValue_S_2(17200);
      setDefault_S_2(17200);

      setValue_Hc_2(0.0000932);
      setDefault_Hc_2(0.0000932);

      setValue_Dair_2(0.0703564);
      setDefault_Dair_2(0.0703564);

      setValue_Dwater_2(0.0000084404);
      setDefault_Dwater_2(0.0000084404);

      setValue_DHvb_2(8610.39);
      setDefault_DHvb_2(8610.39);

      setValue_Tc_2(600.9);
      setDefault_Tc_2(600.9);

      setValue_Tb_2(400.6);
      setDefault_Tb_2(400.6);

      setValue_MW_2(100.16);
      setDefault_MW_2(100.16);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.03);
      setDefault_Rfc_2(0.03);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(76.56);
      setDefault_Koc_2(76.56);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Hydrazine") {
      setValue_S_2(1000000);
      setDefault_S_2(1000000);

      setValue_Hc_2(0.00000061);
      setDefault_Hc_2(0.00000061);

      setValue_Dair_2(0.1733034);
      setDefault_Dair_2(0.1733034);

      setValue_Dwater_2(0.000019);
      setDefault_Dwater_2(0.000019);

      setValue_DHvb_2(10812.55842);
      setDefault_DHvb_2(10812.55842);

      setValue_Tc_2(653.15);
      setDefault_Tc_2(653.15);

      setValue_Tb_2(386.65);
      setDefault_Tb_2(386.65);

      setValue_MW_2(32.045);
      setDefault_MW_2(32.045);

      setValue_IUR_2(0.0049);
      setDefault_IUR_2(0.0049);

      setValue_Rfc_2(0.00003);
      setDefault_Rfc_2(0.00003);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(0.01596);
      setDefault_Koc_2(0.01596);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Hydrogen Chloride") {
      setValue_S_2(673000);
      setDefault_S_2(673000);

      setValue_Hc_2(2040000);
      setDefault_Hc_2(2040000);

      setValue_Dair_2(0.1879912);
      setDefault_Dair_2(0.1879912);

      setValue_Dwater_2(0.0000227);
      setDefault_Dwater_2(0.0000227);

      setValue_DHvb_2(3855.476017);
      setDefault_DHvb_2(3855.476017);

      setValue_Tc_2(324.55);
      setDefault_Tc_2(324.55);

      setValue_Tb_2(188.1);
      setDefault_Tb_2(188.1);

      setValue_MW_2(35.45);
      setDefault_MW_2(35.45);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.02);
      setDefault_Rfc_2(0.02);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(2.939);
      setDefault_Koc_2(2.939);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Hydrogen Cyanide") {
      setValue_S_2(1000000);
      setDefault_S_2(1000000);

      setValue_Hc_2(0.000133);
      setDefault_Hc_2(0.000133);

      setValue_Dair_2(0.1678036);
      setDefault_Dair_2(0.1678036);

      setValue_Dwater_2(0.0000168);
      setDefault_Dwater_2(0.0000168);

      setValue_DHvb_2(6676.41);
      setDefault_DHvb_2(6676.41);

      setValue_Tc_2(456.7);
      setDefault_Tc_2(456.7);

      setValue_Tb_2(298.6);
      setDefault_Tb_2(298.6);

      setValue_MW_2(27.026);
      setDefault_MW_2(27.026);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.0008);
      setDefault_Rfc_2(0.0008);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(15.1);
      setDefault_Koc_2(15.1);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Hydrogen Fluoride") {
      setValue_S_2(1000000);
      setDefault_S_2(1000000);

      setValue_Hc_2(0.000104);
      setDefault_Hc_2(0.000104);

      setValue_Dair_2(0.2190996);
      setDefault_Dair_2(0.2190996);

      setValue_Dwater_2(0.0000223);
      setDefault_Dwater_2(0.0000223);

      setValue_DHvb_2(1789.673078);
      setDefault_DHvb_2(1789.673078);

      setValue_Tc_2(461.15);
      setDefault_Tc_2(461.15);

      setValue_Tb_2(292.66);
      setDefault_Tb_2(292.66);

      setValue_MW_2(20.006);
      setDefault_MW_2(20.006);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.014);
      setDefault_Rfc_2(0.014);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(1.582);
      setDefault_Koc_2(1.582);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Hydrogen Sulfide") {
      setValue_S_2(3740);
      setDefault_S_2(3740);

      setValue_Hc_2(0.00856);
      setDefault_Hc_2(0.00856);

      setValue_Dair_2(0.1880669);
      setDefault_Dair_2(0.1880669);

      setValue_Dwater_2(0.0000223);
      setDefault_Dwater_2(0.0000223);

      setValue_DHvb_2(4459.25482);
      setDefault_DHvb_2(4459.25482);

      setValue_Tc_2(373.1);
      setDefault_Tc_2(373.1);

      setValue_Tb_2(212.82);
      setDefault_Tb_2(212.82);

      setValue_MW_2(34.08);
      setDefault_MW_2(34.08);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.002);
      setDefault_Rfc_2(0.002);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(0.06337);
      setDefault_Koc_2(0.06337);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Isobutyl Alcohol") {
      setValue_S_2(85000);
      setDefault_S_2(85000);

      setValue_Hc_2(0.00000978);
      setDefault_Hc_2(0.00000978);

      setValue_Dair_2(0.0896677);
      setDefault_Dair_2(0.0896677);

      setValue_Dwater_2(0.00001);
      setDefault_Dwater_2(0.00001);

      setValue_DHvb_2(103496.65);
      setDefault_DHvb_2(103496.65);

      setValue_Tc_2(547.78);
      setDefault_Tc_2(547.78);

      setValue_Tb_2(380.95);
      setDefault_Tb_2(380.95);

      setValue_MW_2(74.124);
      setDefault_MW_2(74.124);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(null);
      setDefault_Rfc_2(null);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(8.591);
      setDefault_Koc_2(8.591);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Isopropanol") {
      setValue_S_2(1000000);
      setDefault_S_2(1000000);

      setValue_Hc_2(0.0000081);
      setDefault_Hc_2(0.0000081);

      setValue_Dair_2(0.1032261);
      setDefault_Dair_2(0.1032261);

      setValue_Dwater_2(0.0000112);
      setDefault_Dwater_2(0.0000112);

      setValue_DHvb_2(10841.21994);
      setDefault_DHvb_2(10841.21994);

      setValue_Tc_2(508.3);
      setDefault_Tc_2(508.3);

      setValue_Tb_2(355.45);
      setDefault_Tb_2(355.45);

      setValue_MW_2(60.097);
      setDefault_MW_2(60.097);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.2);
      setDefault_Rfc_2(0.2);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(3.478);
      setDefault_Koc_2(3.478);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Mercury (elemental)") {
      setValue_S_2(0.06);
      setDefault_S_2(0.06);

      setValue_Hc_2(0.008622);
      setDefault_Hc_2(0.008622);

      setValue_Dair_2(0.0307);
      setDefault_Dair_2(0.0307);

      setValue_Dwater_2(0.0000063);
      setDefault_Dwater_2(0.0000063);

      setValue_DHvb_2(14127);
      setDefault_DHvb_2(14127);

      setValue_Tc_2(1750);
      setDefault_Tc_2(1750);

      setValue_Tb_2(356.6);
      setDefault_Tb_2(356.6);

      setValue_MW_2(200.59);
      setDefault_MW_2(200.59);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.0003);
      setDefault_Rfc_2(0.0003);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(3.449);
      setDefault_Koc_2(3.449);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Methacrylonitrile") {
      setValue_S_2(25400);
      setDefault_S_2(25400);

      setValue_Hc_2(0.000247);
      setDefault_Hc_2(0.000247);

      setValue_Dair_2(0.0964299);
      setDefault_Dair_2(0.0964299);

      setValue_Dwater_2(0.0000106);
      setDefault_Dwater_2(0.0000106);

      setValue_DHvb_2(7600.2);
      setDefault_DHvb_2(7600.2);

      setValue_Tc_2(554.0);
      setDefault_Tc_2(554.0);

      setValue_Tb_2(363.3);
      setDefault_Tb_2(363.3);

      setValue_MW_2(67.091);
      setDefault_MW_2(67.091);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.03);
      setDefault_Rfc_2(0.03);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(49.36);
      setDefault_Koc_2(49.36);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Methanol") {
      setValue_S_2(1000000);
      setDefault_S_2(1000000);

      setValue_Hc_2(0.00000455);
      setDefault_Hc_2(0.00000455);

      setValue_Dair_2(0.1582741);
      setDefault_Dair_2(0.1582741);

      setValue_Dwater_2(0.0000165);
      setDefault_Dwater_2(0.0000165);

      setValue_DHvb_2(8918.50964);
      setDefault_DHvb_2(8918.50964);

      setValue_Tc_2(513.15);
      setDefault_Tc_2(513.15);

      setValue_Tb_2(337.85);
      setDefault_Tb_2(337.85);

      setValue_MW_2(32.042);
      setDefault_MW_2(32.042);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(20.0);
      setDefault_Rfc_2(20.0);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(1.224);
      setDefault_Koc_2(1.224);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Methoxyethanol Acetate, 2-") {
      setValue_S_2(1000000);
      setDefault_S_2(1000000);

      setValue_Hc_2(0.000000311);
      setDefault_Hc_2(0.000000311);

      setValue_Dair_2(0.0658347);
      setDefault_Dair_2(0.0658347);

      setValue_Dwater_2(0.0000087052);
      setDefault_Dwater_2(0.0000087052);

      setValue_DHvb_2(10485.3394);
      setDefault_DHvb_2(10485.3394);

      setValue_Tc_2(624.225);
      setDefault_Tc_2(624.225);

      setValue_Tb_2(416.15);
      setDefault_Tb_2(416.15);

      setValue_MW_2(118.13);
      setDefault_MW_2(118.13);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.001);
      setDefault_Rfc_2(0.001);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(6.671);
      setDefault_Koc_2(6.671);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Methoxyethanol, 2-") {
      setValue_S_2(1000000);
      setDefault_S_2(1000000);

      setValue_Hc_2(0.00000033);
      setDefault_Hc_2(0.00000033);

      setValue_Dair_2(0.0951557);
      setDefault_Dair_2(0.0951557);

      setValue_Dwater_2(0.000011);
      setDefault_Dwater_2(0.000011);

      setValue_DHvb_2(8966.27884);
      setDefault_DHvb_2(8966.27884);

      setValue_Tc_2(597.6);
      setDefault_Tc_2(597.6);

      setValue_Tb_2(397.25);
      setDefault_Tb_2(397.25);

      setValue_MW_2(76.096);
      setDefault_MW_2(76.096);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.02);
      setDefault_Rfc_2(0.02);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(0.9935);
      setDefault_Koc_2(0.9935);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Methyl Acetate") {
      setValue_S_2(243000);
      setDefault_S_2(243000);

      setValue_Hc_2(0.000115);
      setDefault_Hc_2(0.000115);

      setValue_Dair_2(0.0957763);
      setDefault_Dair_2(0.0957763);

      setValue_Dwater_2(0.000011);
      setDefault_Dwater_2(0.000011);

      setValue_DHvb_2(7260.0791);
      setDefault_DHvb_2(7260.0791);

      setValue_Tc_2(506.7);
      setDefault_Tc_2(506.7);

      setValue_Tb_2(365);
      setDefault_Tb_2(365);

      setValue_MW_2(74.08);
      setDefault_MW_2(74.08);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(null);
      setDefault_Rfc_2(null);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(9.101);
      setDefault_Koc_2(9.101);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Methyl Acrylate") {
      setValue_S_2(49400);
      setDefault_S_2(49400);

      setValue_Hc_2(0.000199);
      setDefault_Hc_2(0.000199);

      setValue_Dair_2(0.0859972);
      setDefault_Dair_2(0.0859972);

      setValue_Dwater_2(0.0000102);
      setDefault_Dwater_2(0.0000102);

      setValue_DHvb_2(7749);
      setDefault_DHvb_2(7749);

      setValue_Tc_2(536.0);
      setDefault_Tc_2(536.0);

      setValue_Tb_2(353.2);
      setDefault_Tb_2(353.2);

      setValue_MW_2(86.091);
      setDefault_MW_2(86.091);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.02);
      setDefault_Rfc_2(0.02);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(20.05);
      setDefault_Koc_2(20.05);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Methyl Ethyl Ketone (2-Butanone)") {
      setValue_S_2(223000);
      setDefault_S_2(223000);

      setValue_Hc_2(0.0000569);
      setDefault_Hc_2(0.0000569);

      setValue_Dair_2(0.0914462);
      setDefault_Dair_2(0.0914462);

      setValue_Dwater_2(0.0000102);
      setDefault_Dwater_2(0.0000102);

      setValue_DHvb_2(7480.7);
      setDefault_DHvb_2(7480.7);

      setValue_Tc_2(536.78);
      setDefault_Tc_2(536.78);

      setValue_Tb_2(352.5);
      setDefault_Tb_2(352.5);

      setValue_MW_2(72.108);
      setDefault_MW_2(72.108);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(5.0);
      setDefault_Rfc_2(5.0);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(19.1);
      setDefault_Koc_2(19.1);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Methyl Hydrazine") {
      setValue_S_2(1000000);
      setDefault_S_2(1000000);

      setValue_Hc_2(0.000003031);
      setDefault_Hc_2(0.000003031);

      setValue_Dair_2(0.1290894);
      setDefault_Dair_2(0.1290894);

      setValue_Dwater_2(0.000014);
      setDefault_Dwater_2(0.000014);

      setValue_DHvb_2(8887.937352);
      setDefault_DHvb_2(8887.937352);

      setValue_Tc_2(585.15);
      setDefault_Tc_2(585.15);

      setValue_Tb_2(360.65);
      setDefault_Tb_2(360.65);

      setValue_MW_2(46.072);
      setDefault_MW_2(46.072);

      setValue_IUR_2(0.001);
      setDefault_IUR_2(0.001);

      setValue_Rfc_2(0.00002);
      setDefault_Rfc_2(0.00002);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(2.101);
      setDefault_Koc_2(2.101);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (
      selectedChem === "Methyl Isobutyl Ketone (4-methyl-2-pentanone)"
    ) {
      setValue_S_2(19000);
      setDefault_S_2(19000);

      setValue_Hc_2(0.000138);
      setDefault_Hc_2(0.000138);

      setValue_Dair_2(0.0697797);
      setDefault_Dair_2(0.0697797);

      setValue_Dwater_2(0.0000083477);
      setDefault_Dwater_2(0.0000083477);

      setValue_DHvb_2(8243.11);
      setDefault_DHvb_2(8243.11);

      setValue_Tc_2(571.0);
      setDefault_Tc_2(571.0);

      setValue_Tb_2(389.5);
      setDefault_Tb_2(389.5);

      setValue_MW_2(100.16);
      setDefault_MW_2(100.16);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(3.0);
      setDefault_Rfc_2(3.0);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(70.03);
      setDefault_Koc_2(70.03);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Methyl Methacrylate") {
      setValue_S_2(15000);
      setDefault_S_2(15000);

      setValue_Hc_2(0.000319);
      setDefault_Hc_2(0.000319);

      setValue_Dair_2(0.0750447);
      setDefault_Dair_2(0.0750447);

      setValue_Dwater_2(0.0000092087);
      setDefault_Dwater_2(0.0000092087);

      setValue_DHvb_2(8974.9);
      setDefault_DHvb_2(8974.9);

      setValue_Tc_2(567.0);
      setDefault_Tc_2(567.0);

      setValue_Tb_2(373.5);
      setDefault_Tb_2(373.5);

      setValue_MW_2(100.12);
      setDefault_MW_2(100.12);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.7);
      setDefault_Rfc_2(0.7);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(41.96);
      setDefault_Koc_2(41.96);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Methyl Styrene (Mixed Isomers)") {
      setValue_S_2(89.0);
      setDefault_S_2(89.0);

      setValue_Hc_2(0.00262);
      setDefault_Hc_2(0.00262);

      setValue_Dair_2(0.017397);
      setDefault_Dair_2(0.017397);

      setValue_Dwater_2(0.0000041793);
      setDefault_Dwater_2(0.0000041793);

      setValue_DHvb_2(12027.44);
      setDefault_DHvb_2(12027.44);

      setValue_Tc_2(655.0);
      setDefault_Tc_2(655.0);

      setValue_Tb_2(437.65);
      setDefault_Tb_2(437.65);

      setValue_MW_2(354.54);
      setDefault_MW_2(354.54);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.04);
      setDefault_Rfc_2(0.04);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(966.4);
      setDefault_Koc_2(966.4);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Methyl tert-Butyl Ether (MTBE)") {
      setValue_S_2(51000);
      setDefault_S_2(51000);

      setValue_Hc_2(0.000587);
      setDefault_Hc_2(0.000587);

      setValue_Dair_2(0.0752672);
      setDefault_Dair_2(0.0752672);

      setValue_Dwater_2(0.0000085904);
      setDefault_Dwater_2(0.0000085904);

      setValue_DHvb_2(6677.66);
      setDefault_DHvb_2(6677.66);

      setValue_Tc_2(497.1);
      setDefault_Tc_2(497.1);

      setValue_Tb_2(328.2);
      setDefault_Tb_2(328.2);

      setValue_MW_2(88.151);
      setDefault_MW_2(88.151);

      setValue_IUR_2(0.00000026);
      setDefault_IUR_2(0.00000026);

      setValue_Rfc_2(3.0);
      setDefault_Rfc_2(3.0);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(22.62);
      setDefault_Koc_2(22.62);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Methylene Chloride") {
      setValue_S_2(13000);
      setDefault_S_2(13000);

      setValue_Hc_2(0.00325);
      setDefault_Hc_2(0.00325);

      setValue_Dair_2(0.0999362);
      setDefault_Dair_2(0.0999362);

      setValue_Dwater_2(0.0000125);
      setDefault_Dwater_2(0.0000125);

      setValue_DHvb_2(6706);
      setDefault_DHvb_2(6706);

      setValue_Tc_2(510.0);
      setDefault_Tc_2(510.0);

      setValue_Tb_2(313.0);
      setDefault_Tb_2(313.0);

      setValue_MW_2(84.933);
      setDefault_MW_2(84.933);

      setValue_IUR_2(0.00000001);
      setDefault_IUR_2(0.00000001);

      setValue_Rfc_2(0.6);
      setDefault_Rfc_2(0.6);

      setValue_Mut_2("Yes");
      setDefault_Mut_2("Yes");

      setValue_Koc_2(12.15);
      setDefault_Koc_2(12.15);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Methylnaphthalene, 1-") {
      setValue_S_2(25.8);
      setDefault_S_2(25.8);

      setValue_Hc_2(0.000514);
      setDefault_Hc_2(0.000514);

      setValue_Dair_2(0.0527705);
      setDefault_Dair_2(0.0527705);

      setValue_Dwater_2(0.0000078477);
      setDefault_Dwater_2(0.0000078477);

      setValue_DHvb_2(13690.65);
      setDefault_DHvb_2(13690.65);

      setValue_Tc_2(771.8);
      setDefault_Tc_2(771.8);

      setValue_Tb_2(517.7);
      setDefault_Tb_2(517.7);

      setValue_MW_2(142.2);
      setDefault_MW_2(142.2);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(null);
      setDefault_Rfc_2(null);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(2282);
      setDefault_Koc_2(2282);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Methylnaphthalene, 2-") {
      setValue_S_2(24.6);
      setDefault_S_2(24.6);

      setValue_Hc_2(0.000518);
      setDefault_Hc_2(0.000518);

      setValue_Dair_2(0.0524319);
      setDefault_Dair_2(0.0524319);

      setValue_Dwater_2(0.0000077811);
      setDefault_Dwater_2(0.0000077811);

      setValue_DHvb_2(12600);
      setDefault_DHvb_2(12600);

      setValue_Tc_2(761.0);
      setDefault_Tc_2(761.0);

      setValue_Tb_2(514.1);
      setDefault_Tb_2(514.1);

      setValue_MW_2(142.2);
      setDefault_MW_2(142.2);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(null);
      setDefault_Rfc_2(null);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(2237);
      setDefault_Koc_2(2237);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Methylstyrene, Alpha-") {
      setValue_S_2(116.0);
      setDefault_S_2(116.0);

      setValue_Hc_2(0.00255);
      setDefault_Hc_2(0.00255);

      setValue_Dair_2(0.062902);
      setDefault_Dair_2(0.062902);

      setValue_Dwater_2(0.0000081911);
      setDefault_Dwater_2(0.0000081911);

      setValue_DHvb_2(11419.16);
      setDefault_DHvb_2(11419.16);

      setValue_Tc_2(657.0);
      setDefault_Tc_2(657.0);

      setValue_Tb_2(438.4);
      setDefault_Tb_2(438.4);

      setValue_MW_2(118.18);
      setDefault_MW_2(118.18);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(null);
      setDefault_Rfc_2(null);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(1047);
      setDefault_Koc_2(1047);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Naphthalene") {
      setValue_S_2(31.0);
      setDefault_S_2(31.0);

      setValue_Hc_2(0.00044);
      setDefault_Hc_2(0.00044);

      setValue_Dair_2(0.0604994);
      setDefault_Dair_2(0.0604994);

      setValue_Dwater_2(0.000008377);
      setDefault_Dwater_2(0.000008377);

      setValue_DHvb_2(10373);
      setDefault_DHvb_2(10373);

      setValue_Tc_2(748.4);
      setDefault_Tc_2(748.4);

      setValue_Tb_2(490.9);
      setDefault_Tb_2(490.9);

      setValue_MW_2(128.18);
      setDefault_MW_2(128.18);

      setValue_IUR_2(0.000034);
      setDefault_IUR_2(0.000034);

      setValue_Rfc_2(0.003);
      setDefault_Rfc_2(0.003);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(731);
      setDefault_Koc_2(731);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Nickel Carbonyl") {
      setValue_S_2(180.0);
      setDefault_S_2(180.0);

      setValue_Hc_2(0.5);
      setDefault_Hc_2(0.5);

      setValue_Dair_2(0.0433019);
      setDefault_Dair_2(0.0433019);

      setValue_Dwater_2(0.0000081704);
      setDefault_Dwater_2(0.0000081704);

      setValue_DHvb_2(6829.36);
      setDefault_DHvb_2(6829.36);

      setValue_Tc_2(473.15);
      setDefault_Tc_2(473.15);

      setValue_Tb_2(316.15);
      setDefault_Tb_2(316.15);

      setValue_MW_2(170.734);
      setDefault_MW_2(170.734);

      setValue_IUR_2(0.00026);
      setDefault_IUR_2(0.00026);

      setValue_Rfc_2(0.000014);
      setDefault_Rfc_2(0.000014);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(null);
      setDefault_Koc_2(null);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Nitrobenzene") {
      setValue_S_2(2090);
      setDefault_S_2(2090);

      setValue_Hc_2(0.000024);
      setDefault_Hc_2(0.000024);

      setValue_Dair_2(0.068054);
      setDefault_Dair_2(0.068054);

      setValue_Dwater_2(0.0000094495);
      setDefault_Dwater_2(0.0000094495);

      setValue_DHvb_2(10566);
      setDefault_DHvb_2(10566);

      setValue_Tc_2(719.0);
      setDefault_Tc_2(719.0);

      setValue_Tb_2(483.8);
      setDefault_Tb_2(483.8);

      setValue_MW_2(123.11);
      setDefault_MW_2(123.11);

      setValue_IUR_2(0.00004);
      setDefault_IUR_2(0.00004);

      setValue_Rfc_2(0.009);
      setDefault_Rfc_2(0.009);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(147.1);
      setDefault_Koc_2(147.1);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Nitromethane") {
      setValue_S_2(111000);
      setDefault_S_2(111000);

      setValue_Hc_2(0.0000286);
      setDefault_Hc_2(0.0000286);

      setValue_Dair_2(0.1192837);
      setDefault_Dair_2(0.1192837);

      setValue_Dwater_2(0.0000139);
      setDefault_Dwater_2(0.0000139);

      setValue_DHvb_2(9140.63);
      setDefault_DHvb_2(9140.63);

      setValue_Tc_2(588.0);
      setDefault_Tc_2(588.0);

      setValue_Tb_2(374.1);
      setDefault_Tb_2(374.1);

      setValue_MW_2(61.041);
      setDefault_MW_2(61.041);

      setValue_IUR_2(0.0000088);
      setDefault_IUR_2(0.0000088);

      setValue_Rfc_2(0.005);
      setDefault_Rfc_2(0.005);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(8.925);
      setDefault_Koc_2(8.925);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Nitropropane, 2-") {
      setValue_S_2(17000);
      setDefault_S_2(17000);

      setValue_Hc_2(0.000119);
      setDefault_Hc_2(0.000119);

      setValue_Dair_2(0.0846934);
      setDefault_Dair_2(0.0846934);

      setValue_Dwater_2(0.0000102);
      setDefault_Dwater_2(0.0000102);

      setValue_DHvb_2(8383);
      setDefault_DHvb_2(8383);

      setValue_Tc_2(594.0);
      setDefault_Tc_2(594.0);

      setValue_Tb_2(393.2);
      setDefault_Tb_2(393.2);

      setValue_MW_2(89.095);
      setDefault_MW_2(89.095);

      setValue_IUR_2(0.0027);
      setDefault_IUR_2(0.0027);

      setValue_Rfc_2(0.02);
      setDefault_Rfc_2(0.02);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(45.56);
      setDefault_Koc_2(45.56);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Nitrotoluene, o-") {
      setValue_S_2(650.0);
      setDefault_S_2(650.0);

      setValue_Hc_2(0.0000125);
      setDefault_Hc_2(0.0000125);

      setValue_Dair_2(0.0587535);
      setDefault_Dair_2(0.0587535);

      setValue_Dwater_2(0.0000086675);
      setDefault_Dwater_2(0.0000086675);

      setValue_DHvb_2(12239.1);
      setDefault_DHvb_2(12239.1);

      setValue_Tc_2(720.0);
      setDefault_Tc_2(720.0);

      setValue_Tb_2(495.0);
      setDefault_Tb_2(495.0);

      setValue_MW_2(137.14);
      setDefault_MW_2(137.14);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(null);
      setDefault_Rfc_2(null);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(260.8);
      setDefault_Koc_2(260.8);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Nonane, n-") {
      setValue_S_2(0.22);
      setDefault_S_2(0.22);

      setValue_Hc_2(3.4);
      setDefault_Hc_2(3.4);

      setValue_Dair_2(0.051432);
      setDefault_Dair_2(0.051432);

      setValue_Dwater_2(0.000006769);
      setDefault_Dwater_2(0.000006769);

      setValue_DHvb_2(11082.45);
      setDefault_DHvb_2(11082.45);

      setValue_Tc_2(594.0);
      setDefault_Tc_2(594.0);

      setValue_Tb_2(423.8);
      setDefault_Tb_2(423.8);

      setValue_MW_2(128.26);
      setDefault_MW_2(128.26);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.02);
      setDefault_Rfc_2(0.02);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(80030);
      setDefault_Koc_2(80030);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Pentane, n-") {
      setValue_S_2(38.0);
      setDefault_S_2(38.0);

      setValue_Hc_2(1.25);
      setDefault_Hc_2(1.25);

      setValue_Dair_2(0.0821293);
      setDefault_Dair_2(0.0821293);

      setValue_Dwater_2(0.0000087974);
      setDefault_Dwater_2(0.0000087974);

      setValue_DHvb_2(6155.06);
      setDefault_DHvb_2(6155.06);

      setValue_Tc_2(469.7);
      setDefault_Tc_2(469.7);

      setValue_Tb_2(309.0);
      setDefault_Tb_2(309.0);

      setValue_MW_2(72.151);
      setDefault_MW_2(72.151);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(1.0);
      setDefault_Rfc_2(1.0);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(874.5);
      setDefault_Koc_2(874.5);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Phosgene") {
      setValue_S_2(6825.5);
      setDefault_S_2(6825.5);

      setValue_Hc_2(0.0167);
      setDefault_Hc_2(0.0167);

      setValue_Dair_2(0.0893282);
      setDefault_Dair_2(0.0893282);

      setValue_Dwater_2(0.0000117);
      setDefault_Dwater_2(0.0000117);

      setValue_DHvb_2(7352.39);
      setDefault_DHvb_2(7352.39);

      setValue_Tc_2(455.0);
      setDefault_Tc_2(455.0);

      setValue_Tb_2(281.2);
      setDefault_Tb_2(281.2);

      setValue_MW_2(98.917);
      setDefault_MW_2(98.917);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.0003);
      setDefault_Rfc_2(0.0003);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(2.01);
      setDefault_Koc_2(2.01);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Propionaldehyde") {
      setValue_S_2(306000);
      setDefault_S_2(306000);

      setValue_Hc_2(0.0000734);
      setDefault_Hc_2(0.0000734);

      setValue_Dair_2(0.1103767);
      setDefault_Dair_2(0.1103767);

      setValue_Dwater_2(0.0000122);
      setDefault_Dwater_2(0.0000122);

      setValue_DHvb_2(7074.62);
      setDefault_DHvb_2(7074.62);

      setValue_Tc_2(496.0);
      setDefault_Tc_2(496.0);

      setValue_Tb_2(321.0);
      setDefault_Tb_2(321.0);

      setValue_MW_2(58.081);
      setDefault_MW_2(58.081);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.008);
      setDefault_Rfc_2(0.008);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(10.52);
      setDefault_Koc_2(10.52);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Propyl benzene") {
      setValue_S_2(52.2);
      setDefault_S_2(52.2);

      setValue_Hc_2(0.0105);
      setDefault_Hc_2(0.0105);

      setValue_Dair_2(0.0601558);
      setDefault_Dair_2(0.0601558);

      setValue_Dwater_2(0.000007831);
      setDefault_Dwater_2(0.000007831);

      setValue_DHvb_2(9123);
      setDefault_DHvb_2(9123);

      setValue_Tc_2(630.0);
      setDefault_Tc_2(630.0);

      setValue_Tb_2(432.2);
      setDefault_Tb_2(432.2);

      setValue_MW_2(120.2);
      setDefault_MW_2(120.2);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(1.0);
      setDefault_Rfc_2(1.0);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(1593);
      setDefault_Koc_2(1593);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Propylene") {
      setValue_S_2(200.0);
      setDefault_S_2(200.0);

      setValue_Hc_2(0.196);
      setDefault_Hc_2(0.196);

      setValue_Dair_2(0.1096967);
      setDefault_Dair_2(0.1096967);

      setValue_Dwater_2(0.0000107);
      setDefault_Dwater_2(0.0000107);

      setValue_DHvb_2(4402.41);
      setDefault_DHvb_2(4402.41);

      setValue_Tc_2(364.95);
      setDefault_Tc_2(364.95);

      setValue_Tb_2(225.6);
      setDefault_Tb_2(225.6);

      setValue_MW_2(42.081);
      setDefault_MW_2(42.081);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(3.0);
      setDefault_Rfc_2(3.0);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(34.34);
      setDefault_Koc_2(34.34);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Propylene Glycol Monomethyl Ether") {
      setValue_S_2(1000000);
      setDefault_S_2(1000000);

      setValue_Hc_2(0.00000092);
      setDefault_Hc_2(0.00000092);

      setValue_Dair_2(0.083145);
      setDefault_Dair_2(0.083145);

      setValue_Dwater_2(0.0000099604);
      setDefault_Dwater_2(0.0000099604);

      setValue_DHvb_2(7795.93344);
      setDefault_DHvb_2(7795.93344);

      setValue_Tc_2(588.225);
      setDefault_Tc_2(588.225);

      setValue_Tb_2(392.15);
      setDefault_Tb_2(392.15);

      setValue_MW_2(90.123);
      setDefault_MW_2(90.123);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(2.0);
      setDefault_Rfc_2(2.0);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(1.419);
      setDefault_Koc_2(1.419);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Propylene Oxide") {
      setValue_S_2(590000);
      setDefault_S_2(590000);

      setValue_Hc_2(0.0000696);
      setDefault_Hc_2(0.0000696);

      setValue_Dair_2(0.1085105);
      setDefault_Dair_2(0.1085105);

      setValue_Dwater_2(0.0000119);
      setDefault_Dwater_2(0.0000119);

      setValue_DHvb_2(6621.12);
      setDefault_DHvb_2(6621.12);

      setValue_Tc_2(482.1);
      setDefault_Tc_2(482.1);

      setValue_Tb_2(308.0);
      setDefault_Tb_2(308.0);

      setValue_MW_2(58.081);
      setDefault_MW_2(58.081);

      setValue_IUR_2(0.0000037);
      setDefault_IUR_2(0.0000037);

      setValue_Rfc_2(0.03);
      setDefault_Rfc_2(0.03);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(7.097);
      setDefault_Koc_2(7.097);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Pyrene") {
      setValue_S_2(0.135);
      setDefault_S_2(0.135);

      setValue_Hc_2(0.0000119);
      setDefault_Hc_2(0.0000119);

      setValue_Dair_2(0.0277873);
      setDefault_Dair_2(0.0277873);

      setValue_Dwater_2(0.0000072479);
      setDefault_Dwater_2(0.0000072479);

      setValue_DHvb_2(14370);
      setDefault_DHvb_2(14370);

      setValue_Tc_2(936.0);
      setDefault_Tc_2(936.0);

      setValue_Tb_2(677.0);
      setDefault_Tb_2(677.0);

      setValue_MW_2(202.26);
      setDefault_MW_2(202.26);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(null);
      setDefault_Rfc_2(null);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(17180);
      setDefault_Koc_2(17180);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Pyridine") {
      setValue_S_2(1000000);
      setDefault_S_2(1000000);

      setValue_Hc_2(0.000011);
      setDefault_Hc_2(0.000011);

      setValue_Dair_2(0.0930883);
      setDefault_Dair_2(0.0930883);

      setValue_Dwater_2(0.0000109);
      setDefault_Dwater_2(0.0000109);

      setValue_DHvb_2(35.1);
      setDefault_DHvb_2(35.1);

      setValue_Tc_2(617.2);
      setDefault_Tc_2(617.2);

      setValue_Tb_2(388.2);
      setDefault_Tb_2(388.2);

      setValue_MW_2(79.102);
      setDefault_MW_2(79.102);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(null);
      setDefault_Rfc_2(null);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(28.91);
      setDefault_Koc_2(28.91);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Styrene") {
      setValue_S_2(310.0);
      setDefault_S_2(310.0);

      setValue_Hc_2(0.00275);
      setDefault_Hc_2(0.00275);

      setValue_Dair_2(0.071114);
      setDefault_Dair_2(0.071114);

      setValue_Dwater_2(0.0000087838);
      setDefault_Dwater_2(0.0000087838);

      setValue_DHvb_2(8737);
      setDefault_DHvb_2(8737);

      setValue_Tc_2(636.0);
      setDefault_Tc_2(636.0);

      setValue_Tb_2(418.0);
      setDefault_Tb_2(418.0);

      setValue_MW_2(104.15);
      setDefault_MW_2(104.15);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(1.0);
      setDefault_Rfc_2(1.0);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(363);
      setDefault_Koc_2(363);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Tetrachloroethane, 1,1,1,2-") {
      setValue_S_2(1070);
      setDefault_S_2(1070);

      setValue_Hc_2(0.0025);
      setDefault_Hc_2(0.0025);

      setValue_Dair_2(0.0481761);
      setDefault_Dair_2(0.0481761);

      setValue_Dwater_2(0.0000090977);
      setDefault_Dwater_2(0.0000090977);

      setValue_DHvb_2(9768.282525);
      setDefault_DHvb_2(9768.282525);

      setValue_Tc_2(624.0);
      setDefault_Tc_2(624.0);

      setValue_Tb_2(403.5);
      setDefault_Tb_2(403.5);

      setValue_MW_2(167.85);
      setDefault_MW_2(167.85);

      setValue_IUR_2(0.0000074);
      setDefault_IUR_2(0.0000074);

      setValue_Rfc_2(null);
      setDefault_Rfc_2(null);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(348.8);
      setDefault_Koc_2(348.8);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Tetrachloroethane, 1,1,2,2-") {
      setValue_S_2(2830);
      setDefault_S_2(2830);

      setValue_Hc_2(0.000367);
      setDefault_Hc_2(0.000367);

      setValue_Dair_2(0.0489206);
      setDefault_Dair_2(0.0489206);

      setValue_Dwater_2(0.0000092902);
      setDefault_Dwater_2(0.0000092902);

      setValue_DHvb_2(8996);
      setDefault_DHvb_2(8996);

      setValue_Tc_2(661.15);
      setDefault_Tc_2(661.15);

      setValue_Tb_2(419.5);
      setDefault_Tb_2(419.5);

      setValue_MW_2(167.85);
      setDefault_MW_2(167.85);

      setValue_IUR_2(0.000058);
      setDefault_IUR_2(0.000058);

      setValue_Rfc_2(null);
      setDefault_Rfc_2(null);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(118.5);
      setDefault_Koc_2(118.5);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Tetrachloroethylene") {
      setValue_S_2(206.0);
      setDefault_S_2(206.0);

      setValue_Hc_2(0.0177);
      setDefault_Hc_2(0.0177);

      setValue_Dair_2(0.0504664);
      setDefault_Dair_2(0.0504664);

      setValue_Dwater_2(0.0000094551);
      setDefault_Dwater_2(0.0000094551);

      setValue_DHvb_2(8288);
      setDefault_DHvb_2(8288);

      setValue_Tc_2(620.2);
      setDefault_Tc_2(620.2);

      setValue_Tb_2(394.3);
      setDefault_Tb_2(394.3);

      setValue_MW_2(165.83);
      setDefault_MW_2(165.83);

      setValue_IUR_2(0.00000026);
      setDefault_IUR_2(0.00000026);

      setValue_Rfc_2(0.04);
      setDefault_Rfc_2(0.04);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(892.2);
      setDefault_Koc_2(892.2);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Tetrafluoroethane, 1,1,1,2-") {
      setValue_S_2(2040);
      setDefault_S_2(2040);

      setValue_Hc_2(0.05);
      setDefault_Hc_2(0.05);

      setValue_Dair_2(0.0823066);
      setDefault_Dair_2(0.0823066);

      setValue_Dwater_2(0.0000106);
      setDefault_Dwater_2(0.0000106);

      setValue_DHvb_2(5933.96);
      setDefault_DHvb_2(5933.96);

      setValue_Tc_2(624.0);
      setDefault_Tc_2(624.0);

      setValue_Tb_2(403.5);
      setDefault_Tb_2(403.5);

      setValue_MW_2(102.03);
      setDefault_MW_2(102.03);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(80.0);
      setDefault_Rfc_2(80.0);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(28.69);
      setDefault_Koc_2(28.69);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Tetrahydrofuran") {
      setValue_S_2(1000000);
      setDefault_S_2(1000000);

      setValue_Hc_2(0.0000705);
      setDefault_Hc_2(0.0000705);

      setValue_Dair_2(0.0993751);
      setDefault_Dair_2(0.0993751);

      setValue_Dwater_2(0.0000108);
      setDefault_Dwater_2(0.0000108);

      setValue_DHvb_2(7073.991);
      setDefault_DHvb_2(7073.991);

      setValue_Tc_2(541.15);
      setDefault_Tc_2(541.15);

      setValue_Tb_2(339.0);
      setDefault_Tb_2(339.0);

      setValue_MW_2(72.108);
      setDefault_MW_2(72.108);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(2.0);
      setDefault_Rfc_2(2.0);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(12.27);
      setDefault_Koc_2(12.27);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Titanium Tetrachloride") {
      setValue_S_2(null);
      setDefault_S_2(null);

      setValue_Hc_2(null);
      setDefault_Hc_2(null);

      setValue_Dair_2(0.0379716);
      setDefault_Dair_2(0.0379716);

      setValue_Dwater_2(0.0000090633);
      setDefault_Dwater_2(0.0000090633);

      setValue_DHvb_2(8646.2252);
      setDefault_DHvb_2(8646.2252);

      setValue_Tc_2(643.15);
      setDefault_Tc_2(643.15);

      setValue_Tb_2(421.15);
      setDefault_Tb_2(421.15);

      setValue_MW_2(189.679);
      setDefault_MW_2(189.679);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.0001);
      setDefault_Rfc_2(0.0001);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(18.85);
      setDefault_Koc_2(18.85);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Toluene") {
      setValue_S_2(526.0);
      setDefault_S_2(526.0);

      setValue_Hc_2(0.00664);
      setDefault_Hc_2(0.00664);

      setValue_Dair_2(0.0778039);
      setDefault_Dair_2(0.0778039);

      setValue_Dwater_2(0.0000092043);
      setDefault_Dwater_2(0.0000092043);

      setValue_DHvb_2(7930);
      setDefault_DHvb_2(7930);

      setValue_Tc_2(591.79);
      setDefault_Tc_2(591.79);

      setValue_Tb_2(383.6);
      setDefault_Tb_2(383.6);

      setValue_MW_2(92.142);
      setDefault_MW_2(92.142);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(5.0);
      setDefault_Rfc_2(5.0);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(233.9);
      setDefault_Koc_2(233.9);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Trichloro,2,2-trifluoroethane, 1,1,2-") {
      setValue_S_2(170.0);
      setDefault_S_2(170.0);

      setValue_Hc_2(0.526);
      setDefault_Hc_2(0.526);

      setValue_Dair_2(0.0375658);
      setDefault_Dair_2(0.0375658);

      setValue_Dwater_2(0.000008592);
      setDefault_Dwater_2(0.000008592);

      setValue_DHvb_2(6462.56);
      setDefault_DHvb_2(6462.56);

      setValue_Tc_2(487.3);
      setDefault_Tc_2(487.3);

      setValue_Tb_2(320.7);
      setDefault_Tb_2(320.7);

      setValue_MW_2(187.38);
      setDefault_MW_2(187.38);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(5.0);
      setDefault_Rfc_2(5.0);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(552.3);
      setDefault_Koc_2(552.3);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Trichlorobenzene, 1,2,3-") {
      setValue_S_2(18.0);
      setDefault_S_2(18.0);

      setValue_Hc_2(0.00125);
      setDefault_Hc_2(0.00125);

      setValue_Dair_2(0.03953);
      setDefault_Dair_2(0.03953);

      setValue_Dwater_2(0.0000083836);
      setDefault_Dwater_2(0.0000083836);

      setValue_DHvb_2(12611.53);
      setDefault_DHvb_2(12611.53);

      setValue_Tc_2(762.5);
      setDefault_Tc_2(762.5);

      setValue_Tb_2(491.5);
      setDefault_Tb_2(491.5);

      setValue_MW_2(181.45);
      setDefault_MW_2(181.45);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(null);
      setDefault_Rfc_2(null);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(2040);
      setDefault_Koc_2(2040);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Trichlorobenzene, 1,2,4-") {
      setValue_S_2(49.0);
      setDefault_S_2(49.0);

      setValue_Hc_2(0.00142);
      setDefault_Hc_2(0.00142);

      setValue_Dair_2(0.0395992);
      setDefault_Dair_2(0.0395992);

      setValue_Dwater_2(0.0000084033);
      setDefault_Dwater_2(0.0000084033);

      setValue_DHvb_2(10471);
      setDefault_DHvb_2(10471);

      setValue_Tc_2(725.0);
      setDefault_Tc_2(725.0);

      setValue_Tb_2(486.5);
      setDefault_Tb_2(486.5);

      setValue_MW_2(181.45);
      setDefault_MW_2(181.45);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.002);
      setDefault_Rfc_2(0.002);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(1964);
      setDefault_Koc_2(1964);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Trichloroethane, 1,1,1-") {
      setValue_S_2(1290);
      setDefault_S_2(1290);

      setValue_Hc_2(0.0172);
      setDefault_Hc_2(0.0172);

      setValue_Dair_2(0.0648174);
      setDefault_Dair_2(0.0648174);

      setValue_Dwater_2(0.000009599);
      setDefault_Dwater_2(0.000009599);

      setValue_DHvb_2(7136);
      setDefault_DHvb_2(7136);

      setValue_Tc_2(545.0);
      setDefault_Tc_2(545.0);

      setValue_Tb_2(347.0);
      setDefault_Tb_2(347.0);

      setValue_MW_2(133.41);
      setDefault_MW_2(133.41);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(5.0);
      setDefault_Rfc_2(5.0);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(144.8);
      setDefault_Koc_2(144.8);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Trichloroethane, 1,1,2-") {
      setValue_S_2(4590);
      setDefault_S_2(4590);

      setValue_Hc_2(0.000824);
      setDefault_Hc_2(0.000824);

      setValue_Dair_2(0.0668904);
      setDefault_Dair_2(0.0668904);

      setValue_Dwater_2(0.00001);
      setDefault_Dwater_2(0.00001);

      setValue_DHvb_2(8322);
      setDefault_DHvb_2(8322);

      setValue_Tc_2(602.0);
      setDefault_Tc_2(602.0);

      setValue_Tb_2(386.8);
      setDefault_Tb_2(386.8);

      setValue_MW_2(133.41);
      setDefault_MW_2(133.41);

      setValue_IUR_2(0.000016);
      setDefault_IUR_2(0.000016);

      setValue_Rfc_2(0.0002);
      setDefault_Rfc_2(0.0002);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(43.64);
      setDefault_Koc_2(43.64);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Trichloroethylene") {
      setValue_S_2(1280);
      setDefault_S_2(1280);

      setValue_Hc_2(0.00985);
      setDefault_Hc_2(0.00985);

      setValue_Dair_2(0.0686618);
      setDefault_Dair_2(0.0686618);

      setValue_Dwater_2(0.0000102);
      setDefault_Dwater_2(0.0000102);

      setValue_DHvb_2(7505);
      setDefault_DHvb_2(7505);

      setValue_Tc_2(544.2);
      setDefault_Tc_2(544.2);

      setValue_Tb_2(360.2);
      setDefault_Tb_2(360.2);

      setValue_MW_2(131.39);
      setDefault_MW_2(131.39);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.002);
      setDefault_Rfc_2(0.002);

      setValue_Mut_2("Yes");
      setDefault_Mut_2("Yes");

      setValue_Koc_2(125.9);
      setDefault_Koc_2(125.9);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Trichlorofluoromethane") {
      setValue_S_2(1100);
      setDefault_S_2(1100);

      setValue_Hc_2(0.097);
      setDefault_Hc_2(0.097);

      setValue_Dair_2(0.065356);
      setDefault_Dair_2(0.065356);

      setValue_Dwater_2(0.00001);
      setDefault_Dwater_2(0.00001);

      setValue_DHvb_2(5998.9);
      setDefault_DHvb_2(5998.9);

      setValue_Tc_2(471.0);
      setDefault_Tc_2(471.0);

      setValue_Tb_2(296.7);
      setDefault_Tb_2(296.7);

      setValue_MW_2(137.37);
      setDefault_MW_2(137.37);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(null);
      setDefault_Rfc_2(null);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(156.8);
      setDefault_Koc_2(156.8);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Trichloropropane, 1,2,3-") {
      setValue_S_2(1750);
      setDefault_S_2(1750);

      setValue_Hc_2(0.000343);
      setDefault_Hc_2(0.000343);

      setValue_Dair_2(0.0574661);
      setDefault_Dair_2(0.0574661);

      setValue_Dwater_2(0.0000092411);
      setDefault_Dwater_2(0.0000092411);

      setValue_DHvb_2(9171);
      setDefault_DHvb_2(9171);

      setValue_Tc_2(652.0);
      setDefault_Tc_2(652.0);

      setValue_Tb_2(430.0);
      setDefault_Tb_2(430.0);

      setValue_MW_2(147.43);
      setDefault_MW_2(147.43);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.0003);
      setDefault_Rfc_2(0.0003);

      setValue_Mut_2("Yes");
      setDefault_Mut_2("Yes");

      setValue_Koc_2(93.27);
      setDefault_Koc_2(93.27);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Triethylamine") {
      setValue_S_2(68600);
      setDefault_S_2(68600);

      setValue_Hc_2(0.000149);
      setDefault_Hc_2(0.000149);

      setValue_Dair_2(0.0663631);
      setDefault_Dair_2(0.0663631);

      setValue_Dwater_2(0.0000078576);
      setDefault_Dwater_2(0.0000078576);

      setValue_DHvb_2(8095.2);
      setDefault_DHvb_2(8095.2);

      setValue_Tc_2(535.6);
      setDefault_Tc_2(535.6);

      setValue_Tb_2(362.0);
      setDefault_Tb_2(362.0);

      setValue_MW_2(101.19);
      setDefault_MW_2(101.19);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2();
      setDefault_Rfc_2();

      setValue_Mut_2(0.007);
      setDefault_Mut_2(0.007);

      setValue_Koc_2(45.9);
      setDefault_Koc_2(45.9);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Trifluoroethane, 1,1,1-") {
      setValue_S_2(760.9);
      setDefault_S_2(760.9);

      setValue_Hc_2(0.77);
      setDefault_Hc_2(0.77);

      setValue_Dair_2(0.0990283);
      setDefault_Dair_2(0.0990283);

      setValue_Dwater_2(0.0000116);
      setDefault_Dwater_2(0.0000116);

      setValue_DHvb_2(4.58891);
      setDefault_DHvb_2(4.58891);

      setValue_Tc_2(345.88);
      setDefault_Tc_2(345.88);

      setValue_Tb_2(228.15);
      setDefault_Tb_2(228.15);

      setValue_MW_2(84.041);
      setDefault_MW_2(84.041);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(20.0);
      setDefault_Rfc_2(20.0);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(32.34);
      setDefault_Koc_2(32.34);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Trimethylbenzene, 1,2,3-") {
      setValue_S_2(75.2);
      setDefault_S_2(75.2);

      setValue_Hc_2(0.00436);
      setDefault_Hc_2(0.00436);

      setValue_Dair_2(0.0612535);
      setDefault_Dair_2(0.0612535);

      setValue_Dwater_2(0.0000080214);
      setDefault_Dwater_2(0.0000080214);

      setValue_DHvb_2(11715.39);
      setDefault_DHvb_2(11715.39);

      setValue_Tc_2(664.5);
      setDefault_Tc_2(664.5);

      setValue_Tb_2(449.1);
      setDefault_Tb_2(449.1);

      setValue_MW_2(120.2);
      setDefault_MW_2(120.2);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.06);
      setDefault_Rfc_2(0.06);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(1500);
      setDefault_Koc_2(1500);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Trimethylbenzene, 1,2,4-") {
      setValue_S_2(57.0);
      setDefault_S_2(57.0);

      setValue_Hc_2(0.00616);
      setDefault_Hc_2(0.00616);

      setValue_Dair_2(0.0606754);
      setDefault_Dair_2(0.0606754);

      setValue_Dwater_2(0.0000079209);
      setDefault_Dwater_2(0.0000079209);

      setValue_DHvb_2(9368.8);
      setDefault_DHvb_2(9368.8);

      setValue_Tc_2(649.17);
      setDefault_Tc_2(649.17);

      setValue_Tb_2(442.3);
      setDefault_Tb_2(442.3);

      setValue_MW_2(120.2);
      setDefault_MW_2(120.2);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.06);
      setDefault_Rfc_2(0.06);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(1413);
      setDefault_Koc_2(1413);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Trimethylbenzene, 1,3,5-") {
      setValue_S_2(48.2);
      setDefault_S_2(48.2);

      setValue_Hc_2(0.00877);
      setDefault_Hc_2(0.00877);

      setValue_Dair_2(0.0602254);
      setDefault_Dair_2(0.0602254);

      setValue_Dwater_2(0.000007843);
      setDefault_Dwater_2(0.000007843);

      setValue_DHvb_2(9321);
      setDefault_DHvb_2(9321);

      setValue_Tc_2(637.25);
      setDefault_Tc_2(637.25);

      setValue_Tb_2(437.7);
      setDefault_Tb_2(437.7);

      setValue_MW_2(120.2);
      setDefault_MW_2(120.2);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.06);
      setDefault_Rfc_2(0.06);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(928.6);
      setDefault_Koc_2(928.6);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Vinyl Acetate") {
      setValue_S_2(20000);
      setDefault_S_2(20000);

      setValue_Hc_2(0.000511);
      setDefault_Hc_2(0.000511);

      setValue_Dair_2(0.0849016);
      setDefault_Dair_2(0.0849016);

      setValue_Dwater_2(0.00001);
      setDefault_Dwater_2(0.00001);

      setValue_DHvb_2(7800);
      setDefault_DHvb_2(7800);

      setValue_Tc_2(519.13);
      setDefault_Tc_2(519.13);

      setValue_Tb_2(345.5);
      setDefault_Tb_2(345.5);

      setValue_MW_2(86.091);
      setDefault_MW_2(86.091);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.2);
      setDefault_Rfc_2(0.2);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(18.34);
      setDefault_Koc_2(18.34);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Vinyl Bromide") {
      setValue_S_2(7600);
      setDefault_S_2(7600);

      setValue_Hc_2(0.0123);
      setDefault_Hc_2(0.0123);

      setValue_Dair_2(0.0862238);
      setDefault_Dair_2(0.0862238);

      setValue_Dwater_2(0.0000117);
      setDefault_Dwater_2(0.0000117);

      setValue_DHvb_2(5397.92);
      setDefault_DHvb_2(5397.92);

      setValue_Tc_2(463.51);
      setDefault_Tc_2(463.51);

      setValue_Tb_2(288.8);
      setDefault_Tb_2(288.8);

      setValue_MW_2(106.95);
      setDefault_MW_2(106.95);

      setValue_IUR_2(0.000032);
      setDefault_IUR_2(0.000032);

      setValue_Rfc_2(0.003);
      setDefault_Rfc_2(0.003);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(23.03);
      setDefault_Koc_2(23.03);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Vinyl Chloride") {
      setValue_S_2(8800);
      setDefault_S_2(8800);

      setValue_Hc_2(0.0278);
      setDefault_Hc_2(0.0278);

      setValue_Dair_2(0.1071202);
      setDefault_Dair_2(0.1071202);

      setValue_Dwater_2(0.000012);
      setDefault_Dwater_2(0.000012);

      setValue_DHvb_2(5250);
      setDefault_DHvb_2(5250);

      setValue_Tc_2(432.0);
      setDefault_Tc_2(432.0);

      setValue_Tb_2(259.7);
      setDefault_Tb_2(259.7);

      setValue_MW_2(62.499);
      setDefault_MW_2(62.499);

      setValue_IUR_2(0.0000044);
      setDefault_IUR_2(0.0000044);

      setValue_Rfc_2(0.1);
      setDefault_Rfc_2(0.1);

      setValue_Mut_2("VC");
      setDefault_Mut_2("VC");

      setValue_Koc_2(25.44);
      setDefault_Koc_2(25.44);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Xylene, m-") {
      setValue_S_2(161.0);
      setDefault_S_2(161.0);

      setValue_Hc_2(0.00718);
      setDefault_Hc_2(0.00718);

      setValue_Dair_2(0.0683659);
      setDefault_Dair_2(0.0683659);

      setValue_Dwater_2(0.0000084394);
      setDefault_Dwater_2(0.0000084394);

      setValue_DHvb_2(8523);
      setDefault_DHvb_2(8523);

      setValue_Tc_2(617.05);
      setDefault_Tc_2(617.05);

      setValue_Tb_2(412.1);
      setDefault_Tb_2(412.1);

      setValue_MW_2(106.17);
      setDefault_MW_2(106.17);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.1);
      setDefault_Rfc_2(0.1);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(598.2);
      setDefault_Koc_2(598.2);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Xylene, o-") {
      setValue_S_2(178.0);
      setDefault_S_2(178.0);

      setValue_Hc_2(0.00518);
      setDefault_Hc_2(0.00518);

      setValue_Dair_2(0.0689201);
      setDefault_Dair_2(0.0689201);

      setValue_Dwater_2(0.0000085315);
      setDefault_Dwater_2(0.0000085315);

      setValue_DHvb_2(8661);
      setDefault_DHvb_2(8661);

      setValue_Tc_2(630.3);
      setDefault_Tc_2(630.3);

      setValue_Tb_2(411.5);
      setDefault_Tb_2(411.5);

      setValue_MW_2(106.17);
      setDefault_MW_2(106.17);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.1);
      setDefault_Rfc_2(0.1);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(552.3);
      setDefault_Koc_2(552.3);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Xylene, P-") {
      setValue_S_2(162.0);
      setDefault_S_2(162.0);

      setValue_Hc_2(0.0069);
      setDefault_Hc_2(0.0069);

      setValue_Dair_2(0.0682485);
      setDefault_Dair_2(0.0682485);

      setValue_Dwater_2(0.0000084199);
      setDefault_Dwater_2(0.0000084199);

      setValue_DHvb_2(8525);
      setDefault_DHvb_2(8525);

      setValue_Tc_2(616.2);
      setDefault_Tc_2(616.2);

      setValue_Tb_2(411.3);
      setDefault_Tb_2(411.3);

      setValue_MW_2(106.17);
      setDefault_MW_2(106.17);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.1);
      setDefault_Rfc_2(0.1);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(541.4);
      setDefault_Koc_2(541.4);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "Xylenes") {
      setValue_S_2(106.0);
      setDefault_S_2(106.0);

      setValue_Hc_2(0.00663);
      setDefault_Hc_2(0.00663);

      setValue_Dair_2(0.0685148);
      setDefault_Dair_2(0.0685148);

      setValue_Dwater_2(0.0000084641);
      setDefault_Dwater_2(0.0000084641);

      setValue_DHvb_2(8523);
      setDefault_DHvb_2(8523);

      setValue_Tc_2(616.2);
      setDefault_Tc_2(616.2);

      setValue_Tb_2(411.3);
      setDefault_Tb_2(411.3);

      setValue_MW_2(106.17);
      setDefault_MW_2(106.17);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.1);
      setDefault_Rfc_2(0.1);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(552.3);
      setDefault_Koc_2(552.3);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "TPH - Aliph >C05-C06") {
      setValue_S_2(36);
      setDefault_S_2(36);

      setValue_Hc_2(32.47711492);
      setDefault_Hc_2(32.47711492);

      setValue_Dair_2(0.1);
      setDefault_Dair_2(0.1);

      setValue_Dwater_2(0.00001);
      setDefault_Dwater_2(0.00001);

      setValue_DHvb_2(8000);
      setDefault_DHvb_2(8000);

      setValue_Tc_2(500);
      setDefault_Tc_2(500);

      setValue_Tb_2(100);
      setDefault_Tb_2(100);

      setValue_MW_2(81);
      setDefault_MW_2(81);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(18);
      setDefault_Rfc_2(18);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(794.3);
      setDefault_Koc_2(794.3);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "TPH - Aliph >C06-C08") {
      setValue_S_2(36);
      setDefault_S_2(36);

      setValue_Hc_2(32.47711492);
      setDefault_Hc_2(32.47711492);

      setValue_Dair_2(0.1);
      setDefault_Dair_2(0.1);

      setValue_Dwater_2(0.00001);
      setDefault_Dwater_2(0.00001);

      setValue_DHvb_2(8000);
      setDefault_DHvb_2(8000);

      setValue_Tc_2(500);
      setDefault_Tc_2(500);

      setValue_Tb_2(100);
      setDefault_Tb_2(100);

      setValue_MW_2(81);
      setDefault_MW_2(81);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(18);
      setDefault_Rfc_2(18);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(794.3);
      setDefault_Koc_2(794.3);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "TPH - Aliph >C05-C06 (>53% n-hexane)") {
      setValue_S_2(5.4);
      setDefault_S_2(5.4);

      setValue_Hc_2(48.11424433);
      setDefault_Hc_2(48.11424433);

      setValue_Dair_2(0.1);
      setDefault_Dair_2(0.1);

      setValue_Dwater_2(0.00001);
      setDefault_Dwater_2(0.00001);

      setValue_DHvb_2(9000);
      setDefault_DHvb_2(9000);

      setValue_Tc_2(500);
      setDefault_Tc_2(500);

      setValue_Tb_2(100);
      setDefault_Tb_2(100);

      setValue_MW_2(100);
      setDefault_MW_2(100);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.67);
      setDefault_Rfc_2(0.67);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(862.9);
      setDefault_Koc_2(862.9);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "TPH - Aliph >C06-C08 (>53% n-hexane)") {
      setValue_S_2(5.4);
      setDefault_S_2(5.4);

      setValue_Hc_2(48.11424433);
      setDefault_Hc_2(48.11424433);

      setValue_Dair_2(0.1);
      setDefault_Dair_2(0.1);

      setValue_Dwater_2(0.00001);
      setDefault_Dwater_2(0.00001);

      setValue_DHvb_2(10000);
      setDefault_DHvb_2(10000);

      setValue_Tc_2(500);
      setDefault_Tc_2(500);

      setValue_Tb_2(100);
      setDefault_Tb_2(100);

      setValue_MW_2(100);
      setDefault_MW_2(100);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.67);
      setDefault_Rfc_2(0.67);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(862.9);
      setDefault_Koc_2(862.9);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "TPH - Aliph >C08-C10") {
      setValue_S_2(0.43);
      setDefault_S_2(0.43);

      setValue_Hc_2(78.54930121);
      setDefault_Hc_2(78.54930121);

      setValue_Dair_2(0.1);
      setDefault_Dair_2(0.1);

      setValue_Dwater_2(0.00001);
      setDefault_Dwater_2(0.00001);

      setValue_DHvb_2(12000);
      setDefault_DHvb_2(12000);

      setValue_Tc_2(500);
      setDefault_Tc_2(500);

      setValue_Tb_2(100);
      setDefault_Tb_2(100);

      setValue_MW_2(130);
      setDefault_MW_2(130);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.5);
      setDefault_Rfc_2(0.5);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(31622.7);
      setDefault_Koc_2(31622.7);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "TPH - Aliph >C10-C12") {
      setValue_S_2(0.034);
      setDefault_S_2(0.034);

      setValue_Hc_2(122.2667856);
      setDefault_Hc_2(122.2667856);

      setValue_Dair_2(0.1);
      setDefault_Dair_2(0.1);

      setValue_Dwater_2(0.00001);
      setDefault_Dwater_2(0.00001);

      setValue_DHvb_2(12000);
      setDefault_DHvb_2(12000);

      setValue_Tc_2(500);
      setDefault_Tc_2(500);

      setValue_Tb_2(100);
      setDefault_Tb_2(100);

      setValue_MW_2(160);
      setDefault_MW_2(160);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.5);
      setDefault_Rfc_2(0.5);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(251188.6);
      setDefault_Koc_2(251188.6);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "TPH - Aliph >C12-C16") {
      setValue_S_2(0.00076);
      setDefault_S_2(0.00076);

      setValue_Hc_2(520.9361792);
      setDefault_Hc_2(520.9361792);

      setValue_Dair_2(0.1);
      setDefault_Dair_2(0.1);

      setValue_Dwater_2(0.00001);
      setDefault_Dwater_2(0.00001);

      setValue_DHvb_2(16000);
      setDefault_DHvb_2(16000);

      setValue_Tc_2(500);
      setDefault_Tc_2(500);

      setValue_Tb_2(300);
      setDefault_Tb_2(300);

      setValue_MW_2(200);
      setDefault_MW_2(200);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.5);
      setDefault_Rfc_2(0.5);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(5011872.3);
      setDefault_Koc_2(5011872.3);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "TPH - Aliph >C16-C21") {
      setValue_S_2(0.0000025);
      setDefault_S_2(0.0000025);

      setValue_Hc_2(4899.404766);
      setDefault_Hc_2(4899.404766);

      setValue_Dair_2(0.1);
      setDefault_Dair_2(0.1);

      setValue_Dwater_2(0.00001);
      setDefault_Dwater_2(0.00001);

      setValue_DHvb_2(17000);
      setDefault_DHvb_2(17000);

      setValue_Tc_2(500);
      setDefault_Tc_2(500);

      setValue_Tb_2(300);
      setDefault_Tb_2(300);

      setValue_MW_2(270);
      setDefault_MW_2(270);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(null);
      setDefault_Rfc_2(null);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(630957344.4);
      setDefault_Koc_2(630957344.4);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "TPH - Aliph >C21-C34") {
      setValue_S_2(0.0000025);
      setDefault_S_2(0.0000025);

      setValue_Hc_2(7258.377431);
      setDefault_Hc_2(7258.377431);

      setValue_Dair_2(0.1);
      setDefault_Dair_2(0.1);

      setValue_Dwater_2(0.00001);
      setDefault_Dwater_2(0.00001);

      setValue_DHvb_2(20000);
      setDefault_DHvb_2(20000);

      setValue_Tc_2(500);
      setDefault_Tc_2(500);

      setValue_Tb_2(100);
      setDefault_Tb_2(100);

      setValue_MW_2(400);
      setDefault_MW_2(400);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(null);
      setDefault_Rfc_2(null);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(630957344.4);
      setDefault_Koc_2(630957344.4);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "TPH - Arom >C05-C07") {
      setValue_S_2(1800);
      setDefault_S_2(1800);

      setValue_Hc_2(0.232323065);
      setDefault_Hc_2(0.232323065);

      setValue_Dair_2(0.1);
      setDefault_Dair_2(0.1);

      setValue_Dwater_2(0.00001);
      setDefault_Dwater_2(0.00001);

      setValue_DHvb_2(8000);
      setDefault_DHvb_2(8000);

      setValue_Tc_2(500);
      setDefault_Tc_2(500);

      setValue_Tb_2(100);
      setDefault_Tb_2(100);

      setValue_MW_2(78);
      setDefault_MW_2(78);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.28);
      setDefault_Rfc_2(0.28);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(79.43);
      setDefault_Koc_2(79.43);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "TPH - Arom >C07-C08") {
      setValue_S_2(520);
      setDefault_S_2(520);

      setValue_Hc_2(0.277264942);
      setDefault_Hc_2(0.277264942);

      setValue_Dair_2(0.1);
      setDefault_Dair_2(0.1);

      setValue_Dwater_2(0.00001);
      setDefault_Dwater_2(0.00001);

      setValue_DHvb_2(10000);
      setDefault_DHvb_2(10000);

      setValue_Tc_2(500);
      setDefault_Tc_2(500);

      setValue_Tb_2(100);
      setDefault_Tb_2(100);

      setValue_MW_2(92);
      setDefault_MW_2(92);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(1.9);
      setDefault_Rfc_2(1.9);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(251.1);
      setDefault_Koc_2(251.1);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "TPH - Arom >C08-C10") {
      setValue_S_2(65);
      setDefault_S_2(65);

      setValue_Hc_2(0.479662005);
      setDefault_Hc_2(0.479662005);

      setValue_Dair_2(0.1);
      setDefault_Dair_2(0.1);

      setValue_Dwater_2(0.00001);
      setDefault_Dwater_2(0.00001);

      setValue_DHvb_2(10000);
      setDefault_DHvb_2(10000);

      setValue_Tc_2(500);
      setDefault_Tc_2(500);

      setValue_Tb_2(300);
      setDefault_Tb_2(300);

      setValue_MW_2(120);
      setDefault_MW_2(120);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.2);
      setDefault_Rfc_2(0.2);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(1584.8);
      setDefault_Koc_2(1584.8);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "TPH - Arom >C10-C12") {
      setValue_S_2(25);
      setDefault_S_2(25);

      setValue_Hc_2(0.135104789);
      setDefault_Hc_2(0.135104789);

      setValue_Dair_2(0.1);
      setDefault_Dair_2(0.1);

      setValue_Dwater_2(0.00001);
      setDefault_Dwater_2(0.00001);

      setValue_DHvb_2(12000);
      setDefault_DHvb_2(12000);

      setValue_Tc_2(500);
      setDefault_Tc_2(500);

      setValue_Tb_2(300);
      setDefault_Tb_2(300);

      setValue_MW_2(130);
      setDefault_MW_2(130);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.2);
      setDefault_Rfc_2(0.2);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(2511.8);
      setDefault_Koc_2(2511.8);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "TPH - Arom >C12-C16") {
      setValue_S_2(5.8);
      setDefault_S_2(5.8);

      setValue_Hc_2(0.051195452);
      setDefault_Hc_2(0.051195452);

      setValue_Dair_2(0.1);
      setDefault_Dair_2(0.1);

      setValue_Dwater_2(0.00001);
      setDefault_Dwater_2(0.00001);

      setValue_DHvb_2(16000);
      setDefault_DHvb_2(16000);

      setValue_Tc_2(500);
      setDefault_Tc_2(500);

      setValue_Tb_2(300);
      setDefault_Tb_2(300);

      setValue_MW_2(150);
      setDefault_MW_2(150);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.2);
      setDefault_Rfc_2(0.2);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(5011.8);
      setDefault_Koc_2(5011.8);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "TPH - Arom >C16-C121") {
      setValue_S_2(0.65);
      setDefault_S_2(0.65);

      setValue_Hc_2(0.013260497);
      setDefault_Hc_2(0.013260497);

      setValue_Dair_2(0.1);
      setDefault_Dair_2(0.1);

      setValue_Dwater_2(0.00001);
      setDefault_Dwater_2(0.00001);

      setValue_DHvb_2(17000);
      setDefault_DHvb_2(17000);

      setValue_Tc_2(500);
      setDefault_Tc_2(500);

      setValue_Tb_2(300);
      setDefault_Tb_2(300);

      setValue_MW_2(190);
      setDefault_MW_2(190);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(null);
      setDefault_Rfc_2(null);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(15848.9);
      setDefault_Koc_2(15848.9);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "TPH - Arom >C21-C35") {
      setValue_S_2(0.0066);
      setDefault_S_2(0.0066);

      setValue_Hc_2(0.000659852);
      setDefault_Hc_2(0.000659852);

      setValue_Dair_2(0.1);
      setDefault_Dair_2(0.1);

      setValue_Dwater_2(0.00001);
      setDefault_Dwater_2(0.00001);

      setValue_DHvb_2(20000);
      setDefault_DHvb_2(20000);

      setValue_Tc_2(500);
      setDefault_Tc_2(500);

      setValue_Tb_2(300);
      setDefault_Tb_2(300);

      setValue_MW_2(240);
      setDefault_MW_2(240);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(null);
      setDefault_Rfc_2(null);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(125892.5);
      setDefault_Koc_2(125892.5);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "TPH, TX1105, C6-C12") {
      setValue_S_2(65);
      setDefault_S_2(65);

      setValue_Hc_2(0.48);
      setDefault_Hc_2(0.48);

      setValue_Dair_2(0.1);
      setDefault_Dair_2(0.1);

      setValue_Dwater_2(0.00001);
      setDefault_Dwater_2(0.00001);

      setValue_DHvb_2(10000);
      setDefault_DHvb_2(10000);

      setValue_Tc_2(500);
      setDefault_Tc_2(500);

      setValue_Tb_2(100);
      setDefault_Tb_2(100);

      setValue_MW_2(120);
      setDefault_MW_2(120);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.2);
      setDefault_Rfc_2(0.2);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(1584.8);
      setDefault_Koc_2(1584.8);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "TPH, TX1105, >C12-C28") {
      setValue_S_2(5.8);
      setDefault_S_2(5.8);

      setValue_Hc_2(0.053);
      setDefault_Hc_2(0.053);

      setValue_Dair_2(0.1);
      setDefault_Dair_2(0.1);

      setValue_Dwater_2(0.00001);
      setDefault_Dwater_2(0.00001);

      setValue_DHvb_2(20000);
      setDefault_DHvb_2(20000);

      setValue_Tc_2(500);
      setDefault_Tc_2(500);

      setValue_Tb_2(100);
      setDefault_Tb_2(100);

      setValue_MW_2(150);
      setDefault_MW_2(150);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.2);
      setDefault_Rfc_2(0.2);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(5011.8);
      setDefault_Koc_2(5011.8);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "TPH, TX1105, >C12-C35") {
      setValue_S_2(5.8);
      setDefault_S_2(5.8);

      setValue_Hc_2(0.053);
      setDefault_Hc_2(0.053);

      setValue_Dair_2(0.1);
      setDefault_Dair_2(0.1);

      setValue_Dwater_2(0.00001);
      setDefault_Dwater_2(0.00001);

      setValue_DHvb_2(20000);
      setDefault_DHvb_2(20000);

      setValue_Tc_2(500);
      setDefault_Tc_2(500);

      setValue_Tb_2(100);
      setDefault_Tb_2(100);

      setValue_MW_2(150);
      setDefault_MW_2(150);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.2);
      setDefault_Rfc_2(0.2);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(5011.8);
      setDefault_Koc_2(5011.8);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    } else if (selectedChem === "TPH, TX1105, >C28-C35") {
      setValue_S_2(5.8);
      setDefault_S_2(5.8);

      setValue_Hc_2(0.053);
      setDefault_Hc_2(0.053);

      setValue_Dair_2(0.1);
      setDefault_Dair_2(0.1);

      setValue_Dwater_2(0.00001);
      setDefault_Dwater_2(0.00001);

      setValue_DHvb_2(20000);
      setDefault_DHvb_2(20000);

      setValue_Tc_2(500);
      setDefault_Tc_2(500);

      setValue_Tb_2(300);
      setDefault_Tb_2(100);

      setValue_MW_2(150);
      setDefault_MW_2(150);

      setValue_IUR_2(null);
      setDefault_IUR_2(null);

      setValue_Rfc_2(0.2);
      setDefault_Rfc_2(0.2);

      setValue_Mut_2("No");
      setDefault_Mut_2("No");

      setValue_Koc_2(5011.8);
      setDefault_Koc_2(5011.8);

      setValue_foc_2(0.0007);
      setDefault_foc_2(0.0007);
    }
  };

  const selectChem3 = (e) => {
    setOption3("none");
    let selectedChem = e.target.value;
    setChem3(selectedChem);

    if (selectedChem === "Acenaphthene") {
      setValue_S_3(3.9);
      setDefault_S_3(3.9);

      setValue_Hc_3(0.000184);
      setDefault_Hc_3(0.000184);

      setValue_Dair_3(0.0506143);
      setDefault_Dair_3(0.0506143);

      setValue_Dwater_3(0.00000833);
      setDefault_Dwater_3(0.00000833);

      setValue_DHvb_3(12155);
      setDefault_DHvb_3(12155);

      setValue_Tc_3(803.15);
      setDefault_Tc_3(803.15);

      setValue_Tb_3(552);
      setDefault_Tb_3(552);

      setValue_MW_3(154.21);
      setDefault_MW_3(154.21);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(null);
      setDefault_Rfc_3(null);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(2522);
      setDefault_Koc_3(2522);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Acetaldehyde") {
      setValue_S_3(1000000);
      setDefault_S_3(1000000);

      setValue_Hc_3(0.0000667);
      setDefault_Hc_3(0.0000667);

      setValue_Dair_3(0.1277026);
      setDefault_Dair_3(0.1277026);

      setValue_Dwater_3(0.0000135);
      setDefault_Dwater_3(0.0000135);

      setValue_DHvb_3(6156.64);
      setDefault_DHvb_3(6156.64);

      setValue_Tc_3(466);
      setDefault_Tc_3(466);

      setValue_Tb_3(293.1);
      setDefault_Tb_3(293.1);

      setValue_MW_3(293.1);
      setDefault_MW_3(293.1);

      setValue_IUR_3(0.0000022);
      setDefault_IUR_3(0.0000022);

      setValue_Rfc_3(0.009);
      setDefault_Rfc_3(0.009);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(3.219);
      setDefault_Koc_3(3.219);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Acetone") {
      setValue_S_3(1000000);
      setDefault_S_3(1000000);

      setValue_Hc_3(0.000035);
      setDefault_Hc_3(0.000035);

      setValue_Dair_3(0.1059215);
      setDefault_Dair_3(0.1059215);

      setValue_Dwater_3(0.0000115);
      setDefault_Dwater_3(0.0000115);

      setValue_DHvb_3(6955);
      setDefault_DHvb_3(6955);

      setValue_Tc_3(508.1);
      setDefault_Tc_3(508.1);

      setValue_Tb_3(328.5);
      setDefault_Tb_3(328.5);

      setValue_MW_3(58.081);
      setDefault_MW_3(58.081);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(31);
      setDefault_Rfc_3(31);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(9.726);
      setDefault_Koc_3(9.726);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Acetonitrile") {
      setValue_S_3(1000000);
      setDefault_S_3(1000000);

      setValue_Hc_3(0.0000345);
      setDefault_Hc_3(0.0000345);

      setValue_Dair_3(0.1339939);
      setDefault_Dair_3(0.1339939);

      setValue_Dwater_3(0.0000141);
      setDefault_Dwater_3(0.0000141);

      setValue_DHvb_3(7110.25);
      setDefault_DHvb_3(7110.25);

      setValue_Tc_3(545.5);
      setDefault_Tc_3(545.5);

      setValue_Tb_3(332.6);
      setDefault_Tb_3(332.6);

      setValue_MW_3(41.053);
      setDefault_MW_3(41.053);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.06);
      setDefault_Rfc_3(0.06);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(13.46);
      setDefault_Koc_3(13.46);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Acetophenone") {
      setValue_S_3(6130);
      setDefault_S_3(6130);

      setValue_Hc_3(0.0000104);
      setDefault_Hc_3(0.0000104);

      setValue_Dair_3(0.0652221);
      setDefault_Dair_3(0.0652221);

      setValue_Dwater_3(0.0000087229);
      setDefault_Dwater_3(0.0000087229);

      setValue_DHvb_3(11731.5);
      setDefault_DHvb_3(11731.5);

      setValue_Tc_3(709.5);
      setDefault_Tc_3(709.5);

      setValue_Tb_3(475.0);
      setDefault_Tb_3(475.0);

      setValue_MW_3(120.15);
      setDefault_MW_3(120.15);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(null);
      setDefault_Rfc_3(null);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(98.77);
      setDefault_Koc_3(98.77);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Acrolein") {
      setValue_S_3(212000);
      setDefault_S_3(212000);

      setValue_Hc_3(0.000122);
      setDefault_Hc_3(0.000122);

      setValue_Dair_3(0.1116862);
      setDefault_Dair_3(0.1116862);

      setValue_Dwater_3(0.0000122);
      setDefault_Dwater_3(0.0000122);

      setValue_DHvb_3(6730.7658);
      setDefault_DHvb_3(6730.7658);

      setValue_Tc_3(506.0);
      setDefault_Tc_3(506.0);

      setValue_Tb_3(325.6);
      setDefault_Tb_3(325.6);

      setValue_MW_3(56.065);
      setDefault_MW_3(56.065);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.00002);
      setDefault_Rfc_3(0.00002);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(4.901);
      setDefault_Koc_3(4.901);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Acrylic Acid") {
      setValue_S_3(1000000);
      setDefault_S_3(1000000);

      setValue_Hc_3(0.00000037);
      setDefault_Hc_3(0.00000037);

      setValue_Dair_3(0.1027173);
      setDefault_Dair_3(0.1027173);

      setValue_Dwater_3(0.000012);
      setDefault_Dwater_3(0.000012);

      setValue_DHvb_3(10955.1);
      setDefault_DHvb_3(10955.1);

      setValue_Tc_3(615.15);
      setDefault_Tc_3(615.15);

      setValue_Tb_3(414.35);
      setDefault_Tb_3(414.35);

      setValue_MW_3(72.064);
      setDefault_MW_3(72.064);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.001);
      setDefault_Rfc_3(0.001);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(2.235);
      setDefault_Koc_3(2.235);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Acrylonitrile") {
      setValue_S_3(74500);
      setDefault_S_3(74500);

      setValue_Hc_3(0.000138);
      setDefault_Hc_3(0.000138);

      setValue_Dair_3(0.1136836);
      setDefault_Dair_3(0.1136836);

      setValue_Dwater_3(0.0000123);
      setDefault_Dwater_3(0.0000123);

      setValue_DHvb_3(7786);
      setDefault_DHvb_3(7786);

      setValue_Tc_3(519.0);
      setDefault_Tc_3(519.0);

      setValue_Tb_3(350.3);
      setDefault_Tb_3(350.3);

      setValue_MW_3(53.064);
      setDefault_MW_3(53.064);

      setValue_IUR_3(0.000068);
      setDefault_IUR_3(0.000068);

      setValue_Rfc_3(0.002);
      setDefault_Rfc_3(0.002);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(28.55);
      setDefault_Koc_3(28.55);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Aldrin") {
      setValue_S_3(0.017);
      setDefault_S_3(0.017);

      setValue_Hc_3(0.000044);
      setDefault_Hc_3(0.000044);

      setValue_Dair_3(0.0228116);
      setDefault_Dair_3(0.0228116);

      setValue_Dwater_3(0.0000058402);
      setDefault_Dwater_3(0.0000058402);

      setValue_DHvb_3(15000);
      setDefault_DHvb_3(15000);

      setValue_Tc_3(627.225);
      setDefault_Tc_3(627.225);

      setValue_Tb_3(418.15);
      setDefault_Tb_3(418.15);

      setValue_MW_3(364.92);
      setDefault_MW_3(364.92);

      setValue_IUR_3(0.0049);
      setDefault_IUR_3(0.0049);

      setValue_Rfc_3(null);
      setDefault_Rfc_3(null);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(437500);
      setDefault_Koc_3(437500);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Allyl Alcohol") {
      setValue_S_3(1000000);
      setDefault_S_3(1000000);

      setValue_Hc_3(0.00000499);
      setDefault_Hc_3(0.00000499);

      setValue_Dair_3(0.1097535);
      setDefault_Dair_3(0.1097535);

      setValue_Dwater_3(0.0000121);
      setDefault_Dwater_3(0.0000121);

      setValue_DHvb_3(9553.84);
      setDefault_DHvb_3(9553.84);

      setValue_Tc_3(539.8);
      setDefault_Tc_3(539.8);

      setValue_Tb_3(370.15);
      setDefault_Tb_3(370.15);

      setValue_MW_3(58.081);
      setDefault_MW_3(58.081);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.0001);
      setDefault_Rfc_3(0.0001);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(4.052);
      setDefault_Koc_3(4.052);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Allyl Chloride") {
      setValue_S_3(3370);
      setDefault_S_3(3370);

      setValue_Hc_3(0.011);
      setDefault_Hc_3(0.011);

      setValue_Dair_3(0.093611);
      setDefault_Dair_3(0.093611);

      setValue_Dwater_3(0.0000108);
      setDefault_Dwater_3(0.0000108);

      setValue_DHvb_3(6936.08);
      setDefault_DHvb_3(6936.08);

      setValue_Tc_3(514.26);
      setDefault_Tc_3(514.26);

      setValue_Tb_3(318.1);
      setDefault_Tb_3(318.1);

      setValue_MW_3(76.526);
      setDefault_MW_3(76.526);

      setValue_IUR_3(0.000006);
      setDefault_IUR_3(0.000006);

      setValue_Rfc_3(0.001);
      setDefault_Rfc_3(0.001);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(47.28);
      setDefault_Koc_3(47.28);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Ammonia") {
      setValue_S_3(482000);
      setDefault_S_3(482000);

      setValue_Hc_3(0.0000161);
      setDefault_Hc_3(0.0000161);

      setValue_Dair_3(0.2305471);
      setDefault_Dair_3(0.2305471);

      setValue_Dwater_3(0.0000223);
      setDefault_Dwater_3(0.0000223);

      setValue_DHvb_3(5581);
      setDefault_DHvb_3(5581);

      setValue_Tc_3(405.55);
      setDefault_Tc_3(405.55);

      setValue_Tb_3(239.8);
      setDefault_Tb_3(239.8);

      setValue_MW_3(17.031);
      setDefault_MW_3(17.031);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.5);
      setDefault_Rfc_3(0.5);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(0.06337);
      setDefault_Koc_3(0.06337);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Amyl Alcohol, tert-") {
      setValue_S_3(110000);
      setDefault_S_3(110000);

      setValue_Hc_3(0.0000138);
      setDefault_Hc_3(0.0000138);

      setValue_Dair_3(0.0785447);
      setDefault_Dair_3(0.0785447);

      setValue_Dwater_3(0.0000091012);
      setDefault_Dwater_3(0.0000091012);

      setValue_DHvb_3(9586.520076);
      setDefault_DHvb_3(9586.520076);

      setValue_Tc_3(545.15);
      setDefault_Tc_3(545.15);

      setValue_Tb_3(375.55);
      setDefault_Tb_3(375.55);

      setValue_MW_3(88.151);
      setDefault_MW_3(88.151);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.003);
      setDefault_Rfc_3(0.003);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(10.14);
      setDefault_Koc_3(10.14);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Anthracene") {
      setValue_S_3(0.0434);
      setDefault_S_3(0.0434);

      setValue_Hc_3(0.0000556);
      setDefault_Hc_3(0.0000556);

      setValue_Dair_3(0.0389732);
      setDefault_Dair_3(0.0389732);

      setValue_Dwater_3(0.0000078523);
      setDefault_Dwater_3(0.0000078523);

      setValue_DHvb_3(13121);
      setDefault_DHvb_3(13121);

      setValue_Tc_3(873.0);
      setDefault_Tc_3(873.0);

      setValue_Tb_3(612.9);
      setDefault_Tb_3(612.9);

      setValue_MW_3(178.24);
      setDefault_MW_3(178.24);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(null);
      setDefault_Rfc_3(null);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(7274);
      setDefault_Koc_3(7274);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Benz[a]anthracene") {
      setValue_S_3(0.0094);
      setDefault_S_3(0.0094);

      setValue_Hc_3(0.000012);
      setDefault_Hc_3(0.000012);

      setValue_Dair_3(0.0261138);
      setDefault_Dair_3(0.0261138);

      setValue_Dwater_3(0.0000067495);
      setDefault_Dwater_3(0.0000067495);

      setValue_DHvb_3(16000);
      setDefault_DHvb_3(16000);

      setValue_Tc_3(1066.125);
      setDefault_Tc_3(1066.125);

      setValue_Tb_3(710.75);
      setDefault_Tb_3(710.75);

      setValue_MW_3(228.3);
      setDefault_MW_3(228.3);

      setValue_IUR_3(0.00006);
      setDefault_IUR_3(0.00006);

      setValue_Rfc_3(null);
      setDefault_Rfc_3(null);

      setValue_Mut_3("Yes");
      setDefault_Mut_3("Yes");

      setValue_Koc_3(99700);
      setDefault_Koc_3(99700);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Benzaldehyde") {
      setValue_S_3(6950);
      setDefault_S_3(6950);

      setValue_Hc_3(0.0000267);
      setDefault_Hc_3(0.0000267);

      setValue_Dair_3(0.074393);
      setDefault_Dair_3(0.074393);

      setValue_Dwater_3(0.0000094627);
      setDefault_Dwater_3(0.0000094627);

      setValue_DHvb_3(11657.8);
      setDefault_DHvb_3(11657.8);

      setValue_Tc_3(695.0);
      setDefault_Tc_3(695.0);

      setValue_Tb_3(452.0);
      setDefault_Tb_3(452.0);

      setValue_MW_3(106.13);
      setDefault_MW_3(106.13);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(null);
      setDefault_Rfc_3(null);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(32.69);
      setDefault_Koc_3(32.69);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Benzene") {
      setValue_S_3(1790);
      setDefault_S_3(1790);

      setValue_Hc_3(0.00555);
      setDefault_Hc_3(0.00555);

      setValue_Dair_3(0.089534);
      setDefault_Dair_3(0.089534);

      setValue_Dwater_3(0.0000103);
      setDefault_Dwater_3(0.0000103);

      setValue_DHvb_3(7342);
      setDefault_DHvb_3(7342);

      setValue_Tc_3(562.16);
      setDefault_Tc_3(562.16);

      setValue_Tb_3(353);
      setDefault_Tb_3(353);

      setValue_MW_3(78.115);
      setDefault_MW_3(78.115);

      setValue_IUR_3(0.0000078);
      setDefault_IUR_3(0.0000078);

      setValue_Rfc_3(0.03);
      setDefault_Rfc_3(0.03);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(70.51);
      setDefault_Koc_3(70.51);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Benzenethiol") {
      setValue_S_3(835.0);
      setDefault_S_3(835.0);

      setValue_Hc_3(0.000335);
      setDefault_Hc_3(0.000335);

      setValue_Dair_3(0.0728564);
      setDefault_Dair_3(0.0728564);

      setValue_Dwater_3(0.0000094506);
      setDefault_Dwater_3(0.0000094506);

      setValue_DHvb_3(11359.51);
      setDefault_DHvb_3(11359.51);

      setValue_Tc_3(663.15);
      setDefault_Tc_3(663.15);

      setValue_Tb_3(442.1);
      setDefault_Tb_3(442.1);

      setValue_MW_3(110.18);
      setDefault_MW_3(110.18);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(null);
      setDefault_Rfc_3(null);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(153.7);
      setDefault_Koc_3(153.7);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Benzyl Chloride") {
      setValue_S_3(525.0);
      setDefault_S_3(525.0);

      setValue_Hc_3(0.000412);
      setDefault_Hc_3(0.000412);

      setValue_Dair_3(0.0633618);
      setDefault_Dair_3(0.0633618);

      setValue_Dwater_3(0.0000088057);
      setDefault_Dwater_3(0.0000088057);

      setValue_DHvb_3(8773.2598);
      setDefault_DHvb_3(8773.2598);

      setValue_Tc_3(685.0);
      setDefault_Tc_3(685.0);

      setValue_Tb_3(452);
      setDefault_Tb_3(452);

      setValue_MW_3(126.59);
      setDefault_MW_3(126.59);

      setValue_IUR_3(0.000049);
      setDefault_IUR_3(0.000049);

      setValue_Rfc_3(0.001);
      setDefault_Rfc_3(0.001);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(99.03);
      setDefault_Koc_3(99.03);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Biphenyl, 1,1'-") {
      setValue_S_3(7.48);
      setDefault_S_3(7.48);

      setValue_Hc_3(0.000308);
      setDefault_Hc_3(0.000308);

      setValue_Dair_3(0.0470592);
      setDefault_Dair_3(0.0470592);

      setValue_Dwater_3(0.0000075618);
      setDefault_Dwater_3(0.0000075618);

      setValue_DHvb_3(10890);
      setDefault_DHvb_3(10890);

      setValue_Tc_3(789.0);
      setDefault_Tc_3(789.0);

      setValue_Tb_3(529.1);
      setDefault_Tb_3(529.1);

      setValue_MW_3(154.21);
      setDefault_MW_3(154.21);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.0004);
      setDefault_Rfc_3(0.0004);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(3019);
      setDefault_Koc_3(3019);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Bis(2-chloro-methylethyl) ether") {
      setValue_S_3(1700);
      setDefault_S_3(1700);

      setValue_Hc_3(0.0000742);
      setDefault_Hc_3(0.0000742);

      setValue_Dair_3(0.0398891);
      setDefault_Dair_3(0.0398891);

      setValue_Dwater_3(0.0000073606);
      setDefault_Dwater_3(0.0000073606);

      setValue_DHvb_3(9694.9215);
      setDefault_DHvb_3(9694.9215);

      setValue_Tc_3(690.0);
      setDefault_Tc_3(690.0);

      setValue_Tb_3(460.0);
      setDefault_Tb_3(460.0);

      setValue_MW_3(171.07);
      setDefault_MW_3(171.07);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(null);
      setDefault_Rfc_3(null);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(160.8);
      setDefault_Koc_3(160.8);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Bis(2-chloroethyl)ether") {
      setValue_S_3(17200);
      setDefault_S_3(17200);

      setValue_Hc_3(0.000017);
      setDefault_Hc_3(0.000017);

      setValue_Dair_3(0.0567192);
      setDefault_Dair_3(0.0567192);

      setValue_Dwater_3(0.000008707);
      setDefault_Dwater_3(0.000008707);

      setValue_DHvb_3(10803);
      setDefault_DHvb_3(10803);

      setValue_Tc_3(659.79);
      setDefault_Tc_3(659.79);

      setValue_Tb_3(451.5);
      setDefault_Tb_3(451.5);

      setValue_MW_3(143.01);
      setDefault_MW_3(143.01);

      setValue_IUR_3(0.00033);
      setDefault_IUR_3(0.00033);

      setValue_Rfc_3(null);
      setDefault_Rfc_3(null);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(35.32);
      setDefault_Koc_3(35.32);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Bromo-2-chloroethane, 1-") {
      setValue_S_3(6900);
      setDefault_S_3(6900);

      setValue_Hc_3(0.000909);
      setDefault_Hc_3(0.000909);

      setValue_Dair_3(0.0659248);
      setDefault_Dair_3(0.0659248);

      setValue_Dwater_3(0.0000108);
      setDefault_Dwater_3(0.0000108);

      setValue_DHvb_3(9107.19);
      setDefault_DHvb_3(9107.19);

      setValue_Tc_3(570.0);
      setDefault_Tc_3(570.0);

      setValue_Tb_3(380.0);
      setDefault_Tb_3(380.0);

      setValue_MW_3(143.41);
      setDefault_MW_3(143.41);

      setValue_IUR_3(0.0006);
      setDefault_IUR_3(0.0006);

      setValue_Rfc_3(null);
      setDefault_Rfc_3(null);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(46.34);
      setDefault_Koc_3(46.34);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Bromobenzene") {
      setValue_S_3(446.0);
      setDefault_S_3(446.0);

      setValue_Hc_3(0.00247);
      setDefault_Hc_3(0.00247);

      setValue_Dair_3(0.0537132);
      setDefault_Dair_3(0.0537132);

      setValue_Dwater_3(0.0000093004);
      setDefault_Dwater_3(0.0000093004);

      setValue_DHvb_3(10628.64);
      setDefault_DHvb_3(10628.64);

      setValue_Tc_3(670.0);
      setDefault_Tc_3(670.0);

      setValue_Tb_3(429.0);
      setDefault_Tb_3(429.0);

      setValue_MW_3(157.01);
      setDefault_MW_3(157.01);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.06);
      setDefault_Rfc_3(0.06);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(393.2);
      setDefault_Koc_3(393.2);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Bromochloromethane") {
      setValue_S_3(16700);
      setDefault_S_3(16700);

      setValue_Hc_3(0.00146);
      setDefault_Hc_3(0.00146);

      setValue_Dair_3(0.078692);
      setDefault_Dair_3(0.078692);

      setValue_Dwater_3(0.0000122);
      setDefault_Dwater_3(0.0000122);

      setValue_DHvb_3(7167.65);
      setDefault_DHvb_3(7167.65);

      setValue_Tc_3(511.5);
      setDefault_Tc_3(511.5);

      setValue_Tb_3(341.0);
      setDefault_Tb_3(341.0);

      setValue_MW_3(129.38);
      setDefault_MW_3(129.38);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.04);
      setDefault_Rfc_3(0.04);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(16.72);
      setDefault_Koc_3(16.72);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Bromodichloromethane") {
      setValue_S_3(3032);
      setDefault_S_3(3032);

      setValue_Hc_3(0.00212);
      setDefault_Hc_3(0.00212);

      setValue_Dair_3(0.0562629);
      setDefault_Dair_3(0.0562629);

      setValue_Dwater_3(0.0000107);
      setDefault_Dwater_3(0.0000107);

      setValue_DHvb_3(7800);
      setDefault_DHvb_3(7800);

      setValue_Tc_3(585.85);
      setDefault_Tc_3(585.85);

      setValue_Tb_3(363.0);
      setDefault_Tb_3(363.0);

      setValue_MW_3(163.83);
      setDefault_MW_3(163.83);

      setValue_IUR_3(0.000037);
      setDefault_IUR_3(0.000037);

      setValue_Rfc_3(null);
      setDefault_Rfc_3(null);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(54.38);
      setDefault_Koc_3(54.38);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Bromoform") {
      setValue_S_3(3100);
      setDefault_S_3(3100);

      setValue_Hc_3(0.000535);
      setDefault_Hc_3(0.000535);

      setValue_Dair_3(0.0357324);
      setDefault_Dair_3(0.0357324);

      setValue_Dwater_3(0.0000104);
      setDefault_Dwater_3(0.0000104);

      setValue_DHvb_3(9472.63236);
      setDefault_DHvb_3(9472.63236);

      setValue_Tc_3(633.375);
      setDefault_Tc_3(633.375);

      setValue_Tb_3(422.25);
      setDefault_Tb_3(422.25);

      setValue_MW_3(252.73);
      setDefault_MW_3(252.73);

      setValue_IUR_3(0.0000011);
      setDefault_IUR_3(0.0000011);

      setValue_Rfc_3(null);
      setDefault_Rfc_3(null);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(120.9);
      setDefault_Koc_3(120.9);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Bromomethane") {
      setValue_S_3(15200);
      setDefault_S_3(15200);

      setValue_Hc_3(0.00734);
      setDefault_Hc_3(0.00734);

      setValue_Dair_3(0.1004976);
      setDefault_Dair_3(0.1004976);

      setValue_Dwater_3(0.0000135);
      setDefault_Dwater_3(0.0000135);

      setValue_DHvb_3(5714);
      setDefault_DHvb_3(5714);

      setValue_Tc_3(467.0);
      setDefault_Tc_3(467.0);

      setValue_Tb_3(276.5);
      setDefault_Tb_3(276.5);

      setValue_MW_3(94.939);
      setDefault_MW_3(94.939);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.005);
      setDefault_Rfc_3(0.005);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(10.77);
      setDefault_Koc_3(10.77);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Butadiene, 1,3-") {
      setValue_S_3(735.0);
      setDefault_S_3(735.0);

      setValue_Hc_3(0.0736);
      setDefault_Hc_3(0.0736);

      setValue_Dair_3(0.1003488);
      setDefault_Dair_3(0.1003488);

      setValue_Dwater_3(0.0000103);
      setDefault_Dwater_3(0.0000103);

      setValue_DHvb_3(5370.33);
      setDefault_DHvb_3(5370.33);

      setValue_Tc_3(425.0);
      setDefault_Tc_3(425.0);

      setValue_Tb_3(268.6);
      setDefault_Tb_3(268.6);

      setValue_MW_3(54.092);
      setDefault_MW_3(54.092);

      setValue_IUR_3(0.00003);
      setDefault_IUR_3(0.00003);

      setValue_Rfc_3(0.002);
      setDefault_Rfc_3(0.002);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(53.3);
      setDefault_Koc_3(53.3);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Butanol, N-") {
      setValue_S_3(63200);
      setDefault_S_3(63200);

      setValue_Hc_3(0.00000881);
      setDefault_Hc_3(0.00000881);

      setValue_Dair_3(0.0900387);
      setDefault_Dair_3(0.0900387);

      setValue_Dwater_3(0.0000101);
      setDefault_Dwater_3(0.0000101);

      setValue_DHvb_3(134572.18);
      setDefault_DHvb_3(134572.18);

      setValue_Tc_3(586.275);
      setDefault_Tc_3(586.275);

      setValue_Tb_3(390.85);
      setDefault_Tb_3(390.85);

      setValue_MW_3(74.124);
      setDefault_MW_3(74.124);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(null);
      setDefault_Rfc_3(null);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(10.01);
      setDefault_Koc_3(10.01);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Butyl alcohol, sec-") {
      setValue_S_3(181000);
      setDefault_S_3(181000);

      setValue_Hc_3(0.00000906);
      setDefault_Hc_3(0.00000906);

      setValue_Dair_3(0.0898848);
      setDefault_Dair_3(0.0898848);

      setValue_Dwater_3(0.0000101);
      setDefault_Dwater_3(0.0000101);

      setValue_DHvb_3(11875.42312);
      setDefault_DHvb_3(11875.42312);

      setValue_Tc_3(536.2);
      setDefault_Tc_3(536.2);

      setValue_Tb_3(372.65);
      setDefault_Tb_3(372.65);

      setValue_MW_3(74.124);
      setDefault_MW_3(74.124);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(30.0);
      setDefault_Rfc_3(30.0);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(7.097);
      setDefault_Koc_3(7.097);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Butylbenzene, n-") {
      setValue_S_3(11.8);
      setDefault_S_3(11.8);

      setValue_Hc_3(0.0159);
      setDefault_Hc_3(0.0159);

      setValue_Dair_3(0.0527732);
      setDefault_Dair_3(0.0527732);

      setValue_Dwater_3(0.0000073335);
      setDefault_Dwater_3(0.0000073335);

      setValue_DHvb_3(12267.12);
      setDefault_DHvb_3(12267.12);

      setValue_Tc_3(720);
      setDefault_Tc_3(720);

      setValue_Tb_3(456.3);
      setDefault_Tb_3(456.3);

      setValue_MW_3(134.22);
      setDefault_MW_3(134.22);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(null);
      setDefault_Rfc_3(null);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(6324);
      setDefault_Koc_3(6324);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Butylbenzene, sec-") {
      setValue_S_3(17.6);
      setDefault_S_3(17.6);

      setValue_Hc_3(0.0176);
      setDefault_Hc_3(0.0176);

      setValue_Dair_3(0.0527928);
      setDefault_Dair_3(0.0527928);

      setValue_Dwater_3(0.0000073371);
      setDefault_Dwater_3(0.0000073371);

      setValue_DHvb_3(11467.5);
      setDefault_DHvb_3(11467.5);

      setValue_Tc_3(677.25);
      setDefault_Tc_3(677.25);

      setValue_Tb_3(451.5);
      setDefault_Tb_3(451.5);

      setValue_MW_3(134.22);
      setDefault_MW_3(134.22);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(null);
      setDefault_Rfc_3(null);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(9245);
      setDefault_Koc_3(9245);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Butylbenzene, tert-") {
      setValue_S_3(29.5);
      setDefault_S_3(29.5);

      setValue_Hc_3(0.0132);
      setDefault_Hc_3(0.0132);

      setValue_Dair_3(0.0529525);
      setDefault_Dair_3(0.0529525);

      setValue_Dwater_3(0.0000073662);
      setDefault_Dwater_3(0.0000073662);

      setValue_DHvb_3(11405.35);
      setDefault_DHvb_3(11405.35);

      setValue_Tc_3(664.725);
      setDefault_Tc_3(664.725);

      setValue_Tb_3(443.15);
      setDefault_Tb_3(443.15);

      setValue_MW_3(134.22);
      setDefault_MW_3(134.22);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(null);
      setDefault_Rfc_3(null);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(3687);
      setDefault_Koc_3(3687);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Carbon Disulfide") {
      setValue_S_3(2160);
      setDefault_S_3(2160);

      setValue_Hc_3(0.0144);
      setDefault_Hc_3(0.0144);

      setValue_Dair_3(0.1064373);
      setDefault_Dair_3(0.1064373);

      setValue_Dwater_3(0.000013);
      setDefault_Dwater_3(0.000013);

      setValue_DHvb_3(6391);
      setDefault_DHvb_3(6391);

      setValue_Tc_3(552.0);
      setDefault_Tc_3(552.0);

      setValue_Tb_3(319.0);
      setDefault_Tb_3(319.0);

      setValue_MW_3(76.139);
      setDefault_MW_3(76.139);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.7);
      setDefault_Rfc_3(0.7);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(48.23);
      setDefault_Koc_3(48.23);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Carbon Tetrachloride") {
      setValue_S_3(793.0);
      setDefault_S_3(793.0);

      setValue_Hc_3(0.0276);
      setDefault_Hc_3(0.0276);

      setValue_Dair_3(0.0571435);
      setDefault_Dair_3(0.0571435);

      setValue_Dwater_3(0.0000097849);
      setDefault_Dwater_3(0.0000097849);

      setValue_DHvb_3(7127);
      setDefault_DHvb_3(7127);

      setValue_Tc_3(556.6);
      setDefault_Tc_3(556.6);

      setValue_Tb_3(349.8);
      setDefault_Tb_3(349.8);

      setValue_MW_3(153.82);
      setDefault_MW_3(153.82);

      setValue_IUR_3(0.000006);
      setDefault_IUR_3(0.000006);

      setValue_Rfc_3(0.1);
      setDefault_Rfc_3(0.1);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(285.6);
      setDefault_Koc_3(285.6);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Carbonyl Sulfide") {
      setValue_S_3(1220);
      setDefault_S_3(1220);

      setValue_Hc_3(0.61);
      setDefault_Hc_3(0.61);

      setValue_Dair_3(0.1157542);
      setDefault_Dair_3(0.1157542);

      setValue_Dwater_3(0.0000132);
      setDefault_Dwater_3(0.0000132);

      setValue_DHvb_3(4.66);
      setDefault_DHvb_3(4.66);

      setValue_Tc_3(378.15);
      setDefault_Tc_3(378.15);

      setValue_Tb_3(223.0);
      setDefault_Tb_3(223.0);

      setValue_MW_3(60.075);
      setDefault_MW_3(60.075);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.1);
      setDefault_Rfc_3(0.1);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(0.9123);
      setDefault_Koc_3(0.9123);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Chloral Hydrate") {
      setValue_S_3(793000);
      setDefault_S_3(793000);

      setValue_Hc_3(0.00000000571);
      setDefault_Hc_3(0.00000000571);

      setValue_Dair_3(0.0543991);
      setDefault_Dair_3(0.0543991);

      setValue_Dwater_3(0.0000104);
      setDefault_Dwater_3(0.0000104);

      setValue_DHvb_3(7520.55);
      setDefault_DHvb_3(7520.55);

      setValue_Tc_3(556.725);
      setDefault_Tc_3(556.725);

      setValue_Tb_3(371.15);
      setDefault_Tb_3(371.15);

      setValue_MW_3(165.4);
      setDefault_MW_3(165.4);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(null);
      setDefault_Rfc_3(null);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(4.465);
      setDefault_Koc_3(4.465);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Chlordane") {
      setValue_S_3(0.056);
      setDefault_S_3(0.056);

      setValue_Hc_3(0.0000486);
      setDefault_Hc_3(0.0000486);

      setValue_Dair_3(0.021493);
      setDefault_Dair_3(0.021493);

      setValue_Dwater_3(0.0000054477);
      setDefault_Dwater_3(0.0000054477);

      setValue_DHvb_3(14000);
      setDefault_DHvb_3(14000);

      setValue_Tc_3(672.225);
      setDefault_Tc_3(672.225);

      setValue_Tb_3(448.15);
      setDefault_Tb_3(448.15);

      setValue_MW_3(409.78);
      setDefault_MW_3(409.78);

      setValue_IUR_3(0.0001);
      setDefault_IUR_3(0.0001);

      setValue_Rfc_3(0.0007);
      setDefault_Rfc_3(0.0007);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(250000);
      setDefault_Koc_3(250000);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Chlorine") {
      setValue_S_3(6300);
      setDefault_S_3(6300);

      setValue_Hc_3(0.0117);
      setDefault_Hc_3(0.0117);

      setValue_Dair_3(0.1542088);
      setDefault_Dair_3(0.1542088);

      setValue_Dwater_3(0.0000223);
      setDefault_Dwater_3(0.0000223);

      setValue_DHvb_3(68572.6866);
      setDefault_DHvb_3(68572.6866);

      setValue_Tc_3(417.15);
      setDefault_Tc_3(417.15);

      setValue_Tb_3(239.1);
      setDefault_Tb_3(239.1);

      setValue_MW_3(70.906);
      setDefault_MW_3(70.906);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.00015);
      setDefault_Rfc_3(0.00015);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(5.462);
      setDefault_Koc_3(5.462);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Chloro,1-difluoroethane, 1-") {
      setValue_S_3(1400);
      setDefault_S_3(1400);

      setValue_Hc_3(0.0588);
      setDefault_Hc_3(0.0588);

      setValue_Dair_3(0.0803925);
      setDefault_Dair_3(0.0803925);

      setValue_Dwater_3(0.0000101);
      setDefault_Dwater_3(0.0000101);

      setValue_DHvb_3(53298.46);
      setDefault_DHvb_3(53298.46);

      setValue_Tc_3(409.85);
      setDefault_Tc_3(409.85);

      setValue_Tb_3(263.3);
      setDefault_Tb_3(263.3);

      setValue_MW_3(100.5);
      setDefault_MW_3(100.5);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(50.0);
      setDefault_Rfc_3(50.0);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(60.09);
      setDefault_Koc_3(60.09);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Chloro,3-butadiene, 2-") {
      setValue_S_3(874.9);
      setDefault_S_3(874.9);

      setValue_Hc_3(0.0561);
      setDefault_Hc_3(0.0561);

      setValue_Dair_3(0.0841489);
      setDefault_Dair_3(0.0841489);

      setValue_Dwater_3(0.00001);
      setDefault_Dwater_3(0.00001);

      setValue_DHvb_3(8074.848);
      setDefault_DHvb_3(8074.848);

      setValue_Tc_3(525);
      setDefault_Tc_3(525);

      setValue_Tb_3(332.4);
      setDefault_Tb_3(332.4);

      setValue_MW_3(88.537);
      setDefault_MW_3(88.537);

      setValue_IUR_3(0.0003);
      setDefault_IUR_3(0.0003);

      setValue_Rfc_3(0.02);
      setDefault_Rfc_3(0.02);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(156.8);
      setDefault_Koc_3(156.8);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Chlorobenzene") {
      setValue_S_3(498.0);
      setDefault_S_3(498.0);

      setValue_Hc_3(0.00311);
      setDefault_Hc_3(0.00311);

      setValue_Dair_3(0.0721306);
      setDefault_Dair_3(0.0721306);

      setValue_Dwater_3(0.0000094765);
      setDefault_Dwater_3(0.0000094765);

      setValue_DHvb_3(8410);
      setDefault_DHvb_3(8410);

      setValue_Tc_3(632.4);
      setDefault_Tc_3(632.4);

      setValue_Tb_3(404.7);
      setDefault_Tb_3(404.7);

      setValue_MW_3(112.56);
      setDefault_MW_3(112.56);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.05);
      setDefault_Rfc_3(0.05);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(291.4);
      setDefault_Koc_3(291.4);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Chlorobutane, 1-") {
      setValue_S_3(1100);
      setDefault_S_3(1100);

      setValue_Hc_3(0.0167);
      setDefault_Hc_3(0.0167);

      setValue_Dair_3(0.0784137);
      setDefault_Dair_3(0.0784137);

      setValue_Dwater_3(0.0000093275);
      setDefault_Dwater_3(0.0000093275);

      setValue_DHvb_3(7263.21);
      setDefault_DHvb_3(7263.21);

      setValue_Tc_3(542.0);
      setDefault_Tc_3(542.0);

      setValue_Tb_3(351.6);
      setDefault_Tb_3(351.6);

      setValue_MW_3(92.569);
      setDefault_MW_3(92.569);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(null);
      setDefault_Rfc_3(null);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(195.4);
      setDefault_Koc_3(195.4);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Chlorodifluoromethane") {
      setValue_S_3(2770);
      setDefault_S_3(2770);

      setValue_Hc_3(0.0406);
      setDefault_Hc_3(0.0406);

      setValue_Dair_3(0.1033788);
      setDefault_Dair_3(0.1033788);

      setValue_Dwater_3(0.0000133);
      setDefault_Dwater_3(0.0000133);

      setValue_DHvb_3(4835.92122);
      setDefault_DHvb_3(4835.92122);

      setValue_Tc_3(369.3);
      setDefault_Tc_3(369.3);

      setValue_Tb_3(232.3);
      setDefault_Tb_3(232.3);

      setValue_MW_3(86.469);
      setDefault_MW_3(86.469);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(50.0);
      setDefault_Rfc_3(50.0);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(8.648);
      setDefault_Koc_3(8.648);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Chloroethanol, 2-") {
      setValue_S_3(1000000);
      setDefault_S_3(1000000);

      setValue_Hc_3(0.000000761);
      setDefault_Hc_3(0.000000761);

      setValue_Dair_3(0.0999813);
      setDefault_Dair_3(0.0999813);

      setValue_Dwater_3(0.0000122);
      setDefault_Dwater_3(0.0000122);

      setValue_DHvb_3(9956.97);
      setDefault_DHvb_3(9956.97);

      setValue_Tc_3(602.625);
      setDefault_Tc_3(602.625);

      setValue_Tb_3(401.75);
      setDefault_Tb_3(401.75);

      setValue_MW_3(80.515);
      setDefault_MW_3(80.515);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(null);
      setDefault_Rfc_3(null);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(3.39);
      setDefault_Koc_3(3.39);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Chloroform") {
      setValue_S_3(7950);
      setDefault_S_3(7950);

      setValue_Hc_3(0.00367);
      setDefault_Hc_3(0.00367);

      setValue_Dair_3(0.0769197);
      setDefault_Dair_3(0.0769197);

      setValue_Dwater_3(0.0000109);
      setDefault_Dwater_3(0.0000109);

      setValue_DHvb_3(6988);
      setDefault_DHvb_3(6988);

      setValue_Tc_3(536.4);
      setDefault_Tc_3(536.4);

      setValue_Tb_3(334.1);
      setDefault_Tb_3(334.1);

      setValue_MW_3(119.38);
      setDefault_MW_3(119.38);

      setValue_IUR_3(0.000023);
      setDefault_IUR_3(0.000023);

      setValue_Rfc_3(0.098);
      setDefault_Rfc_3(0.098);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(51.21);
      setDefault_Koc_3(51.21);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Chloromethane") {
      setValue_S_3(5320);
      setDefault_S_3(5320);

      setValue_Hc_3(0.00882);
      setDefault_Hc_3(0.00882);

      setValue_Dair_3(0.1239651);
      setDefault_Dair_3(0.1239651);

      setValue_Dwater_3(0.0000136);
      setDefault_Dwater_3(0.0000136);

      setValue_DHvb_3(5114.6);
      setDefault_DHvb_3(5114.6);

      setValue_Tc_3(416.25);
      setDefault_Tc_3(416.25);

      setValue_Tb_3(249.0);
      setDefault_Tb_3(249.0);

      setValue_MW_3(50.488);
      setDefault_MW_3(50.488);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.09);
      setDefault_Rfc_3(0.09);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(6.157);
      setDefault_Koc_3(6.157);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Chloronaphthalene, Beta-") {
      setValue_S_3(11.7);
      setDefault_S_3(11.7);

      setValue_Hc_3(0.00032);
      setDefault_Hc_3(0.00032);

      setValue_Dair_3(0.0446914);
      setDefault_Dair_3(0.0446914);

      setValue_Dwater_3(0.0000077301);
      setDefault_Dwater_3(0.0000077301);

      setValue_DHvb_3(11311.936);
      setDefault_DHvb_3(11311.936);

      setValue_Tc_3(793.5);
      setDefault_Tc_3(793.5);

      setValue_Tb_3(529.0);
      setDefault_Tb_3(529.0);

      setValue_MW_3(162.62);
      setDefault_MW_3(162.62);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(2423);
      setDefault_Rfc_3(2423);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(null);
      setDefault_Koc_3(null);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Chlorophenol, 2-") {
      setValue_S_3(11300);
      setDefault_S_3(11300);

      setValue_Hc_3(0.0000112);
      setDefault_Hc_3(0.0000112);

      setValue_Dair_3(0.0661175);
      setDefault_Dair_3(0.0661175);

      setValue_Dwater_3(0.0000094784);
      setDefault_Dwater_3(0.0000094784);

      setValue_DHvb_3(9572);
      setDefault_DHvb_3(9572);

      setValue_Tc_3(675);
      setDefault_Tc_3(675);

      setValue_Tb_3(447.9);
      setDefault_Tb_3(447.9);

      setValue_MW_3(128.56);
      setDefault_MW_3(128.56);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(null);
      setDefault_Rfc_3(null);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(191.1);
      setDefault_Koc_3(191.1);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Chlorotoluene, o-") {
      setValue_S_3(374.0);
      setDefault_S_3(374.0);

      setValue_Hc_3(0.00357);
      setDefault_Hc_3(0.00357);

      setValue_Dair_3(0.0629025);
      setDefault_Dair_3(0.0629025);

      setValue_Dwater_3(0.0000087194);
      setDefault_Dwater_3(0.0000087194);

      setValue_DHvb_3(9950.5);
      setDefault_DHvb_3(9950.5);

      setValue_Tc_3(654.1);
      setDefault_Tc_3(654.1);

      setValue_Tb_3(432.0);
      setDefault_Tb_3(432.0);

      setValue_MW_3(126.59);
      setDefault_MW_3(126.59);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(null);
      setDefault_Rfc_3(null);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(928.6);
      setDefault_Koc_3(928.6);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Chlorotoluene, p-") {
      setValue_S_3(106.0);
      setDefault_S_3(106.0);

      setValue_Hc_3(0.00438);
      setDefault_Hc_3(0.00438);

      setValue_Dair_3(0.062571);
      setDefault_Dair_3(0.062571);

      setValue_Dwater_3(0.0000086574);
      setDefault_Dwater_3(0.0000086574);

      setValue_DHvb_3(10144.98);
      setDefault_DHvb_3(10144.98);

      setValue_Tc_3(658.7);
      setDefault_Tc_3(658.7);

      setValue_Tb_3(435.4);
      setDefault_Tb_3(435.4);

      setValue_MW_3(126.59);
      setDefault_MW_3(126.59);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(null);
      setDefault_Rfc_3(null);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(775.7);
      setDefault_Koc_3(775.7);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Crotonaldehyde, trans-") {
      setValue_S_3(150000);
      setDefault_S_3(150000);

      setValue_Hc_3(0.0000194);
      setDefault_Hc_3(0.0000194);

      setValue_Dair_3(0.0959235);
      setDefault_Dair_3(0.0959235);

      setValue_Dwater_3(0.0000108);
      setDefault_Dwater_3(0.0000108);

      setValue_DHvb_3(8.62);
      setDefault_DHvb_3(8.62);

      setValue_Tc_3(568.0);
      setDefault_Tc_3(568.0);

      setValue_Tb_3(377.0);
      setDefault_Tb_3(377.0);

      setValue_MW_3(70.092);
      setDefault_MW_3(70.092);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(null);
      setDefault_Rfc_3(null);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(10.66);
      setDefault_Koc_3(10.66);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Cumene") {
      setValue_S_3(61.3);
      setDefault_S_3(61.3);

      setValue_Hc_3(7);
      setDefault_Hc_3(7);

      setValue_Dair_3(0.0603044);
      setDefault_Dair_3(0.0603044);

      setValue_Dwater_3(0.0000078566);
      setDefault_Dwater_3(0.0000078566);

      setValue_DHvb_3(10335.3);
      setDefault_DHvb_3(10335.3);

      setValue_Tc_3(631.1);
      setDefault_Tc_3(631.1);

      setValue_Tb_3(425.4);
      setDefault_Tb_3(425.4);

      setValue_MW_3(120.2);
      setDefault_MW_3(120.2);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.4);
      setDefault_Rfc_3(0.4);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(1500);
      setDefault_Koc_3(1500);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Cyanogen") {
      setValue_S_3(8000);
      setDefault_S_3(8000);

      setValue_Hc_3(0.0054);
      setDefault_Hc_3(0.0054);

      setValue_Dair_3(0.1237533);
      setDefault_Dair_3(0.1237533);

      setValue_Dwater_3(0.0000138);
      setDefault_Dwater_3(0.0000138);

      setValue_DHvb_3(5778);
      setDefault_DHvb_3(5778);

      setValue_Tc_3(401.3);
      setDefault_Tc_3(401.3);

      setValue_Tb_3(251.9);
      setDefault_Tb_3(251.9);

      setValue_MW_3(52.036);
      setDefault_MW_3(52.036);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(null);
      setDefault_Rfc_3(null);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(56);
      setDefault_Koc_3(56);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Cyanogen Chloride") {
      setValue_S_3(60000);
      setDefault_S_3(60000);

      setValue_Hc_3(0.0019412);
      setDefault_Hc_3(0.0019412);

      setValue_Dair_3(0.1207454);
      setDefault_Dair_3(0.1207454);

      setValue_Dwater_3(0.0000142);
      setDefault_Dwater_3(0.0000142);

      setValue_DHvb_3(6389.13);
      setDefault_DHvb_3(6389.13);

      setValue_Tc_3(429.0);
      setDefault_Tc_3(429.0);

      setValue_Tb_3(286.0);
      setDefault_Tb_3(286.0);

      setValue_MW_3(61.471);
      setDefault_MW_3(61.471);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(null);
      setDefault_Rfc_3(null);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(12.8);
      setDefault_Koc_3(12.8);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Cyclohexane") {
      setValue_S_3(55.0);
      setDefault_S_3(55.0);

      setValue_Hc_3(0.15);
      setDefault_Hc_3(0.15);

      setValue_Dair_3(0.0799729);
      setDefault_Dair_3(0.0799729);

      setValue_Dwater_3(0.0000091077);
      setDefault_Dwater_3(0.0000091077);

      setValue_DHvb_3(7153.6);
      setDefault_DHvb_3(7153.6);

      setValue_Tc_3(553.4);
      setDefault_Tc_3(553.4);

      setValue_Tb_3(353.7);
      setDefault_Tb_3(353.7);

      setValue_MW_3(84.163);
      setDefault_MW_3(84.163);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(6.0);
      setDefault_Rfc_3(6.0);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(966.4);
      setDefault_Koc_3(966.4);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Cyclohexanone") {
      setValue_S_3(25000);
      setDefault_S_3(25000);

      setValue_Hc_3(0.000009);
      setDefault_Hc_3(0.000009);

      setValue_Dair_3(0.0767599);
      setDefault_Dair_3(0.0767599);

      setValue_Dwater_3(0.0000093795);
      setDefault_Dwater_3(0.0000093795);

      setValue_DHvb_3(10762.40076);
      setDefault_DHvb_3(10762.40076);

      setValue_Tc_3(629.0);
      setDefault_Tc_3(629.0);

      setValue_Tb_3(428.55);
      setDefault_Tb_3(428.55);

      setValue_MW_3(98.146);
      setDefault_MW_3(98.146);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.7);
      setDefault_Rfc_3(0.7);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(37.05);
      setDefault_Koc_3(37.05);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Cyclohexene") {
      setValue_S_3(213.0);
      setDefault_S_3(213.0);

      setValue_Hc_3(0.0455);
      setDefault_Hc_3(0.0455);

      setValue_Dair_3(0.0831876);
      setDefault_Dair_3(0.0831876);

      setValue_Dwater_3(0.0000094975);
      setDefault_Dwater_3(0.0000094975);

      setValue_DHvb_3(7279.94);
      setDefault_DHvb_3(7279.94);

      setValue_Tc_3(560.55);
      setDefault_Tc_3(560.55);

      setValue_Tb_3(356.15);
      setDefault_Tb_3(356.15);

      setValue_MW_3(82.147);
      setDefault_MW_3(82.147);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(1.0);
      setDefault_Rfc_3(1.0);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(303.2);
      setDefault_Koc_3(303.2);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Cyclohexylamine") {
      setValue_S_3(1000000);
      setDefault_S_3(1000000);

      setValue_Hc_3(0.00000416);
      setDefault_Hc_3(0.00000416);

      setValue_Dair_3(0.0712945);
      setDefault_Dair_3(0.0712945);

      setValue_Dwater_3(0.0000085394);
      setDefault_Dwater_3(0.0000085394);

      setValue_DHvb_3(10444.55);
      setDefault_DHvb_3(10444.55);

      setValue_Tc_3(610.725);
      setDefault_Tc_3(610.725);

      setValue_Tb_3(407.15);
      setDefault_Tb_3(407.15);

      setValue_MW_3(99.177);
      setDefault_MW_3(99.177);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(null);
      setDefault_Rfc_3(null);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(24.64);
      setDefault_Koc_3(24.64);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "DDE, p,p'-") {
      setValue_S_3(0.04);
      setDefault_S_3(0.04);

      setValue_Hc_3(0.0000416);
      setDefault_Hc_3(0.0000416);

      setValue_Dair_3(0.0229959);
      setDefault_Dair_3(0.0229959);

      setValue_Dwater_3(0.0000058592);
      setDefault_Dwater_3(0.0000058592);

      setValue_DHvb_3(15000);
      setDefault_DHvb_3(15000);

      setValue_Tc_3(913.725);
      setDefault_Tc_3(913.725);

      setValue_Tb_3(609.15);
      setDefault_Tb_3(609.15);

      setValue_MW_3(318.03);
      setDefault_MW_3(318.03);

      setValue_IUR_3(0.000097);
      setDefault_IUR_3(0.000097);

      setValue_Rfc_3(null);
      setDefault_Rfc_3(null);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(446300);
      setDefault_Koc_3(446300);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Dibenzofuran") {
      setValue_S_3(3.1);
      setDefault_S_3(3.1);

      setValue_Hc_3(0.000213);
      setDefault_Hc_3(0.000213);

      setValue_Dair_3(0.0650663);
      setDefault_Dair_3(0.0650663);

      setValue_Dwater_3(0.0000073773);
      setDefault_Dwater_3(0.0000073773);

      setValue_DHvb_3(66400);
      setDefault_DHvb_3(66400);

      setValue_Tc_3(824.0);
      setDefault_Tc_3(824.0);

      setValue_Tb_3(560.0);
      setDefault_Tb_3(560.0);

      setValue_MW_3(168.2);
      setDefault_MW_3(168.2);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(null);
      setDefault_Rfc_3(null);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(3761);
      setDefault_Koc_3(3761);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Dibenzothiophene") {
      setValue_S_3(1.47);
      setDefault_S_3(1.47);

      setValue_Hc_3(0.0000338);
      setDefault_Hc_3(0.0000338);

      setValue_Dair_3(0.0355475);
      setDefault_Dair_3(0.0355475);

      setValue_Dwater_3(0.0000075958);
      setDefault_Dwater_3(0.0000075958);

      setValue_DHvb_3(22299.23518);
      setDefault_DHvb_3(22299.23518);

      setValue_Tc_3(908.475);
      setDefault_Tc_3(908.475);

      setValue_Tb_3(605.65);
      setDefault_Tb_3(605.65);

      setValue_MW_3(184.26);
      setDefault_MW_3(184.26);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(null);
      setDefault_Rfc_3(null);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(6324);
      setDefault_Koc_3(6324);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Dibromo-3-chloropropane, 1,2-") {
      setValue_S_3(1230);
      setDefault_S_3(1230);

      setValue_Hc_3(0.000147);
      setDefault_Hc_3(0.000147);

      setValue_Dair_3(0.0321351);
      setDefault_Dair_3(0.0321351);

      setValue_Dwater_3(0.0000089048);
      setDefault_Dwater_3(0.0000089048);

      setValue_DHvb_3(9960.045);
      setDefault_DHvb_3(9960.045);

      setValue_Tc_3(703.5);
      setDefault_Tc_3(703.5);

      setValue_Tb_3(469.0);
      setDefault_Tb_3(469.0);

      setValue_MW_3(236.33);
      setDefault_MW_3(236.33);

      setValue_IUR_3(0.006);
      setDefault_IUR_3(0.006);

      setValue_Rfc_3(0.0002);
      setDefault_Rfc_3(0.0002);

      setValue_Mut_3("Yes");
      setDefault_Mut_3("Yes");

      setValue_Koc_3(370.3);
      setDefault_Koc_3(370.3);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Dibromochloromethane") {
      setValue_S_3(2700);
      setDefault_S_3(2700);

      setValue_Hc_3(0.000783);
      setDefault_Hc_3(0.000783);

      setValue_Dair_3(0.0366356);
      setDefault_Dair_3(0.0366356);

      setValue_Dwater_3(0.0000106);
      setDefault_Dwater_3(0.0000106);

      setValue_DHvb_3(5900);
      setDefault_DHvb_3(5900);

      setValue_Tc_3(678.2);
      setDefault_Tc_3(678.2);

      setValue_Tb_3(393.0);
      setDefault_Tb_3(393.0);

      setValue_MW_3(208.28);
      setDefault_MW_3(208.28);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(null);
      setDefault_Rfc_3(null);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(74.86);
      setDefault_Koc_3(74.86);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Dibromoethane, 1,2-") {
      setValue_S_3(3910);
      setDefault_S_3(3910);

      setValue_Hc_3(0.00065);
      setDefault_Hc_3(0.00065);

      setValue_Dair_3(0.0430348);
      setDefault_Dair_3(0.0430348);

      setValue_Dwater_3(0.0000104);
      setDefault_Dwater_3(0.0000104);

      setValue_DHvb_3(8310.03);
      setDefault_DHvb_3(8310.03);

      setValue_Tc_3(583.0);
      setDefault_Tc_3(583.0);

      setValue_Tb_3(404.6);
      setDefault_Tb_3(404.6);

      setValue_MW_3(187.86);
      setDefault_MW_3(187.86);

      setValue_IUR_3(0.0006);
      setDefault_IUR_3(0.0006);

      setValue_Rfc_3(0.009);
      setDefault_Rfc_3(0.009);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(50.2);
      setDefault_Koc_3(50.2);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Dibromomethane (Methylene Bromide)") {
      setValue_S_3(11900);
      setDefault_S_3(11900);

      setValue_Hc_3(0.000822);
      setDefault_Hc_3(0.000822);

      setValue_Dair_3(0.0551373);
      setDefault_Dair_3(0.0551373);

      setValue_Dwater_3(0.0000119);
      setDefault_Dwater_3(0.0000119);

      setValue_DHvb_3(7867.88);
      setDefault_DHvb_3(7867.88);

      setValue_Tc_3(583.0);
      setDefault_Tc_3(583.0);

      setValue_Tb_3(370.0);
      setDefault_Tb_3(370.0);

      setValue_MW_3(173.84);
      setDefault_MW_3(173.84);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.004);
      setDefault_Rfc_3(0.004);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(29.86);
      setDefault_Koc_3(29.86);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Dichloro-2-butene, cis,4-") {
      setValue_S_3(580.2);
      setDefault_S_3(580.2);

      setValue_Hc_3(0.000664);
      setDefault_Hc_3(0.000664);

      setValue_Dair_3(0.0665047);
      setDefault_Dair_3(0.0665047);

      setValue_Dwater_3(0.00000929);
      setDefault_Dwater_3(0.00000929);

      setValue_DHvb_3(9125);
      setDefault_DHvb_3(9125);

      setValue_Tc_3(640.0);
      setDefault_Tc_3(640.0);

      setValue_Tb_3(425.5);
      setDefault_Tb_3(425.5);

      setValue_MW_3(125);
      setDefault_MW_3(125);

      setValue_IUR_3(0.0042);
      setDefault_IUR_3(0.0042);

      setValue_Rfc_3(null);
      setDefault_Rfc_3(null);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(180.4);
      setDefault_Koc_3(180.4);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Dichloro-2-butene, trans,4-") {
      setValue_S_3(850.0);
      setDefault_S_3(850.0);

      setValue_Hc_3(0.000664);
      setDefault_Hc_3(0.000664);

      setValue_Dair_3(0.0663818);
      setDefault_Dair_3(0.0663818);

      setValue_Dwater_3(0.0000092665);
      setDefault_Dwater_3(0.0000092665);

      setValue_DHvb_3(9125);
      setDefault_DHvb_3(9125);

      setValue_Tc_3(646.0);
      setDefault_Tc_3(646.0);

      setValue_Tb_3(428.4);
      setDefault_Tb_3(428.4);

      setValue_MW_3(125);
      setDefault_MW_3(125);

      setValue_IUR_3(0.0042);
      setDefault_IUR_3(0.0042);

      setValue_Rfc_3(null);
      setDefault_Rfc_3(null);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(180.4);
      setDefault_Koc_3(180.4);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Dichlorobenzene, 1,2-") {
      setValue_S_3(156.0);
      setDefault_S_3(156.0);

      setValue_Hc_3(0.00192);
      setDefault_Hc_3(0.00192);

      setValue_Dair_3(0.0561703);
      setDefault_Dair_3(0.0561703);

      setValue_Dwater_3(0.0000089213);
      setDefault_Dwater_3(0.0000089213);

      setValue_DHvb_3(9700);
      setDefault_DHvb_3(9700);

      setValue_Tc_3(705.0);
      setDefault_Tc_3(705.0);

      setValue_Tb_3(453.0);
      setDefault_Tb_3(453.0);

      setValue_MW_3(147);
      setDefault_MW_3(147);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.2);
      setDefault_Rfc_3(0.2);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(947.3);
      setDefault_Koc_3(947.3);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Dichlorobenzene, 1,4-") {
      setValue_S_3(81.3);
      setDefault_S_3(81.3);

      setValue_Hc_3(0.00241);
      setDefault_Hc_3(0.00241);

      setValue_Dair_3(0.0550429);
      setDefault_Dair_3(0.0550429);

      setValue_Dwater_3(0.0000086797);
      setDefault_Dwater_3(0.0000086797);

      setValue_DHvb_3(9271);
      setDefault_DHvb_3(9271);

      setValue_Tc_3(684.75);
      setDefault_Tc_3(684.75);

      setValue_Tb_3(447.0);
      setDefault_Tb_3(447.0);

      setValue_MW_3(147);
      setDefault_MW_3(147);

      setValue_IUR_3(0.000011);
      setDefault_IUR_3(0.000011);

      setValue_Rfc_3(0.8);
      setDefault_Rfc_3(0.8);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(966.4);
      setDefault_Koc_3(966.4);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Dichlorodifluoromethane") {
      setValue_S_3(280);
      setDefault_S_3(280);

      setValue_Hc_3(0.343);
      setDefault_Hc_3(0.343);

      setValue_Dair_3(0.0760293);
      setDefault_Dair_3(0.0760293);

      setValue_Dwater_3(0.0000108);
      setDefault_Dwater_3(0.0000108);

      setValue_DHvb_3(9421.36088);
      setDefault_DHvb_3(9421.36088);

      setValue_Tc_3(384.95);
      setDefault_Tc_3(384.95);

      setValue_Tb_3(243.2);
      setDefault_Tb_3(243.2);

      setValue_MW_3(120.91);
      setDefault_MW_3(120.91);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.1);
      setDefault_Rfc_3(0.1);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(74.86);
      setDefault_Koc_3(74.86);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Dichloroethane, 1,1-") {
      setValue_S_3(5040);
      setDefault_S_3(5040);

      setValue_Hc_3(0.00562);
      setDefault_Hc_3(0.00562);

      setValue_Dair_3(0.0836446);
      setDefault_Dair_3(0.0836446);

      setValue_Dwater_3(0.0000106);
      setDefault_Dwater_3(0.0000106);

      setValue_DHvb_3(6895);
      setDefault_DHvb_3(6895);

      setValue_Tc_3(523.0);
      setDefault_Tc_3(523.0);

      setValue_Tb_3(330.4);
      setDefault_Tb_3(330.4);

      setValue_MW_3(98.96);
      setDefault_MW_3(98.96);

      setValue_IUR_3(0.0000016);
      setDefault_IUR_3(0.0000016);

      setValue_Rfc_3(null);
      setDefault_Rfc_3(null);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(35.74);
      setDefault_Koc_3(35.74);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Dichloroethane, 1,2-") {
      setValue_S_3(8600);
      setDefault_S_3(8600);

      setValue_Hc_3(0.00118);
      setDefault_Hc_3(0.00118);

      setValue_Dair_3(0.0857221);
      setDefault_Dair_3(0.0857221);

      setValue_Dwater_3(0.000011);
      setDefault_Dwater_3(0.000011);

      setValue_DHvb_3(7643);
      setDefault_DHvb_3(7643);

      setValue_Tc_3(561.0);
      setDefault_Tc_3(561.0);

      setValue_Tb_3(356.5);
      setDefault_Tb_3(356.5);

      setValue_MW_3(98.96);
      setDefault_MW_3(98.96);

      setValue_IUR_3(0.000026);
      setDefault_IUR_3(0.000026);

      setValue_Rfc_3(0.007);
      setDefault_Rfc_3(0.007);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(19.23);
      setDefault_Koc_3(19.23);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Dichloroethylene, 1,1-") {
      setValue_S_3(2420);
      setDefault_S_3(2420);

      setValue_Hc_3(0.0261);
      setDefault_Hc_3(0.0261);

      setValue_Dair_3(0.0863107);
      setDefault_Dair_3(0.0863107);

      setValue_Dwater_3(0.000011);
      setDefault_Dwater_3(0.000011);

      setValue_DHvb_3(6247);
      setDefault_DHvb_3(6247);

      setValue_Tc_3(576.05);
      setDefault_Tc_3(576.05);

      setValue_Tb_3(304.6);
      setDefault_Tb_3(304.6);

      setValue_MW_3(96.944);
      setDefault_MW_3(96.944);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.2);
      setDefault_Rfc_3(0.2);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(70.51);
      setDefault_Koc_3(70.51);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Dichloroethylene, 1,2-cis-") {
      setValue_S_3(6410);
      setDefault_S_3(6410);

      setValue_Hc_3(0.00408);
      setDefault_Hc_3(0.00408);

      setValue_Dair_3(0.0884056);
      setDefault_Dair_3(0.0884056);

      setValue_Dwater_3(0.0000113);
      setDefault_Dwater_3(0.0000113);

      setValue_DHvb_3(7192);
      setDefault_DHvb_3(7192);

      setValue_Tc_3(544.0);
      setDefault_Tc_3(544.0);

      setValue_Tb_3(328.0);
      setDefault_Tb_3(328.0);

      setValue_MW_3(96.944);
      setDefault_MW_3(96.944);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(null);
      setDefault_Rfc_3(null);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(54.38);
      setDefault_Koc_3(54.38);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Dichloroethylene, 1,2-trans-") {
      setValue_S_3(4520);
      setDefault_S_3(4520);

      setValue_Hc_3(0.00938);
      setDefault_Hc_3(0.00938);

      setValue_Dair_3(0.0876094);
      setDefault_Dair_3(0.0876094);

      setValue_Dwater_3(0.0000112);
      setDefault_Dwater_3(0.0000112);

      setValue_DHvb_3(6717);
      setDefault_DHvb_3(6717);

      setValue_Tc_3(516.5);
      setDefault_Tc_3(516.5);

      setValue_Tb_3(328.0);
      setDefault_Tb_3(328.0);

      setValue_MW_3(96.944);
      setDefault_MW_3(96.944);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(null);
      setDefault_Rfc_3(null);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(54.39);
      setDefault_Koc_3(54.38);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Dichloropropane, 1,2-") {
      setValue_S_3(2800);
      setDefault_S_3(2800);

      setValue_Hc_3(0.00282);
      setDefault_Hc_3(0.00282);

      setValue_Dair_3(0.0733402);
      setDefault_Dair_3(0.0733402);

      setValue_Dwater_3(0.0000097252);
      setDefault_Dwater_3(0.0000097252);

      setValue_DHvb_3(7590);
      setDefault_DHvb_3(7590);

      setValue_Tc_3(572.0);
      setDefault_Tc_3(572.0);

      setValue_Tb_3(368.5);
      setDefault_Tb_3(368.5);

      setValue_MW_3(112.99);
      setDefault_MW_3(112.99);

      setValue_IUR_3(0.0000037);
      setDefault_IUR_3(0.0000037);

      setValue_Rfc_3(0.004);
      setDefault_Rfc_3(0.004);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(52.24);
      setDefault_Koc_3(52.24);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Dichloropropane, 1,3-") {
      setValue_S_3(2750);
      setDefault_S_3(2750);

      setValue_Hc_3(0.000976);
      setDefault_Hc_3(0.000976);

      setValue_Dair_3(0.0738738);
      setDefault_Dair_3(0.0738738);

      setValue_Dwater_3(0.000009823);
      setDefault_Dwater_3(0.000009823);

      setValue_DHvb_3(8102.51);
      setDefault_DHvb_3(8102.51);

      setValue_Tc_3(590.85);
      setDefault_Tc_3(590.85);

      setValue_Tb_3(393.9);
      setDefault_Tb_3(393.9);

      setValue_MW_3(112.99);
      setDefault_MW_3(112.99);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(null);
      setDefault_Rfc_3(null);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(54.38);
      setDefault_Koc_3(54.38);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Dichloropropene, 1,3-") {
      setValue_S_3(2800);
      setDefault_S_3(2800);

      setValue_Hc_3(0.00355);
      setDefault_Hc_3(0.00355);

      setValue_Dair_3(0.0762725);
      setDefault_Dair_3(0.0762725);

      setValue_Dwater_3(0.0000101);
      setDefault_Dwater_3(0.0000101);

      setValue_DHvb_3(7900);
      setDefault_DHvb_3(7900);

      setValue_Tc_3(587.38);
      setDefault_Tc_3(587.38);

      setValue_Tb_3(385.0);
      setDefault_Tb_3(385.0);

      setValue_MW_3(110.97);
      setDefault_MW_3(110.97);

      setValue_IUR_3(0.000004);
      setDefault_IUR_3(0.000004);

      setValue_Rfc_3(0.02);
      setDefault_Rfc_3(0.02);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(57.73);
      setDefault_Koc_3(57.73);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Dicyclopentadiene") {
      setValue_S_3(26.47);
      setDefault_S_3(26.47);

      setValue_Hc_3(0.0625);
      setDefault_Hc_3(0.0625);

      setValue_Dair_3(0.0557455);
      setDefault_Dair_3(0.0557455);

      setValue_Dwater_3(0.0000077554);
      setDefault_Dwater_3(0.0000077554);

      setValue_DHvb_3(2197.38);
      setDefault_DHvb_3(2197.38);

      setValue_Tc_3(664.5);
      setDefault_Tc_3(664.5);

      setValue_Tb_3(443.0);
      setDefault_Tb_3(443.0);

      setValue_MW_3(132.21);
      setDefault_MW_3(132.21);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.0003);
      setDefault_Rfc_3(0.0003);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(552.3);
      setDefault_Koc_3(552.3);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Diethylformamide") {
      setValue_S_3(1000000);
      setDefault_S_3(1000000);

      setValue_Hc_3(0.00000013);
      setDefault_Hc_3(0.00000013);

      setValue_Dair_3(0.073301);
      setDefault_Dair_3(0.073301);

      setValue_Dwater_3(0.0000089773);
      setDefault_Dwater_3(0.0000089773);

      setValue_DHvb_3(11687.38);
      setDefault_DHvb_3(11687.38);

      setValue_Tc_3(675.975);
      setDefault_Tc_3(675.975);

      setValue_Tb_3(450.65);
      setDefault_Tb_3(450.65);

      setValue_MW_3(101.15);
      setDefault_MW_3(101.15);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(null);
      setDefault_Rfc_3(null);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(4.785);
      setDefault_Koc_3(4.785);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Difluoroethane, 1,1-") {
      setValue_S_3(3200);
      setDefault_S_3(3200);

      setValue_Hc_3(0.0203);
      setDefault_Hc_3(0.0203);

      setValue_Dair_3(0.1023145);
      setDefault_Dair_3(0.1023145);

      setValue_Dwater_3(0.0000115);
      setDefault_Dwater_3(0.0000115);

      setValue_DHvb_3(5153.88);
      setDefault_DHvb_3(5153.88);

      setValue_Tc_3(372.15);
      setDefault_Tc_3(372.15);

      setValue_Tb_3(248.1);
      setDefault_Tb_3(248.1);

      setValue_MW_3(66.051);
      setDefault_MW_3(66.051);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(40.0);
      setDefault_Rfc_3(40.0);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(4.472);
      setDefault_Koc_3(4.472);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Dimethylaniline, N,N-") {
      setValue_S_3(1450);
      setDefault_S_3(1450);

      setValue_Hc_3(0.0000568);
      setDefault_Hc_3(0.0000568);

      setValue_Dair_3(0.0625411);
      setDefault_Dair_3(0.0625411);

      setValue_Dwater_3(0.0000083063);
      setDefault_Dwater_3(0.0000083063);

      setValue_DHvb_3(12276.68);
      setDefault_DHvb_3(12276.68);

      setValue_Tc_3(687.0);
      setDefault_Tc_3(687.0);

      setValue_Tb_3(466.45);
      setDefault_Tb_3(466.45);

      setValue_MW_3(121.18);
      setDefault_MW_3(121.18);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(null);
      setDefault_Rfc_3(null);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(137.3);
      setDefault_Koc_3(137.3);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Dimethylformamide") {
      setValue_S_3(1000000);
      setDefault_S_3(1000000);

      setValue_Hc_3(0.0000000739);
      setDefault_Hc_3(0.0000000739);

      setValue_Dair_3(0.0971846);
      setDefault_Dair_3(0.0971846);

      setValue_Dwater_3(0.0000112);
      setDefault_Dwater_3(0.0000112);

      setValue_DHvb_3(11369.0696);
      setDefault_DHvb_3(11369.0696);

      setValue_Tc_3(647.15);
      setDefault_Tc_3(647.15);

      setValue_Tb_3(426.15);
      setDefault_Tb_3(426.15);

      setValue_MW_3(73.095);
      setDefault_MW_3(73.095);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.03);
      setDefault_Rfc_3(0.03);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(1.24);
      setDefault_Koc_3(1.24);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Dimethylhydrazine, 1,1-") {
      setValue_S_3(1000000);
      setDefault_S_3(1000000);

      setValue_Hc_3(0.0000129);
      setDefault_Hc_3(0.0000129);

      setValue_Dair_3(0.1037857);
      setDefault_Dair_3(0.1037857);

      setValue_Dwater_3(0.0000113);
      setDefault_Dwater_3(0.0000113);

      setValue_DHvb_3(7791.873058);
      setDefault_DHvb_3(7791.873058);

      setValue_Tc_3(523.15);
      setDefault_Tc_3(523.15);

      setValue_Tb_3(337.05);
      setDefault_Tb_3(337.05);

      setValue_MW_3(60.099);
      setDefault_MW_3(60.099);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.000002);
      setDefault_Rfc_3(0.000002);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(1.672);
      setDefault_Koc_3(1.672);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Dioxane, 1,4-") {
      setValue_S_3(1000000);
      setDefault_S_3(1000000);

      setValue_Hc_3(0.0000048);
      setDefault_Hc_3(0.0000048);

      setValue_Dair_3(0.0873739);
      setDefault_Dair_3(0.0873739);

      setValue_Dwater_3(0.0000105);
      setDefault_Dwater_3(0.0000105);

      setValue_DHvb_3(8687.3502);
      setDefault_DHvb_3(8687.3502);

      setValue_Tc_3(585.15);
      setDefault_Tc_3(585.15);

      setValue_Tb_3(374.65);
      setDefault_Tb_3(374.65);

      setValue_MW_3(88.107);
      setDefault_MW_3(88.107);

      setValue_IUR_3(0.000005);
      setDefault_IUR_3(0.000005);

      setValue_Rfc_3(0.03);
      setDefault_Rfc_3(0.03);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(3.931);
      setDefault_Koc_3(3.931);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Epichlorohydrin") {
      setValue_S_3(65900);
      setDefault_S_3(65900);

      setValue_Hc_3(0.0000304);
      setDefault_Hc_3(0.0000304);

      setValue_Dair_3(0.0888682);
      setDefault_Dair_3(0.0888682);

      setValue_Dwater_3(0.0000111);
      setDefault_Dwater_3(0.0000111);

      setValue_DHvb_3(10.1);
      setDefault_DHvb_3(10.1);

      setValue_Tc_3(600.0);
      setDefault_Tc_3(600.0);

      setValue_Tb_3(390.0);
      setDefault_Tb_3(390.0);

      setValue_MW_3(92.526);
      setDefault_MW_3(92.526);

      setValue_IUR_3(0.0000012);
      setDefault_IUR_3(0.0000012);

      setValue_Rfc_3(0.001);
      setDefault_Rfc_3(0.001);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(12.12);
      setDefault_Koc_3(12.12);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Epoxybutane, 1,2-") {
      setValue_S_3(95000);
      setDefault_S_3(95000);

      setValue_Hc_3(0.00018);
      setDefault_Hc_3(0.00018);

      setValue_Dair_3(0.0928958);
      setDefault_Dair_3(0.0928958);

      setValue_Dwater_3(0.0000104);
      setDefault_Dwater_3(0.0000104);

      setValue_DHvb_3(7211);
      setDefault_DHvb_3(7211);

      setValue_Tc_3(516.0);
      setDefault_Tc_3(516.0);

      setValue_Tb_3(336.3);
      setDefault_Tb_3(336.3);

      setValue_MW_3(72.108);
      setDefault_MW_3(72.108);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.02);
      setDefault_Rfc_3(0.02);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(20.43);
      setDefault_Koc_3(20.43);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Ethoxyethanol Acetate, 2-") {
      setValue_S_3(187000);
      setDefault_S_3(187000);

      setValue_Hc_3(0.0000032);
      setDefault_Hc_3(0.0000032);

      setValue_Dair_3(0.0569504);
      setDefault_Dair_3(0.0569504);

      setValue_Dwater_3(0.0000079753);
      setDefault_Dwater_3(0.0000079753);

      setValue_DHvb_3(9779.84);
      setDefault_DHvb_3(9779.84);

      setValue_Tc_3(607.0);
      setDefault_Tc_3(607.0);

      setValue_Tb_3(429.55);
      setDefault_Tb_3(429.55);

      setValue_MW_3(132.16);
      setDefault_MW_3(132.16);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.06);
      setDefault_Rfc_3(0.06);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(12.45);
      setDefault_Koc_3(12.45);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Ethoxyethanol, 2-") {
      setValue_S_3(1000000);
      setDefault_S_3(1000000);

      setValue_Hc_3(0.00000047);
      setDefault_Hc_3(0.00000047);

      setValue_Dair_3(0.0817537);
      setDefault_Dair_3(0.0817537);

      setValue_Dwater_3(0.0000097306);
      setDefault_Dwater_3(0.0000097306);

      setValue_DHvb_3(9680.42838);
      setDefault_DHvb_3(9680.42838);

      setValue_Tc_3(612.225);
      setDefault_Tc_3(612.225);

      setValue_Tb_3(408.15);
      setDefault_Tb_3(408.15);

      setValue_MW_3(90.123);
      setDefault_MW_3(90.123);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.2);
      setDefault_Rfc_3(0.2);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(1.762);
      setDefault_Koc_3(1.762);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Ethyl Acetate") {
      setValue_S_3(80000);
      setDefault_S_3(80000);

      setValue_Hc_3(0.000134);
      setDefault_Hc_3(0.000134);

      setValue_Dair_3(0.0823158);
      setDefault_Dair_3(0.0823158);

      setValue_Dwater_3(0.0000097028);
      setDefault_Dwater_3(0.0000097028);

      setValue_DHvb_3(7633.66);
      setDefault_DHvb_3(7633.66);

      setValue_Tc_3(523.3);
      setDefault_Tc_3(523.3);

      setValue_Tb_3(350.1);
      setDefault_Tb_3(350.1);

      setValue_MW_3(88.107);
      setDefault_MW_3(88.107);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.07);
      setDefault_Rfc_3(0.07);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(18.34);
      setDefault_Koc_3(18.34);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Ethyl Acrylate") {
      setValue_S_3(15000);
      setDefault_S_3(15000);

      setValue_Hc_3(0.000339);
      setDefault_Hc_3(0.000339);

      setValue_Dair_3(0.0745392);
      setDefault_Dair_3(0.0745392);

      setValue_Dwater_3(0.0000091242);
      setDefault_Dwater_3(0.0000091242);

      setValue_DHvb_3(9362.76);
      setDefault_DHvb_3(9362.76);

      setValue_Tc_3(558.6);
      setDefault_Tc_3(558.6);

      setValue_Tb_3(372.4);
      setDefault_Tb_3(372.4);

      setValue_MW_3(100.12);
      setDefault_MW_3(100.12);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.008);
      setDefault_Rfc_3(0.008);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(38.87);
      setDefault_Koc_3(38.87);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Ethyl Chloride (Chloroethane)") {
      setValue_S_3(6710);
      setDefault_S_3(6710);

      setValue_Hc_3(0.0111);
      setDefault_Hc_3(0.0111);

      setValue_Dair_3(0.1037597);
      setDefault_Dair_3(0.1037597);

      setValue_Dwater_3(0.0000116);
      setDefault_Dwater_3(0.0000116);

      setValue_DHvb_3(5879.4);
      setDefault_DHvb_3(5879.4);

      setValue_Tc_3(460.4);
      setDefault_Tc_3(460.4);

      setValue_Tb_3(285.3);
      setDefault_Tb_3(285.3);

      setValue_MW_3(64.515);
      setDefault_MW_3(64.515);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(10.0);
      setDefault_Rfc_3(10.0);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(17.41);
      setDefault_Koc_3(17.41);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Ethyl Methacrylate") {
      setValue_S_3(5400);
      setDefault_S_3(5400);

      setValue_Hc_3(0.000573);
      setDefault_Hc_3(0.000573);

      setValue_Dair_3(0.0653441);
      setDefault_Dair_3(0.0653441);

      setValue_Dwater_3(0.0000083794);
      setDefault_Dwater_3(0.0000083794);

      setValue_DHvb_3(10957.44);
      setDefault_DHvb_3(10957.44);

      setValue_Tc_3(571.0);
      setDefault_Tc_3(571.0);

      setValue_Tb_3(390.0);
      setDefault_Tb_3(390.0);

      setValue_MW_3(114.15);
      setDefault_MW_3(114.15);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.3);
      setDefault_Rfc_3(0.3);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(85.62);
      setDefault_Koc_3(85.62);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Ethylbenzene") {
      setValue_S_3(169.0);
      setDefault_S_3(169.0);

      setValue_Hc_3(0.00788);
      setDefault_Hc_3(0.00788);

      setValue_Dair_3(0.0684652);
      setDefault_Dair_3(0.0684652);

      setValue_Dwater_3(0.0000084558);
      setDefault_Dwater_3(0.0000084558);

      setValue_DHvb_3(8501);
      setDefault_DHvb_3(8501);

      setValue_Tc_3(617.2);
      setDefault_Tc_3(617.2);

      setValue_Tb_3(409.1);
      setDefault_Tb_3(409.1);

      setValue_MW_3(106.17);
      setDefault_MW_3(106.17);

      setValue_IUR_3(0.0000025);
      setDefault_IUR_3(0.0000025);

      setValue_Rfc_3(1.0);
      setDefault_Rfc_3(1.0);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(541.4);
      setDefault_Koc_3(541.4);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Ethylene Diamine") {
      setValue_S_3(1000000);
      setDefault_S_3(1000000);

      setValue_Hc_3(0.00000000173);
      setDefault_Hc_3(0.00000000173);

      setValue_Dair_3(0.109446);
      setDefault_Dair_3(0.109446);

      setValue_Dwater_3(0.0000122);
      setDefault_Dwater_3(0.0000122);

      setValue_DHvb_3(9562.61);
      setDefault_DHvb_3(9562.61);

      setValue_Tc_3(585.225);
      setDefault_Tc_3(585.225);

      setValue_Tb_3(390.15);
      setDefault_Tb_3(390.15);

      setValue_MW_3(60.099);
      setDefault_MW_3(60.099);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(null);
      setDefault_Rfc_3(null);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(0.5664);
      setDefault_Koc_3(0.5664);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Ethylene Oxide") {
      setValue_S_3(1000000);
      setDefault_S_3(1000000);

      setValue_Hc_3(0.000148);
      setDefault_Hc_3(0.000148);

      setValue_Dair_3(0.1339638);
      setDefault_Dair_3(0.1339638);

      setValue_Dwater_3(0.0000145);
      setDefault_Dwater_3(0.0000145);

      setValue_DHvb_3(6104.06);
      setDefault_DHvb_3(6104.06);

      setValue_Tc_3(469.0);
      setDefault_Tc_3(469.0);

      setValue_Tb_3(283.6);
      setDefault_Tb_3(283.6);

      setValue_MW_3(44.054);
      setDefault_MW_3(44.054);

      setValue_IUR_3(0.003);
      setDefault_IUR_3(0.003);

      setValue_Rfc_3(0.03);
      setDefault_Rfc_3(0.03);

      setValue_Mut_3("Yes");
      setDefault_Mut_3("Yes");

      setValue_Koc_3(4.622);
      setDefault_Koc_3(4.622);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Fluorene") {
      setValue_S_3(1.69);
      setDefault_S_3(1.69);

      setValue_Hc_3(0.0000962);
      setDefault_Hc_3(0.0000962);

      setValue_Dair_3(0.0439743);
      setDefault_Dair_3(0.0439743);

      setValue_Dwater_3(0.000007889);
      setDefault_Dwater_3(0.000007889);

      setValue_DHvb_3(12666);
      setDefault_DHvb_3(12666);

      setValue_Tc_3(870.0);
      setDefault_Tc_3(870.0);

      setValue_Tb_3(568.0);
      setDefault_Tb_3(568.0);

      setValue_MW_3(166.22);
      setDefault_MW_3(166.22);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(null);
      setDefault_Rfc_3(null);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(4241);
      setDefault_Koc_3(4241);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Formaldehyde") {
      setValue_S_3(400000);
      setDefault_S_3(400000);

      setValue_Hc_3(0.000000337);
      setDefault_Hc_3(0.000000337);

      setValue_Dair_3(0.1670871);
      setDefault_Dair_3(0.1670871);

      setValue_Dwater_3(0.0000174);
      setDefault_Dwater_3(0.0000174);

      setValue_DHvb_3(5919.9);
      setDefault_DHvb_3(5919.9);

      setValue_Tc_3(412.35);
      setDefault_Tc_3(412.35);

      setValue_Tb_3(254.05);
      setDefault_Tb_3(254.05);

      setValue_MW_3(30.026);
      setDefault_MW_3(30.026);

      setValue_IUR_3(0.000013);
      setDefault_IUR_3(0.000013);

      setValue_Rfc_3(0.0098);
      setDefault_Rfc_3(0.0098);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(7.752);
      setDefault_Koc_3(7.752);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Formic Acid") {
      setValue_S_3(1000000);
      setDefault_S_3(1000000);

      setValue_Hc_3(0.000000167);
      setDefault_Hc_3(0.000000167);

      setValue_Dair_3(0.1478701);
      setDefault_Dair_3(0.1478701);

      setValue_Dwater_3(0.0000172);
      setDefault_Dwater_3(0.0000172);

      setValue_DHvb_3(4800.8046);
      setDefault_DHvb_3(4800.8046);

      setValue_Tc_3(588.0);
      setDefault_Tc_3(588.0);

      setValue_Tb_3(374.15);
      setDefault_Tb_3(374.15);

      setValue_MW_3(46.026);
      setDefault_MW_3(46.026);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.0003);
      setDefault_Rfc_3(0.0003);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(0.7195);
      setDefault_Koc_3(0.7195);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Furan") {
      setValue_S_3(10000);
      setDefault_S_3(10000);

      setValue_Hc_3(0.0054);
      setDefault_Hc_3(0.0054);

      setValue_Dair_3(0.1022757);
      setDefault_Dair_3(0.1022757);

      setValue_Dwater_3(0.0000117);
      setDefault_Dwater_3(0.0000117);

      setValue_DHvb_3(6476.9);
      setDefault_DHvb_3(6476.9);

      setValue_Tc_3(490.2);
      setDefault_Tc_3(490.2);

      setValue_Tb_3(304.5);
      setDefault_Tb_3(304.5);

      setValue_MW_3(68.076);
      setDefault_MW_3(68.076);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(null);
      setDefault_Rfc_3(null);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(14.54);
      setDefault_Koc_3(14.54);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Furfural") {
      setValue_S_3(74100);
      setDefault_S_3(74100);

      setValue_Hc_3(0.00000377);
      setDefault_Hc_3(0.00000377);

      setValue_Dair_3(0.0853213);
      setDefault_Dair_3(0.0853213);

      setValue_Dwater_3(0.0000107);
      setDefault_Dwater_3(0.0000107);

      setValue_DHvb_3(9219.4556);
      setDefault_DHvb_3(9219.4556);

      setValue_Tc_3(670.0);
      setDefault_Tc_3(670.0);

      setValue_Tb_3(434.85);
      setDefault_Tb_3(434.85);

      setValue_MW_3(96.086);
      setDefault_MW_3(96.086);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.05);
      setDefault_Rfc_3(0.05);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(8.368);
      setDefault_Koc_3(8.368);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Heptachlor") {
      setValue_S_3(0.18);
      setDefault_S_3(0.18);

      setValue_Hc_3(0.000294);
      setDefault_Hc_3(0.000294);

      setValue_Dair_3(0.0223441);
      setDefault_Dair_3(0.0223441);

      setValue_Dwater_3(0.0000056959);
      setDefault_Dwater_3(0.0000056959);

      setValue_DHvb_3(13000);
      setDefault_DHvb_3(13000);

      setValue_Tc_3(874.725);
      setDefault_Tc_3(874.725);

      setValue_Tb_3(583.15);
      setDefault_Tb_3(583.15);

      setValue_MW_3(373.32);
      setDefault_MW_3(373.32);

      setValue_IUR_3(0.0013);
      setDefault_IUR_3(0.0013);

      setValue_Rfc_3(null);
      setDefault_Rfc_3(null);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(55850);
      setDefault_Koc_3(55850);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Heptachlor Epoxide") {
      setValue_S_3(0.2);
      setDefault_S_3(0.2);

      setValue_Hc_3(0.000021);
      setDefault_Hc_3(0.000021);

      setValue_Dair_3(0.0240006);
      setDefault_Dair_3(0.0240006);

      setValue_Dwater_3(0.0000062475);
      setDefault_Dwater_3(0.0000062475);

      setValue_DHvb_3(16000);
      setDefault_DHvb_3(16000);

      setValue_Tc_3(920.94);
      setDefault_Tc_3(920.94);

      setValue_Tb_3(613.96);
      setDefault_Tb_3(613.96);

      setValue_MW_3(389.32);
      setDefault_MW_3(389.32);

      setValue_IUR_3(0.0026);
      setDefault_IUR_3(0.0026);

      setValue_Rfc_3(null);
      setDefault_Rfc_3(null);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(3882);
      setDefault_Koc_3(3882);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Hexachlorobenzene") {
      setValue_S_3(0.0062);
      setDefault_S_3(0.0062);

      setValue_Hc_3(0.0017);
      setDefault_Hc_3(0.0017);

      setValue_Dair_3(0.0289745);
      setDefault_Dair_3(0.0289745);

      setValue_Dwater_3(0.0000078497);
      setDefault_Dwater_3(0.0000078497);

      setValue_DHvb_3(11703.454);
      setDefault_DHvb_3(11703.454);

      setValue_Tc_3(897.225);
      setDefault_Tc_3(897.225);

      setValue_Tb_3(598.15);
      setDefault_Tb_3(598.15);

      setValue_MW_3(284.78);
      setDefault_MW_3(284.78);

      setValue_IUR_3(0.00046);
      setDefault_IUR_3(0.00046);

      setValue_Rfc_3(null);
      setDefault_Rfc_3(null);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(17340);
      setDefault_Koc_3(17340);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Hexachlorobutadiene") {
      setValue_S_3(3.2);
      setDefault_S_3(3.2);

      setValue_Hc_3(0.0103);
      setDefault_Hc_3(0.0103);

      setValue_Dair_3(0.0267445);
      setDefault_Dair_3(0.0267445);

      setValue_Dwater_3(0.0000070264);
      setDefault_Dwater_3(0.0000070264);

      setValue_DHvb_3(10206);
      setDefault_DHvb_3(10206);

      setValue_Tc_3(732.225);
      setDefault_Tc_3(732.225);

      setValue_Tb_3(488.15);
      setDefault_Tb_3(488.15);

      setValue_MW_3(260.76);
      setDefault_MW_3(260.76);

      setValue_IUR_3(0.000022);
      setDefault_IUR_3(0.000022);

      setValue_Rfc_3(null);
      setDefault_Rfc_3(null);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(14070);
      setDefault_Koc_3(14070);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Hexachlorocyclopentadiene") {
      setValue_S_3(1.8);
      setDefault_S_3(1.8);

      setValue_Hc_3(0.027);
      setDefault_Hc_3(0.027);

      setValue_Dair_3(0.0272382);
      setDefault_Dair_3(0.0272382);

      setValue_Dwater_3(0.000007217);
      setDefault_Dwater_3(0.000007217);

      setValue_DHvb_3(42992.28);
      setDefault_DHvb_3(42992.28);

      setValue_Tc_3(768.225);
      setDefault_Tc_3(768.225);

      setValue_Tb_3(512.15);
      setDefault_Tb_3(512.15);

      setValue_MW_3(272.77);
      setDefault_MW_3(272.77);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.0002);
      setDefault_Rfc_3(0.0002);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(23650);
      setDefault_Koc_3(23650);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Hexachloroethane") {
      setValue_S_3(50.0);
      setDefault_S_3(50.0);

      setValue_Hc_3(0.00389);
      setDefault_Hc_3(0.00389);

      setValue_Dair_3(0.0320938);
      setDefault_Dair_3(0.0320938);

      setValue_Dwater_3(0.0000088904);
      setDefault_Dwater_3(0.0000088904);

      setValue_DHvb_3(11711.3);
      setDefault_DHvb_3(11711.3);

      setValue_Tc_3(641.4);
      setDefault_Tc_3(641.4);

      setValue_Tb_3(427.6);
      setDefault_Tb_3(427.6);

      setValue_MW_3(236.74);
      setDefault_MW_3(236.74);

      setValue_IUR_3(0.000011);
      setDefault_IUR_3(0.000011);

      setValue_Rfc_3(0.03);
      setDefault_Rfc_3(0.03);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(3915);
      setDefault_Koc_3(3915);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Hexane, N-") {
      setValue_S_3(9.5);
      setDefault_S_3(9.5);

      setValue_Hc_3(1.8);
      setDefault_Hc_3(1.8);

      setValue_Dair_3(0.0731078);
      setDefault_Dair_3(0.0731078);

      setValue_Dwater_3(0.0000081658);
      setDefault_Dwater_3(0.0000081658);

      setValue_DHvb_3(6895.15);
      setDefault_DHvb_3(6895.15);

      setValue_Tc_3(508.0);
      setDefault_Tc_3(508.0);

      setValue_Tb_3(341.7);
      setDefault_Tb_3(341.7);

      setValue_MW_3(86.178);
      setDefault_MW_3(86.178);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.7);
      setDefault_Rfc_3(0.7);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(2423);
      setDefault_Koc_3(2423);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Hexanone, 2-") {
      setValue_S_3(17200);
      setDefault_S_3(17200);

      setValue_Hc_3(0.0000932);
      setDefault_Hc_3(0.0000932);

      setValue_Dair_3(0.0703564);
      setDefault_Dair_3(0.0703564);

      setValue_Dwater_3(0.0000084404);
      setDefault_Dwater_3(0.0000084404);

      setValue_DHvb_3(8610.39);
      setDefault_DHvb_3(8610.39);

      setValue_Tc_3(600.9);
      setDefault_Tc_3(600.9);

      setValue_Tb_3(400.6);
      setDefault_Tb_3(400.6);

      setValue_MW_3(100.16);
      setDefault_MW_3(100.16);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.03);
      setDefault_Rfc_3(0.03);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(76.56);
      setDefault_Koc_3(76.56);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Hydrazine") {
      setValue_S_3(1000000);
      setDefault_S_3(1000000);

      setValue_Hc_3(0.00000061);
      setDefault_Hc_3(0.00000061);

      setValue_Dair_3(0.1733034);
      setDefault_Dair_3(0.1733034);

      setValue_Dwater_3(0.000019);
      setDefault_Dwater_3(0.000019);

      setValue_DHvb_3(10812.55842);
      setDefault_DHvb_3(10812.55842);

      setValue_Tc_3(653.15);
      setDefault_Tc_3(653.15);

      setValue_Tb_3(386.65);
      setDefault_Tb_3(386.65);

      setValue_MW_3(32.045);
      setDefault_MW_3(32.045);

      setValue_IUR_3(0.0049);
      setDefault_IUR_3(0.0049);

      setValue_Rfc_3(0.00003);
      setDefault_Rfc_3(0.00003);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(0.01596);
      setDefault_Koc_3(0.01596);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Hydrogen Chloride") {
      setValue_S_3(673000);
      setDefault_S_3(673000);

      setValue_Hc_3(2040000);
      setDefault_Hc_3(2040000);

      setValue_Dair_3(0.1879912);
      setDefault_Dair_3(0.1879912);

      setValue_Dwater_3(0.0000227);
      setDefault_Dwater_3(0.0000227);

      setValue_DHvb_3(3855.476017);
      setDefault_DHvb_3(3855.476017);

      setValue_Tc_3(324.55);
      setDefault_Tc_3(324.55);

      setValue_Tb_3(188.1);
      setDefault_Tb_3(188.1);

      setValue_MW_3(35.45);
      setDefault_MW_3(35.45);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.02);
      setDefault_Rfc_3(0.02);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(2.939);
      setDefault_Koc_3(2.939);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Hydrogen Cyanide") {
      setValue_S_3(1000000);
      setDefault_S_3(1000000);

      setValue_Hc_3(0.000133);
      setDefault_Hc_3(0.000133);

      setValue_Dair_3(0.1678036);
      setDefault_Dair_3(0.1678036);

      setValue_Dwater_3(0.0000168);
      setDefault_Dwater_3(0.0000168);

      setValue_DHvb_3(6676.41);
      setDefault_DHvb_3(6676.41);

      setValue_Tc_3(456.7);
      setDefault_Tc_3(456.7);

      setValue_Tb_3(298.6);
      setDefault_Tb_3(298.6);

      setValue_MW_3(27.026);
      setDefault_MW_3(27.026);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.0008);
      setDefault_Rfc_3(0.0008);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(15.1);
      setDefault_Koc_3(15.1);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Hydrogen Fluoride") {
      setValue_S_3(1000000);
      setDefault_S_3(1000000);

      setValue_Hc_3(0.000104);
      setDefault_Hc_3(0.000104);

      setValue_Dair_3(0.2190996);
      setDefault_Dair_3(0.2190996);

      setValue_Dwater_3(0.0000223);
      setDefault_Dwater_3(0.0000223);

      setValue_DHvb_3(1789.673078);
      setDefault_DHvb_3(1789.673078);

      setValue_Tc_3(461.15);
      setDefault_Tc_3(461.15);

      setValue_Tb_3(292.66);
      setDefault_Tb_3(292.66);

      setValue_MW_3(20.006);
      setDefault_MW_3(20.006);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.014);
      setDefault_Rfc_3(0.014);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(1.582);
      setDefault_Koc_3(1.582);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Hydrogen Sulfide") {
      setValue_S_3(3740);
      setDefault_S_3(3740);

      setValue_Hc_3(0.00856);
      setDefault_Hc_3(0.00856);

      setValue_Dair_3(0.1880669);
      setDefault_Dair_3(0.1880669);

      setValue_Dwater_3(0.0000223);
      setDefault_Dwater_3(0.0000223);

      setValue_DHvb_3(4459.25482);
      setDefault_DHvb_3(4459.25482);

      setValue_Tc_3(373.1);
      setDefault_Tc_3(373.1);

      setValue_Tb_3(212.82);
      setDefault_Tb_3(212.82);

      setValue_MW_3(34.08);
      setDefault_MW_3(34.08);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.002);
      setDefault_Rfc_3(0.002);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(0.06337);
      setDefault_Koc_3(0.06337);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Isobutyl Alcohol") {
      setValue_S_3(85000);
      setDefault_S_3(85000);

      setValue_Hc_3(0.00000978);
      setDefault_Hc_3(0.00000978);

      setValue_Dair_3(0.0896677);
      setDefault_Dair_3(0.0896677);

      setValue_Dwater_3(0.00001);
      setDefault_Dwater_3(0.00001);

      setValue_DHvb_3(103496.65);
      setDefault_DHvb_3(103496.65);

      setValue_Tc_3(547.78);
      setDefault_Tc_3(547.78);

      setValue_Tb_3(380.95);
      setDefault_Tb_3(380.95);

      setValue_MW_3(74.124);
      setDefault_MW_3(74.124);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(null);
      setDefault_Rfc_3(null);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(8.591);
      setDefault_Koc_3(8.591);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Isopropanol") {
      setValue_S_3(1000000);
      setDefault_S_3(1000000);

      setValue_Hc_3(0.0000081);
      setDefault_Hc_3(0.0000081);

      setValue_Dair_3(0.1032261);
      setDefault_Dair_3(0.1032261);

      setValue_Dwater_3(0.0000112);
      setDefault_Dwater_3(0.0000112);

      setValue_DHvb_3(10841.21994);
      setDefault_DHvb_3(10841.21994);

      setValue_Tc_3(508.3);
      setDefault_Tc_3(508.3);

      setValue_Tb_3(355.45);
      setDefault_Tb_3(355.45);

      setValue_MW_3(60.097);
      setDefault_MW_3(60.097);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.2);
      setDefault_Rfc_3(0.2);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(3.478);
      setDefault_Koc_3(3.478);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Mercury (elemental)") {
      setValue_S_3(0.06);
      setDefault_S_3(0.06);

      setValue_Hc_3(0.008622);
      setDefault_Hc_3(0.008622);

      setValue_Dair_3(0.0307);
      setDefault_Dair_3(0.0307);

      setValue_Dwater_3(0.0000063);
      setDefault_Dwater_3(0.0000063);

      setValue_DHvb_3(14127);
      setDefault_DHvb_3(14127);

      setValue_Tc_3(1750);
      setDefault_Tc_3(1750);

      setValue_Tb_3(356.6);
      setDefault_Tb_3(356.6);

      setValue_MW_3(200.59);
      setDefault_MW_3(200.59);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.0003);
      setDefault_Rfc_3(0.0003);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(3.449);
      setDefault_Koc_3(3.449);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Methacrylonitrile") {
      setValue_S_3(25400);
      setDefault_S_3(25400);

      setValue_Hc_3(0.000247);
      setDefault_Hc_3(0.000247);

      setValue_Dair_3(0.0964299);
      setDefault_Dair_3(0.0964299);

      setValue_Dwater_3(0.0000106);
      setDefault_Dwater_3(0.0000106);

      setValue_DHvb_3(7600.2);
      setDefault_DHvb_3(7600.2);

      setValue_Tc_3(554.0);
      setDefault_Tc_3(554.0);

      setValue_Tb_3(363.3);
      setDefault_Tb_3(363.3);

      setValue_MW_3(67.091);
      setDefault_MW_3(67.091);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.03);
      setDefault_Rfc_3(0.03);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(49.36);
      setDefault_Koc_3(49.36);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Methanol") {
      setValue_S_3(1000000);
      setDefault_S_3(1000000);

      setValue_Hc_3(0.00000455);
      setDefault_Hc_3(0.00000455);

      setValue_Dair_3(0.1582741);
      setDefault_Dair_3(0.1582741);

      setValue_Dwater_3(0.0000165);
      setDefault_Dwater_3(0.0000165);

      setValue_DHvb_3(8918.50964);
      setDefault_DHvb_3(8918.50964);

      setValue_Tc_3(513.15);
      setDefault_Tc_3(513.15);

      setValue_Tb_3(337.85);
      setDefault_Tb_3(337.85);

      setValue_MW_3(32.042);
      setDefault_MW_3(32.042);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(20.0);
      setDefault_Rfc_3(20.0);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(1.224);
      setDefault_Koc_3(1.224);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Methoxyethanol Acetate, 2-") {
      setValue_S_3(1000000);
      setDefault_S_3(1000000);

      setValue_Hc_3(0.000000311);
      setDefault_Hc_3(0.000000311);

      setValue_Dair_3(0.0658347);
      setDefault_Dair_3(0.0658347);

      setValue_Dwater_3(0.0000087052);
      setDefault_Dwater_3(0.0000087052);

      setValue_DHvb_3(10485.3394);
      setDefault_DHvb_3(10485.3394);

      setValue_Tc_3(624.225);
      setDefault_Tc_3(624.225);

      setValue_Tb_3(416.15);
      setDefault_Tb_3(416.15);

      setValue_MW_3(118.13);
      setDefault_MW_3(118.13);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.001);
      setDefault_Rfc_3(0.001);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(6.671);
      setDefault_Koc_3(6.671);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Methoxyethanol, 2-") {
      setValue_S_3(1000000);
      setDefault_S_3(1000000);

      setValue_Hc_3(0.00000033);
      setDefault_Hc_3(0.00000033);

      setValue_Dair_3(0.0951557);
      setDefault_Dair_3(0.0951557);

      setValue_Dwater_3(0.000011);
      setDefault_Dwater_3(0.000011);

      setValue_DHvb_3(8966.27884);
      setDefault_DHvb_3(8966.27884);

      setValue_Tc_3(597.6);
      setDefault_Tc_3(597.6);

      setValue_Tb_3(397.25);
      setDefault_Tb_3(397.25);

      setValue_MW_3(76.096);
      setDefault_MW_3(76.096);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.02);
      setDefault_Rfc_3(0.02);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(0.9935);
      setDefault_Koc_3(0.9935);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Methyl Acetate") {
      setValue_S_3(243000);
      setDefault_S_3(243000);

      setValue_Hc_3(0.000115);
      setDefault_Hc_3(0.000115);

      setValue_Dair_3(0.0957763);
      setDefault_Dair_3(0.0957763);

      setValue_Dwater_3(0.000011);
      setDefault_Dwater_3(0.000011);

      setValue_DHvb_3(7260.0791);
      setDefault_DHvb_3(7260.0791);

      setValue_Tc_3(506.7);
      setDefault_Tc_3(506.7);

      setValue_Tb_3(365);
      setDefault_Tb_3(365);

      setValue_MW_3(74.08);
      setDefault_MW_3(74.08);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(null);
      setDefault_Rfc_3(null);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(9.101);
      setDefault_Koc_3(9.101);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Methyl Acrylate") {
      setValue_S_3(49400);
      setDefault_S_3(49400);

      setValue_Hc_3(0.000199);
      setDefault_Hc_3(0.000199);

      setValue_Dair_3(0.0859972);
      setDefault_Dair_3(0.0859972);

      setValue_Dwater_3(0.0000102);
      setDefault_Dwater_3(0.0000102);

      setValue_DHvb_3(7749);
      setDefault_DHvb_3(7749);

      setValue_Tc_3(536.0);
      setDefault_Tc_3(536.0);

      setValue_Tb_3(353.2);
      setDefault_Tb_3(353.2);

      setValue_MW_3(86.091);
      setDefault_MW_3(86.091);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.02);
      setDefault_Rfc_3(0.02);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(20.05);
      setDefault_Koc_3(20.05);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Methyl Ethyl Ketone (2-Butanone)") {
      setValue_S_3(223000);
      setDefault_S_3(223000);

      setValue_Hc_3(0.0000569);
      setDefault_Hc_3(0.0000569);

      setValue_Dair_3(0.0914462);
      setDefault_Dair_3(0.0914462);

      setValue_Dwater_3(0.0000102);
      setDefault_Dwater_3(0.0000102);

      setValue_DHvb_3(7480.7);
      setDefault_DHvb_3(7480.7);

      setValue_Tc_3(536.78);
      setDefault_Tc_3(536.78);

      setValue_Tb_3(352.5);
      setDefault_Tb_3(352.5);

      setValue_MW_3(72.108);
      setDefault_MW_3(72.108);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(5.0);
      setDefault_Rfc_3(5.0);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(19.1);
      setDefault_Koc_3(19.1);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Methyl Hydrazine") {
      setValue_S_3(1000000);
      setDefault_S_3(1000000);

      setValue_Hc_3(0.000003031);
      setDefault_Hc_3(0.000003031);

      setValue_Dair_3(0.1290894);
      setDefault_Dair_3(0.1290894);

      setValue_Dwater_3(0.000014);
      setDefault_Dwater_3(0.000014);

      setValue_DHvb_3(8887.937352);
      setDefault_DHvb_3(8887.937352);

      setValue_Tc_3(585.15);
      setDefault_Tc_3(585.15);

      setValue_Tb_3(360.65);
      setDefault_Tb_3(360.65);

      setValue_MW_3(46.072);
      setDefault_MW_3(46.072);

      setValue_IUR_3(0.001);
      setDefault_IUR_3(0.001);

      setValue_Rfc_3(0.00002);
      setDefault_Rfc_3(0.00002);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(2.101);
      setDefault_Koc_3(2.101);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (
      selectedChem === "Methyl Isobutyl Ketone (4-methyl-2-pentanone)"
    ) {
      setValue_S_3(19000);
      setDefault_S_3(19000);

      setValue_Hc_3(0.000138);
      setDefault_Hc_3(0.000138);

      setValue_Dair_3(0.0697797);
      setDefault_Dair_3(0.0697797);

      setValue_Dwater_3(0.0000083477);
      setDefault_Dwater_3(0.0000083477);

      setValue_DHvb_3(8243.11);
      setDefault_DHvb_3(8243.11);

      setValue_Tc_3(571.0);
      setDefault_Tc_3(571.0);

      setValue_Tb_3(389.5);
      setDefault_Tb_3(389.5);

      setValue_MW_3(100.16);
      setDefault_MW_3(100.16);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(3.0);
      setDefault_Rfc_3(3.0);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(70.03);
      setDefault_Koc_3(70.03);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Methyl Methacrylate") {
      setValue_S_3(15000);
      setDefault_S_3(15000);

      setValue_Hc_3(0.000319);
      setDefault_Hc_3(0.000319);

      setValue_Dair_3(0.0750447);
      setDefault_Dair_3(0.0750447);

      setValue_Dwater_3(0.0000092087);
      setDefault_Dwater_3(0.0000092087);

      setValue_DHvb_3(8974.9);
      setDefault_DHvb_3(8974.9);

      setValue_Tc_3(567.0);
      setDefault_Tc_3(567.0);

      setValue_Tb_3(373.5);
      setDefault_Tb_3(373.5);

      setValue_MW_3(100.12);
      setDefault_MW_3(100.12);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.7);
      setDefault_Rfc_3(0.7);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(41.96);
      setDefault_Koc_3(41.96);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Methyl Styrene (Mixed Isomers)") {
      setValue_S_3(89.0);
      setDefault_S_3(89.0);

      setValue_Hc_3(0.00262);
      setDefault_Hc_3(0.00262);

      setValue_Dair_3(0.017397);
      setDefault_Dair_3(0.017397);

      setValue_Dwater_3(0.0000041793);
      setDefault_Dwater_3(0.0000041793);

      setValue_DHvb_3(12027.44);
      setDefault_DHvb_3(12027.44);

      setValue_Tc_3(655.0);
      setDefault_Tc_3(655.0);

      setValue_Tb_3(437.65);
      setDefault_Tb_3(437.65);

      setValue_MW_3(354.54);
      setDefault_MW_3(354.54);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.04);
      setDefault_Rfc_3(0.04);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(966.4);
      setDefault_Koc_3(966.4);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Methyl tert-Butyl Ether (MTBE)") {
      setValue_S_3(51000);
      setDefault_S_3(51000);

      setValue_Hc_3(0.000587);
      setDefault_Hc_3(0.000587);

      setValue_Dair_3(0.0752672);
      setDefault_Dair_3(0.0752672);

      setValue_Dwater_3(0.0000085904);
      setDefault_Dwater_3(0.0000085904);

      setValue_DHvb_3(6677.66);
      setDefault_DHvb_3(6677.66);

      setValue_Tc_3(497.1);
      setDefault_Tc_3(497.1);

      setValue_Tb_3(328.2);
      setDefault_Tb_3(328.2);

      setValue_MW_3(88.151);
      setDefault_MW_3(88.151);

      setValue_IUR_3(0.00000026);
      setDefault_IUR_3(0.00000026);

      setValue_Rfc_3(3.0);
      setDefault_Rfc_3(3.0);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(22.62);
      setDefault_Koc_3(22.62);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Methylene Chloride") {
      setValue_S_3(13000);
      setDefault_S_3(13000);

      setValue_Hc_3(0.00325);
      setDefault_Hc_3(0.00325);

      setValue_Dair_3(0.0999362);
      setDefault_Dair_3(0.0999362);

      setValue_Dwater_3(0.0000125);
      setDefault_Dwater_3(0.0000125);

      setValue_DHvb_3(6706);
      setDefault_DHvb_3(6706);

      setValue_Tc_3(510.0);
      setDefault_Tc_3(510.0);

      setValue_Tb_3(313.0);
      setDefault_Tb_3(313.0);

      setValue_MW_3(84.933);
      setDefault_MW_3(84.933);

      setValue_IUR_3(0.00000001);
      setDefault_IUR_3(0.00000001);

      setValue_Rfc_3(0.6);
      setDefault_Rfc_3(0.6);

      setValue_Mut_3("Yes");
      setDefault_Mut_3("Yes");

      setValue_Koc_3(12.15);
      setDefault_Koc_3(12.15);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Methylnaphthalene, 1-") {
      setValue_S_3(25.8);
      setDefault_S_3(25.8);

      setValue_Hc_3(0.000514);
      setDefault_Hc_3(0.000514);

      setValue_Dair_3(0.0527705);
      setDefault_Dair_3(0.0527705);

      setValue_Dwater_3(0.0000078477);
      setDefault_Dwater_3(0.0000078477);

      setValue_DHvb_3(13690.65);
      setDefault_DHvb_3(13690.65);

      setValue_Tc_3(771.8);
      setDefault_Tc_3(771.8);

      setValue_Tb_3(517.7);
      setDefault_Tb_3(517.7);

      setValue_MW_3(142.2);
      setDefault_MW_3(142.2);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(null);
      setDefault_Rfc_3(null);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(2282);
      setDefault_Koc_3(2282);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Methylnaphthalene, 2-") {
      setValue_S_3(24.6);
      setDefault_S_3(24.6);

      setValue_Hc_3(0.000518);
      setDefault_Hc_3(0.000518);

      setValue_Dair_3(0.0524319);
      setDefault_Dair_3(0.0524319);

      setValue_Dwater_3(0.0000077811);
      setDefault_Dwater_3(0.0000077811);

      setValue_DHvb_3(12600);
      setDefault_DHvb_3(12600);

      setValue_Tc_3(761.0);
      setDefault_Tc_3(761.0);

      setValue_Tb_3(514.1);
      setDefault_Tb_3(514.1);

      setValue_MW_3(142.2);
      setDefault_MW_3(142.2);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(null);
      setDefault_Rfc_3(null);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(2237);
      setDefault_Koc_3(2237);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Methylstyrene, Alpha-") {
      setValue_S_3(116.0);
      setDefault_S_3(116.0);

      setValue_Hc_3(0.00255);
      setDefault_Hc_3(0.00255);

      setValue_Dair_3(0.062902);
      setDefault_Dair_3(0.062902);

      setValue_Dwater_3(0.0000081911);
      setDefault_Dwater_3(0.0000081911);

      setValue_DHvb_3(11419.16);
      setDefault_DHvb_3(11419.16);

      setValue_Tc_3(657.0);
      setDefault_Tc_3(657.0);

      setValue_Tb_3(438.4);
      setDefault_Tb_3(438.4);

      setValue_MW_3(118.18);
      setDefault_MW_3(118.18);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(null);
      setDefault_Rfc_3(null);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(1047);
      setDefault_Koc_3(1047);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Naphthalene") {
      setValue_S_3(31.0);
      setDefault_S_3(31.0);

      setValue_Hc_3(0.00044);
      setDefault_Hc_3(0.00044);

      setValue_Dair_3(0.0604994);
      setDefault_Dair_3(0.0604994);

      setValue_Dwater_3(0.000008377);
      setDefault_Dwater_3(0.000008377);

      setValue_DHvb_3(10373);
      setDefault_DHvb_3(10373);

      setValue_Tc_3(748.4);
      setDefault_Tc_3(748.4);

      setValue_Tb_3(490.9);
      setDefault_Tb_3(490.9);

      setValue_MW_3(128.18);
      setDefault_MW_3(128.18);

      setValue_IUR_3(0.000034);
      setDefault_IUR_3(0.000034);

      setValue_Rfc_3(0.003);
      setDefault_Rfc_3(0.003);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(731);
      setDefault_Koc_3(731);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Nickel Carbonyl") {
      setValue_S_3(180.0);
      setDefault_S_3(180.0);

      setValue_Hc_3(0.5);
      setDefault_Hc_3(0.5);

      setValue_Dair_3(0.0433019);
      setDefault_Dair_3(0.0433019);

      setValue_Dwater_3(0.0000081704);
      setDefault_Dwater_3(0.0000081704);

      setValue_DHvb_3(6829.36);
      setDefault_DHvb_3(6829.36);

      setValue_Tc_3(473.15);
      setDefault_Tc_3(473.15);

      setValue_Tb_3(316.15);
      setDefault_Tb_3(316.15);

      setValue_MW_3(170.734);
      setDefault_MW_3(170.734);

      setValue_IUR_3(0.00026);
      setDefault_IUR_3(0.00026);

      setValue_Rfc_3(0.000014);
      setDefault_Rfc_3(0.000014);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(null);
      setDefault_Koc_3(null);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Nitrobenzene") {
      setValue_S_3(2090);
      setDefault_S_3(2090);

      setValue_Hc_3(0.000024);
      setDefault_Hc_3(0.000024);

      setValue_Dair_3(0.068054);
      setDefault_Dair_3(0.068054);

      setValue_Dwater_3(0.0000094495);
      setDefault_Dwater_3(0.0000094495);

      setValue_DHvb_3(10566);
      setDefault_DHvb_3(10566);

      setValue_Tc_3(719.0);
      setDefault_Tc_3(719.0);

      setValue_Tb_3(483.8);
      setDefault_Tb_3(483.8);

      setValue_MW_3(123.11);
      setDefault_MW_3(123.11);

      setValue_IUR_3(0.00004);
      setDefault_IUR_3(0.00004);

      setValue_Rfc_3(0.009);
      setDefault_Rfc_3(0.009);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(147.1);
      setDefault_Koc_3(147.1);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Nitromethane") {
      setValue_S_3(111000);
      setDefault_S_3(111000);

      setValue_Hc_3(0.0000286);
      setDefault_Hc_3(0.0000286);

      setValue_Dair_3(0.1192837);
      setDefault_Dair_3(0.1192837);

      setValue_Dwater_3(0.0000139);
      setDefault_Dwater_3(0.0000139);

      setValue_DHvb_3(9140.63);
      setDefault_DHvb_3(9140.63);

      setValue_Tc_3(588.0);
      setDefault_Tc_3(588.0);

      setValue_Tb_3(374.1);
      setDefault_Tb_3(374.1);

      setValue_MW_3(61.041);
      setDefault_MW_3(61.041);

      setValue_IUR_3(0.0000088);
      setDefault_IUR_3(0.0000088);

      setValue_Rfc_3(0.005);
      setDefault_Rfc_3(0.005);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(8.925);
      setDefault_Koc_3(8.925);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Nitropropane, 2-") {
      setValue_S_3(17000);
      setDefault_S_3(17000);

      setValue_Hc_3(0.000119);
      setDefault_Hc_3(0.000119);

      setValue_Dair_3(0.0846934);
      setDefault_Dair_3(0.0846934);

      setValue_Dwater_3(0.0000102);
      setDefault_Dwater_3(0.0000102);

      setValue_DHvb_3(8383);
      setDefault_DHvb_3(8383);

      setValue_Tc_3(594.0);
      setDefault_Tc_3(594.0);

      setValue_Tb_3(393.2);
      setDefault_Tb_3(393.2);

      setValue_MW_3(89.095);
      setDefault_MW_3(89.095);

      setValue_IUR_3(0.0027);
      setDefault_IUR_3(0.0027);

      setValue_Rfc_3(0.02);
      setDefault_Rfc_3(0.02);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(45.56);
      setDefault_Koc_3(45.56);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Nitrotoluene, o-") {
      setValue_S_3(650.0);
      setDefault_S_3(650.0);

      setValue_Hc_3(0.0000125);
      setDefault_Hc_3(0.0000125);

      setValue_Dair_3(0.0587535);
      setDefault_Dair_3(0.0587535);

      setValue_Dwater_3(0.0000086675);
      setDefault_Dwater_3(0.0000086675);

      setValue_DHvb_3(12239.1);
      setDefault_DHvb_3(12239.1);

      setValue_Tc_3(720.0);
      setDefault_Tc_3(720.0);

      setValue_Tb_3(495.0);
      setDefault_Tb_3(495.0);

      setValue_MW_3(137.14);
      setDefault_MW_3(137.14);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(null);
      setDefault_Rfc_3(null);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(260.8);
      setDefault_Koc_3(260.8);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Nonane, n-") {
      setValue_S_3(0.22);
      setDefault_S_3(0.22);

      setValue_Hc_3(3.4);
      setDefault_Hc_3(3.4);

      setValue_Dair_3(0.051432);
      setDefault_Dair_3(0.051432);

      setValue_Dwater_3(0.000006769);
      setDefault_Dwater_3(0.000006769);

      setValue_DHvb_3(11082.45);
      setDefault_DHvb_3(11082.45);

      setValue_Tc_3(594.0);
      setDefault_Tc_3(594.0);

      setValue_Tb_3(423.8);
      setDefault_Tb_3(423.8);

      setValue_MW_3(128.26);
      setDefault_MW_3(128.26);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.02);
      setDefault_Rfc_3(0.02);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(80030);
      setDefault_Koc_3(80030);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Pentane, n-") {
      setValue_S_3(38.0);
      setDefault_S_3(38.0);

      setValue_Hc_3(1.25);
      setDefault_Hc_3(1.25);

      setValue_Dair_3(0.0821293);
      setDefault_Dair_3(0.0821293);

      setValue_Dwater_3(0.0000087974);
      setDefault_Dwater_3(0.0000087974);

      setValue_DHvb_3(6155.06);
      setDefault_DHvb_3(6155.06);

      setValue_Tc_3(469.7);
      setDefault_Tc_3(469.7);

      setValue_Tb_3(309.0);
      setDefault_Tb_3(309.0);

      setValue_MW_3(72.151);
      setDefault_MW_3(72.151);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(1.0);
      setDefault_Rfc_3(1.0);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(874.5);
      setDefault_Koc_3(874.5);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Phosgene") {
      setValue_S_3(6825.5);
      setDefault_S_3(6825.5);

      setValue_Hc_3(0.0167);
      setDefault_Hc_3(0.0167);

      setValue_Dair_3(0.0893282);
      setDefault_Dair_3(0.0893282);

      setValue_Dwater_3(0.0000117);
      setDefault_Dwater_3(0.0000117);

      setValue_DHvb_3(7352.39);
      setDefault_DHvb_3(7352.39);

      setValue_Tc_3(455.0);
      setDefault_Tc_3(455.0);

      setValue_Tb_3(281.2);
      setDefault_Tb_3(281.2);

      setValue_MW_3(98.917);
      setDefault_MW_3(98.917);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.0003);
      setDefault_Rfc_3(0.0003);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(2.01);
      setDefault_Koc_3(2.01);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Propionaldehyde") {
      setValue_S_3(306000);
      setDefault_S_3(306000);

      setValue_Hc_3(0.0000734);
      setDefault_Hc_3(0.0000734);

      setValue_Dair_3(0.1103767);
      setDefault_Dair_3(0.1103767);

      setValue_Dwater_3(0.0000122);
      setDefault_Dwater_3(0.0000122);

      setValue_DHvb_3(7074.62);
      setDefault_DHvb_3(7074.62);

      setValue_Tc_3(496.0);
      setDefault_Tc_3(496.0);

      setValue_Tb_3(321.0);
      setDefault_Tb_3(321.0);

      setValue_MW_3(58.081);
      setDefault_MW_3(58.081);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.008);
      setDefault_Rfc_3(0.008);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(10.52);
      setDefault_Koc_3(10.52);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Propyl benzene") {
      setValue_S_3(52.2);
      setDefault_S_3(52.2);

      setValue_Hc_3(0.0105);
      setDefault_Hc_3(0.0105);

      setValue_Dair_3(0.0601558);
      setDefault_Dair_3(0.0601558);

      setValue_Dwater_3(0.000007831);
      setDefault_Dwater_3(0.000007831);

      setValue_DHvb_3(9123);
      setDefault_DHvb_3(9123);

      setValue_Tc_3(630.0);
      setDefault_Tc_3(630.0);

      setValue_Tb_3(432.2);
      setDefault_Tb_3(432.2);

      setValue_MW_3(120.2);
      setDefault_MW_3(120.2);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(1.0);
      setDefault_Rfc_3(1.0);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(1593);
      setDefault_Koc_3(1593);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Propylene") {
      setValue_S_3(200.0);
      setDefault_S_3(200.0);

      setValue_Hc_3(0.196);
      setDefault_Hc_3(0.196);

      setValue_Dair_3(0.1096967);
      setDefault_Dair_3(0.1096967);

      setValue_Dwater_3(0.0000107);
      setDefault_Dwater_3(0.0000107);

      setValue_DHvb_3(4402.41);
      setDefault_DHvb_3(4402.41);

      setValue_Tc_3(364.95);
      setDefault_Tc_3(364.95);

      setValue_Tb_3(225.6);
      setDefault_Tb_3(225.6);

      setValue_MW_3(42.081);
      setDefault_MW_3(42.081);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(3.0);
      setDefault_Rfc_3(3.0);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(34.34);
      setDefault_Koc_3(34.34);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Propylene Glycol Monomethyl Ether") {
      setValue_S_3(1000000);
      setDefault_S_3(1000000);

      setValue_Hc_3(0.00000092);
      setDefault_Hc_3(0.00000092);

      setValue_Dair_3(0.083145);
      setDefault_Dair_3(0.083145);

      setValue_Dwater_3(0.0000099604);
      setDefault_Dwater_3(0.0000099604);

      setValue_DHvb_3(7795.93344);
      setDefault_DHvb_3(7795.93344);

      setValue_Tc_3(588.225);
      setDefault_Tc_3(588.225);

      setValue_Tb_3(392.15);
      setDefault_Tb_3(392.15);

      setValue_MW_3(90.123);
      setDefault_MW_3(90.123);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(2.0);
      setDefault_Rfc_3(2.0);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(1.419);
      setDefault_Koc_3(1.419);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Propylene Oxide") {
      setValue_S_3(590000);
      setDefault_S_3(590000);

      setValue_Hc_3(0.0000696);
      setDefault_Hc_3(0.0000696);

      setValue_Dair_3(0.1085105);
      setDefault_Dair_3(0.1085105);

      setValue_Dwater_3(0.0000119);
      setDefault_Dwater_3(0.0000119);

      setValue_DHvb_3(6621.12);
      setDefault_DHvb_3(6621.12);

      setValue_Tc_3(482.1);
      setDefault_Tc_3(482.1);

      setValue_Tb_3(308.0);
      setDefault_Tb_3(308.0);

      setValue_MW_3(58.081);
      setDefault_MW_3(58.081);

      setValue_IUR_3(0.0000037);
      setDefault_IUR_3(0.0000037);

      setValue_Rfc_3(0.03);
      setDefault_Rfc_3(0.03);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(7.097);
      setDefault_Koc_3(7.097);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Pyrene") {
      setValue_S_3(0.135);
      setDefault_S_3(0.135);

      setValue_Hc_3(0.0000119);
      setDefault_Hc_3(0.0000119);

      setValue_Dair_3(0.0277873);
      setDefault_Dair_3(0.0277873);

      setValue_Dwater_3(0.0000072479);
      setDefault_Dwater_3(0.0000072479);

      setValue_DHvb_3(14370);
      setDefault_DHvb_3(14370);

      setValue_Tc_3(936.0);
      setDefault_Tc_3(936.0);

      setValue_Tb_3(677.0);
      setDefault_Tb_3(677.0);

      setValue_MW_3(202.26);
      setDefault_MW_3(202.26);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(null);
      setDefault_Rfc_3(null);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(17180);
      setDefault_Koc_3(17180);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Pyridine") {
      setValue_S_3(1000000);
      setDefault_S_3(1000000);

      setValue_Hc_3(0.000011);
      setDefault_Hc_3(0.000011);

      setValue_Dair_3(0.0930883);
      setDefault_Dair_3(0.0930883);

      setValue_Dwater_3(0.0000109);
      setDefault_Dwater_3(0.0000109);

      setValue_DHvb_3(35.1);
      setDefault_DHvb_3(35.1);

      setValue_Tc_3(617.2);
      setDefault_Tc_3(617.2);

      setValue_Tb_3(388.2);
      setDefault_Tb_3(388.2);

      setValue_MW_3(79.102);
      setDefault_MW_3(79.102);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(null);
      setDefault_Rfc_3(null);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(28.91);
      setDefault_Koc_3(28.91);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Styrene") {
      setValue_S_3(310.0);
      setDefault_S_3(310.0);

      setValue_Hc_3(0.00275);
      setDefault_Hc_3(0.00275);

      setValue_Dair_3(0.071114);
      setDefault_Dair_3(0.071114);

      setValue_Dwater_3(0.0000087838);
      setDefault_Dwater_3(0.0000087838);

      setValue_DHvb_3(8737);
      setDefault_DHvb_3(8737);

      setValue_Tc_3(636.0);
      setDefault_Tc_3(636.0);

      setValue_Tb_3(418.0);
      setDefault_Tb_3(418.0);

      setValue_MW_3(104.15);
      setDefault_MW_3(104.15);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(1.0);
      setDefault_Rfc_3(1.0);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(363);
      setDefault_Koc_3(363);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Tetrachloroethane, 1,1,1,2-") {
      setValue_S_3(1070);
      setDefault_S_3(1070);

      setValue_Hc_3(0.0025);
      setDefault_Hc_3(0.0025);

      setValue_Dair_3(0.0481761);
      setDefault_Dair_3(0.0481761);

      setValue_Dwater_3(0.0000090977);
      setDefault_Dwater_3(0.0000090977);

      setValue_DHvb_3(9768.282525);
      setDefault_DHvb_3(9768.282525);

      setValue_Tc_3(624.0);
      setDefault_Tc_3(624.0);

      setValue_Tb_3(403.5);
      setDefault_Tb_3(403.5);

      setValue_MW_3(167.85);
      setDefault_MW_3(167.85);

      setValue_IUR_3(0.0000074);
      setDefault_IUR_3(0.0000074);

      setValue_Rfc_3(null);
      setDefault_Rfc_3(null);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(348.8);
      setDefault_Koc_3(348.8);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Tetrachloroethane, 1,1,2,2-") {
      setValue_S_3(2830);
      setDefault_S_3(2830);

      setValue_Hc_3(0.000367);
      setDefault_Hc_3(0.000367);

      setValue_Dair_3(0.0489206);
      setDefault_Dair_3(0.0489206);

      setValue_Dwater_3(0.0000092902);
      setDefault_Dwater_3(0.0000092902);

      setValue_DHvb_3(8996);
      setDefault_DHvb_3(8996);

      setValue_Tc_3(661.15);
      setDefault_Tc_3(661.15);

      setValue_Tb_3(419.5);
      setDefault_Tb_3(419.5);

      setValue_MW_3(167.85);
      setDefault_MW_3(167.85);

      setValue_IUR_3(0.000058);
      setDefault_IUR_3(0.000058);

      setValue_Rfc_3(null);
      setDefault_Rfc_3(null);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(118.5);
      setDefault_Koc_3(118.5);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Tetrachloroethylene") {
      setValue_S_3(206.0);
      setDefault_S_3(206.0);

      setValue_Hc_3(0.0177);
      setDefault_Hc_3(0.0177);

      setValue_Dair_3(0.0504664);
      setDefault_Dair_3(0.0504664);

      setValue_Dwater_3(0.0000094551);
      setDefault_Dwater_3(0.0000094551);

      setValue_DHvb_3(8288);
      setDefault_DHvb_3(8288);

      setValue_Tc_3(620.2);
      setDefault_Tc_3(620.2);

      setValue_Tb_3(394.3);
      setDefault_Tb_3(394.3);

      setValue_MW_3(165.83);
      setDefault_MW_3(165.83);

      setValue_IUR_3(0.00000026);
      setDefault_IUR_3(0.00000026);

      setValue_Rfc_3(0.04);
      setDefault_Rfc_3(0.04);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(892.2);
      setDefault_Koc_3(892.2);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Tetrafluoroethane, 1,1,1,2-") {
      setValue_S_3(2040);
      setDefault_S_3(2040);

      setValue_Hc_3(0.05);
      setDefault_Hc_3(0.05);

      setValue_Dair_3(0.0823066);
      setDefault_Dair_3(0.0823066);

      setValue_Dwater_3(0.0000106);
      setDefault_Dwater_3(0.0000106);

      setValue_DHvb_3(5933.96);
      setDefault_DHvb_3(5933.96);

      setValue_Tc_3(624.0);
      setDefault_Tc_3(624.0);

      setValue_Tb_3(403.5);
      setDefault_Tb_3(403.5);

      setValue_MW_3(102.03);
      setDefault_MW_3(102.03);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(80.0);
      setDefault_Rfc_3(80.0);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(28.69);
      setDefault_Koc_3(28.69);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Tetrahydrofuran") {
      setValue_S_3(1000000);
      setDefault_S_3(1000000);

      setValue_Hc_3(0.0000705);
      setDefault_Hc_3(0.0000705);

      setValue_Dair_3(0.0993751);
      setDefault_Dair_3(0.0993751);

      setValue_Dwater_3(0.0000108);
      setDefault_Dwater_3(0.0000108);

      setValue_DHvb_3(7073.991);
      setDefault_DHvb_3(7073.991);

      setValue_Tc_3(541.15);
      setDefault_Tc_3(541.15);

      setValue_Tb_3(339.0);
      setDefault_Tb_3(339.0);

      setValue_MW_3(72.108);
      setDefault_MW_3(72.108);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(2.0);
      setDefault_Rfc_3(2.0);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(12.27);
      setDefault_Koc_3(12.27);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Titanium Tetrachloride") {
      setValue_S_3(null);
      setDefault_S_3(null);

      setValue_Hc_3(null);
      setDefault_Hc_3(null);

      setValue_Dair_3(0.0379716);
      setDefault_Dair_3(0.0379716);

      setValue_Dwater_3(0.0000090633);
      setDefault_Dwater_3(0.0000090633);

      setValue_DHvb_3(8646.2252);
      setDefault_DHvb_3(8646.2252);

      setValue_Tc_3(643.15);
      setDefault_Tc_3(643.15);

      setValue_Tb_3(421.15);
      setDefault_Tb_3(421.15);

      setValue_MW_3(189.679);
      setDefault_MW_3(189.679);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.0001);
      setDefault_Rfc_3(0.0001);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(18.85);
      setDefault_Koc_3(18.85);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Toluene") {
      setValue_S_3(526.0);
      setDefault_S_3(526.0);

      setValue_Hc_3(0.00664);
      setDefault_Hc_3(0.00664);

      setValue_Dair_3(0.0778039);
      setDefault_Dair_3(0.0778039);

      setValue_Dwater_3(0.0000092043);
      setDefault_Dwater_3(0.0000092043);

      setValue_DHvb_3(7930);
      setDefault_DHvb_3(7930);

      setValue_Tc_3(591.79);
      setDefault_Tc_3(591.79);

      setValue_Tb_3(383.6);
      setDefault_Tb_3(383.6);

      setValue_MW_3(92.142);
      setDefault_MW_3(92.142);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(5.0);
      setDefault_Rfc_3(5.0);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(233.9);
      setDefault_Koc_3(233.9);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Trichloro,2,2-trifluoroethane, 1,1,2-") {
      setValue_S_3(170.0);
      setDefault_S_3(170.0);

      setValue_Hc_3(0.526);
      setDefault_Hc_3(0.526);

      setValue_Dair_3(0.0375658);
      setDefault_Dair_3(0.0375658);

      setValue_Dwater_3(0.000008592);
      setDefault_Dwater_3(0.000008592);

      setValue_DHvb_3(6462.56);
      setDefault_DHvb_3(6462.56);

      setValue_Tc_3(487.3);
      setDefault_Tc_3(487.3);

      setValue_Tb_3(320.7);
      setDefault_Tb_3(320.7);

      setValue_MW_3(187.38);
      setDefault_MW_3(187.38);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(5.0);
      setDefault_Rfc_3(5.0);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(552.3);
      setDefault_Koc_3(552.3);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Trichlorobenzene, 1,2,3-") {
      setValue_S_3(18.0);
      setDefault_S_3(18.0);

      setValue_Hc_3(0.00125);
      setDefault_Hc_3(0.00125);

      setValue_Dair_3(0.03953);
      setDefault_Dair_3(0.03953);

      setValue_Dwater_3(0.0000083836);
      setDefault_Dwater_3(0.0000083836);

      setValue_DHvb_3(12611.53);
      setDefault_DHvb_3(12611.53);

      setValue_Tc_3(762.5);
      setDefault_Tc_3(762.5);

      setValue_Tb_3(491.5);
      setDefault_Tb_3(491.5);

      setValue_MW_3(181.45);
      setDefault_MW_3(181.45);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(null);
      setDefault_Rfc_3(null);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(2040);
      setDefault_Koc_3(2040);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Trichlorobenzene, 1,2,4-") {
      setValue_S_3(49.0);
      setDefault_S_3(49.0);

      setValue_Hc_3(0.00142);
      setDefault_Hc_3(0.00142);

      setValue_Dair_3(0.0395992);
      setDefault_Dair_3(0.0395992);

      setValue_Dwater_3(0.0000084033);
      setDefault_Dwater_3(0.0000084033);

      setValue_DHvb_3(10471);
      setDefault_DHvb_3(10471);

      setValue_Tc_3(725.0);
      setDefault_Tc_3(725.0);

      setValue_Tb_3(486.5);
      setDefault_Tb_3(486.5);

      setValue_MW_3(181.45);
      setDefault_MW_3(181.45);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.002);
      setDefault_Rfc_3(0.002);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(1964);
      setDefault_Koc_3(1964);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Trichloroethane, 1,1,1-") {
      setValue_S_3(1290);
      setDefault_S_3(1290);

      setValue_Hc_3(0.0172);
      setDefault_Hc_3(0.0172);

      setValue_Dair_3(0.0648174);
      setDefault_Dair_3(0.0648174);

      setValue_Dwater_3(0.000009599);
      setDefault_Dwater_3(0.000009599);

      setValue_DHvb_3(7136);
      setDefault_DHvb_3(7136);

      setValue_Tc_3(545.0);
      setDefault_Tc_3(545.0);

      setValue_Tb_3(347.0);
      setDefault_Tb_3(347.0);

      setValue_MW_3(133.41);
      setDefault_MW_3(133.41);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(5.0);
      setDefault_Rfc_3(5.0);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(144.8);
      setDefault_Koc_3(144.8);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Trichloroethane, 1,1,2-") {
      setValue_S_3(4590);
      setDefault_S_3(4590);

      setValue_Hc_3(0.000824);
      setDefault_Hc_3(0.000824);

      setValue_Dair_3(0.0668904);
      setDefault_Dair_3(0.0668904);

      setValue_Dwater_3(0.00001);
      setDefault_Dwater_3(0.00001);

      setValue_DHvb_3(8322);
      setDefault_DHvb_3(8322);

      setValue_Tc_3(602.0);
      setDefault_Tc_3(602.0);

      setValue_Tb_3(386.8);
      setDefault_Tb_3(386.8);

      setValue_MW_3(133.41);
      setDefault_MW_3(133.41);

      setValue_IUR_3(0.000016);
      setDefault_IUR_3(0.000016);

      setValue_Rfc_3(0.0002);
      setDefault_Rfc_3(0.0002);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(43.64);
      setDefault_Koc_3(43.64);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Trichloroethylene") {
      setValue_S_3(1280);
      setDefault_S_3(1280);

      setValue_Hc_3(0.00985);
      setDefault_Hc_3(0.00985);

      setValue_Dair_3(0.0686618);
      setDefault_Dair_3(0.0686618);

      setValue_Dwater_3(0.0000102);
      setDefault_Dwater_3(0.0000102);

      setValue_DHvb_3(7505);
      setDefault_DHvb_3(7505);

      setValue_Tc_3(544.2);
      setDefault_Tc_3(544.2);

      setValue_Tb_3(360.2);
      setDefault_Tb_3(360.2);

      setValue_MW_3(131.39);
      setDefault_MW_3(131.39);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.002);
      setDefault_Rfc_3(0.002);

      setValue_Mut_3("Yes");
      setDefault_Mut_3("Yes");

      setValue_Koc_3(125.9);
      setDefault_Koc_3(125.9);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Trichlorofluoromethane") {
      setValue_S_3(1100);
      setDefault_S_3(1100);

      setValue_Hc_3(0.097);
      setDefault_Hc_3(0.097);

      setValue_Dair_3(0.065356);
      setDefault_Dair_3(0.065356);

      setValue_Dwater_3(0.00001);
      setDefault_Dwater_3(0.00001);

      setValue_DHvb_3(5998.9);
      setDefault_DHvb_3(5998.9);

      setValue_Tc_3(471.0);
      setDefault_Tc_3(471.0);

      setValue_Tb_3(296.7);
      setDefault_Tb_3(296.7);

      setValue_MW_3(137.37);
      setDefault_MW_3(137.37);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(null);
      setDefault_Rfc_3(null);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(156.8);
      setDefault_Koc_3(156.8);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Trichloropropane, 1,2,3-") {
      setValue_S_3(1750);
      setDefault_S_3(1750);

      setValue_Hc_3(0.000343);
      setDefault_Hc_3(0.000343);

      setValue_Dair_3(0.0574661);
      setDefault_Dair_3(0.0574661);

      setValue_Dwater_3(0.0000092411);
      setDefault_Dwater_3(0.0000092411);

      setValue_DHvb_3(9171);
      setDefault_DHvb_3(9171);

      setValue_Tc_3(652.0);
      setDefault_Tc_3(652.0);

      setValue_Tb_3(430.0);
      setDefault_Tb_3(430.0);

      setValue_MW_3(147.43);
      setDefault_MW_3(147.43);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.0003);
      setDefault_Rfc_3(0.0003);

      setValue_Mut_3("Yes");
      setDefault_Mut_3("Yes");

      setValue_Koc_3(93.27);
      setDefault_Koc_3(93.27);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Triethylamine") {
      setValue_S_3(68600);
      setDefault_S_3(68600);

      setValue_Hc_3(0.000149);
      setDefault_Hc_3(0.000149);

      setValue_Dair_3(0.0663631);
      setDefault_Dair_3(0.0663631);

      setValue_Dwater_3(0.0000078576);
      setDefault_Dwater_3(0.0000078576);

      setValue_DHvb_3(8095.2);
      setDefault_DHvb_3(8095.2);

      setValue_Tc_3(535.6);
      setDefault_Tc_3(535.6);

      setValue_Tb_3(362.0);
      setDefault_Tb_3(362.0);

      setValue_MW_3(101.19);
      setDefault_MW_3(101.19);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3();
      setDefault_Rfc_3();

      setValue_Mut_3(0.007);
      setDefault_Mut_3(0.007);

      setValue_Koc_3(45.9);
      setDefault_Koc_3(45.9);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Trifluoroethane, 1,1,1-") {
      setValue_S_3(760.9);
      setDefault_S_3(760.9);

      setValue_Hc_3(0.77);
      setDefault_Hc_3(0.77);

      setValue_Dair_3(0.0990283);
      setDefault_Dair_3(0.0990283);

      setValue_Dwater_3(0.0000116);
      setDefault_Dwater_3(0.0000116);

      setValue_DHvb_3(4.58891);
      setDefault_DHvb_3(4.58891);

      setValue_Tc_3(345.88);
      setDefault_Tc_3(345.88);

      setValue_Tb_3(228.15);
      setDefault_Tb_3(228.15);

      setValue_MW_3(84.041);
      setDefault_MW_3(84.041);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(20.0);
      setDefault_Rfc_3(20.0);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(32.34);
      setDefault_Koc_3(32.34);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Trimethylbenzene, 1,2,3-") {
      setValue_S_3(75.2);
      setDefault_S_3(75.2);

      setValue_Hc_3(0.00436);
      setDefault_Hc_3(0.00436);

      setValue_Dair_3(0.0612535);
      setDefault_Dair_3(0.0612535);

      setValue_Dwater_3(0.0000080214);
      setDefault_Dwater_3(0.0000080214);

      setValue_DHvb_3(11715.39);
      setDefault_DHvb_3(11715.39);

      setValue_Tc_3(664.5);
      setDefault_Tc_3(664.5);

      setValue_Tb_3(449.1);
      setDefault_Tb_3(449.1);

      setValue_MW_3(120.2);
      setDefault_MW_3(120.2);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.06);
      setDefault_Rfc_3(0.06);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(1500);
      setDefault_Koc_3(1500);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Trimethylbenzene, 1,2,4-") {
      setValue_S_3(57.0);
      setDefault_S_3(57.0);

      setValue_Hc_3(0.00616);
      setDefault_Hc_3(0.00616);

      setValue_Dair_3(0.0606754);
      setDefault_Dair_3(0.0606754);

      setValue_Dwater_3(0.0000079209);
      setDefault_Dwater_3(0.0000079209);

      setValue_DHvb_3(9368.8);
      setDefault_DHvb_3(9368.8);

      setValue_Tc_3(649.17);
      setDefault_Tc_3(649.17);

      setValue_Tb_3(442.3);
      setDefault_Tb_3(442.3);

      setValue_MW_3(120.2);
      setDefault_MW_3(120.2);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.06);
      setDefault_Rfc_3(0.06);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(1413);
      setDefault_Koc_3(1413);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Trimethylbenzene, 1,3,5-") {
      setValue_S_3(48.2);
      setDefault_S_3(48.2);

      setValue_Hc_3(0.00877);
      setDefault_Hc_3(0.00877);

      setValue_Dair_3(0.0602254);
      setDefault_Dair_3(0.0602254);

      setValue_Dwater_3(0.000007843);
      setDefault_Dwater_3(0.000007843);

      setValue_DHvb_3(9321);
      setDefault_DHvb_3(9321);

      setValue_Tc_3(637.25);
      setDefault_Tc_3(637.25);

      setValue_Tb_3(437.7);
      setDefault_Tb_3(437.7);

      setValue_MW_3(120.2);
      setDefault_MW_3(120.2);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.06);
      setDefault_Rfc_3(0.06);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(928.6);
      setDefault_Koc_3(928.6);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Vinyl Acetate") {
      setValue_S_3(20000);
      setDefault_S_3(20000);

      setValue_Hc_3(0.000511);
      setDefault_Hc_3(0.000511);

      setValue_Dair_3(0.0849016);
      setDefault_Dair_3(0.0849016);

      setValue_Dwater_3(0.00001);
      setDefault_Dwater_3(0.00001);

      setValue_DHvb_3(7800);
      setDefault_DHvb_3(7800);

      setValue_Tc_3(519.13);
      setDefault_Tc_3(519.13);

      setValue_Tb_3(345.5);
      setDefault_Tb_3(345.5);

      setValue_MW_3(86.091);
      setDefault_MW_3(86.091);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.2);
      setDefault_Rfc_3(0.2);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(18.34);
      setDefault_Koc_3(18.34);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Vinyl Bromide") {
      setValue_S_3(7600);
      setDefault_S_3(7600);

      setValue_Hc_3(0.0123);
      setDefault_Hc_3(0.0123);

      setValue_Dair_3(0.0862238);
      setDefault_Dair_3(0.0862238);

      setValue_Dwater_3(0.0000117);
      setDefault_Dwater_3(0.0000117);

      setValue_DHvb_3(5397.92);
      setDefault_DHvb_3(5397.92);

      setValue_Tc_3(463.51);
      setDefault_Tc_3(463.51);

      setValue_Tb_3(288.8);
      setDefault_Tb_3(288.8);

      setValue_MW_3(106.95);
      setDefault_MW_3(106.95);

      setValue_IUR_3(0.000032);
      setDefault_IUR_3(0.000032);

      setValue_Rfc_3(0.003);
      setDefault_Rfc_3(0.003);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(23.03);
      setDefault_Koc_3(23.03);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Vinyl Chloride") {
      setValue_S_3(8800);
      setDefault_S_3(8800);

      setValue_Hc_3(0.0278);
      setDefault_Hc_3(0.0278);

      setValue_Dair_3(0.1071202);
      setDefault_Dair_3(0.1071202);

      setValue_Dwater_3(0.000012);
      setDefault_Dwater_3(0.000012);

      setValue_DHvb_3(5250);
      setDefault_DHvb_3(5250);

      setValue_Tc_3(432.0);
      setDefault_Tc_3(432.0);

      setValue_Tb_3(259.7);
      setDefault_Tb_3(259.7);

      setValue_MW_3(62.499);
      setDefault_MW_3(62.499);

      setValue_IUR_3(0.0000044);
      setDefault_IUR_3(0.0000044);

      setValue_Rfc_3(0.1);
      setDefault_Rfc_3(0.1);

      setValue_Mut_3("VC");
      setDefault_Mut_3("VC");

      setValue_Koc_3(25.44);
      setDefault_Koc_3(25.44);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Xylene, m-") {
      setValue_S_3(161.0);
      setDefault_S_3(161.0);

      setValue_Hc_3(0.00718);
      setDefault_Hc_3(0.00718);

      setValue_Dair_3(0.0683659);
      setDefault_Dair_3(0.0683659);

      setValue_Dwater_3(0.0000084394);
      setDefault_Dwater_3(0.0000084394);

      setValue_DHvb_3(8523);
      setDefault_DHvb_3(8523);

      setValue_Tc_3(617.05);
      setDefault_Tc_3(617.05);

      setValue_Tb_3(412.1);
      setDefault_Tb_3(412.1);

      setValue_MW_3(106.17);
      setDefault_MW_3(106.17);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.1);
      setDefault_Rfc_3(0.1);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(598.2);
      setDefault_Koc_3(598.2);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Xylene, o-") {
      setValue_S_3(178.0);
      setDefault_S_3(178.0);

      setValue_Hc_3(0.00518);
      setDefault_Hc_3(0.00518);

      setValue_Dair_3(0.0689201);
      setDefault_Dair_3(0.0689201);

      setValue_Dwater_3(0.0000085315);
      setDefault_Dwater_3(0.0000085315);

      setValue_DHvb_3(8661);
      setDefault_DHvb_3(8661);

      setValue_Tc_3(630.3);
      setDefault_Tc_3(630.3);

      setValue_Tb_3(411.5);
      setDefault_Tb_3(411.5);

      setValue_MW_3(106.17);
      setDefault_MW_3(106.17);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.1);
      setDefault_Rfc_3(0.1);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(552.3);
      setDefault_Koc_3(552.3);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Xylene, P-") {
      setValue_S_3(162.0);
      setDefault_S_3(162.0);

      setValue_Hc_3(0.0069);
      setDefault_Hc_3(0.0069);

      setValue_Dair_3(0.0682485);
      setDefault_Dair_3(0.0682485);

      setValue_Dwater_3(0.0000084199);
      setDefault_Dwater_3(0.0000084199);

      setValue_DHvb_3(8525);
      setDefault_DHvb_3(8525);

      setValue_Tc_3(616.2);
      setDefault_Tc_3(616.2);

      setValue_Tb_3(411.3);
      setDefault_Tb_3(411.3);

      setValue_MW_3(106.17);
      setDefault_MW_3(106.17);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.1);
      setDefault_Rfc_3(0.1);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(541.4);
      setDefault_Koc_3(541.4);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "Xylenes") {
      setValue_S_3(106.0);
      setDefault_S_3(106.0);

      setValue_Hc_3(0.00663);
      setDefault_Hc_3(0.00663);

      setValue_Dair_3(0.0685148);
      setDefault_Dair_3(0.0685148);

      setValue_Dwater_3(0.0000084641);
      setDefault_Dwater_3(0.0000084641);

      setValue_DHvb_3(8523);
      setDefault_DHvb_3(8523);

      setValue_Tc_3(616.2);
      setDefault_Tc_3(616.2);

      setValue_Tb_3(411.3);
      setDefault_Tb_3(411.3);

      setValue_MW_3(106.17);
      setDefault_MW_3(106.17);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.1);
      setDefault_Rfc_3(0.1);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(552.3);
      setDefault_Koc_3(552.3);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "TPH - Aliph >C05-C06") {
      setValue_S_3(36);
      setDefault_S_3(36);

      setValue_Hc_3(32.47711492);
      setDefault_Hc_3(32.47711492);

      setValue_Dair_3(0.1);
      setDefault_Dair_3(0.1);

      setValue_Dwater_3(0.00001);
      setDefault_Dwater_3(0.00001);

      setValue_DHvb_3(8000);
      setDefault_DHvb_3(8000);

      setValue_Tc_3(500);
      setDefault_Tc_3(500);

      setValue_Tb_3(100);
      setDefault_Tb_3(100);

      setValue_MW_3(81);
      setDefault_MW_3(81);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(18);
      setDefault_Rfc_3(18);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(794.3);
      setDefault_Koc_3(794.3);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "TPH - Aliph >C06-C08") {
      setValue_S_3(36);
      setDefault_S_3(36);

      setValue_Hc_3(32.47711492);
      setDefault_Hc_3(32.47711492);

      setValue_Dair_3(0.1);
      setDefault_Dair_3(0.1);

      setValue_Dwater_3(0.00001);
      setDefault_Dwater_3(0.00001);

      setValue_DHvb_3(8000);
      setDefault_DHvb_3(8000);

      setValue_Tc_3(500);
      setDefault_Tc_3(500);

      setValue_Tb_3(100);
      setDefault_Tb_3(100);

      setValue_MW_3(81);
      setDefault_MW_3(81);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(18);
      setDefault_Rfc_3(18);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(794.3);
      setDefault_Koc_3(794.3);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "TPH - Aliph >C05-C06 (>53% n-hexane)") {
      setValue_S_3(5.4);
      setDefault_S_3(5.4);

      setValue_Hc_3(48.11424433);
      setDefault_Hc_3(48.11424433);

      setValue_Dair_3(0.1);
      setDefault_Dair_3(0.1);

      setValue_Dwater_3(0.00001);
      setDefault_Dwater_3(0.00001);

      setValue_DHvb_3(9000);
      setDefault_DHvb_3(9000);

      setValue_Tc_3(500);
      setDefault_Tc_3(500);

      setValue_Tb_3(100);
      setDefault_Tb_3(100);

      setValue_MW_3(100);
      setDefault_MW_3(100);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.67);
      setDefault_Rfc_3(0.67);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(862.9);
      setDefault_Koc_3(862.9);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "TPH - Aliph >C06-C08 (>53% n-hexane)") {
      setValue_S_3(5.4);
      setDefault_S_3(5.4);

      setValue_Hc_3(48.11424433);
      setDefault_Hc_3(48.11424433);

      setValue_Dair_3(0.1);
      setDefault_Dair_3(0.1);

      setValue_Dwater_3(0.00001);
      setDefault_Dwater_3(0.00001);

      setValue_DHvb_3(10000);
      setDefault_DHvb_3(10000);

      setValue_Tc_3(500);
      setDefault_Tc_3(500);

      setValue_Tb_3(100);
      setDefault_Tb_3(100);

      setValue_MW_3(100);
      setDefault_MW_3(100);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.67);
      setDefault_Rfc_3(0.67);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(862.9);
      setDefault_Koc_3(862.9);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "TPH - Aliph >C08-C10") {
      setValue_S_3(0.43);
      setDefault_S_3(0.43);

      setValue_Hc_3(78.54930121);
      setDefault_Hc_3(78.54930121);

      setValue_Dair_3(0.1);
      setDefault_Dair_3(0.1);

      setValue_Dwater_3(0.00001);
      setDefault_Dwater_3(0.00001);

      setValue_DHvb_3(12000);
      setDefault_DHvb_3(12000);

      setValue_Tc_3(500);
      setDefault_Tc_3(500);

      setValue_Tb_3(100);
      setDefault_Tb_3(100);

      setValue_MW_3(130);
      setDefault_MW_3(130);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.5);
      setDefault_Rfc_3(0.5);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(31622.7);
      setDefault_Koc_3(31622.7);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "TPH - Aliph >C10-C12") {
      setValue_S_3(0.034);
      setDefault_S_3(0.034);

      setValue_Hc_3(122.2667856);
      setDefault_Hc_3(122.2667856);

      setValue_Dair_3(0.1);
      setDefault_Dair_3(0.1);

      setValue_Dwater_3(0.00001);
      setDefault_Dwater_3(0.00001);

      setValue_DHvb_3(12000);
      setDefault_DHvb_3(12000);

      setValue_Tc_3(500);
      setDefault_Tc_3(500);

      setValue_Tb_3(100);
      setDefault_Tb_3(100);

      setValue_MW_3(160);
      setDefault_MW_3(160);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.5);
      setDefault_Rfc_3(0.5);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(251188.6);
      setDefault_Koc_3(251188.6);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "TPH - Aliph >C12-C16") {
      setValue_S_3(0.00076);
      setDefault_S_3(0.00076);

      setValue_Hc_3(520.9361792);
      setDefault_Hc_3(520.9361792);

      setValue_Dair_3(0.1);
      setDefault_Dair_3(0.1);

      setValue_Dwater_3(0.00001);
      setDefault_Dwater_3(0.00001);

      setValue_DHvb_3(16000);
      setDefault_DHvb_3(16000);

      setValue_Tc_3(500);
      setDefault_Tc_3(500);

      setValue_Tb_3(300);
      setDefault_Tb_3(300);

      setValue_MW_3(200);
      setDefault_MW_3(200);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.5);
      setDefault_Rfc_3(0.5);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(5011872.3);
      setDefault_Koc_3(5011872.3);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "TPH - Aliph >C16-C21") {
      setValue_S_3(0.0000025);
      setDefault_S_3(0.0000025);

      setValue_Hc_3(4899.404766);
      setDefault_Hc_3(4899.404766);

      setValue_Dair_3(0.1);
      setDefault_Dair_3(0.1);

      setValue_Dwater_3(0.00001);
      setDefault_Dwater_3(0.00001);

      setValue_DHvb_3(17000);
      setDefault_DHvb_3(17000);

      setValue_Tc_3(500);
      setDefault_Tc_3(500);

      setValue_Tb_3(300);
      setDefault_Tb_3(300);

      setValue_MW_3(270);
      setDefault_MW_3(270);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(null);
      setDefault_Rfc_3(null);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(630957344.4);
      setDefault_Koc_3(630957344.4);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "TPH - Aliph >C21-C34") {
      setValue_S_3(0.0000025);
      setDefault_S_3(0.0000025);

      setValue_Hc_3(7258.377431);
      setDefault_Hc_3(7258.377431);

      setValue_Dair_3(0.1);
      setDefault_Dair_3(0.1);

      setValue_Dwater_3(0.00001);
      setDefault_Dwater_3(0.00001);

      setValue_DHvb_3(20000);
      setDefault_DHvb_3(20000);

      setValue_Tc_3(500);
      setDefault_Tc_3(500);

      setValue_Tb_3(100);
      setDefault_Tb_3(100);

      setValue_MW_3(400);
      setDefault_MW_3(400);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(null);
      setDefault_Rfc_3(null);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(630957344.4);
      setDefault_Koc_3(630957344.4);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "TPH - Arom >C05-C07") {
      setValue_S_3(1800);
      setDefault_S_3(1800);

      setValue_Hc_3(0.232323065);
      setDefault_Hc_3(0.232323065);

      setValue_Dair_3(0.1);
      setDefault_Dair_3(0.1);

      setValue_Dwater_3(0.00001);
      setDefault_Dwater_3(0.00001);

      setValue_DHvb_3(8000);
      setDefault_DHvb_3(8000);

      setValue_Tc_3(500);
      setDefault_Tc_3(500);

      setValue_Tb_3(100);
      setDefault_Tb_3(100);

      setValue_MW_3(78);
      setDefault_MW_3(78);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.28);
      setDefault_Rfc_3(0.28);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(79.43);
      setDefault_Koc_3(79.43);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "TPH - Arom >C07-C08") {
      setValue_S_3(520);
      setDefault_S_3(520);

      setValue_Hc_3(0.277264942);
      setDefault_Hc_3(0.277264942);

      setValue_Dair_3(0.1);
      setDefault_Dair_3(0.1);

      setValue_Dwater_3(0.00001);
      setDefault_Dwater_3(0.00001);

      setValue_DHvb_3(10000);
      setDefault_DHvb_3(10000);

      setValue_Tc_3(500);
      setDefault_Tc_3(500);

      setValue_Tb_3(100);
      setDefault_Tb_3(100);

      setValue_MW_3(92);
      setDefault_MW_3(92);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(1.9);
      setDefault_Rfc_3(1.9);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(251.1);
      setDefault_Koc_3(251.1);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "TPH - Arom >C08-C10") {
      setValue_S_3(65);
      setDefault_S_3(65);

      setValue_Hc_3(0.479662005);
      setDefault_Hc_3(0.479662005);

      setValue_Dair_3(0.1);
      setDefault_Dair_3(0.1);

      setValue_Dwater_3(0.00001);
      setDefault_Dwater_3(0.00001);

      setValue_DHvb_3(10000);
      setDefault_DHvb_3(10000);

      setValue_Tc_3(500);
      setDefault_Tc_3(500);

      setValue_Tb_3(300);
      setDefault_Tb_3(300);

      setValue_MW_3(120);
      setDefault_MW_3(120);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.2);
      setDefault_Rfc_3(0.2);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(1584.8);
      setDefault_Koc_3(1584.8);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "TPH - Arom >C10-C12") {
      setValue_S_3(25);
      setDefault_S_3(25);

      setValue_Hc_3(0.135104789);
      setDefault_Hc_3(0.135104789);

      setValue_Dair_3(0.1);
      setDefault_Dair_3(0.1);

      setValue_Dwater_3(0.00001);
      setDefault_Dwater_3(0.00001);

      setValue_DHvb_3(12000);
      setDefault_DHvb_3(12000);

      setValue_Tc_3(500);
      setDefault_Tc_3(500);

      setValue_Tb_3(300);
      setDefault_Tb_3(300);

      setValue_MW_3(130);
      setDefault_MW_3(130);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.2);
      setDefault_Rfc_3(0.2);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(2511.8);
      setDefault_Koc_3(2511.8);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "TPH - Arom >C12-C16") {
      setValue_S_3(5.8);
      setDefault_S_3(5.8);

      setValue_Hc_3(0.051195452);
      setDefault_Hc_3(0.051195452);

      setValue_Dair_3(0.1);
      setDefault_Dair_3(0.1);

      setValue_Dwater_3(0.00001);
      setDefault_Dwater_3(0.00001);

      setValue_DHvb_3(16000);
      setDefault_DHvb_3(16000);

      setValue_Tc_3(500);
      setDefault_Tc_3(500);

      setValue_Tb_3(300);
      setDefault_Tb_3(300);

      setValue_MW_3(150);
      setDefault_MW_3(150);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.2);
      setDefault_Rfc_3(0.2);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(5011.8);
      setDefault_Koc_3(5011.8);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "TPH - Arom >C16-C121") {
      setValue_S_3(0.65);
      setDefault_S_3(0.65);

      setValue_Hc_3(0.013260497);
      setDefault_Hc_3(0.013260497);

      setValue_Dair_3(0.1);
      setDefault_Dair_3(0.1);

      setValue_Dwater_3(0.00001);
      setDefault_Dwater_3(0.00001);

      setValue_DHvb_3(17000);
      setDefault_DHvb_3(17000);

      setValue_Tc_3(500);
      setDefault_Tc_3(500);

      setValue_Tb_3(300);
      setDefault_Tb_3(300);

      setValue_MW_3(190);
      setDefault_MW_3(190);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(null);
      setDefault_Rfc_3(null);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(15848.9);
      setDefault_Koc_3(15848.9);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "TPH - Arom >C21-C35") {
      setValue_S_3(0.0066);
      setDefault_S_3(0.0066);

      setValue_Hc_3(0.000659852);
      setDefault_Hc_3(0.000659852);

      setValue_Dair_3(0.1);
      setDefault_Dair_3(0.1);

      setValue_Dwater_3(0.00001);
      setDefault_Dwater_3(0.00001);

      setValue_DHvb_3(20000);
      setDefault_DHvb_3(20000);

      setValue_Tc_3(500);
      setDefault_Tc_3(500);

      setValue_Tb_3(300);
      setDefault_Tb_3(300);

      setValue_MW_3(240);
      setDefault_MW_3(240);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(null);
      setDefault_Rfc_3(null);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(125892.5);
      setDefault_Koc_3(125892.5);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "TPH, TX1105, C6-C12") {
      setValue_S_3(65);
      setDefault_S_3(65);

      setValue_Hc_3(0.48);
      setDefault_Hc_3(0.48);

      setValue_Dair_3(0.1);
      setDefault_Dair_3(0.1);

      setValue_Dwater_3(0.00001);
      setDefault_Dwater_3(0.00001);

      setValue_DHvb_3(10000);
      setDefault_DHvb_3(10000);

      setValue_Tc_3(500);
      setDefault_Tc_3(500);

      setValue_Tb_3(100);
      setDefault_Tb_3(100);

      setValue_MW_3(120);
      setDefault_MW_3(120);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.2);
      setDefault_Rfc_3(0.2);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(1584.8);
      setDefault_Koc_3(1584.8);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "TPH, TX1105, >C12-C28") {
      setValue_S_3(5.8);
      setDefault_S_3(5.8);

      setValue_Hc_3(0.053);
      setDefault_Hc_3(0.053);

      setValue_Dair_3(0.1);
      setDefault_Dair_3(0.1);

      setValue_Dwater_3(0.00001);
      setDefault_Dwater_3(0.00001);

      setValue_DHvb_3(20000);
      setDefault_DHvb_3(20000);

      setValue_Tc_3(500);
      setDefault_Tc_3(500);

      setValue_Tb_3(100);
      setDefault_Tb_3(100);

      setValue_MW_3(150);
      setDefault_MW_3(150);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.2);
      setDefault_Rfc_3(0.2);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(5011.8);
      setDefault_Koc_3(5011.8);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "TPH, TX1105, >C12-C35") {
      setValue_S_3(5.8);
      setDefault_S_3(5.8);

      setValue_Hc_3(0.053);
      setDefault_Hc_3(0.053);

      setValue_Dair_3(0.1);
      setDefault_Dair_3(0.1);

      setValue_Dwater_3(0.00001);
      setDefault_Dwater_3(0.00001);

      setValue_DHvb_3(20000);
      setDefault_DHvb_3(20000);

      setValue_Tc_3(500);
      setDefault_Tc_3(500);

      setValue_Tb_3(100);
      setDefault_Tb_3(100);

      setValue_MW_3(150);
      setDefault_MW_3(150);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.2);
      setDefault_Rfc_3(0.2);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(5011.8);
      setDefault_Koc_3(5011.8);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    } else if (selectedChem === "TPH, TX1105, >C28-C35") {
      setValue_S_3(5.8);
      setDefault_S_3(5.8);

      setValue_Hc_3(0.053);
      setDefault_Hc_3(0.053);

      setValue_Dair_3(0.1);
      setDefault_Dair_3(0.1);

      setValue_Dwater_3(0.00001);
      setDefault_Dwater_3(0.00001);

      setValue_DHvb_3(20000);
      setDefault_DHvb_3(20000);

      setValue_Tc_3(500);
      setDefault_Tc_3(500);

      setValue_Tb_3(300);
      setDefault_Tb_3(100);

      setValue_MW_3(150);
      setDefault_MW_3(150);

      setValue_IUR_3(null);
      setDefault_IUR_3(null);

      setValue_Rfc_3(0.2);
      setDefault_Rfc_3(0.2);

      setValue_Mut_3("No");
      setDefault_Mut_3("No");

      setValue_Koc_3(5011.8);
      setDefault_Koc_3(5011.8);

      setValue_foc_3(0.0007);
      setDefault_foc_3(0.0007);
    }
  };

  const selectChem4 = (e) => {
    setOption4("none");
    let selectedChem = e.target.value;
    setChem4(selectedChem);

    if (selectedChem === "Acenaphthene") {
      setValue_S_4(3.9);
      setDefault_S_4(3.9);

      setValue_Hc_4(0.000184);
      setDefault_Hc_4(0.000184);

      setValue_Dair_4(0.0506143);
      setDefault_Dair_4(0.0506143);

      setValue_Dwater_4(0.00000833);
      setDefault_Dwater_4(0.00000833);

      setValue_DHvb_4(12155);
      setDefault_DHvb_4(12155);

      setValue_Tc_4(803.15);
      setDefault_Tc_4(803.15);

      setValue_Tb_4(552);
      setDefault_Tb_4(552);

      setValue_MW_4(154.21);
      setDefault_MW_4(154.21);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(null);
      setDefault_Rfc_4(null);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(2522);
      setDefault_Koc_4(2522);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Acetaldehyde") {
      setValue_S_4(1000000);
      setDefault_S_4(1000000);

      setValue_Hc_4(0.0000667);
      setDefault_Hc_4(0.0000667);

      setValue_Dair_4(0.1277026);
      setDefault_Dair_4(0.1277026);

      setValue_Dwater_4(0.0000135);
      setDefault_Dwater_4(0.0000135);

      setValue_DHvb_4(6156.64);
      setDefault_DHvb_4(6156.64);

      setValue_Tc_4(466);
      setDefault_Tc_4(466);

      setValue_Tb_4(293.1);
      setDefault_Tb_4(293.1);

      setValue_MW_4(293.1);
      setDefault_MW_4(293.1);

      setValue_IUR_4(0.0000022);
      setDefault_IUR_4(0.0000022);

      setValue_Rfc_4(0.009);
      setDefault_Rfc_4(0.009);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(3.219);
      setDefault_Koc_4(3.219);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Acetone") {
      setValue_S_4(1000000);
      setDefault_S_4(1000000);

      setValue_Hc_4(0.000035);
      setDefault_Hc_4(0.000035);

      setValue_Dair_4(0.1059215);
      setDefault_Dair_4(0.1059215);

      setValue_Dwater_4(0.0000115);
      setDefault_Dwater_4(0.0000115);

      setValue_DHvb_4(6955);
      setDefault_DHvb_4(6955);

      setValue_Tc_4(508.1);
      setDefault_Tc_4(508.1);

      setValue_Tb_4(328.5);
      setDefault_Tb_4(328.5);

      setValue_MW_4(58.081);
      setDefault_MW_4(58.081);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(31);
      setDefault_Rfc_4(31);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(9.726);
      setDefault_Koc_4(9.726);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Acetonitrile") {
      setValue_S_4(1000000);
      setDefault_S_4(1000000);

      setValue_Hc_4(0.0000345);
      setDefault_Hc_4(0.0000345);

      setValue_Dair_4(0.1339939);
      setDefault_Dair_4(0.1339939);

      setValue_Dwater_4(0.0000141);
      setDefault_Dwater_4(0.0000141);

      setValue_DHvb_4(7110.25);
      setDefault_DHvb_4(7110.25);

      setValue_Tc_4(545.5);
      setDefault_Tc_4(545.5);

      setValue_Tb_4(332.6);
      setDefault_Tb_4(332.6);

      setValue_MW_4(41.053);
      setDefault_MW_4(41.053);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.06);
      setDefault_Rfc_4(0.06);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(13.46);
      setDefault_Koc_4(13.46);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Acetophenone") {
      setValue_S_4(6130);
      setDefault_S_4(6130);

      setValue_Hc_4(0.0000104);
      setDefault_Hc_4(0.0000104);

      setValue_Dair_4(0.0652221);
      setDefault_Dair_4(0.0652221);

      setValue_Dwater_4(0.0000087229);
      setDefault_Dwater_4(0.0000087229);

      setValue_DHvb_4(11731.5);
      setDefault_DHvb_4(11731.5);

      setValue_Tc_4(709.5);
      setDefault_Tc_4(709.5);

      setValue_Tb_4(475.0);
      setDefault_Tb_4(475.0);

      setValue_MW_4(120.15);
      setDefault_MW_4(120.15);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(null);
      setDefault_Rfc_4(null);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(98.77);
      setDefault_Koc_4(98.77);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Acrolein") {
      setValue_S_4(212000);
      setDefault_S_4(212000);

      setValue_Hc_4(0.000122);
      setDefault_Hc_4(0.000122);

      setValue_Dair_4(0.1116862);
      setDefault_Dair_4(0.1116862);

      setValue_Dwater_4(0.0000122);
      setDefault_Dwater_4(0.0000122);

      setValue_DHvb_4(6730.7658);
      setDefault_DHvb_4(6730.7658);

      setValue_Tc_4(506.0);
      setDefault_Tc_4(506.0);

      setValue_Tb_4(325.6);
      setDefault_Tb_4(325.6);

      setValue_MW_4(56.065);
      setDefault_MW_4(56.065);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.00002);
      setDefault_Rfc_4(0.00002);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(4.901);
      setDefault_Koc_4(4.901);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Acrylic Acid") {
      setValue_S_4(1000000);
      setDefault_S_4(1000000);

      setValue_Hc_4(0.00000037);
      setDefault_Hc_4(0.00000037);

      setValue_Dair_4(0.1027173);
      setDefault_Dair_4(0.1027173);

      setValue_Dwater_4(0.000012);
      setDefault_Dwater_4(0.000012);

      setValue_DHvb_4(10955.1);
      setDefault_DHvb_4(10955.1);

      setValue_Tc_4(615.15);
      setDefault_Tc_4(615.15);

      setValue_Tb_4(414.35);
      setDefault_Tb_4(414.35);

      setValue_MW_4(72.064);
      setDefault_MW_4(72.064);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.001);
      setDefault_Rfc_4(0.001);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(2.235);
      setDefault_Koc_4(2.235);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Acrylonitrile") {
      setValue_S_4(74500);
      setDefault_S_4(74500);

      setValue_Hc_4(0.000138);
      setDefault_Hc_4(0.000138);

      setValue_Dair_4(0.1136836);
      setDefault_Dair_4(0.1136836);

      setValue_Dwater_4(0.0000123);
      setDefault_Dwater_4(0.0000123);

      setValue_DHvb_4(7786);
      setDefault_DHvb_4(7786);

      setValue_Tc_4(519.0);
      setDefault_Tc_4(519.0);

      setValue_Tb_4(350.3);
      setDefault_Tb_4(350.3);

      setValue_MW_4(53.064);
      setDefault_MW_4(53.064);

      setValue_IUR_4(0.000068);
      setDefault_IUR_4(0.000068);

      setValue_Rfc_4(0.002);
      setDefault_Rfc_4(0.002);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(28.55);
      setDefault_Koc_4(28.55);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Aldrin") {
      setValue_S_4(0.017);
      setDefault_S_4(0.017);

      setValue_Hc_4(0.000044);
      setDefault_Hc_4(0.000044);

      setValue_Dair_4(0.0228116);
      setDefault_Dair_4(0.0228116);

      setValue_Dwater_4(0.0000058402);
      setDefault_Dwater_4(0.0000058402);

      setValue_DHvb_4(15000);
      setDefault_DHvb_4(15000);

      setValue_Tc_4(627.225);
      setDefault_Tc_4(627.225);

      setValue_Tb_4(418.15);
      setDefault_Tb_4(418.15);

      setValue_MW_4(364.92);
      setDefault_MW_4(364.92);

      setValue_IUR_4(0.0049);
      setDefault_IUR_4(0.0049);

      setValue_Rfc_4(null);
      setDefault_Rfc_4(null);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(437500);
      setDefault_Koc_4(437500);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Allyl Alcohol") {
      setValue_S_4(1000000);
      setDefault_S_4(1000000);

      setValue_Hc_4(0.00000499);
      setDefault_Hc_4(0.00000499);

      setValue_Dair_4(0.1097535);
      setDefault_Dair_4(0.1097535);

      setValue_Dwater_4(0.0000121);
      setDefault_Dwater_4(0.0000121);

      setValue_DHvb_4(9553.84);
      setDefault_DHvb_4(9553.84);

      setValue_Tc_4(539.8);
      setDefault_Tc_4(539.8);

      setValue_Tb_4(370.15);
      setDefault_Tb_4(370.15);

      setValue_MW_4(58.081);
      setDefault_MW_4(58.081);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.0001);
      setDefault_Rfc_4(0.0001);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(4.052);
      setDefault_Koc_4(4.052);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Allyl Chloride") {
      setValue_S_4(3370);
      setDefault_S_4(3370);

      setValue_Hc_4(0.011);
      setDefault_Hc_4(0.011);

      setValue_Dair_4(0.093611);
      setDefault_Dair_4(0.093611);

      setValue_Dwater_4(0.0000108);
      setDefault_Dwater_4(0.0000108);

      setValue_DHvb_4(6936.08);
      setDefault_DHvb_4(6936.08);

      setValue_Tc_4(514.26);
      setDefault_Tc_4(514.26);

      setValue_Tb_4(318.1);
      setDefault_Tb_4(318.1);

      setValue_MW_4(76.526);
      setDefault_MW_4(76.526);

      setValue_IUR_4(0.000006);
      setDefault_IUR_4(0.000006);

      setValue_Rfc_4(0.001);
      setDefault_Rfc_4(0.001);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(47.28);
      setDefault_Koc_4(47.28);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Ammonia") {
      setValue_S_4(482000);
      setDefault_S_4(482000);

      setValue_Hc_4(0.0000161);
      setDefault_Hc_4(0.0000161);

      setValue_Dair_4(0.2305471);
      setDefault_Dair_4(0.2305471);

      setValue_Dwater_4(0.0000223);
      setDefault_Dwater_4(0.0000223);

      setValue_DHvb_4(5581);
      setDefault_DHvb_4(5581);

      setValue_Tc_4(405.55);
      setDefault_Tc_4(405.55);

      setValue_Tb_4(239.8);
      setDefault_Tb_4(239.8);

      setValue_MW_4(17.031);
      setDefault_MW_4(17.031);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.5);
      setDefault_Rfc_4(0.5);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(0.06337);
      setDefault_Koc_4(0.06337);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Amyl Alcohol, tert-") {
      setValue_S_4(110000);
      setDefault_S_4(110000);

      setValue_Hc_4(0.0000138);
      setDefault_Hc_4(0.0000138);

      setValue_Dair_4(0.0785447);
      setDefault_Dair_4(0.0785447);

      setValue_Dwater_4(0.0000091012);
      setDefault_Dwater_4(0.0000091012);

      setValue_DHvb_4(9586.520076);
      setDefault_DHvb_4(9586.520076);

      setValue_Tc_4(545.15);
      setDefault_Tc_4(545.15);

      setValue_Tb_4(375.55);
      setDefault_Tb_4(375.55);

      setValue_MW_4(88.151);
      setDefault_MW_4(88.151);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.003);
      setDefault_Rfc_4(0.003);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(10.14);
      setDefault_Koc_4(10.14);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Anthracene") {
      setValue_S_4(0.0434);
      setDefault_S_4(0.0434);

      setValue_Hc_4(0.0000556);
      setDefault_Hc_4(0.0000556);

      setValue_Dair_4(0.0389732);
      setDefault_Dair_4(0.0389732);

      setValue_Dwater_4(0.0000078523);
      setDefault_Dwater_4(0.0000078523);

      setValue_DHvb_4(13121);
      setDefault_DHvb_4(13121);

      setValue_Tc_4(873.0);
      setDefault_Tc_4(873.0);

      setValue_Tb_4(612.9);
      setDefault_Tb_4(612.9);

      setValue_MW_4(178.24);
      setDefault_MW_4(178.24);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(null);
      setDefault_Rfc_4(null);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(7274);
      setDefault_Koc_4(7274);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Benz[a]anthracene") {
      setValue_S_4(0.0094);
      setDefault_S_4(0.0094);

      setValue_Hc_4(0.000012);
      setDefault_Hc_4(0.000012);

      setValue_Dair_4(0.0261138);
      setDefault_Dair_4(0.0261138);

      setValue_Dwater_4(0.0000067495);
      setDefault_Dwater_4(0.0000067495);

      setValue_DHvb_4(16000);
      setDefault_DHvb_4(16000);

      setValue_Tc_4(1066.125);
      setDefault_Tc_4(1066.125);

      setValue_Tb_4(710.75);
      setDefault_Tb_4(710.75);

      setValue_MW_4(228.3);
      setDefault_MW_4(228.3);

      setValue_IUR_4(0.00006);
      setDefault_IUR_4(0.00006);

      setValue_Rfc_4(null);
      setDefault_Rfc_4(null);

      setValue_Mut_4("Yes");
      setDefault_Mut_4("Yes");

      setValue_Koc_4(99700);
      setDefault_Koc_4(99700);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Benzaldehyde") {
      setValue_S_4(6950);
      setDefault_S_4(6950);

      setValue_Hc_4(0.0000267);
      setDefault_Hc_4(0.0000267);

      setValue_Dair_4(0.074393);
      setDefault_Dair_4(0.074393);

      setValue_Dwater_4(0.0000094627);
      setDefault_Dwater_4(0.0000094627);

      setValue_DHvb_4(11657.8);
      setDefault_DHvb_4(11657.8);

      setValue_Tc_4(695.0);
      setDefault_Tc_4(695.0);

      setValue_Tb_4(452.0);
      setDefault_Tb_4(452.0);

      setValue_MW_4(106.13);
      setDefault_MW_4(106.13);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(null);
      setDefault_Rfc_4(null);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(32.69);
      setDefault_Koc_4(32.69);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Benzene") {
      setValue_S_4(1790);
      setDefault_S_4(1790);

      setValue_Hc_4(0.00555);
      setDefault_Hc_4(0.00555);

      setValue_Dair_4(0.089534);
      setDefault_Dair_4(0.089534);

      setValue_Dwater_4(0.0000103);
      setDefault_Dwater_4(0.0000103);

      setValue_DHvb_4(7342);
      setDefault_DHvb_4(7342);

      setValue_Tc_4(562.16);
      setDefault_Tc_4(562.16);

      setValue_Tb_4(353);
      setDefault_Tb_4(353);

      setValue_MW_4(78.115);
      setDefault_MW_4(78.115);

      setValue_IUR_4(0.0000078);
      setDefault_IUR_4(0.0000078);

      setValue_Rfc_4(0.03);
      setDefault_Rfc_4(0.03);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(70.51);
      setDefault_Koc_4(70.51);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Benzenethiol") {
      setValue_S_4(835.0);
      setDefault_S_4(835.0);

      setValue_Hc_4(0.000335);
      setDefault_Hc_4(0.000335);

      setValue_Dair_4(0.0728564);
      setDefault_Dair_4(0.0728564);

      setValue_Dwater_4(0.0000094506);
      setDefault_Dwater_4(0.0000094506);

      setValue_DHvb_4(11359.51);
      setDefault_DHvb_4(11359.51);

      setValue_Tc_4(663.15);
      setDefault_Tc_4(663.15);

      setValue_Tb_4(442.1);
      setDefault_Tb_4(442.1);

      setValue_MW_4(110.18);
      setDefault_MW_4(110.18);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(null);
      setDefault_Rfc_4(null);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(153.7);
      setDefault_Koc_4(153.7);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Benzyl Chloride") {
      setValue_S_4(525.0);
      setDefault_S_4(525.0);

      setValue_Hc_4(0.000412);
      setDefault_Hc_4(0.000412);

      setValue_Dair_4(0.0633618);
      setDefault_Dair_4(0.0633618);

      setValue_Dwater_4(0.0000088057);
      setDefault_Dwater_4(0.0000088057);

      setValue_DHvb_4(8773.2598);
      setDefault_DHvb_4(8773.2598);

      setValue_Tc_4(685.0);
      setDefault_Tc_4(685.0);

      setValue_Tb_4(452);
      setDefault_Tb_4(452);

      setValue_MW_4(126.59);
      setDefault_MW_4(126.59);

      setValue_IUR_4(0.000049);
      setDefault_IUR_4(0.000049);

      setValue_Rfc_4(0.001);
      setDefault_Rfc_4(0.001);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(99.03);
      setDefault_Koc_4(99.03);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Biphenyl, 1,1'-") {
      setValue_S_4(7.48);
      setDefault_S_4(7.48);

      setValue_Hc_4(0.000308);
      setDefault_Hc_4(0.000308);

      setValue_Dair_4(0.0470592);
      setDefault_Dair_4(0.0470592);

      setValue_Dwater_4(0.0000075618);
      setDefault_Dwater_4(0.0000075618);

      setValue_DHvb_4(10890);
      setDefault_DHvb_4(10890);

      setValue_Tc_4(789.0);
      setDefault_Tc_4(789.0);

      setValue_Tb_4(529.1);
      setDefault_Tb_4(529.1);

      setValue_MW_4(154.21);
      setDefault_MW_4(154.21);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.0004);
      setDefault_Rfc_4(0.0004);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(3019);
      setDefault_Koc_4(3019);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Bis(2-chloro-methylethyl) ether") {
      setValue_S_4(1700);
      setDefault_S_4(1700);

      setValue_Hc_4(0.0000742);
      setDefault_Hc_4(0.0000742);

      setValue_Dair_4(0.0398891);
      setDefault_Dair_4(0.0398891);

      setValue_Dwater_4(0.0000073606);
      setDefault_Dwater_4(0.0000073606);

      setValue_DHvb_4(9694.9215);
      setDefault_DHvb_4(9694.9215);

      setValue_Tc_4(690.0);
      setDefault_Tc_4(690.0);

      setValue_Tb_4(460.0);
      setDefault_Tb_4(460.0);

      setValue_MW_4(171.07);
      setDefault_MW_4(171.07);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(null);
      setDefault_Rfc_4(null);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(160.8);
      setDefault_Koc_4(160.8);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Bis(2-chloroethyl)ether") {
      setValue_S_4(17200);
      setDefault_S_4(17200);

      setValue_Hc_4(0.000017);
      setDefault_Hc_4(0.000017);

      setValue_Dair_4(0.0567192);
      setDefault_Dair_4(0.0567192);

      setValue_Dwater_4(0.000008707);
      setDefault_Dwater_4(0.000008707);

      setValue_DHvb_4(10803);
      setDefault_DHvb_4(10803);

      setValue_Tc_4(659.79);
      setDefault_Tc_4(659.79);

      setValue_Tb_4(451.5);
      setDefault_Tb_4(451.5);

      setValue_MW_4(143.01);
      setDefault_MW_4(143.01);

      setValue_IUR_4(0.00033);
      setDefault_IUR_4(0.00033);

      setValue_Rfc_4(null);
      setDefault_Rfc_4(null);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(35.32);
      setDefault_Koc_4(35.32);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Bromo-2-chloroethane, 1-") {
      setValue_S_4(6900);
      setDefault_S_4(6900);

      setValue_Hc_4(0.000909);
      setDefault_Hc_4(0.000909);

      setValue_Dair_4(0.0659248);
      setDefault_Dair_4(0.0659248);

      setValue_Dwater_4(0.0000108);
      setDefault_Dwater_4(0.0000108);

      setValue_DHvb_4(9107.19);
      setDefault_DHvb_4(9107.19);

      setValue_Tc_4(570.0);
      setDefault_Tc_4(570.0);

      setValue_Tb_4(380.0);
      setDefault_Tb_4(380.0);

      setValue_MW_4(143.41);
      setDefault_MW_4(143.41);

      setValue_IUR_4(0.0006);
      setDefault_IUR_4(0.0006);

      setValue_Rfc_4(null);
      setDefault_Rfc_4(null);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(46.34);
      setDefault_Koc_4(46.34);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Bromobenzene") {
      setValue_S_4(446.0);
      setDefault_S_4(446.0);

      setValue_Hc_4(0.00247);
      setDefault_Hc_4(0.00247);

      setValue_Dair_4(0.0537132);
      setDefault_Dair_4(0.0537132);

      setValue_Dwater_4(0.0000093004);
      setDefault_Dwater_4(0.0000093004);

      setValue_DHvb_4(10628.64);
      setDefault_DHvb_4(10628.64);

      setValue_Tc_4(670.0);
      setDefault_Tc_4(670.0);

      setValue_Tb_4(429.0);
      setDefault_Tb_4(429.0);

      setValue_MW_4(157.01);
      setDefault_MW_4(157.01);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.06);
      setDefault_Rfc_4(0.06);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(393.2);
      setDefault_Koc_4(393.2);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Bromochloromethane") {
      setValue_S_4(16700);
      setDefault_S_4(16700);

      setValue_Hc_4(0.00146);
      setDefault_Hc_4(0.00146);

      setValue_Dair_4(0.078692);
      setDefault_Dair_4(0.078692);

      setValue_Dwater_4(0.0000122);
      setDefault_Dwater_4(0.0000122);

      setValue_DHvb_4(7167.65);
      setDefault_DHvb_4(7167.65);

      setValue_Tc_4(511.5);
      setDefault_Tc_4(511.5);

      setValue_Tb_4(341.0);
      setDefault_Tb_4(341.0);

      setValue_MW_4(129.38);
      setDefault_MW_4(129.38);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.04);
      setDefault_Rfc_4(0.04);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(16.72);
      setDefault_Koc_4(16.72);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Bromodichloromethane") {
      setValue_S_4(3032);
      setDefault_S_4(3032);

      setValue_Hc_4(0.00212);
      setDefault_Hc_4(0.00212);

      setValue_Dair_4(0.0562629);
      setDefault_Dair_4(0.0562629);

      setValue_Dwater_4(0.0000107);
      setDefault_Dwater_4(0.0000107);

      setValue_DHvb_4(7800);
      setDefault_DHvb_4(7800);

      setValue_Tc_4(585.85);
      setDefault_Tc_4(585.85);

      setValue_Tb_4(363.0);
      setDefault_Tb_4(363.0);

      setValue_MW_4(163.83);
      setDefault_MW_4(163.83);

      setValue_IUR_4(0.000037);
      setDefault_IUR_4(0.000037);

      setValue_Rfc_4(null);
      setDefault_Rfc_4(null);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(54.38);
      setDefault_Koc_4(54.38);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Bromoform") {
      setValue_S_4(3100);
      setDefault_S_4(3100);

      setValue_Hc_4(0.000535);
      setDefault_Hc_4(0.000535);

      setValue_Dair_4(0.0357324);
      setDefault_Dair_4(0.0357324);

      setValue_Dwater_4(0.0000104);
      setDefault_Dwater_4(0.0000104);

      setValue_DHvb_4(9472.63236);
      setDefault_DHvb_4(9472.63236);

      setValue_Tc_4(633.375);
      setDefault_Tc_4(633.375);

      setValue_Tb_4(422.25);
      setDefault_Tb_4(422.25);

      setValue_MW_4(252.73);
      setDefault_MW_4(252.73);

      setValue_IUR_4(0.0000011);
      setDefault_IUR_4(0.0000011);

      setValue_Rfc_4(null);
      setDefault_Rfc_4(null);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(120.9);
      setDefault_Koc_4(120.9);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Bromomethane") {
      setValue_S_4(15200);
      setDefault_S_4(15200);

      setValue_Hc_4(0.00734);
      setDefault_Hc_4(0.00734);

      setValue_Dair_4(0.1004976);
      setDefault_Dair_4(0.1004976);

      setValue_Dwater_4(0.0000135);
      setDefault_Dwater_4(0.0000135);

      setValue_DHvb_4(5714);
      setDefault_DHvb_4(5714);

      setValue_Tc_4(467.0);
      setDefault_Tc_4(467.0);

      setValue_Tb_4(276.5);
      setDefault_Tb_4(276.5);

      setValue_MW_4(94.939);
      setDefault_MW_4(94.939);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.005);
      setDefault_Rfc_4(0.005);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(10.77);
      setDefault_Koc_4(10.77);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Butadiene, 1,3-") {
      setValue_S_4(735.0);
      setDefault_S_4(735.0);

      setValue_Hc_4(0.0736);
      setDefault_Hc_4(0.0736);

      setValue_Dair_4(0.1003488);
      setDefault_Dair_4(0.1003488);

      setValue_Dwater_4(0.0000103);
      setDefault_Dwater_4(0.0000103);

      setValue_DHvb_4(5370.33);
      setDefault_DHvb_4(5370.33);

      setValue_Tc_4(425.0);
      setDefault_Tc_4(425.0);

      setValue_Tb_4(268.6);
      setDefault_Tb_4(268.6);

      setValue_MW_4(54.092);
      setDefault_MW_4(54.092);

      setValue_IUR_4(0.00003);
      setDefault_IUR_4(0.00003);

      setValue_Rfc_4(0.002);
      setDefault_Rfc_4(0.002);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(53.3);
      setDefault_Koc_4(53.3);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Butanol, N-") {
      setValue_S_4(63200);
      setDefault_S_4(63200);

      setValue_Hc_4(0.00000881);
      setDefault_Hc_4(0.00000881);

      setValue_Dair_4(0.0900387);
      setDefault_Dair_4(0.0900387);

      setValue_Dwater_4(0.0000101);
      setDefault_Dwater_4(0.0000101);

      setValue_DHvb_4(134572.18);
      setDefault_DHvb_4(134572.18);

      setValue_Tc_4(586.275);
      setDefault_Tc_4(586.275);

      setValue_Tb_4(390.85);
      setDefault_Tb_4(390.85);

      setValue_MW_4(74.124);
      setDefault_MW_4(74.124);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(null);
      setDefault_Rfc_4(null);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(10.01);
      setDefault_Koc_4(10.01);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Butyl alcohol, sec-") {
      setValue_S_4(181000);
      setDefault_S_4(181000);

      setValue_Hc_4(0.00000906);
      setDefault_Hc_4(0.00000906);

      setValue_Dair_4(0.0898848);
      setDefault_Dair_4(0.0898848);

      setValue_Dwater_4(0.0000101);
      setDefault_Dwater_4(0.0000101);

      setValue_DHvb_4(11875.42312);
      setDefault_DHvb_4(11875.42312);

      setValue_Tc_4(536.2);
      setDefault_Tc_4(536.2);

      setValue_Tb_4(372.65);
      setDefault_Tb_4(372.65);

      setValue_MW_4(74.124);
      setDefault_MW_4(74.124);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(30.0);
      setDefault_Rfc_4(30.0);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(7.097);
      setDefault_Koc_4(7.097);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Butylbenzene, n-") {
      setValue_S_4(11.8);
      setDefault_S_4(11.8);

      setValue_Hc_4(0.0159);
      setDefault_Hc_4(0.0159);

      setValue_Dair_4(0.0527732);
      setDefault_Dair_4(0.0527732);

      setValue_Dwater_4(0.0000073335);
      setDefault_Dwater_4(0.0000073335);

      setValue_DHvb_4(12267.12);
      setDefault_DHvb_4(12267.12);

      setValue_Tc_4(720);
      setDefault_Tc_4(720);

      setValue_Tb_4(456.3);
      setDefault_Tb_4(456.3);

      setValue_MW_4(134.22);
      setDefault_MW_4(134.22);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(null);
      setDefault_Rfc_4(null);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(6324);
      setDefault_Koc_4(6324);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Butylbenzene, sec-") {
      setValue_S_4(17.6);
      setDefault_S_4(17.6);

      setValue_Hc_4(0.0176);
      setDefault_Hc_4(0.0176);

      setValue_Dair_4(0.0527928);
      setDefault_Dair_4(0.0527928);

      setValue_Dwater_4(0.0000073371);
      setDefault_Dwater_4(0.0000073371);

      setValue_DHvb_4(11467.5);
      setDefault_DHvb_4(11467.5);

      setValue_Tc_4(677.25);
      setDefault_Tc_4(677.25);

      setValue_Tb_4(451.5);
      setDefault_Tb_4(451.5);

      setValue_MW_4(134.22);
      setDefault_MW_4(134.22);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(null);
      setDefault_Rfc_4(null);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(9245);
      setDefault_Koc_4(9245);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Butylbenzene, tert-") {
      setValue_S_4(29.5);
      setDefault_S_4(29.5);

      setValue_Hc_4(0.0132);
      setDefault_Hc_4(0.0132);

      setValue_Dair_4(0.0529525);
      setDefault_Dair_4(0.0529525);

      setValue_Dwater_4(0.0000073662);
      setDefault_Dwater_4(0.0000073662);

      setValue_DHvb_4(11405.35);
      setDefault_DHvb_4(11405.35);

      setValue_Tc_4(664.725);
      setDefault_Tc_4(664.725);

      setValue_Tb_4(443.15);
      setDefault_Tb_4(443.15);

      setValue_MW_4(134.22);
      setDefault_MW_4(134.22);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(null);
      setDefault_Rfc_4(null);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(3687);
      setDefault_Koc_4(3687);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Carbon Disulfide") {
      setValue_S_4(2160);
      setDefault_S_4(2160);

      setValue_Hc_4(0.0144);
      setDefault_Hc_4(0.0144);

      setValue_Dair_4(0.1064373);
      setDefault_Dair_4(0.1064373);

      setValue_Dwater_4(0.000013);
      setDefault_Dwater_4(0.000013);

      setValue_DHvb_4(6391);
      setDefault_DHvb_4(6391);

      setValue_Tc_4(552.0);
      setDefault_Tc_4(552.0);

      setValue_Tb_4(319.0);
      setDefault_Tb_4(319.0);

      setValue_MW_4(76.139);
      setDefault_MW_4(76.139);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.7);
      setDefault_Rfc_4(0.7);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(48.23);
      setDefault_Koc_4(48.23);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Carbon Tetrachloride") {
      setValue_S_4(793.0);
      setDefault_S_4(793.0);

      setValue_Hc_4(0.0276);
      setDefault_Hc_4(0.0276);

      setValue_Dair_4(0.0571435);
      setDefault_Dair_4(0.0571435);

      setValue_Dwater_4(0.0000097849);
      setDefault_Dwater_4(0.0000097849);

      setValue_DHvb_4(7127);
      setDefault_DHvb_4(7127);

      setValue_Tc_4(556.6);
      setDefault_Tc_4(556.6);

      setValue_Tb_4(349.8);
      setDefault_Tb_4(349.8);

      setValue_MW_4(153.82);
      setDefault_MW_4(153.82);

      setValue_IUR_4(0.000006);
      setDefault_IUR_4(0.000006);

      setValue_Rfc_4(0.1);
      setDefault_Rfc_4(0.1);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(285.6);
      setDefault_Koc_4(285.6);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Carbonyl Sulfide") {
      setValue_S_4(1220);
      setDefault_S_4(1220);

      setValue_Hc_4(0.61);
      setDefault_Hc_4(0.61);

      setValue_Dair_4(0.1157542);
      setDefault_Dair_4(0.1157542);

      setValue_Dwater_4(0.0000132);
      setDefault_Dwater_4(0.0000132);

      setValue_DHvb_4(4.66);
      setDefault_DHvb_4(4.66);

      setValue_Tc_4(378.15);
      setDefault_Tc_4(378.15);

      setValue_Tb_4(223.0);
      setDefault_Tb_4(223.0);

      setValue_MW_4(60.075);
      setDefault_MW_4(60.075);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.1);
      setDefault_Rfc_4(0.1);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(0.9123);
      setDefault_Koc_4(0.9123);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Chloral Hydrate") {
      setValue_S_4(793000);
      setDefault_S_4(793000);

      setValue_Hc_4(0.00000000571);
      setDefault_Hc_4(0.00000000571);

      setValue_Dair_4(0.0543991);
      setDefault_Dair_4(0.0543991);

      setValue_Dwater_4(0.0000104);
      setDefault_Dwater_4(0.0000104);

      setValue_DHvb_4(7520.55);
      setDefault_DHvb_4(7520.55);

      setValue_Tc_4(556.725);
      setDefault_Tc_4(556.725);

      setValue_Tb_4(371.15);
      setDefault_Tb_4(371.15);

      setValue_MW_4(165.4);
      setDefault_MW_4(165.4);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(null);
      setDefault_Rfc_4(null);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(4.465);
      setDefault_Koc_4(4.465);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Chlordane") {
      setValue_S_4(0.056);
      setDefault_S_4(0.056);

      setValue_Hc_4(0.0000486);
      setDefault_Hc_4(0.0000486);

      setValue_Dair_4(0.021493);
      setDefault_Dair_4(0.021493);

      setValue_Dwater_4(0.0000054477);
      setDefault_Dwater_4(0.0000054477);

      setValue_DHvb_4(14000);
      setDefault_DHvb_4(14000);

      setValue_Tc_4(672.225);
      setDefault_Tc_4(672.225);

      setValue_Tb_4(448.15);
      setDefault_Tb_4(448.15);

      setValue_MW_4(409.78);
      setDefault_MW_4(409.78);

      setValue_IUR_4(0.0001);
      setDefault_IUR_4(0.0001);

      setValue_Rfc_4(0.0007);
      setDefault_Rfc_4(0.0007);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(250000);
      setDefault_Koc_4(250000);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Chlorine") {
      setValue_S_4(6300);
      setDefault_S_4(6300);

      setValue_Hc_4(0.0117);
      setDefault_Hc_4(0.0117);

      setValue_Dair_4(0.1542088);
      setDefault_Dair_4(0.1542088);

      setValue_Dwater_4(0.0000223);
      setDefault_Dwater_4(0.0000223);

      setValue_DHvb_4(68572.6866);
      setDefault_DHvb_4(68572.6866);

      setValue_Tc_4(417.15);
      setDefault_Tc_4(417.15);

      setValue_Tb_4(239.1);
      setDefault_Tb_4(239.1);

      setValue_MW_4(70.906);
      setDefault_MW_4(70.906);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.00015);
      setDefault_Rfc_4(0.00015);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(5.462);
      setDefault_Koc_4(5.462);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Chloro,1-difluoroethane, 1-") {
      setValue_S_4(1400);
      setDefault_S_4(1400);

      setValue_Hc_4(0.0588);
      setDefault_Hc_4(0.0588);

      setValue_Dair_4(0.0803925);
      setDefault_Dair_4(0.0803925);

      setValue_Dwater_4(0.0000101);
      setDefault_Dwater_4(0.0000101);

      setValue_DHvb_4(53298.46);
      setDefault_DHvb_4(53298.46);

      setValue_Tc_4(409.85);
      setDefault_Tc_4(409.85);

      setValue_Tb_4(263.3);
      setDefault_Tb_4(263.3);

      setValue_MW_4(100.5);
      setDefault_MW_4(100.5);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(50.0);
      setDefault_Rfc_4(50.0);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(60.09);
      setDefault_Koc_4(60.09);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Chloro,3-butadiene, 2-") {
      setValue_S_4(874.9);
      setDefault_S_4(874.9);

      setValue_Hc_4(0.0561);
      setDefault_Hc_4(0.0561);

      setValue_Dair_4(0.0841489);
      setDefault_Dair_4(0.0841489);

      setValue_Dwater_4(0.00001);
      setDefault_Dwater_4(0.00001);

      setValue_DHvb_4(8074.848);
      setDefault_DHvb_4(8074.848);

      setValue_Tc_4(525);
      setDefault_Tc_4(525);

      setValue_Tb_4(332.4);
      setDefault_Tb_4(332.4);

      setValue_MW_4(88.537);
      setDefault_MW_4(88.537);

      setValue_IUR_4(0.0003);
      setDefault_IUR_4(0.0003);

      setValue_Rfc_4(0.02);
      setDefault_Rfc_4(0.02);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(156.8);
      setDefault_Koc_4(156.8);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Chlorobenzene") {
      setValue_S_4(498.0);
      setDefault_S_4(498.0);

      setValue_Hc_4(0.00311);
      setDefault_Hc_4(0.00311);

      setValue_Dair_4(0.0721306);
      setDefault_Dair_4(0.0721306);

      setValue_Dwater_4(0.0000094765);
      setDefault_Dwater_4(0.0000094765);

      setValue_DHvb_4(8410);
      setDefault_DHvb_4(8410);

      setValue_Tc_4(632.4);
      setDefault_Tc_4(632.4);

      setValue_Tb_4(404.7);
      setDefault_Tb_4(404.7);

      setValue_MW_4(112.56);
      setDefault_MW_4(112.56);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.05);
      setDefault_Rfc_4(0.05);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(291.4);
      setDefault_Koc_4(291.4);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Chlorobutane, 1-") {
      setValue_S_4(1100);
      setDefault_S_4(1100);

      setValue_Hc_4(0.0167);
      setDefault_Hc_4(0.0167);

      setValue_Dair_4(0.0784137);
      setDefault_Dair_4(0.0784137);

      setValue_Dwater_4(0.0000093275);
      setDefault_Dwater_4(0.0000093275);

      setValue_DHvb_4(7263.21);
      setDefault_DHvb_4(7263.21);

      setValue_Tc_4(542.0);
      setDefault_Tc_4(542.0);

      setValue_Tb_4(351.6);
      setDefault_Tb_4(351.6);

      setValue_MW_4(92.569);
      setDefault_MW_4(92.569);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(null);
      setDefault_Rfc_4(null);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(195.4);
      setDefault_Koc_4(195.4);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Chlorodifluoromethane") {
      setValue_S_4(2770);
      setDefault_S_4(2770);

      setValue_Hc_4(0.0406);
      setDefault_Hc_4(0.0406);

      setValue_Dair_4(0.1033788);
      setDefault_Dair_4(0.1033788);

      setValue_Dwater_4(0.0000133);
      setDefault_Dwater_4(0.0000133);

      setValue_DHvb_4(4835.92122);
      setDefault_DHvb_4(4835.92122);

      setValue_Tc_4(369.3);
      setDefault_Tc_4(369.3);

      setValue_Tb_4(232.3);
      setDefault_Tb_4(232.3);

      setValue_MW_4(86.469);
      setDefault_MW_4(86.469);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(50.0);
      setDefault_Rfc_4(50.0);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(8.648);
      setDefault_Koc_4(8.648);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Chloroethanol, 2-") {
      setValue_S_4(1000000);
      setDefault_S_4(1000000);

      setValue_Hc_4(0.000000761);
      setDefault_Hc_4(0.000000761);

      setValue_Dair_4(0.0999813);
      setDefault_Dair_4(0.0999813);

      setValue_Dwater_4(0.0000122);
      setDefault_Dwater_4(0.0000122);

      setValue_DHvb_4(9956.97);
      setDefault_DHvb_4(9956.97);

      setValue_Tc_4(602.625);
      setDefault_Tc_4(602.625);

      setValue_Tb_4(401.75);
      setDefault_Tb_4(401.75);

      setValue_MW_4(80.515);
      setDefault_MW_4(80.515);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(null);
      setDefault_Rfc_4(null);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(3.39);
      setDefault_Koc_4(3.39);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Chloroform") {
      setValue_S_4(7950);
      setDefault_S_4(7950);

      setValue_Hc_4(0.00367);
      setDefault_Hc_4(0.00367);

      setValue_Dair_4(0.0769197);
      setDefault_Dair_4(0.0769197);

      setValue_Dwater_4(0.0000109);
      setDefault_Dwater_4(0.0000109);

      setValue_DHvb_4(6988);
      setDefault_DHvb_4(6988);

      setValue_Tc_4(536.4);
      setDefault_Tc_4(536.4);

      setValue_Tb_4(334.1);
      setDefault_Tb_4(334.1);

      setValue_MW_4(119.38);
      setDefault_MW_4(119.38);

      setValue_IUR_4(0.000023);
      setDefault_IUR_4(0.000023);

      setValue_Rfc_4(0.098);
      setDefault_Rfc_4(0.098);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(51.21);
      setDefault_Koc_4(51.21);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Chloromethane") {
      setValue_S_4(5320);
      setDefault_S_4(5320);

      setValue_Hc_4(0.00882);
      setDefault_Hc_4(0.00882);

      setValue_Dair_4(0.1239651);
      setDefault_Dair_4(0.1239651);

      setValue_Dwater_4(0.0000136);
      setDefault_Dwater_4(0.0000136);

      setValue_DHvb_4(5114.6);
      setDefault_DHvb_4(5114.6);

      setValue_Tc_4(416.25);
      setDefault_Tc_4(416.25);

      setValue_Tb_4(249.0);
      setDefault_Tb_4(249.0);

      setValue_MW_4(50.488);
      setDefault_MW_4(50.488);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.09);
      setDefault_Rfc_4(0.09);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(6.157);
      setDefault_Koc_4(6.157);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Chloronaphthalene, Beta-") {
      setValue_S_4(11.7);
      setDefault_S_4(11.7);

      setValue_Hc_4(0.00032);
      setDefault_Hc_4(0.00032);

      setValue_Dair_4(0.0446914);
      setDefault_Dair_4(0.0446914);

      setValue_Dwater_4(0.0000077301);
      setDefault_Dwater_4(0.0000077301);

      setValue_DHvb_4(11311.936);
      setDefault_DHvb_4(11311.936);

      setValue_Tc_4(793.5);
      setDefault_Tc_4(793.5);

      setValue_Tb_4(529.0);
      setDefault_Tb_4(529.0);

      setValue_MW_4(162.62);
      setDefault_MW_4(162.62);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(2423);
      setDefault_Rfc_4(2423);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(null);
      setDefault_Koc_4(null);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Chlorophenol, 2-") {
      setValue_S_4(11300);
      setDefault_S_4(11300);

      setValue_Hc_4(0.0000112);
      setDefault_Hc_4(0.0000112);

      setValue_Dair_4(0.0661175);
      setDefault_Dair_4(0.0661175);

      setValue_Dwater_4(0.0000094784);
      setDefault_Dwater_4(0.0000094784);

      setValue_DHvb_4(9572);
      setDefault_DHvb_4(9572);

      setValue_Tc_4(675);
      setDefault_Tc_4(675);

      setValue_Tb_4(447.9);
      setDefault_Tb_4(447.9);

      setValue_MW_4(128.56);
      setDefault_MW_4(128.56);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(null);
      setDefault_Rfc_4(null);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(191.1);
      setDefault_Koc_4(191.1);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Chlorotoluene, o-") {
      setValue_S_4(374.0);
      setDefault_S_4(374.0);

      setValue_Hc_4(0.00357);
      setDefault_Hc_4(0.00357);

      setValue_Dair_4(0.0629025);
      setDefault_Dair_4(0.0629025);

      setValue_Dwater_4(0.0000087194);
      setDefault_Dwater_4(0.0000087194);

      setValue_DHvb_4(9950.5);
      setDefault_DHvb_4(9950.5);

      setValue_Tc_4(654.1);
      setDefault_Tc_4(654.1);

      setValue_Tb_4(432.0);
      setDefault_Tb_4(432.0);

      setValue_MW_4(126.59);
      setDefault_MW_4(126.59);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(null);
      setDefault_Rfc_4(null);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(928.6);
      setDefault_Koc_4(928.6);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Chlorotoluene, p-") {
      setValue_S_4(106.0);
      setDefault_S_4(106.0);

      setValue_Hc_4(0.00438);
      setDefault_Hc_4(0.00438);

      setValue_Dair_4(0.062571);
      setDefault_Dair_4(0.062571);

      setValue_Dwater_4(0.0000086574);
      setDefault_Dwater_4(0.0000086574);

      setValue_DHvb_4(10144.98);
      setDefault_DHvb_4(10144.98);

      setValue_Tc_4(658.7);
      setDefault_Tc_4(658.7);

      setValue_Tb_4(435.4);
      setDefault_Tb_4(435.4);

      setValue_MW_4(126.59);
      setDefault_MW_4(126.59);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(null);
      setDefault_Rfc_4(null);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(775.7);
      setDefault_Koc_4(775.7);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Crotonaldehyde, trans-") {
      setValue_S_4(150000);
      setDefault_S_4(150000);

      setValue_Hc_4(0.0000194);
      setDefault_Hc_4(0.0000194);

      setValue_Dair_4(0.0959235);
      setDefault_Dair_4(0.0959235);

      setValue_Dwater_4(0.0000108);
      setDefault_Dwater_4(0.0000108);

      setValue_DHvb_4(8.62);
      setDefault_DHvb_4(8.62);

      setValue_Tc_4(568.0);
      setDefault_Tc_4(568.0);

      setValue_Tb_4(377.0);
      setDefault_Tb_4(377.0);

      setValue_MW_4(70.092);
      setDefault_MW_4(70.092);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(null);
      setDefault_Rfc_4(null);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(10.66);
      setDefault_Koc_4(10.66);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Cumene") {
      setValue_S_4(61.3);
      setDefault_S_4(61.3);

      setValue_Hc_4(7);
      setDefault_Hc_4(7);

      setValue_Dair_4(0.0603044);
      setDefault_Dair_4(0.0603044);

      setValue_Dwater_4(0.0000078566);
      setDefault_Dwater_4(0.0000078566);

      setValue_DHvb_4(10335.3);
      setDefault_DHvb_4(10335.3);

      setValue_Tc_4(631.1);
      setDefault_Tc_4(631.1);

      setValue_Tb_4(425.4);
      setDefault_Tb_4(425.4);

      setValue_MW_4(120.2);
      setDefault_MW_4(120.2);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.4);
      setDefault_Rfc_4(0.4);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(1500);
      setDefault_Koc_4(1500);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Cyanogen") {
      setValue_S_4(8000);
      setDefault_S_4(8000);

      setValue_Hc_4(0.0054);
      setDefault_Hc_4(0.0054);

      setValue_Dair_4(0.1237533);
      setDefault_Dair_4(0.1237533);

      setValue_Dwater_4(0.0000138);
      setDefault_Dwater_4(0.0000138);

      setValue_DHvb_4(5778);
      setDefault_DHvb_4(5778);

      setValue_Tc_4(401.3);
      setDefault_Tc_4(401.3);

      setValue_Tb_4(251.9);
      setDefault_Tb_4(251.9);

      setValue_MW_4(52.036);
      setDefault_MW_4(52.036);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(null);
      setDefault_Rfc_4(null);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(56);
      setDefault_Koc_4(56);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Cyanogen Chloride") {
      setValue_S_4(60000);
      setDefault_S_4(60000);

      setValue_Hc_4(0.0019412);
      setDefault_Hc_4(0.0019412);

      setValue_Dair_4(0.1207454);
      setDefault_Dair_4(0.1207454);

      setValue_Dwater_4(0.0000142);
      setDefault_Dwater_4(0.0000142);

      setValue_DHvb_4(6389.13);
      setDefault_DHvb_4(6389.13);

      setValue_Tc_4(429.0);
      setDefault_Tc_4(429.0);

      setValue_Tb_4(286.0);
      setDefault_Tb_4(286.0);

      setValue_MW_4(61.471);
      setDefault_MW_4(61.471);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(null);
      setDefault_Rfc_4(null);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(12.8);
      setDefault_Koc_4(12.8);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Cyclohexane") {
      setValue_S_4(55.0);
      setDefault_S_4(55.0);

      setValue_Hc_4(0.15);
      setDefault_Hc_4(0.15);

      setValue_Dair_4(0.0799729);
      setDefault_Dair_4(0.0799729);

      setValue_Dwater_4(0.0000091077);
      setDefault_Dwater_4(0.0000091077);

      setValue_DHvb_4(7153.6);
      setDefault_DHvb_4(7153.6);

      setValue_Tc_4(553.4);
      setDefault_Tc_4(553.4);

      setValue_Tb_4(353.7);
      setDefault_Tb_4(353.7);

      setValue_MW_4(84.163);
      setDefault_MW_4(84.163);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(6.0);
      setDefault_Rfc_4(6.0);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(966.4);
      setDefault_Koc_4(966.4);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Cyclohexanone") {
      setValue_S_4(25000);
      setDefault_S_4(25000);

      setValue_Hc_4(0.000009);
      setDefault_Hc_4(0.000009);

      setValue_Dair_4(0.0767599);
      setDefault_Dair_4(0.0767599);

      setValue_Dwater_4(0.0000093795);
      setDefault_Dwater_4(0.0000093795);

      setValue_DHvb_4(10762.40076);
      setDefault_DHvb_4(10762.40076);

      setValue_Tc_4(629.0);
      setDefault_Tc_4(629.0);

      setValue_Tb_4(428.55);
      setDefault_Tb_4(428.55);

      setValue_MW_4(98.146);
      setDefault_MW_4(98.146);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.7);
      setDefault_Rfc_4(0.7);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(37.05);
      setDefault_Koc_4(37.05);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Cyclohexene") {
      setValue_S_4(213.0);
      setDefault_S_4(213.0);

      setValue_Hc_4(0.0455);
      setDefault_Hc_4(0.0455);

      setValue_Dair_4(0.0831876);
      setDefault_Dair_4(0.0831876);

      setValue_Dwater_4(0.0000094975);
      setDefault_Dwater_4(0.0000094975);

      setValue_DHvb_4(7279.94);
      setDefault_DHvb_4(7279.94);

      setValue_Tc_4(560.55);
      setDefault_Tc_4(560.55);

      setValue_Tb_4(356.15);
      setDefault_Tb_4(356.15);

      setValue_MW_4(82.147);
      setDefault_MW_4(82.147);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(1.0);
      setDefault_Rfc_4(1.0);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(303.2);
      setDefault_Koc_4(303.2);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Cyclohexylamine") {
      setValue_S_4(1000000);
      setDefault_S_4(1000000);

      setValue_Hc_4(0.00000416);
      setDefault_Hc_4(0.00000416);

      setValue_Dair_4(0.0712945);
      setDefault_Dair_4(0.0712945);

      setValue_Dwater_4(0.0000085394);
      setDefault_Dwater_4(0.0000085394);

      setValue_DHvb_4(10444.55);
      setDefault_DHvb_4(10444.55);

      setValue_Tc_4(610.725);
      setDefault_Tc_4(610.725);

      setValue_Tb_4(407.15);
      setDefault_Tb_4(407.15);

      setValue_MW_4(99.177);
      setDefault_MW_4(99.177);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(null);
      setDefault_Rfc_4(null);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(24.64);
      setDefault_Koc_4(24.64);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "DDE, p,p'-") {
      setValue_S_4(0.04);
      setDefault_S_4(0.04);

      setValue_Hc_4(0.0000416);
      setDefault_Hc_4(0.0000416);

      setValue_Dair_4(0.0229959);
      setDefault_Dair_4(0.0229959);

      setValue_Dwater_4(0.0000058592);
      setDefault_Dwater_4(0.0000058592);

      setValue_DHvb_4(15000);
      setDefault_DHvb_4(15000);

      setValue_Tc_4(913.725);
      setDefault_Tc_4(913.725);

      setValue_Tb_4(609.15);
      setDefault_Tb_4(609.15);

      setValue_MW_4(318.03);
      setDefault_MW_4(318.03);

      setValue_IUR_4(0.000097);
      setDefault_IUR_4(0.000097);

      setValue_Rfc_4(null);
      setDefault_Rfc_4(null);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(446300);
      setDefault_Koc_4(446300);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Dibenzofuran") {
      setValue_S_4(3.1);
      setDefault_S_4(3.1);

      setValue_Hc_4(0.000213);
      setDefault_Hc_4(0.000213);

      setValue_Dair_4(0.0650663);
      setDefault_Dair_4(0.0650663);

      setValue_Dwater_4(0.0000073773);
      setDefault_Dwater_4(0.0000073773);

      setValue_DHvb_4(66400);
      setDefault_DHvb_4(66400);

      setValue_Tc_4(824.0);
      setDefault_Tc_4(824.0);

      setValue_Tb_4(560.0);
      setDefault_Tb_4(560.0);

      setValue_MW_4(168.2);
      setDefault_MW_4(168.2);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(null);
      setDefault_Rfc_4(null);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(3761);
      setDefault_Koc_4(3761);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Dibenzothiophene") {
      setValue_S_4(1.47);
      setDefault_S_4(1.47);

      setValue_Hc_4(0.0000338);
      setDefault_Hc_4(0.0000338);

      setValue_Dair_4(0.0355475);
      setDefault_Dair_4(0.0355475);

      setValue_Dwater_4(0.0000075958);
      setDefault_Dwater_4(0.0000075958);

      setValue_DHvb_4(22299.23518);
      setDefault_DHvb_4(22299.23518);

      setValue_Tc_4(908.475);
      setDefault_Tc_4(908.475);

      setValue_Tb_4(605.65);
      setDefault_Tb_4(605.65);

      setValue_MW_4(184.26);
      setDefault_MW_4(184.26);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(null);
      setDefault_Rfc_4(null);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(6324);
      setDefault_Koc_4(6324);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Dibromo-3-chloropropane, 1,2-") {
      setValue_S_4(1230);
      setDefault_S_4(1230);

      setValue_Hc_4(0.000147);
      setDefault_Hc_4(0.000147);

      setValue_Dair_4(0.0321351);
      setDefault_Dair_4(0.0321351);

      setValue_Dwater_4(0.0000089048);
      setDefault_Dwater_4(0.0000089048);

      setValue_DHvb_4(9960.045);
      setDefault_DHvb_4(9960.045);

      setValue_Tc_4(703.5);
      setDefault_Tc_4(703.5);

      setValue_Tb_4(469.0);
      setDefault_Tb_4(469.0);

      setValue_MW_4(236.33);
      setDefault_MW_4(236.33);

      setValue_IUR_4(0.006);
      setDefault_IUR_4(0.006);

      setValue_Rfc_4(0.0002);
      setDefault_Rfc_4(0.0002);

      setValue_Mut_4("Yes");
      setDefault_Mut_4("Yes");

      setValue_Koc_4(370.3);
      setDefault_Koc_4(370.3);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Dibromochloromethane") {
      setValue_S_4(2700);
      setDefault_S_4(2700);

      setValue_Hc_4(0.000783);
      setDefault_Hc_4(0.000783);

      setValue_Dair_4(0.0366356);
      setDefault_Dair_4(0.0366356);

      setValue_Dwater_4(0.0000106);
      setDefault_Dwater_4(0.0000106);

      setValue_DHvb_4(5900);
      setDefault_DHvb_4(5900);

      setValue_Tc_4(678.2);
      setDefault_Tc_4(678.2);

      setValue_Tb_4(393.0);
      setDefault_Tb_4(393.0);

      setValue_MW_4(208.28);
      setDefault_MW_4(208.28);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(null);
      setDefault_Rfc_4(null);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(74.86);
      setDefault_Koc_4(74.86);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Dibromoethane, 1,2-") {
      setValue_S_4(3910);
      setDefault_S_4(3910);

      setValue_Hc_4(0.00065);
      setDefault_Hc_4(0.00065);

      setValue_Dair_4(0.0430348);
      setDefault_Dair_4(0.0430348);

      setValue_Dwater_4(0.0000104);
      setDefault_Dwater_4(0.0000104);

      setValue_DHvb_4(8310.03);
      setDefault_DHvb_4(8310.03);

      setValue_Tc_4(583.0);
      setDefault_Tc_4(583.0);

      setValue_Tb_4(404.6);
      setDefault_Tb_4(404.6);

      setValue_MW_4(187.86);
      setDefault_MW_4(187.86);

      setValue_IUR_4(0.0006);
      setDefault_IUR_4(0.0006);

      setValue_Rfc_4(0.009);
      setDefault_Rfc_4(0.009);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(50.2);
      setDefault_Koc_4(50.2);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Dibromomethane (Methylene Bromide)") {
      setValue_S_4(11900);
      setDefault_S_4(11900);

      setValue_Hc_4(0.000822);
      setDefault_Hc_4(0.000822);

      setValue_Dair_4(0.0551373);
      setDefault_Dair_4(0.0551373);

      setValue_Dwater_4(0.0000119);
      setDefault_Dwater_4(0.0000119);

      setValue_DHvb_4(7867.88);
      setDefault_DHvb_4(7867.88);

      setValue_Tc_4(583.0);
      setDefault_Tc_4(583.0);

      setValue_Tb_4(370.0);
      setDefault_Tb_4(370.0);

      setValue_MW_4(173.84);
      setDefault_MW_4(173.84);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.004);
      setDefault_Rfc_4(0.004);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(29.86);
      setDefault_Koc_4(29.86);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Dichloro-2-butene, cis,4-") {
      setValue_S_4(580.2);
      setDefault_S_4(580.2);

      setValue_Hc_4(0.000664);
      setDefault_Hc_4(0.000664);

      setValue_Dair_4(0.0665047);
      setDefault_Dair_4(0.0665047);

      setValue_Dwater_4(0.00000929);
      setDefault_Dwater_4(0.00000929);

      setValue_DHvb_4(9125);
      setDefault_DHvb_4(9125);

      setValue_Tc_4(640.0);
      setDefault_Tc_4(640.0);

      setValue_Tb_4(425.5);
      setDefault_Tb_4(425.5);

      setValue_MW_4(125);
      setDefault_MW_4(125);

      setValue_IUR_4(0.0042);
      setDefault_IUR_4(0.0042);

      setValue_Rfc_4(null);
      setDefault_Rfc_4(null);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(180.4);
      setDefault_Koc_4(180.4);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Dichloro-2-butene, trans,4-") {
      setValue_S_4(850.0);
      setDefault_S_4(850.0);

      setValue_Hc_4(0.000664);
      setDefault_Hc_4(0.000664);

      setValue_Dair_4(0.0663818);
      setDefault_Dair_4(0.0663818);

      setValue_Dwater_4(0.0000092665);
      setDefault_Dwater_4(0.0000092665);

      setValue_DHvb_4(9125);
      setDefault_DHvb_4(9125);

      setValue_Tc_4(646.0);
      setDefault_Tc_4(646.0);

      setValue_Tb_4(428.4);
      setDefault_Tb_4(428.4);

      setValue_MW_4(125);
      setDefault_MW_4(125);

      setValue_IUR_4(0.0042);
      setDefault_IUR_4(0.0042);

      setValue_Rfc_4(null);
      setDefault_Rfc_4(null);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(180.4);
      setDefault_Koc_4(180.4);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Dichlorobenzene, 1,2-") {
      setValue_S_4(156.0);
      setDefault_S_4(156.0);

      setValue_Hc_4(0.00192);
      setDefault_Hc_4(0.00192);

      setValue_Dair_4(0.0561703);
      setDefault_Dair_4(0.0561703);

      setValue_Dwater_4(0.0000089213);
      setDefault_Dwater_4(0.0000089213);

      setValue_DHvb_4(9700);
      setDefault_DHvb_4(9700);

      setValue_Tc_4(705.0);
      setDefault_Tc_4(705.0);

      setValue_Tb_4(453.0);
      setDefault_Tb_4(453.0);

      setValue_MW_4(147);
      setDefault_MW_4(147);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.2);
      setDefault_Rfc_4(0.2);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(947.3);
      setDefault_Koc_4(947.3);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Dichlorobenzene, 1,4-") {
      setValue_S_4(81.3);
      setDefault_S_4(81.3);

      setValue_Hc_4(0.00241);
      setDefault_Hc_4(0.00241);

      setValue_Dair_4(0.0550429);
      setDefault_Dair_4(0.0550429);

      setValue_Dwater_4(0.0000086797);
      setDefault_Dwater_4(0.0000086797);

      setValue_DHvb_4(9271);
      setDefault_DHvb_4(9271);

      setValue_Tc_4(684.75);
      setDefault_Tc_4(684.75);

      setValue_Tb_4(447.0);
      setDefault_Tb_4(447.0);

      setValue_MW_4(147);
      setDefault_MW_4(147);

      setValue_IUR_4(0.000011);
      setDefault_IUR_4(0.000011);

      setValue_Rfc_4(0.8);
      setDefault_Rfc_4(0.8);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(966.4);
      setDefault_Koc_4(966.4);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Dichlorodifluoromethane") {
      setValue_S_4(280);
      setDefault_S_4(280);

      setValue_Hc_4(0.343);
      setDefault_Hc_4(0.343);

      setValue_Dair_4(0.0760293);
      setDefault_Dair_4(0.0760293);

      setValue_Dwater_4(0.0000108);
      setDefault_Dwater_4(0.0000108);

      setValue_DHvb_4(9421.36088);
      setDefault_DHvb_4(9421.36088);

      setValue_Tc_4(384.95);
      setDefault_Tc_4(384.95);

      setValue_Tb_4(243.2);
      setDefault_Tb_4(243.2);

      setValue_MW_4(120.91);
      setDefault_MW_4(120.91);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.1);
      setDefault_Rfc_4(0.1);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(74.86);
      setDefault_Koc_4(74.86);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Dichloroethane, 1,1-") {
      setValue_S_4(5040);
      setDefault_S_4(5040);

      setValue_Hc_4(0.00562);
      setDefault_Hc_4(0.00562);

      setValue_Dair_4(0.0836446);
      setDefault_Dair_4(0.0836446);

      setValue_Dwater_4(0.0000106);
      setDefault_Dwater_4(0.0000106);

      setValue_DHvb_4(6895);
      setDefault_DHvb_4(6895);

      setValue_Tc_4(523.0);
      setDefault_Tc_4(523.0);

      setValue_Tb_4(330.4);
      setDefault_Tb_4(330.4);

      setValue_MW_4(98.96);
      setDefault_MW_4(98.96);

      setValue_IUR_4(0.0000016);
      setDefault_IUR_4(0.0000016);

      setValue_Rfc_4(null);
      setDefault_Rfc_4(null);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(35.74);
      setDefault_Koc_4(35.74);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Dichloroethane, 1,2-") {
      setValue_S_4(8600);
      setDefault_S_4(8600);

      setValue_Hc_4(0.00118);
      setDefault_Hc_4(0.00118);

      setValue_Dair_4(0.0857221);
      setDefault_Dair_4(0.0857221);

      setValue_Dwater_4(0.000011);
      setDefault_Dwater_4(0.000011);

      setValue_DHvb_4(7643);
      setDefault_DHvb_4(7643);

      setValue_Tc_4(561.0);
      setDefault_Tc_4(561.0);

      setValue_Tb_4(356.5);
      setDefault_Tb_4(356.5);

      setValue_MW_4(98.96);
      setDefault_MW_4(98.96);

      setValue_IUR_4(0.000026);
      setDefault_IUR_4(0.000026);

      setValue_Rfc_4(0.007);
      setDefault_Rfc_4(0.007);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(19.23);
      setDefault_Koc_4(19.23);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Dichloroethylene, 1,1-") {
      setValue_S_4(2420);
      setDefault_S_4(2420);

      setValue_Hc_4(0.0261);
      setDefault_Hc_4(0.0261);

      setValue_Dair_4(0.0863107);
      setDefault_Dair_4(0.0863107);

      setValue_Dwater_4(0.000011);
      setDefault_Dwater_4(0.000011);

      setValue_DHvb_4(6247);
      setDefault_DHvb_4(6247);

      setValue_Tc_4(576.05);
      setDefault_Tc_4(576.05);

      setValue_Tb_4(304.6);
      setDefault_Tb_4(304.6);

      setValue_MW_4(96.944);
      setDefault_MW_4(96.944);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.2);
      setDefault_Rfc_4(0.2);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(70.51);
      setDefault_Koc_4(70.51);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Dichloroethylene, 1,2-cis-") {
      setValue_S_4(6410);
      setDefault_S_4(6410);

      setValue_Hc_4(0.00408);
      setDefault_Hc_4(0.00408);

      setValue_Dair_4(0.0884056);
      setDefault_Dair_4(0.0884056);

      setValue_Dwater_4(0.0000113);
      setDefault_Dwater_4(0.0000113);

      setValue_DHvb_4(7192);
      setDefault_DHvb_4(7192);

      setValue_Tc_4(544.0);
      setDefault_Tc_4(544.0);

      setValue_Tb_4(328.0);
      setDefault_Tb_4(328.0);

      setValue_MW_4(96.944);
      setDefault_MW_4(96.944);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(null);
      setDefault_Rfc_4(null);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(54.38);
      setDefault_Koc_4(54.38);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Dichloroethylene, 1,2-trans-") {
      setValue_S_4(4520);
      setDefault_S_4(4520);

      setValue_Hc_4(0.00938);
      setDefault_Hc_4(0.00938);

      setValue_Dair_4(0.0876094);
      setDefault_Dair_4(0.0876094);

      setValue_Dwater_4(0.0000112);
      setDefault_Dwater_4(0.0000112);

      setValue_DHvb_4(6717);
      setDefault_DHvb_4(6717);

      setValue_Tc_4(516.5);
      setDefault_Tc_4(516.5);

      setValue_Tb_4(328.0);
      setDefault_Tb_4(328.0);

      setValue_MW_4(96.944);
      setDefault_MW_4(96.944);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(null);
      setDefault_Rfc_4(null);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(54.39);
      setDefault_Koc_4(54.38);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Dichloropropane, 1,2-") {
      setValue_S_4(2800);
      setDefault_S_4(2800);

      setValue_Hc_4(0.00282);
      setDefault_Hc_4(0.00282);

      setValue_Dair_4(0.0733402);
      setDefault_Dair_4(0.0733402);

      setValue_Dwater_4(0.0000097252);
      setDefault_Dwater_4(0.0000097252);

      setValue_DHvb_4(7590);
      setDefault_DHvb_4(7590);

      setValue_Tc_4(572.0);
      setDefault_Tc_4(572.0);

      setValue_Tb_4(368.5);
      setDefault_Tb_4(368.5);

      setValue_MW_4(112.99);
      setDefault_MW_4(112.99);

      setValue_IUR_4(0.0000037);
      setDefault_IUR_4(0.0000037);

      setValue_Rfc_4(0.004);
      setDefault_Rfc_4(0.004);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(52.24);
      setDefault_Koc_4(52.24);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Dichloropropane, 1,3-") {
      setValue_S_4(2750);
      setDefault_S_4(2750);

      setValue_Hc_4(0.000976);
      setDefault_Hc_4(0.000976);

      setValue_Dair_4(0.0738738);
      setDefault_Dair_4(0.0738738);

      setValue_Dwater_4(0.000009823);
      setDefault_Dwater_4(0.000009823);

      setValue_DHvb_4(8102.51);
      setDefault_DHvb_4(8102.51);

      setValue_Tc_4(590.85);
      setDefault_Tc_4(590.85);

      setValue_Tb_4(393.9);
      setDefault_Tb_4(393.9);

      setValue_MW_4(112.99);
      setDefault_MW_4(112.99);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(null);
      setDefault_Rfc_4(null);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(54.38);
      setDefault_Koc_4(54.38);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Dichloropropene, 1,3-") {
      setValue_S_4(2800);
      setDefault_S_4(2800);

      setValue_Hc_4(0.00355);
      setDefault_Hc_4(0.00355);

      setValue_Dair_4(0.0762725);
      setDefault_Dair_4(0.0762725);

      setValue_Dwater_4(0.0000101);
      setDefault_Dwater_4(0.0000101);

      setValue_DHvb_4(7900);
      setDefault_DHvb_4(7900);

      setValue_Tc_4(587.38);
      setDefault_Tc_4(587.38);

      setValue_Tb_4(385.0);
      setDefault_Tb_4(385.0);

      setValue_MW_4(110.97);
      setDefault_MW_4(110.97);

      setValue_IUR_4(0.000004);
      setDefault_IUR_4(0.000004);

      setValue_Rfc_4(0.02);
      setDefault_Rfc_4(0.02);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(57.73);
      setDefault_Koc_4(57.73);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Dicyclopentadiene") {
      setValue_S_4(26.47);
      setDefault_S_4(26.47);

      setValue_Hc_4(0.0625);
      setDefault_Hc_4(0.0625);

      setValue_Dair_4(0.0557455);
      setDefault_Dair_4(0.0557455);

      setValue_Dwater_4(0.0000077554);
      setDefault_Dwater_4(0.0000077554);

      setValue_DHvb_4(2197.38);
      setDefault_DHvb_4(2197.38);

      setValue_Tc_4(664.5);
      setDefault_Tc_4(664.5);

      setValue_Tb_4(443.0);
      setDefault_Tb_4(443.0);

      setValue_MW_4(132.21);
      setDefault_MW_4(132.21);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.0003);
      setDefault_Rfc_4(0.0003);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(552.3);
      setDefault_Koc_4(552.3);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Diethylformamide") {
      setValue_S_4(1000000);
      setDefault_S_4(1000000);

      setValue_Hc_4(0.00000013);
      setDefault_Hc_4(0.00000013);

      setValue_Dair_4(0.073301);
      setDefault_Dair_4(0.073301);

      setValue_Dwater_4(0.0000089773);
      setDefault_Dwater_4(0.0000089773);

      setValue_DHvb_4(11687.38);
      setDefault_DHvb_4(11687.38);

      setValue_Tc_4(675.975);
      setDefault_Tc_4(675.975);

      setValue_Tb_4(450.65);
      setDefault_Tb_4(450.65);

      setValue_MW_4(101.15);
      setDefault_MW_4(101.15);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(null);
      setDefault_Rfc_4(null);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(4.785);
      setDefault_Koc_4(4.785);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Difluoroethane, 1,1-") {
      setValue_S_4(3200);
      setDefault_S_4(3200);

      setValue_Hc_4(0.0203);
      setDefault_Hc_4(0.0203);

      setValue_Dair_4(0.1023145);
      setDefault_Dair_4(0.1023145);

      setValue_Dwater_4(0.0000115);
      setDefault_Dwater_4(0.0000115);

      setValue_DHvb_4(5153.88);
      setDefault_DHvb_4(5153.88);

      setValue_Tc_4(372.15);
      setDefault_Tc_4(372.15);

      setValue_Tb_4(248.1);
      setDefault_Tb_4(248.1);

      setValue_MW_4(66.051);
      setDefault_MW_4(66.051);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(40.0);
      setDefault_Rfc_4(40.0);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(4.472);
      setDefault_Koc_4(4.472);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Dimethylaniline, N,N-") {
      setValue_S_4(1450);
      setDefault_S_4(1450);

      setValue_Hc_4(0.0000568);
      setDefault_Hc_4(0.0000568);

      setValue_Dair_4(0.0625411);
      setDefault_Dair_4(0.0625411);

      setValue_Dwater_4(0.0000083063);
      setDefault_Dwater_4(0.0000083063);

      setValue_DHvb_4(12276.68);
      setDefault_DHvb_4(12276.68);

      setValue_Tc_4(687.0);
      setDefault_Tc_4(687.0);

      setValue_Tb_4(466.45);
      setDefault_Tb_4(466.45);

      setValue_MW_4(121.18);
      setDefault_MW_4(121.18);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(null);
      setDefault_Rfc_4(null);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(137.3);
      setDefault_Koc_4(137.3);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Dimethylformamide") {
      setValue_S_4(1000000);
      setDefault_S_4(1000000);

      setValue_Hc_4(0.0000000739);
      setDefault_Hc_4(0.0000000739);

      setValue_Dair_4(0.0971846);
      setDefault_Dair_4(0.0971846);

      setValue_Dwater_4(0.0000112);
      setDefault_Dwater_4(0.0000112);

      setValue_DHvb_4(11369.0696);
      setDefault_DHvb_4(11369.0696);

      setValue_Tc_4(647.15);
      setDefault_Tc_4(647.15);

      setValue_Tb_4(426.15);
      setDefault_Tb_4(426.15);

      setValue_MW_4(73.095);
      setDefault_MW_4(73.095);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.03);
      setDefault_Rfc_4(0.03);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(1.24);
      setDefault_Koc_4(1.24);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Dimethylhydrazine, 1,1-") {
      setValue_S_4(1000000);
      setDefault_S_4(1000000);

      setValue_Hc_4(0.0000129);
      setDefault_Hc_4(0.0000129);

      setValue_Dair_4(0.1037857);
      setDefault_Dair_4(0.1037857);

      setValue_Dwater_4(0.0000113);
      setDefault_Dwater_4(0.0000113);

      setValue_DHvb_4(7791.873058);
      setDefault_DHvb_4(7791.873058);

      setValue_Tc_4(523.15);
      setDefault_Tc_4(523.15);

      setValue_Tb_4(337.05);
      setDefault_Tb_4(337.05);

      setValue_MW_4(60.099);
      setDefault_MW_4(60.099);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.000002);
      setDefault_Rfc_4(0.000002);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(1.672);
      setDefault_Koc_4(1.672);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Dioxane, 1,4-") {
      setValue_S_4(1000000);
      setDefault_S_4(1000000);

      setValue_Hc_4(0.0000048);
      setDefault_Hc_4(0.0000048);

      setValue_Dair_4(0.0873739);
      setDefault_Dair_4(0.0873739);

      setValue_Dwater_4(0.0000105);
      setDefault_Dwater_4(0.0000105);

      setValue_DHvb_4(8687.3502);
      setDefault_DHvb_4(8687.3502);

      setValue_Tc_4(585.15);
      setDefault_Tc_4(585.15);

      setValue_Tb_4(374.65);
      setDefault_Tb_4(374.65);

      setValue_MW_4(88.107);
      setDefault_MW_4(88.107);

      setValue_IUR_4(0.000005);
      setDefault_IUR_4(0.000005);

      setValue_Rfc_4(0.03);
      setDefault_Rfc_4(0.03);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(3.931);
      setDefault_Koc_4(3.931);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Epichlorohydrin") {
      setValue_S_4(65900);
      setDefault_S_4(65900);

      setValue_Hc_4(0.0000304);
      setDefault_Hc_4(0.0000304);

      setValue_Dair_4(0.0888682);
      setDefault_Dair_4(0.0888682);

      setValue_Dwater_4(0.0000111);
      setDefault_Dwater_4(0.0000111);

      setValue_DHvb_4(10.1);
      setDefault_DHvb_4(10.1);

      setValue_Tc_4(600.0);
      setDefault_Tc_4(600.0);

      setValue_Tb_4(390.0);
      setDefault_Tb_4(390.0);

      setValue_MW_4(92.526);
      setDefault_MW_4(92.526);

      setValue_IUR_4(0.0000012);
      setDefault_IUR_4(0.0000012);

      setValue_Rfc_4(0.001);
      setDefault_Rfc_4(0.001);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(12.12);
      setDefault_Koc_4(12.12);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Epoxybutane, 1,2-") {
      setValue_S_4(95000);
      setDefault_S_4(95000);

      setValue_Hc_4(0.00018);
      setDefault_Hc_4(0.00018);

      setValue_Dair_4(0.0928958);
      setDefault_Dair_4(0.0928958);

      setValue_Dwater_4(0.0000104);
      setDefault_Dwater_4(0.0000104);

      setValue_DHvb_4(7211);
      setDefault_DHvb_4(7211);

      setValue_Tc_4(516.0);
      setDefault_Tc_4(516.0);

      setValue_Tb_4(336.3);
      setDefault_Tb_4(336.3);

      setValue_MW_4(72.108);
      setDefault_MW_4(72.108);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.02);
      setDefault_Rfc_4(0.02);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(20.43);
      setDefault_Koc_4(20.43);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Ethoxyethanol Acetate, 2-") {
      setValue_S_4(187000);
      setDefault_S_4(187000);

      setValue_Hc_4(0.0000032);
      setDefault_Hc_4(0.0000032);

      setValue_Dair_4(0.0569504);
      setDefault_Dair_4(0.0569504);

      setValue_Dwater_4(0.0000079753);
      setDefault_Dwater_4(0.0000079753);

      setValue_DHvb_4(9779.84);
      setDefault_DHvb_4(9779.84);

      setValue_Tc_4(607.0);
      setDefault_Tc_4(607.0);

      setValue_Tb_4(429.55);
      setDefault_Tb_4(429.55);

      setValue_MW_4(132.16);
      setDefault_MW_4(132.16);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.06);
      setDefault_Rfc_4(0.06);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(12.45);
      setDefault_Koc_4(12.45);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Ethoxyethanol, 2-") {
      setValue_S_4(1000000);
      setDefault_S_4(1000000);

      setValue_Hc_4(0.00000047);
      setDefault_Hc_4(0.00000047);

      setValue_Dair_4(0.0817537);
      setDefault_Dair_4(0.0817537);

      setValue_Dwater_4(0.0000097306);
      setDefault_Dwater_4(0.0000097306);

      setValue_DHvb_4(9680.42838);
      setDefault_DHvb_4(9680.42838);

      setValue_Tc_4(612.225);
      setDefault_Tc_4(612.225);

      setValue_Tb_4(408.15);
      setDefault_Tb_4(408.15);

      setValue_MW_4(90.123);
      setDefault_MW_4(90.123);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.2);
      setDefault_Rfc_4(0.2);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(1.762);
      setDefault_Koc_4(1.762);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Ethyl Acetate") {
      setValue_S_4(80000);
      setDefault_S_4(80000);

      setValue_Hc_4(0.000134);
      setDefault_Hc_4(0.000134);

      setValue_Dair_4(0.0823158);
      setDefault_Dair_4(0.0823158);

      setValue_Dwater_4(0.0000097028);
      setDefault_Dwater_4(0.0000097028);

      setValue_DHvb_4(7633.66);
      setDefault_DHvb_4(7633.66);

      setValue_Tc_4(523.3);
      setDefault_Tc_4(523.3);

      setValue_Tb_4(350.1);
      setDefault_Tb_4(350.1);

      setValue_MW_4(88.107);
      setDefault_MW_4(88.107);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.07);
      setDefault_Rfc_4(0.07);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(18.34);
      setDefault_Koc_4(18.34);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Ethyl Acrylate") {
      setValue_S_4(15000);
      setDefault_S_4(15000);

      setValue_Hc_4(0.000339);
      setDefault_Hc_4(0.000339);

      setValue_Dair_4(0.0745392);
      setDefault_Dair_4(0.0745392);

      setValue_Dwater_4(0.0000091242);
      setDefault_Dwater_4(0.0000091242);

      setValue_DHvb_4(9362.76);
      setDefault_DHvb_4(9362.76);

      setValue_Tc_4(558.6);
      setDefault_Tc_4(558.6);

      setValue_Tb_4(372.4);
      setDefault_Tb_4(372.4);

      setValue_MW_4(100.12);
      setDefault_MW_4(100.12);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.008);
      setDefault_Rfc_4(0.008);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(38.87);
      setDefault_Koc_4(38.87);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Ethyl Chloride (Chloroethane)") {
      setValue_S_4(6710);
      setDefault_S_4(6710);

      setValue_Hc_4(0.0111);
      setDefault_Hc_4(0.0111);

      setValue_Dair_4(0.1037597);
      setDefault_Dair_4(0.1037597);

      setValue_Dwater_4(0.0000116);
      setDefault_Dwater_4(0.0000116);

      setValue_DHvb_4(5879.4);
      setDefault_DHvb_4(5879.4);

      setValue_Tc_4(460.4);
      setDefault_Tc_4(460.4);

      setValue_Tb_4(285.3);
      setDefault_Tb_4(285.3);

      setValue_MW_4(64.515);
      setDefault_MW_4(64.515);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(10.0);
      setDefault_Rfc_4(10.0);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(17.41);
      setDefault_Koc_4(17.41);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Ethyl Methacrylate") {
      setValue_S_4(5400);
      setDefault_S_4(5400);

      setValue_Hc_4(0.000573);
      setDefault_Hc_4(0.000573);

      setValue_Dair_4(0.0653441);
      setDefault_Dair_4(0.0653441);

      setValue_Dwater_4(0.0000083794);
      setDefault_Dwater_4(0.0000083794);

      setValue_DHvb_4(10957.44);
      setDefault_DHvb_4(10957.44);

      setValue_Tc_4(571.0);
      setDefault_Tc_4(571.0);

      setValue_Tb_4(390.0);
      setDefault_Tb_4(390.0);

      setValue_MW_4(114.15);
      setDefault_MW_4(114.15);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.3);
      setDefault_Rfc_4(0.3);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(85.62);
      setDefault_Koc_4(85.62);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Ethylbenzene") {
      setValue_S_4(169.0);
      setDefault_S_4(169.0);

      setValue_Hc_4(0.00788);
      setDefault_Hc_4(0.00788);

      setValue_Dair_4(0.0684652);
      setDefault_Dair_4(0.0684652);

      setValue_Dwater_4(0.0000084558);
      setDefault_Dwater_4(0.0000084558);

      setValue_DHvb_4(8501);
      setDefault_DHvb_4(8501);

      setValue_Tc_4(617.2);
      setDefault_Tc_4(617.2);

      setValue_Tb_4(409.1);
      setDefault_Tb_4(409.1);

      setValue_MW_4(106.17);
      setDefault_MW_4(106.17);

      setValue_IUR_4(0.0000025);
      setDefault_IUR_4(0.0000025);

      setValue_Rfc_4(1.0);
      setDefault_Rfc_4(1.0);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(541.4);
      setDefault_Koc_4(541.4);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Ethylene Diamine") {
      setValue_S_4(1000000);
      setDefault_S_4(1000000);

      setValue_Hc_4(0.00000000173);
      setDefault_Hc_4(0.00000000173);

      setValue_Dair_4(0.109446);
      setDefault_Dair_4(0.109446);

      setValue_Dwater_4(0.0000122);
      setDefault_Dwater_4(0.0000122);

      setValue_DHvb_4(9562.61);
      setDefault_DHvb_4(9562.61);

      setValue_Tc_4(585.225);
      setDefault_Tc_4(585.225);

      setValue_Tb_4(390.15);
      setDefault_Tb_4(390.15);

      setValue_MW_4(60.099);
      setDefault_MW_4(60.099);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(null);
      setDefault_Rfc_4(null);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(0.5664);
      setDefault_Koc_4(0.5664);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Ethylene Oxide") {
      setValue_S_4(1000000);
      setDefault_S_4(1000000);

      setValue_Hc_4(0.000148);
      setDefault_Hc_4(0.000148);

      setValue_Dair_4(0.1339638);
      setDefault_Dair_4(0.1339638);

      setValue_Dwater_4(0.0000145);
      setDefault_Dwater_4(0.0000145);

      setValue_DHvb_4(6104.06);
      setDefault_DHvb_4(6104.06);

      setValue_Tc_4(469.0);
      setDefault_Tc_4(469.0);

      setValue_Tb_4(283.6);
      setDefault_Tb_4(283.6);

      setValue_MW_4(44.054);
      setDefault_MW_4(44.054);

      setValue_IUR_4(0.003);
      setDefault_IUR_4(0.003);

      setValue_Rfc_4(0.03);
      setDefault_Rfc_4(0.03);

      setValue_Mut_4("Yes");
      setDefault_Mut_4("Yes");

      setValue_Koc_4(4.622);
      setDefault_Koc_4(4.622);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Fluorene") {
      setValue_S_4(1.69);
      setDefault_S_4(1.69);

      setValue_Hc_4(0.0000962);
      setDefault_Hc_4(0.0000962);

      setValue_Dair_4(0.0439743);
      setDefault_Dair_4(0.0439743);

      setValue_Dwater_4(0.000007889);
      setDefault_Dwater_4(0.000007889);

      setValue_DHvb_4(12666);
      setDefault_DHvb_4(12666);

      setValue_Tc_4(870.0);
      setDefault_Tc_4(870.0);

      setValue_Tb_4(568.0);
      setDefault_Tb_4(568.0);

      setValue_MW_4(166.22);
      setDefault_MW_4(166.22);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(null);
      setDefault_Rfc_4(null);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(4241);
      setDefault_Koc_4(4241);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Formaldehyde") {
      setValue_S_4(400000);
      setDefault_S_4(400000);

      setValue_Hc_4(0.000000337);
      setDefault_Hc_4(0.000000337);

      setValue_Dair_4(0.1670871);
      setDefault_Dair_4(0.1670871);

      setValue_Dwater_4(0.0000174);
      setDefault_Dwater_4(0.0000174);

      setValue_DHvb_4(5919.9);
      setDefault_DHvb_4(5919.9);

      setValue_Tc_4(412.35);
      setDefault_Tc_4(412.35);

      setValue_Tb_4(254.05);
      setDefault_Tb_4(254.05);

      setValue_MW_4(30.026);
      setDefault_MW_4(30.026);

      setValue_IUR_4(0.000013);
      setDefault_IUR_4(0.000013);

      setValue_Rfc_4(0.0098);
      setDefault_Rfc_4(0.0098);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(7.752);
      setDefault_Koc_4(7.752);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Formic Acid") {
      setValue_S_4(1000000);
      setDefault_S_4(1000000);

      setValue_Hc_4(0.000000167);
      setDefault_Hc_4(0.000000167);

      setValue_Dair_4(0.1478701);
      setDefault_Dair_4(0.1478701);

      setValue_Dwater_4(0.0000172);
      setDefault_Dwater_4(0.0000172);

      setValue_DHvb_4(4800.8046);
      setDefault_DHvb_4(4800.8046);

      setValue_Tc_4(588.0);
      setDefault_Tc_4(588.0);

      setValue_Tb_4(374.15);
      setDefault_Tb_4(374.15);

      setValue_MW_4(46.026);
      setDefault_MW_4(46.026);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.0003);
      setDefault_Rfc_4(0.0003);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(0.7195);
      setDefault_Koc_4(0.7195);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Furan") {
      setValue_S_4(10000);
      setDefault_S_4(10000);

      setValue_Hc_4(0.0054);
      setDefault_Hc_4(0.0054);

      setValue_Dair_4(0.1022757);
      setDefault_Dair_4(0.1022757);

      setValue_Dwater_4(0.0000117);
      setDefault_Dwater_4(0.0000117);

      setValue_DHvb_4(6476.9);
      setDefault_DHvb_4(6476.9);

      setValue_Tc_4(490.2);
      setDefault_Tc_4(490.2);

      setValue_Tb_4(304.5);
      setDefault_Tb_4(304.5);

      setValue_MW_4(68.076);
      setDefault_MW_4(68.076);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(null);
      setDefault_Rfc_4(null);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(14.54);
      setDefault_Koc_4(14.54);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Furfural") {
      setValue_S_4(74100);
      setDefault_S_4(74100);

      setValue_Hc_4(0.00000377);
      setDefault_Hc_4(0.00000377);

      setValue_Dair_4(0.0853213);
      setDefault_Dair_4(0.0853213);

      setValue_Dwater_4(0.0000107);
      setDefault_Dwater_4(0.0000107);

      setValue_DHvb_4(9219.4556);
      setDefault_DHvb_4(9219.4556);

      setValue_Tc_4(670.0);
      setDefault_Tc_4(670.0);

      setValue_Tb_4(434.85);
      setDefault_Tb_4(434.85);

      setValue_MW_4(96.086);
      setDefault_MW_4(96.086);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.05);
      setDefault_Rfc_4(0.05);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(8.368);
      setDefault_Koc_4(8.368);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Heptachlor") {
      setValue_S_4(0.18);
      setDefault_S_4(0.18);

      setValue_Hc_4(0.000294);
      setDefault_Hc_4(0.000294);

      setValue_Dair_4(0.0223441);
      setDefault_Dair_4(0.0223441);

      setValue_Dwater_4(0.0000056959);
      setDefault_Dwater_4(0.0000056959);

      setValue_DHvb_4(13000);
      setDefault_DHvb_4(13000);

      setValue_Tc_4(874.725);
      setDefault_Tc_4(874.725);

      setValue_Tb_4(583.15);
      setDefault_Tb_4(583.15);

      setValue_MW_4(373.32);
      setDefault_MW_4(373.32);

      setValue_IUR_4(0.0013);
      setDefault_IUR_4(0.0013);

      setValue_Rfc_4(null);
      setDefault_Rfc_4(null);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(55850);
      setDefault_Koc_4(55850);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Heptachlor Epoxide") {
      setValue_S_4(0.2);
      setDefault_S_4(0.2);

      setValue_Hc_4(0.000021);
      setDefault_Hc_4(0.000021);

      setValue_Dair_4(0.0240006);
      setDefault_Dair_4(0.0240006);

      setValue_Dwater_4(0.0000062475);
      setDefault_Dwater_4(0.0000062475);

      setValue_DHvb_4(16000);
      setDefault_DHvb_4(16000);

      setValue_Tc_4(920.94);
      setDefault_Tc_4(920.94);

      setValue_Tb_4(613.96);
      setDefault_Tb_4(613.96);

      setValue_MW_4(389.32);
      setDefault_MW_4(389.32);

      setValue_IUR_4(0.0026);
      setDefault_IUR_4(0.0026);

      setValue_Rfc_4(null);
      setDefault_Rfc_4(null);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(3882);
      setDefault_Koc_4(3882);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Hexachlorobenzene") {
      setValue_S_4(0.0062);
      setDefault_S_4(0.0062);

      setValue_Hc_4(0.0017);
      setDefault_Hc_4(0.0017);

      setValue_Dair_4(0.0289745);
      setDefault_Dair_4(0.0289745);

      setValue_Dwater_4(0.0000078497);
      setDefault_Dwater_4(0.0000078497);

      setValue_DHvb_4(11703.454);
      setDefault_DHvb_4(11703.454);

      setValue_Tc_4(897.225);
      setDefault_Tc_4(897.225);

      setValue_Tb_4(598.15);
      setDefault_Tb_4(598.15);

      setValue_MW_4(284.78);
      setDefault_MW_4(284.78);

      setValue_IUR_4(0.00046);
      setDefault_IUR_4(0.00046);

      setValue_Rfc_4(null);
      setDefault_Rfc_4(null);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(17340);
      setDefault_Koc_4(17340);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Hexachlorobutadiene") {
      setValue_S_4(3.2);
      setDefault_S_4(3.2);

      setValue_Hc_4(0.0103);
      setDefault_Hc_4(0.0103);

      setValue_Dair_4(0.0267445);
      setDefault_Dair_4(0.0267445);

      setValue_Dwater_4(0.0000070264);
      setDefault_Dwater_4(0.0000070264);

      setValue_DHvb_4(10206);
      setDefault_DHvb_4(10206);

      setValue_Tc_4(732.225);
      setDefault_Tc_4(732.225);

      setValue_Tb_4(488.15);
      setDefault_Tb_4(488.15);

      setValue_MW_4(260.76);
      setDefault_MW_4(260.76);

      setValue_IUR_4(0.000022);
      setDefault_IUR_4(0.000022);

      setValue_Rfc_4(null);
      setDefault_Rfc_4(null);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(14070);
      setDefault_Koc_4(14070);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Hexachlorocyclopentadiene") {
      setValue_S_4(1.8);
      setDefault_S_4(1.8);

      setValue_Hc_4(0.027);
      setDefault_Hc_4(0.027);

      setValue_Dair_4(0.0272382);
      setDefault_Dair_4(0.0272382);

      setValue_Dwater_4(0.000007217);
      setDefault_Dwater_4(0.000007217);

      setValue_DHvb_4(42992.28);
      setDefault_DHvb_4(42992.28);

      setValue_Tc_4(768.225);
      setDefault_Tc_4(768.225);

      setValue_Tb_4(512.15);
      setDefault_Tb_4(512.15);

      setValue_MW_4(272.77);
      setDefault_MW_4(272.77);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.0002);
      setDefault_Rfc_4(0.0002);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(23650);
      setDefault_Koc_4(23650);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Hexachloroethane") {
      setValue_S_4(50.0);
      setDefault_S_4(50.0);

      setValue_Hc_4(0.00389);
      setDefault_Hc_4(0.00389);

      setValue_Dair_4(0.0320938);
      setDefault_Dair_4(0.0320938);

      setValue_Dwater_4(0.0000088904);
      setDefault_Dwater_4(0.0000088904);

      setValue_DHvb_4(11711.3);
      setDefault_DHvb_4(11711.3);

      setValue_Tc_4(641.4);
      setDefault_Tc_4(641.4);

      setValue_Tb_4(427.6);
      setDefault_Tb_4(427.6);

      setValue_MW_4(236.74);
      setDefault_MW_4(236.74);

      setValue_IUR_4(0.000011);
      setDefault_IUR_4(0.000011);

      setValue_Rfc_4(0.03);
      setDefault_Rfc_4(0.03);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(3915);
      setDefault_Koc_4(3915);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Hexane, N-") {
      setValue_S_4(9.5);
      setDefault_S_4(9.5);

      setValue_Hc_4(1.8);
      setDefault_Hc_4(1.8);

      setValue_Dair_4(0.0731078);
      setDefault_Dair_4(0.0731078);

      setValue_Dwater_4(0.0000081658);
      setDefault_Dwater_4(0.0000081658);

      setValue_DHvb_4(6895.15);
      setDefault_DHvb_4(6895.15);

      setValue_Tc_4(508.0);
      setDefault_Tc_4(508.0);

      setValue_Tb_4(341.7);
      setDefault_Tb_4(341.7);

      setValue_MW_4(86.178);
      setDefault_MW_4(86.178);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.7);
      setDefault_Rfc_4(0.7);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(2423);
      setDefault_Koc_4(2423);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Hexanone, 2-") {
      setValue_S_4(17200);
      setDefault_S_4(17200);

      setValue_Hc_4(0.0000932);
      setDefault_Hc_4(0.0000932);

      setValue_Dair_4(0.0703564);
      setDefault_Dair_4(0.0703564);

      setValue_Dwater_4(0.0000084404);
      setDefault_Dwater_4(0.0000084404);

      setValue_DHvb_4(8610.39);
      setDefault_DHvb_4(8610.39);

      setValue_Tc_4(600.9);
      setDefault_Tc_4(600.9);

      setValue_Tb_4(400.6);
      setDefault_Tb_4(400.6);

      setValue_MW_4(100.16);
      setDefault_MW_4(100.16);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.03);
      setDefault_Rfc_4(0.03);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(76.56);
      setDefault_Koc_4(76.56);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Hydrazine") {
      setValue_S_4(1000000);
      setDefault_S_4(1000000);

      setValue_Hc_4(0.00000061);
      setDefault_Hc_4(0.00000061);

      setValue_Dair_4(0.1733034);
      setDefault_Dair_4(0.1733034);

      setValue_Dwater_4(0.000019);
      setDefault_Dwater_4(0.000019);

      setValue_DHvb_4(10812.55842);
      setDefault_DHvb_4(10812.55842);

      setValue_Tc_4(653.15);
      setDefault_Tc_4(653.15);

      setValue_Tb_4(386.65);
      setDefault_Tb_4(386.65);

      setValue_MW_4(32.045);
      setDefault_MW_4(32.045);

      setValue_IUR_4(0.0049);
      setDefault_IUR_4(0.0049);

      setValue_Rfc_4(0.00003);
      setDefault_Rfc_4(0.00003);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(0.01596);
      setDefault_Koc_4(0.01596);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Hydrogen Chloride") {
      setValue_S_4(673000);
      setDefault_S_4(673000);

      setValue_Hc_4(2040000);
      setDefault_Hc_4(2040000);

      setValue_Dair_4(0.1879912);
      setDefault_Dair_4(0.1879912);

      setValue_Dwater_4(0.0000227);
      setDefault_Dwater_4(0.0000227);

      setValue_DHvb_4(3855.476017);
      setDefault_DHvb_4(3855.476017);

      setValue_Tc_4(324.55);
      setDefault_Tc_4(324.55);

      setValue_Tb_4(188.1);
      setDefault_Tb_4(188.1);

      setValue_MW_4(35.45);
      setDefault_MW_4(35.45);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.02);
      setDefault_Rfc_4(0.02);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(2.939);
      setDefault_Koc_4(2.939);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Hydrogen Cyanide") {
      setValue_S_4(1000000);
      setDefault_S_4(1000000);

      setValue_Hc_4(0.000133);
      setDefault_Hc_4(0.000133);

      setValue_Dair_4(0.1678036);
      setDefault_Dair_4(0.1678036);

      setValue_Dwater_4(0.0000168);
      setDefault_Dwater_4(0.0000168);

      setValue_DHvb_4(6676.41);
      setDefault_DHvb_4(6676.41);

      setValue_Tc_4(456.7);
      setDefault_Tc_4(456.7);

      setValue_Tb_4(298.6);
      setDefault_Tb_4(298.6);

      setValue_MW_4(27.026);
      setDefault_MW_4(27.026);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.0008);
      setDefault_Rfc_4(0.0008);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(15.1);
      setDefault_Koc_4(15.1);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Hydrogen Fluoride") {
      setValue_S_4(1000000);
      setDefault_S_4(1000000);

      setValue_Hc_4(0.000104);
      setDefault_Hc_4(0.000104);

      setValue_Dair_4(0.2190996);
      setDefault_Dair_4(0.2190996);

      setValue_Dwater_4(0.0000223);
      setDefault_Dwater_4(0.0000223);

      setValue_DHvb_4(1789.673078);
      setDefault_DHvb_4(1789.673078);

      setValue_Tc_4(461.15);
      setDefault_Tc_4(461.15);

      setValue_Tb_4(292.66);
      setDefault_Tb_4(292.66);

      setValue_MW_4(20.006);
      setDefault_MW_4(20.006);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.014);
      setDefault_Rfc_4(0.014);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(1.582);
      setDefault_Koc_4(1.582);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Hydrogen Sulfide") {
      setValue_S_4(3740);
      setDefault_S_4(3740);

      setValue_Hc_4(0.00856);
      setDefault_Hc_4(0.00856);

      setValue_Dair_4(0.1880669);
      setDefault_Dair_4(0.1880669);

      setValue_Dwater_4(0.0000223);
      setDefault_Dwater_4(0.0000223);

      setValue_DHvb_4(4459.25482);
      setDefault_DHvb_4(4459.25482);

      setValue_Tc_4(373.1);
      setDefault_Tc_4(373.1);

      setValue_Tb_4(212.82);
      setDefault_Tb_4(212.82);

      setValue_MW_4(34.08);
      setDefault_MW_4(34.08);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.002);
      setDefault_Rfc_4(0.002);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(0.06337);
      setDefault_Koc_4(0.06337);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Isobutyl Alcohol") {
      setValue_S_4(85000);
      setDefault_S_4(85000);

      setValue_Hc_4(0.00000978);
      setDefault_Hc_4(0.00000978);

      setValue_Dair_4(0.0896677);
      setDefault_Dair_4(0.0896677);

      setValue_Dwater_4(0.00001);
      setDefault_Dwater_4(0.00001);

      setValue_DHvb_4(103496.65);
      setDefault_DHvb_4(103496.65);

      setValue_Tc_4(547.78);
      setDefault_Tc_4(547.78);

      setValue_Tb_4(380.95);
      setDefault_Tb_4(380.95);

      setValue_MW_4(74.124);
      setDefault_MW_4(74.124);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(null);
      setDefault_Rfc_4(null);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(8.591);
      setDefault_Koc_4(8.591);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Isopropanol") {
      setValue_S_4(1000000);
      setDefault_S_4(1000000);

      setValue_Hc_4(0.0000081);
      setDefault_Hc_4(0.0000081);

      setValue_Dair_4(0.1032261);
      setDefault_Dair_4(0.1032261);

      setValue_Dwater_4(0.0000112);
      setDefault_Dwater_4(0.0000112);

      setValue_DHvb_4(10841.21994);
      setDefault_DHvb_4(10841.21994);

      setValue_Tc_4(508.3);
      setDefault_Tc_4(508.3);

      setValue_Tb_4(355.45);
      setDefault_Tb_4(355.45);

      setValue_MW_4(60.097);
      setDefault_MW_4(60.097);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.2);
      setDefault_Rfc_4(0.2);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(3.478);
      setDefault_Koc_4(3.478);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Mercury (elemental)") {
      setValue_S_4(0.06);
      setDefault_S_4(0.06);

      setValue_Hc_4(0.008622);
      setDefault_Hc_4(0.008622);

      setValue_Dair_4(0.0307);
      setDefault_Dair_4(0.0307);

      setValue_Dwater_4(0.0000063);
      setDefault_Dwater_4(0.0000063);

      setValue_DHvb_4(14127);
      setDefault_DHvb_4(14127);

      setValue_Tc_4(1750);
      setDefault_Tc_4(1750);

      setValue_Tb_4(356.6);
      setDefault_Tb_4(356.6);

      setValue_MW_4(200.59);
      setDefault_MW_4(200.59);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.0003);
      setDefault_Rfc_4(0.0003);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(3.449);
      setDefault_Koc_4(3.449);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Methacrylonitrile") {
      setValue_S_4(25400);
      setDefault_S_4(25400);

      setValue_Hc_4(0.000247);
      setDefault_Hc_4(0.000247);

      setValue_Dair_4(0.0964299);
      setDefault_Dair_4(0.0964299);

      setValue_Dwater_4(0.0000106);
      setDefault_Dwater_4(0.0000106);

      setValue_DHvb_4(7600.2);
      setDefault_DHvb_4(7600.2);

      setValue_Tc_4(554.0);
      setDefault_Tc_4(554.0);

      setValue_Tb_4(363.3);
      setDefault_Tb_4(363.3);

      setValue_MW_4(67.091);
      setDefault_MW_4(67.091);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.03);
      setDefault_Rfc_4(0.03);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(49.36);
      setDefault_Koc_4(49.36);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Methanol") {
      setValue_S_4(1000000);
      setDefault_S_4(1000000);

      setValue_Hc_4(0.00000455);
      setDefault_Hc_4(0.00000455);

      setValue_Dair_4(0.1582741);
      setDefault_Dair_4(0.1582741);

      setValue_Dwater_4(0.0000165);
      setDefault_Dwater_4(0.0000165);

      setValue_DHvb_4(8918.50964);
      setDefault_DHvb_4(8918.50964);

      setValue_Tc_4(513.15);
      setDefault_Tc_4(513.15);

      setValue_Tb_4(337.85);
      setDefault_Tb_4(337.85);

      setValue_MW_4(32.042);
      setDefault_MW_4(32.042);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(20.0);
      setDefault_Rfc_4(20.0);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(1.224);
      setDefault_Koc_4(1.224);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Methoxyethanol Acetate, 2-") {
      setValue_S_4(1000000);
      setDefault_S_4(1000000);

      setValue_Hc_4(0.000000311);
      setDefault_Hc_4(0.000000311);

      setValue_Dair_4(0.0658347);
      setDefault_Dair_4(0.0658347);

      setValue_Dwater_4(0.0000087052);
      setDefault_Dwater_4(0.0000087052);

      setValue_DHvb_4(10485.3394);
      setDefault_DHvb_4(10485.3394);

      setValue_Tc_4(624.225);
      setDefault_Tc_4(624.225);

      setValue_Tb_4(416.15);
      setDefault_Tb_4(416.15);

      setValue_MW_4(118.13);
      setDefault_MW_4(118.13);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.001);
      setDefault_Rfc_4(0.001);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(6.671);
      setDefault_Koc_4(6.671);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Methoxyethanol, 2-") {
      setValue_S_4(1000000);
      setDefault_S_4(1000000);

      setValue_Hc_4(0.00000033);
      setDefault_Hc_4(0.00000033);

      setValue_Dair_4(0.0951557);
      setDefault_Dair_4(0.0951557);

      setValue_Dwater_4(0.000011);
      setDefault_Dwater_4(0.000011);

      setValue_DHvb_4(8966.27884);
      setDefault_DHvb_4(8966.27884);

      setValue_Tc_4(597.6);
      setDefault_Tc_4(597.6);

      setValue_Tb_4(397.25);
      setDefault_Tb_4(397.25);

      setValue_MW_4(76.096);
      setDefault_MW_4(76.096);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.02);
      setDefault_Rfc_4(0.02);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(0.9935);
      setDefault_Koc_4(0.9935);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Methyl Acetate") {
      setValue_S_4(243000);
      setDefault_S_4(243000);

      setValue_Hc_4(0.000115);
      setDefault_Hc_4(0.000115);

      setValue_Dair_4(0.0957763);
      setDefault_Dair_4(0.0957763);

      setValue_Dwater_4(0.000011);
      setDefault_Dwater_4(0.000011);

      setValue_DHvb_4(7260.0791);
      setDefault_DHvb_4(7260.0791);

      setValue_Tc_4(506.7);
      setDefault_Tc_4(506.7);

      setValue_Tb_4(365);
      setDefault_Tb_4(365);

      setValue_MW_4(74.08);
      setDefault_MW_4(74.08);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(null);
      setDefault_Rfc_4(null);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(9.101);
      setDefault_Koc_4(9.101);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Methyl Acrylate") {
      setValue_S_4(49400);
      setDefault_S_4(49400);

      setValue_Hc_4(0.000199);
      setDefault_Hc_4(0.000199);

      setValue_Dair_4(0.0859972);
      setDefault_Dair_4(0.0859972);

      setValue_Dwater_4(0.0000102);
      setDefault_Dwater_4(0.0000102);

      setValue_DHvb_4(7749);
      setDefault_DHvb_4(7749);

      setValue_Tc_4(536.0);
      setDefault_Tc_4(536.0);

      setValue_Tb_4(353.2);
      setDefault_Tb_4(353.2);

      setValue_MW_4(86.091);
      setDefault_MW_4(86.091);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.02);
      setDefault_Rfc_4(0.02);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(20.05);
      setDefault_Koc_4(20.05);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Methyl Ethyl Ketone (2-Butanone)") {
      setValue_S_4(223000);
      setDefault_S_4(223000);

      setValue_Hc_4(0.0000569);
      setDefault_Hc_4(0.0000569);

      setValue_Dair_4(0.0914462);
      setDefault_Dair_4(0.0914462);

      setValue_Dwater_4(0.0000102);
      setDefault_Dwater_4(0.0000102);

      setValue_DHvb_4(7480.7);
      setDefault_DHvb_4(7480.7);

      setValue_Tc_4(536.78);
      setDefault_Tc_4(536.78);

      setValue_Tb_4(352.5);
      setDefault_Tb_4(352.5);

      setValue_MW_4(72.108);
      setDefault_MW_4(72.108);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(5.0);
      setDefault_Rfc_4(5.0);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(19.1);
      setDefault_Koc_4(19.1);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Methyl Hydrazine") {
      setValue_S_4(1000000);
      setDefault_S_4(1000000);

      setValue_Hc_4(0.000003031);
      setDefault_Hc_4(0.000003031);

      setValue_Dair_4(0.1290894);
      setDefault_Dair_4(0.1290894);

      setValue_Dwater_4(0.000014);
      setDefault_Dwater_4(0.000014);

      setValue_DHvb_4(8887.937352);
      setDefault_DHvb_4(8887.937352);

      setValue_Tc_4(585.15);
      setDefault_Tc_4(585.15);

      setValue_Tb_4(360.65);
      setDefault_Tb_4(360.65);

      setValue_MW_4(46.072);
      setDefault_MW_4(46.072);

      setValue_IUR_4(0.001);
      setDefault_IUR_4(0.001);

      setValue_Rfc_4(0.00002);
      setDefault_Rfc_4(0.00002);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(2.101);
      setDefault_Koc_4(2.101);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (
      selectedChem === "Methyl Isobutyl Ketone (4-methyl-2-pentanone)"
    ) {
      setValue_S_4(19000);
      setDefault_S_4(19000);

      setValue_Hc_4(0.000138);
      setDefault_Hc_4(0.000138);

      setValue_Dair_4(0.0697797);
      setDefault_Dair_4(0.0697797);

      setValue_Dwater_4(0.0000083477);
      setDefault_Dwater_4(0.0000083477);

      setValue_DHvb_4(8243.11);
      setDefault_DHvb_4(8243.11);

      setValue_Tc_4(571.0);
      setDefault_Tc_4(571.0);

      setValue_Tb_4(389.5);
      setDefault_Tb_4(389.5);

      setValue_MW_4(100.16);
      setDefault_MW_4(100.16);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(3.0);
      setDefault_Rfc_4(3.0);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(70.03);
      setDefault_Koc_4(70.03);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Methyl Methacrylate") {
      setValue_S_4(15000);
      setDefault_S_4(15000);

      setValue_Hc_4(0.000319);
      setDefault_Hc_4(0.000319);

      setValue_Dair_4(0.0750447);
      setDefault_Dair_4(0.0750447);

      setValue_Dwater_4(0.0000092087);
      setDefault_Dwater_4(0.0000092087);

      setValue_DHvb_4(8974.9);
      setDefault_DHvb_4(8974.9);

      setValue_Tc_4(567.0);
      setDefault_Tc_4(567.0);

      setValue_Tb_4(373.5);
      setDefault_Tb_4(373.5);

      setValue_MW_4(100.12);
      setDefault_MW_4(100.12);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.7);
      setDefault_Rfc_4(0.7);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(41.96);
      setDefault_Koc_4(41.96);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Methyl Styrene (Mixed Isomers)") {
      setValue_S_4(89.0);
      setDefault_S_4(89.0);

      setValue_Hc_4(0.00262);
      setDefault_Hc_4(0.00262);

      setValue_Dair_4(0.017397);
      setDefault_Dair_4(0.017397);

      setValue_Dwater_4(0.0000041793);
      setDefault_Dwater_4(0.0000041793);

      setValue_DHvb_4(12027.44);
      setDefault_DHvb_4(12027.44);

      setValue_Tc_4(655.0);
      setDefault_Tc_4(655.0);

      setValue_Tb_4(437.65);
      setDefault_Tb_4(437.65);

      setValue_MW_4(354.54);
      setDefault_MW_4(354.54);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.04);
      setDefault_Rfc_4(0.04);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(966.4);
      setDefault_Koc_4(966.4);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Methyl tert-Butyl Ether (MTBE)") {
      setValue_S_4(51000);
      setDefault_S_4(51000);

      setValue_Hc_4(0.000587);
      setDefault_Hc_4(0.000587);

      setValue_Dair_4(0.0752672);
      setDefault_Dair_4(0.0752672);

      setValue_Dwater_4(0.0000085904);
      setDefault_Dwater_4(0.0000085904);

      setValue_DHvb_4(6677.66);
      setDefault_DHvb_4(6677.66);

      setValue_Tc_4(497.1);
      setDefault_Tc_4(497.1);

      setValue_Tb_4(328.2);
      setDefault_Tb_4(328.2);

      setValue_MW_4(88.151);
      setDefault_MW_4(88.151);

      setValue_IUR_4(0.00000026);
      setDefault_IUR_4(0.00000026);

      setValue_Rfc_4(3.0);
      setDefault_Rfc_4(3.0);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(22.62);
      setDefault_Koc_4(22.62);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Methylene Chloride") {
      setValue_S_4(13000);
      setDefault_S_4(13000);

      setValue_Hc_4(0.00325);
      setDefault_Hc_4(0.00325);

      setValue_Dair_4(0.0999362);
      setDefault_Dair_4(0.0999362);

      setValue_Dwater_4(0.0000125);
      setDefault_Dwater_4(0.0000125);

      setValue_DHvb_4(6706);
      setDefault_DHvb_4(6706);

      setValue_Tc_4(510.0);
      setDefault_Tc_4(510.0);

      setValue_Tb_4(313.0);
      setDefault_Tb_4(313.0);

      setValue_MW_4(84.933);
      setDefault_MW_4(84.933);

      setValue_IUR_4(0.00000001);
      setDefault_IUR_4(0.00000001);

      setValue_Rfc_4(0.6);
      setDefault_Rfc_4(0.6);

      setValue_Mut_4("Yes");
      setDefault_Mut_4("Yes");

      setValue_Koc_4(12.15);
      setDefault_Koc_4(12.15);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Methylnaphthalene, 1-") {
      setValue_S_4(25.8);
      setDefault_S_4(25.8);

      setValue_Hc_4(0.000514);
      setDefault_Hc_4(0.000514);

      setValue_Dair_4(0.0527705);
      setDefault_Dair_4(0.0527705);

      setValue_Dwater_4(0.0000078477);
      setDefault_Dwater_4(0.0000078477);

      setValue_DHvb_4(13690.65);
      setDefault_DHvb_4(13690.65);

      setValue_Tc_4(771.8);
      setDefault_Tc_4(771.8);

      setValue_Tb_4(517.7);
      setDefault_Tb_4(517.7);

      setValue_MW_4(142.2);
      setDefault_MW_4(142.2);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(null);
      setDefault_Rfc_4(null);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(2282);
      setDefault_Koc_4(2282);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Methylnaphthalene, 2-") {
      setValue_S_4(24.6);
      setDefault_S_4(24.6);

      setValue_Hc_4(0.000518);
      setDefault_Hc_4(0.000518);

      setValue_Dair_4(0.0524319);
      setDefault_Dair_4(0.0524319);

      setValue_Dwater_4(0.0000077811);
      setDefault_Dwater_4(0.0000077811);

      setValue_DHvb_4(12600);
      setDefault_DHvb_4(12600);

      setValue_Tc_4(761.0);
      setDefault_Tc_4(761.0);

      setValue_Tb_4(514.1);
      setDefault_Tb_4(514.1);

      setValue_MW_4(142.2);
      setDefault_MW_4(142.2);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(null);
      setDefault_Rfc_4(null);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(2237);
      setDefault_Koc_4(2237);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Methylstyrene, Alpha-") {
      setValue_S_4(116.0);
      setDefault_S_4(116.0);

      setValue_Hc_4(0.00255);
      setDefault_Hc_4(0.00255);

      setValue_Dair_4(0.062902);
      setDefault_Dair_4(0.062902);

      setValue_Dwater_4(0.0000081911);
      setDefault_Dwater_4(0.0000081911);

      setValue_DHvb_4(11419.16);
      setDefault_DHvb_4(11419.16);

      setValue_Tc_4(657.0);
      setDefault_Tc_4(657.0);

      setValue_Tb_4(438.4);
      setDefault_Tb_4(438.4);

      setValue_MW_4(118.18);
      setDefault_MW_4(118.18);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(null);
      setDefault_Rfc_4(null);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(1047);
      setDefault_Koc_4(1047);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Naphthalene") {
      setValue_S_4(31.0);
      setDefault_S_4(31.0);

      setValue_Hc_4(0.00044);
      setDefault_Hc_4(0.00044);

      setValue_Dair_4(0.0604994);
      setDefault_Dair_4(0.0604994);

      setValue_Dwater_4(0.000008377);
      setDefault_Dwater_4(0.000008377);

      setValue_DHvb_4(10373);
      setDefault_DHvb_4(10373);

      setValue_Tc_4(748.4);
      setDefault_Tc_4(748.4);

      setValue_Tb_4(490.9);
      setDefault_Tb_4(490.9);

      setValue_MW_4(128.18);
      setDefault_MW_4(128.18);

      setValue_IUR_4(0.000034);
      setDefault_IUR_4(0.000034);

      setValue_Rfc_4(0.003);
      setDefault_Rfc_4(0.003);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(731);
      setDefault_Koc_4(731);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Nickel Carbonyl") {
      setValue_S_4(180.0);
      setDefault_S_4(180.0);

      setValue_Hc_4(0.5);
      setDefault_Hc_4(0.5);

      setValue_Dair_4(0.0433019);
      setDefault_Dair_4(0.0433019);

      setValue_Dwater_4(0.0000081704);
      setDefault_Dwater_4(0.0000081704);

      setValue_DHvb_4(6829.36);
      setDefault_DHvb_4(6829.36);

      setValue_Tc_4(473.15);
      setDefault_Tc_4(473.15);

      setValue_Tb_4(316.15);
      setDefault_Tb_4(316.15);

      setValue_MW_4(170.734);
      setDefault_MW_4(170.734);

      setValue_IUR_4(0.00026);
      setDefault_IUR_4(0.00026);

      setValue_Rfc_4(0.000014);
      setDefault_Rfc_4(0.000014);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(null);
      setDefault_Koc_4(null);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Nitrobenzene") {
      setValue_S_4(2090);
      setDefault_S_4(2090);

      setValue_Hc_4(0.000024);
      setDefault_Hc_4(0.000024);

      setValue_Dair_4(0.068054);
      setDefault_Dair_4(0.068054);

      setValue_Dwater_4(0.0000094495);
      setDefault_Dwater_4(0.0000094495);

      setValue_DHvb_4(10566);
      setDefault_DHvb_4(10566);

      setValue_Tc_4(719.0);
      setDefault_Tc_4(719.0);

      setValue_Tb_4(483.8);
      setDefault_Tb_4(483.8);

      setValue_MW_4(123.11);
      setDefault_MW_4(123.11);

      setValue_IUR_4(0.00004);
      setDefault_IUR_4(0.00004);

      setValue_Rfc_4(0.009);
      setDefault_Rfc_4(0.009);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(147.1);
      setDefault_Koc_4(147.1);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Nitromethane") {
      setValue_S_4(111000);
      setDefault_S_4(111000);

      setValue_Hc_4(0.0000286);
      setDefault_Hc_4(0.0000286);

      setValue_Dair_4(0.1192837);
      setDefault_Dair_4(0.1192837);

      setValue_Dwater_4(0.0000139);
      setDefault_Dwater_4(0.0000139);

      setValue_DHvb_4(9140.63);
      setDefault_DHvb_4(9140.63);

      setValue_Tc_4(588.0);
      setDefault_Tc_4(588.0);

      setValue_Tb_4(374.1);
      setDefault_Tb_4(374.1);

      setValue_MW_4(61.041);
      setDefault_MW_4(61.041);

      setValue_IUR_4(0.0000088);
      setDefault_IUR_4(0.0000088);

      setValue_Rfc_4(0.005);
      setDefault_Rfc_4(0.005);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(8.925);
      setDefault_Koc_4(8.925);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Nitropropane, 2-") {
      setValue_S_4(17000);
      setDefault_S_4(17000);

      setValue_Hc_4(0.000119);
      setDefault_Hc_4(0.000119);

      setValue_Dair_4(0.0846934);
      setDefault_Dair_4(0.0846934);

      setValue_Dwater_4(0.0000102);
      setDefault_Dwater_4(0.0000102);

      setValue_DHvb_4(8383);
      setDefault_DHvb_4(8383);

      setValue_Tc_4(594.0);
      setDefault_Tc_4(594.0);

      setValue_Tb_4(393.2);
      setDefault_Tb_4(393.2);

      setValue_MW_4(89.095);
      setDefault_MW_4(89.095);

      setValue_IUR_4(0.0027);
      setDefault_IUR_4(0.0027);

      setValue_Rfc_4(0.02);
      setDefault_Rfc_4(0.02);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(45.56);
      setDefault_Koc_4(45.56);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Nitrotoluene, o-") {
      setValue_S_4(650.0);
      setDefault_S_4(650.0);

      setValue_Hc_4(0.0000125);
      setDefault_Hc_4(0.0000125);

      setValue_Dair_4(0.0587535);
      setDefault_Dair_4(0.0587535);

      setValue_Dwater_4(0.0000086675);
      setDefault_Dwater_4(0.0000086675);

      setValue_DHvb_4(12239.1);
      setDefault_DHvb_4(12239.1);

      setValue_Tc_4(720.0);
      setDefault_Tc_4(720.0);

      setValue_Tb_4(495.0);
      setDefault_Tb_4(495.0);

      setValue_MW_4(137.14);
      setDefault_MW_4(137.14);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(null);
      setDefault_Rfc_4(null);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(260.8);
      setDefault_Koc_4(260.8);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Nonane, n-") {
      setValue_S_4(0.22);
      setDefault_S_4(0.22);

      setValue_Hc_4(3.4);
      setDefault_Hc_4(3.4);

      setValue_Dair_4(0.051432);
      setDefault_Dair_4(0.051432);

      setValue_Dwater_4(0.000006769);
      setDefault_Dwater_4(0.000006769);

      setValue_DHvb_4(11082.45);
      setDefault_DHvb_4(11082.45);

      setValue_Tc_4(594.0);
      setDefault_Tc_4(594.0);

      setValue_Tb_4(423.8);
      setDefault_Tb_4(423.8);

      setValue_MW_4(128.26);
      setDefault_MW_4(128.26);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.02);
      setDefault_Rfc_4(0.02);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(80030);
      setDefault_Koc_4(80030);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Pentane, n-") {
      setValue_S_4(38.0);
      setDefault_S_4(38.0);

      setValue_Hc_4(1.25);
      setDefault_Hc_4(1.25);

      setValue_Dair_4(0.0821293);
      setDefault_Dair_4(0.0821293);

      setValue_Dwater_4(0.0000087974);
      setDefault_Dwater_4(0.0000087974);

      setValue_DHvb_4(6155.06);
      setDefault_DHvb_4(6155.06);

      setValue_Tc_4(469.7);
      setDefault_Tc_4(469.7);

      setValue_Tb_4(309.0);
      setDefault_Tb_4(309.0);

      setValue_MW_4(72.151);
      setDefault_MW_4(72.151);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(1.0);
      setDefault_Rfc_4(1.0);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(874.5);
      setDefault_Koc_4(874.5);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Phosgene") {
      setValue_S_4(6825.5);
      setDefault_S_4(6825.5);

      setValue_Hc_4(0.0167);
      setDefault_Hc_4(0.0167);

      setValue_Dair_4(0.0893282);
      setDefault_Dair_4(0.0893282);

      setValue_Dwater_4(0.0000117);
      setDefault_Dwater_4(0.0000117);

      setValue_DHvb_4(7352.39);
      setDefault_DHvb_4(7352.39);

      setValue_Tc_4(455.0);
      setDefault_Tc_4(455.0);

      setValue_Tb_4(281.2);
      setDefault_Tb_4(281.2);

      setValue_MW_4(98.917);
      setDefault_MW_4(98.917);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.0003);
      setDefault_Rfc_4(0.0003);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(2.01);
      setDefault_Koc_4(2.01);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Propionaldehyde") {
      setValue_S_4(306000);
      setDefault_S_4(306000);

      setValue_Hc_4(0.0000734);
      setDefault_Hc_4(0.0000734);

      setValue_Dair_4(0.1103767);
      setDefault_Dair_4(0.1103767);

      setValue_Dwater_4(0.0000122);
      setDefault_Dwater_4(0.0000122);

      setValue_DHvb_4(7074.62);
      setDefault_DHvb_4(7074.62);

      setValue_Tc_4(496.0);
      setDefault_Tc_4(496.0);

      setValue_Tb_4(321.0);
      setDefault_Tb_4(321.0);

      setValue_MW_4(58.081);
      setDefault_MW_4(58.081);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.008);
      setDefault_Rfc_4(0.008);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(10.52);
      setDefault_Koc_4(10.52);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Propyl benzene") {
      setValue_S_4(52.2);
      setDefault_S_4(52.2);

      setValue_Hc_4(0.0105);
      setDefault_Hc_4(0.0105);

      setValue_Dair_4(0.0601558);
      setDefault_Dair_4(0.0601558);

      setValue_Dwater_4(0.000007831);
      setDefault_Dwater_4(0.000007831);

      setValue_DHvb_4(9123);
      setDefault_DHvb_4(9123);

      setValue_Tc_4(630.0);
      setDefault_Tc_4(630.0);

      setValue_Tb_4(432.2);
      setDefault_Tb_4(432.2);

      setValue_MW_4(120.2);
      setDefault_MW_4(120.2);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(1.0);
      setDefault_Rfc_4(1.0);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(1593);
      setDefault_Koc_4(1593);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Propylene") {
      setValue_S_4(200.0);
      setDefault_S_4(200.0);

      setValue_Hc_4(0.196);
      setDefault_Hc_4(0.196);

      setValue_Dair_4(0.1096967);
      setDefault_Dair_4(0.1096967);

      setValue_Dwater_4(0.0000107);
      setDefault_Dwater_4(0.0000107);

      setValue_DHvb_4(4402.41);
      setDefault_DHvb_4(4402.41);

      setValue_Tc_4(364.95);
      setDefault_Tc_4(364.95);

      setValue_Tb_4(225.6);
      setDefault_Tb_4(225.6);

      setValue_MW_4(42.081);
      setDefault_MW_4(42.081);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(3.0);
      setDefault_Rfc_4(3.0);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(34.34);
      setDefault_Koc_4(34.34);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Propylene Glycol Monomethyl Ether") {
      setValue_S_4(1000000);
      setDefault_S_4(1000000);

      setValue_Hc_4(0.00000092);
      setDefault_Hc_4(0.00000092);

      setValue_Dair_4(0.083145);
      setDefault_Dair_4(0.083145);

      setValue_Dwater_4(0.0000099604);
      setDefault_Dwater_4(0.0000099604);

      setValue_DHvb_4(7795.93344);
      setDefault_DHvb_4(7795.93344);

      setValue_Tc_4(588.225);
      setDefault_Tc_4(588.225);

      setValue_Tb_4(392.15);
      setDefault_Tb_4(392.15);

      setValue_MW_4(90.123);
      setDefault_MW_4(90.123);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(2.0);
      setDefault_Rfc_4(2.0);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(1.419);
      setDefault_Koc_4(1.419);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Propylene Oxide") {
      setValue_S_4(590000);
      setDefault_S_4(590000);

      setValue_Hc_4(0.0000696);
      setDefault_Hc_4(0.0000696);

      setValue_Dair_4(0.1085105);
      setDefault_Dair_4(0.1085105);

      setValue_Dwater_4(0.0000119);
      setDefault_Dwater_4(0.0000119);

      setValue_DHvb_4(6621.12);
      setDefault_DHvb_4(6621.12);

      setValue_Tc_4(482.1);
      setDefault_Tc_4(482.1);

      setValue_Tb_4(308.0);
      setDefault_Tb_4(308.0);

      setValue_MW_4(58.081);
      setDefault_MW_4(58.081);

      setValue_IUR_4(0.0000037);
      setDefault_IUR_4(0.0000037);

      setValue_Rfc_4(0.03);
      setDefault_Rfc_4(0.03);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(7.097);
      setDefault_Koc_4(7.097);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Pyrene") {
      setValue_S_4(0.135);
      setDefault_S_4(0.135);

      setValue_Hc_4(0.0000119);
      setDefault_Hc_4(0.0000119);

      setValue_Dair_4(0.0277873);
      setDefault_Dair_4(0.0277873);

      setValue_Dwater_4(0.0000072479);
      setDefault_Dwater_4(0.0000072479);

      setValue_DHvb_4(14370);
      setDefault_DHvb_4(14370);

      setValue_Tc_4(936.0);
      setDefault_Tc_4(936.0);

      setValue_Tb_4(677.0);
      setDefault_Tb_4(677.0);

      setValue_MW_4(202.26);
      setDefault_MW_4(202.26);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(null);
      setDefault_Rfc_4(null);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(17180);
      setDefault_Koc_4(17180);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Pyridine") {
      setValue_S_4(1000000);
      setDefault_S_4(1000000);

      setValue_Hc_4(0.000011);
      setDefault_Hc_4(0.000011);

      setValue_Dair_4(0.0930883);
      setDefault_Dair_4(0.0930883);

      setValue_Dwater_4(0.0000109);
      setDefault_Dwater_4(0.0000109);

      setValue_DHvb_4(35.1);
      setDefault_DHvb_4(35.1);

      setValue_Tc_4(617.2);
      setDefault_Tc_4(617.2);

      setValue_Tb_4(388.2);
      setDefault_Tb_4(388.2);

      setValue_MW_4(79.102);
      setDefault_MW_4(79.102);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(null);
      setDefault_Rfc_4(null);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(28.91);
      setDefault_Koc_4(28.91);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Styrene") {
      setValue_S_4(310.0);
      setDefault_S_4(310.0);

      setValue_Hc_4(0.00275);
      setDefault_Hc_4(0.00275);

      setValue_Dair_4(0.071114);
      setDefault_Dair_4(0.071114);

      setValue_Dwater_4(0.0000087838);
      setDefault_Dwater_4(0.0000087838);

      setValue_DHvb_4(8737);
      setDefault_DHvb_4(8737);

      setValue_Tc_4(636.0);
      setDefault_Tc_4(636.0);

      setValue_Tb_4(418.0);
      setDefault_Tb_4(418.0);

      setValue_MW_4(104.15);
      setDefault_MW_4(104.15);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(1.0);
      setDefault_Rfc_4(1.0);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(363);
      setDefault_Koc_4(363);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Tetrachloroethane, 1,1,1,2-") {
      setValue_S_4(1070);
      setDefault_S_4(1070);

      setValue_Hc_4(0.0025);
      setDefault_Hc_4(0.0025);

      setValue_Dair_4(0.0481761);
      setDefault_Dair_4(0.0481761);

      setValue_Dwater_4(0.0000090977);
      setDefault_Dwater_4(0.0000090977);

      setValue_DHvb_4(9768.282525);
      setDefault_DHvb_4(9768.282525);

      setValue_Tc_4(624.0);
      setDefault_Tc_4(624.0);

      setValue_Tb_4(403.5);
      setDefault_Tb_4(403.5);

      setValue_MW_4(167.85);
      setDefault_MW_4(167.85);

      setValue_IUR_4(0.0000074);
      setDefault_IUR_4(0.0000074);

      setValue_Rfc_4(null);
      setDefault_Rfc_4(null);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(348.8);
      setDefault_Koc_4(348.8);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Tetrachloroethane, 1,1,2,2-") {
      setValue_S_4(2830);
      setDefault_S_4(2830);

      setValue_Hc_4(0.000367);
      setDefault_Hc_4(0.000367);

      setValue_Dair_4(0.0489206);
      setDefault_Dair_4(0.0489206);

      setValue_Dwater_4(0.0000092902);
      setDefault_Dwater_4(0.0000092902);

      setValue_DHvb_4(8996);
      setDefault_DHvb_4(8996);

      setValue_Tc_4(661.15);
      setDefault_Tc_4(661.15);

      setValue_Tb_4(419.5);
      setDefault_Tb_4(419.5);

      setValue_MW_4(167.85);
      setDefault_MW_4(167.85);

      setValue_IUR_4(0.000058);
      setDefault_IUR_4(0.000058);

      setValue_Rfc_4(null);
      setDefault_Rfc_4(null);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(118.5);
      setDefault_Koc_4(118.5);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Tetrachloroethylene") {
      setValue_S_4(206.0);
      setDefault_S_4(206.0);

      setValue_Hc_4(0.0177);
      setDefault_Hc_4(0.0177);

      setValue_Dair_4(0.0504664);
      setDefault_Dair_4(0.0504664);

      setValue_Dwater_4(0.0000094551);
      setDefault_Dwater_4(0.0000094551);

      setValue_DHvb_4(8288);
      setDefault_DHvb_4(8288);

      setValue_Tc_4(620.2);
      setDefault_Tc_4(620.2);

      setValue_Tb_4(394.3);
      setDefault_Tb_4(394.3);

      setValue_MW_4(165.83);
      setDefault_MW_4(165.83);

      setValue_IUR_4(0.00000026);
      setDefault_IUR_4(0.00000026);

      setValue_Rfc_4(0.04);
      setDefault_Rfc_4(0.04);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(892.2);
      setDefault_Koc_4(892.2);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Tetrafluoroethane, 1,1,1,2-") {
      setValue_S_4(2040);
      setDefault_S_4(2040);

      setValue_Hc_4(0.05);
      setDefault_Hc_4(0.05);

      setValue_Dair_4(0.0823066);
      setDefault_Dair_4(0.0823066);

      setValue_Dwater_4(0.0000106);
      setDefault_Dwater_4(0.0000106);

      setValue_DHvb_4(5933.96);
      setDefault_DHvb_4(5933.96);

      setValue_Tc_4(624.0);
      setDefault_Tc_4(624.0);

      setValue_Tb_4(403.5);
      setDefault_Tb_4(403.5);

      setValue_MW_4(102.03);
      setDefault_MW_4(102.03);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(80.0);
      setDefault_Rfc_4(80.0);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(28.69);
      setDefault_Koc_4(28.69);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Tetrahydrofuran") {
      setValue_S_4(1000000);
      setDefault_S_4(1000000);

      setValue_Hc_4(0.0000705);
      setDefault_Hc_4(0.0000705);

      setValue_Dair_4(0.0993751);
      setDefault_Dair_4(0.0993751);

      setValue_Dwater_4(0.0000108);
      setDefault_Dwater_4(0.0000108);

      setValue_DHvb_4(7073.991);
      setDefault_DHvb_4(7073.991);

      setValue_Tc_4(541.15);
      setDefault_Tc_4(541.15);

      setValue_Tb_4(339.0);
      setDefault_Tb_4(339.0);

      setValue_MW_4(72.108);
      setDefault_MW_4(72.108);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(2.0);
      setDefault_Rfc_4(2.0);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(12.27);
      setDefault_Koc_4(12.27);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Titanium Tetrachloride") {
      setValue_S_4(null);
      setDefault_S_4(null);

      setValue_Hc_4(null);
      setDefault_Hc_4(null);

      setValue_Dair_4(0.0379716);
      setDefault_Dair_4(0.0379716);

      setValue_Dwater_4(0.0000090633);
      setDefault_Dwater_4(0.0000090633);

      setValue_DHvb_4(8646.2252);
      setDefault_DHvb_4(8646.2252);

      setValue_Tc_4(643.15);
      setDefault_Tc_4(643.15);

      setValue_Tb_4(421.15);
      setDefault_Tb_4(421.15);

      setValue_MW_4(189.679);
      setDefault_MW_4(189.679);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.0001);
      setDefault_Rfc_4(0.0001);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(18.85);
      setDefault_Koc_4(18.85);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Toluene") {
      setValue_S_4(526.0);
      setDefault_S_4(526.0);

      setValue_Hc_4(0.00664);
      setDefault_Hc_4(0.00664);

      setValue_Dair_4(0.0778039);
      setDefault_Dair_4(0.0778039);

      setValue_Dwater_4(0.0000092043);
      setDefault_Dwater_4(0.0000092043);

      setValue_DHvb_4(7930);
      setDefault_DHvb_4(7930);

      setValue_Tc_4(591.79);
      setDefault_Tc_4(591.79);

      setValue_Tb_4(383.6);
      setDefault_Tb_4(383.6);

      setValue_MW_4(92.142);
      setDefault_MW_4(92.142);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(5.0);
      setDefault_Rfc_4(5.0);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(233.9);
      setDefault_Koc_4(233.9);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Trichloro,2,2-trifluoroethane, 1,1,2-") {
      setValue_S_4(170.0);
      setDefault_S_4(170.0);

      setValue_Hc_4(0.526);
      setDefault_Hc_4(0.526);

      setValue_Dair_4(0.0375658);
      setDefault_Dair_4(0.0375658);

      setValue_Dwater_4(0.000008592);
      setDefault_Dwater_4(0.000008592);

      setValue_DHvb_4(6462.56);
      setDefault_DHvb_4(6462.56);

      setValue_Tc_4(487.3);
      setDefault_Tc_4(487.3);

      setValue_Tb_4(320.7);
      setDefault_Tb_4(320.7);

      setValue_MW_4(187.38);
      setDefault_MW_4(187.38);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(5.0);
      setDefault_Rfc_4(5.0);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(552.3);
      setDefault_Koc_4(552.3);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Trichlorobenzene, 1,2,3-") {
      setValue_S_4(18.0);
      setDefault_S_4(18.0);

      setValue_Hc_4(0.00125);
      setDefault_Hc_4(0.00125);

      setValue_Dair_4(0.03953);
      setDefault_Dair_4(0.03953);

      setValue_Dwater_4(0.0000083836);
      setDefault_Dwater_4(0.0000083836);

      setValue_DHvb_4(12611.53);
      setDefault_DHvb_4(12611.53);

      setValue_Tc_4(762.5);
      setDefault_Tc_4(762.5);

      setValue_Tb_4(491.5);
      setDefault_Tb_4(491.5);

      setValue_MW_4(181.45);
      setDefault_MW_4(181.45);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(null);
      setDefault_Rfc_4(null);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(2040);
      setDefault_Koc_4(2040);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Trichlorobenzene, 1,2,4-") {
      setValue_S_4(49.0);
      setDefault_S_4(49.0);

      setValue_Hc_4(0.00142);
      setDefault_Hc_4(0.00142);

      setValue_Dair_4(0.0395992);
      setDefault_Dair_4(0.0395992);

      setValue_Dwater_4(0.0000084033);
      setDefault_Dwater_4(0.0000084033);

      setValue_DHvb_4(10471);
      setDefault_DHvb_4(10471);

      setValue_Tc_4(725.0);
      setDefault_Tc_4(725.0);

      setValue_Tb_4(486.5);
      setDefault_Tb_4(486.5);

      setValue_MW_4(181.45);
      setDefault_MW_4(181.45);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.002);
      setDefault_Rfc_4(0.002);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(1964);
      setDefault_Koc_4(1964);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Trichloroethane, 1,1,1-") {
      setValue_S_4(1290);
      setDefault_S_4(1290);

      setValue_Hc_4(0.0172);
      setDefault_Hc_4(0.0172);

      setValue_Dair_4(0.0648174);
      setDefault_Dair_4(0.0648174);

      setValue_Dwater_4(0.000009599);
      setDefault_Dwater_4(0.000009599);

      setValue_DHvb_4(7136);
      setDefault_DHvb_4(7136);

      setValue_Tc_4(545.0);
      setDefault_Tc_4(545.0);

      setValue_Tb_4(347.0);
      setDefault_Tb_4(347.0);

      setValue_MW_4(133.41);
      setDefault_MW_4(133.41);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(5.0);
      setDefault_Rfc_4(5.0);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(144.8);
      setDefault_Koc_4(144.8);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Trichloroethane, 1,1,2-") {
      setValue_S_4(4590);
      setDefault_S_4(4590);

      setValue_Hc_4(0.000824);
      setDefault_Hc_4(0.000824);

      setValue_Dair_4(0.0668904);
      setDefault_Dair_4(0.0668904);

      setValue_Dwater_4(0.00001);
      setDefault_Dwater_4(0.00001);

      setValue_DHvb_4(8322);
      setDefault_DHvb_4(8322);

      setValue_Tc_4(602.0);
      setDefault_Tc_4(602.0);

      setValue_Tb_4(386.8);
      setDefault_Tb_4(386.8);

      setValue_MW_4(133.41);
      setDefault_MW_4(133.41);

      setValue_IUR_4(0.000016);
      setDefault_IUR_4(0.000016);

      setValue_Rfc_4(0.0002);
      setDefault_Rfc_4(0.0002);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(43.64);
      setDefault_Koc_4(43.64);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Trichloroethylene") {
      setValue_S_4(1280);
      setDefault_S_4(1280);

      setValue_Hc_4(0.00985);
      setDefault_Hc_4(0.00985);

      setValue_Dair_4(0.0686618);
      setDefault_Dair_4(0.0686618);

      setValue_Dwater_4(0.0000102);
      setDefault_Dwater_4(0.0000102);

      setValue_DHvb_4(7505);
      setDefault_DHvb_4(7505);

      setValue_Tc_4(544.2);
      setDefault_Tc_4(544.2);

      setValue_Tb_4(360.2);
      setDefault_Tb_4(360.2);

      setValue_MW_4(131.39);
      setDefault_MW_4(131.39);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.002);
      setDefault_Rfc_4(0.002);

      setValue_Mut_4("Yes");
      setDefault_Mut_4("Yes");

      setValue_Koc_4(125.9);
      setDefault_Koc_4(125.9);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Trichlorofluoromethane") {
      setValue_S_4(1100);
      setDefault_S_4(1100);

      setValue_Hc_4(0.097);
      setDefault_Hc_4(0.097);

      setValue_Dair_4(0.065356);
      setDefault_Dair_4(0.065356);

      setValue_Dwater_4(0.00001);
      setDefault_Dwater_4(0.00001);

      setValue_DHvb_4(5998.9);
      setDefault_DHvb_4(5998.9);

      setValue_Tc_4(471.0);
      setDefault_Tc_4(471.0);

      setValue_Tb_4(296.7);
      setDefault_Tb_4(296.7);

      setValue_MW_4(137.37);
      setDefault_MW_4(137.37);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(null);
      setDefault_Rfc_4(null);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(156.8);
      setDefault_Koc_4(156.8);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Trichloropropane, 1,2,3-") {
      setValue_S_4(1750);
      setDefault_S_4(1750);

      setValue_Hc_4(0.000343);
      setDefault_Hc_4(0.000343);

      setValue_Dair_4(0.0574661);
      setDefault_Dair_4(0.0574661);

      setValue_Dwater_4(0.0000092411);
      setDefault_Dwater_4(0.0000092411);

      setValue_DHvb_4(9171);
      setDefault_DHvb_4(9171);

      setValue_Tc_4(652.0);
      setDefault_Tc_4(652.0);

      setValue_Tb_4(430.0);
      setDefault_Tb_4(430.0);

      setValue_MW_4(147.43);
      setDefault_MW_4(147.43);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.0003);
      setDefault_Rfc_4(0.0003);

      setValue_Mut_4("Yes");
      setDefault_Mut_4("Yes");

      setValue_Koc_4(93.27);
      setDefault_Koc_4(93.27);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Triethylamine") {
      setValue_S_4(68600);
      setDefault_S_4(68600);

      setValue_Hc_4(0.000149);
      setDefault_Hc_4(0.000149);

      setValue_Dair_4(0.0663631);
      setDefault_Dair_4(0.0663631);

      setValue_Dwater_4(0.0000078576);
      setDefault_Dwater_4(0.0000078576);

      setValue_DHvb_4(8095.2);
      setDefault_DHvb_4(8095.2);

      setValue_Tc_4(535.6);
      setDefault_Tc_4(535.6);

      setValue_Tb_4(362.0);
      setDefault_Tb_4(362.0);

      setValue_MW_4(101.19);
      setDefault_MW_4(101.19);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4();
      setDefault_Rfc_4();

      setValue_Mut_4(0.007);
      setDefault_Mut_4(0.007);

      setValue_Koc_4(45.9);
      setDefault_Koc_4(45.9);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Trifluoroethane, 1,1,1-") {
      setValue_S_4(760.9);
      setDefault_S_4(760.9);

      setValue_Hc_4(0.77);
      setDefault_Hc_4(0.77);

      setValue_Dair_4(0.0990283);
      setDefault_Dair_4(0.0990283);

      setValue_Dwater_4(0.0000116);
      setDefault_Dwater_4(0.0000116);

      setValue_DHvb_4(4.58891);
      setDefault_DHvb_4(4.58891);

      setValue_Tc_4(345.88);
      setDefault_Tc_4(345.88);

      setValue_Tb_4(228.15);
      setDefault_Tb_4(228.15);

      setValue_MW_4(84.041);
      setDefault_MW_4(84.041);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(20.0);
      setDefault_Rfc_4(20.0);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(32.34);
      setDefault_Koc_4(32.34);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Trimethylbenzene, 1,2,3-") {
      setValue_S_4(75.2);
      setDefault_S_4(75.2);

      setValue_Hc_4(0.00436);
      setDefault_Hc_4(0.00436);

      setValue_Dair_4(0.0612535);
      setDefault_Dair_4(0.0612535);

      setValue_Dwater_4(0.0000080214);
      setDefault_Dwater_4(0.0000080214);

      setValue_DHvb_4(11715.39);
      setDefault_DHvb_4(11715.39);

      setValue_Tc_4(664.5);
      setDefault_Tc_4(664.5);

      setValue_Tb_4(449.1);
      setDefault_Tb_4(449.1);

      setValue_MW_4(120.2);
      setDefault_MW_4(120.2);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.06);
      setDefault_Rfc_4(0.06);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(1500);
      setDefault_Koc_4(1500);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Trimethylbenzene, 1,2,4-") {
      setValue_S_4(57.0);
      setDefault_S_4(57.0);

      setValue_Hc_4(0.00616);
      setDefault_Hc_4(0.00616);

      setValue_Dair_4(0.0606754);
      setDefault_Dair_4(0.0606754);

      setValue_Dwater_4(0.0000079209);
      setDefault_Dwater_4(0.0000079209);

      setValue_DHvb_4(9368.8);
      setDefault_DHvb_4(9368.8);

      setValue_Tc_4(649.17);
      setDefault_Tc_4(649.17);

      setValue_Tb_4(442.3);
      setDefault_Tb_4(442.3);

      setValue_MW_4(120.2);
      setDefault_MW_4(120.2);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.06);
      setDefault_Rfc_4(0.06);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(1413);
      setDefault_Koc_4(1413);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Trimethylbenzene, 1,3,5-") {
      setValue_S_4(48.2);
      setDefault_S_4(48.2);

      setValue_Hc_4(0.00877);
      setDefault_Hc_4(0.00877);

      setValue_Dair_4(0.0602254);
      setDefault_Dair_4(0.0602254);

      setValue_Dwater_4(0.000007843);
      setDefault_Dwater_4(0.000007843);

      setValue_DHvb_4(9321);
      setDefault_DHvb_4(9321);

      setValue_Tc_4(637.25);
      setDefault_Tc_4(637.25);

      setValue_Tb_4(437.7);
      setDefault_Tb_4(437.7);

      setValue_MW_4(120.2);
      setDefault_MW_4(120.2);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.06);
      setDefault_Rfc_4(0.06);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(928.6);
      setDefault_Koc_4(928.6);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Vinyl Acetate") {
      setValue_S_4(20000);
      setDefault_S_4(20000);

      setValue_Hc_4(0.000511);
      setDefault_Hc_4(0.000511);

      setValue_Dair_4(0.0849016);
      setDefault_Dair_4(0.0849016);

      setValue_Dwater_4(0.00001);
      setDefault_Dwater_4(0.00001);

      setValue_DHvb_4(7800);
      setDefault_DHvb_4(7800);

      setValue_Tc_4(519.13);
      setDefault_Tc_4(519.13);

      setValue_Tb_4(345.5);
      setDefault_Tb_4(345.5);

      setValue_MW_4(86.091);
      setDefault_MW_4(86.091);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.2);
      setDefault_Rfc_4(0.2);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(18.34);
      setDefault_Koc_4(18.34);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Vinyl Bromide") {
      setValue_S_4(7600);
      setDefault_S_4(7600);

      setValue_Hc_4(0.0123);
      setDefault_Hc_4(0.0123);

      setValue_Dair_4(0.0862238);
      setDefault_Dair_4(0.0862238);

      setValue_Dwater_4(0.0000117);
      setDefault_Dwater_4(0.0000117);

      setValue_DHvb_4(5397.92);
      setDefault_DHvb_4(5397.92);

      setValue_Tc_4(463.51);
      setDefault_Tc_4(463.51);

      setValue_Tb_4(288.8);
      setDefault_Tb_4(288.8);

      setValue_MW_4(106.95);
      setDefault_MW_4(106.95);

      setValue_IUR_4(0.000032);
      setDefault_IUR_4(0.000032);

      setValue_Rfc_4(0.003);
      setDefault_Rfc_4(0.003);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(23.03);
      setDefault_Koc_4(23.03);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Vinyl Chloride") {
      setValue_S_4(8800);
      setDefault_S_4(8800);

      setValue_Hc_4(0.0278);
      setDefault_Hc_4(0.0278);

      setValue_Dair_4(0.1071202);
      setDefault_Dair_4(0.1071202);

      setValue_Dwater_4(0.000012);
      setDefault_Dwater_4(0.000012);

      setValue_DHvb_4(5250);
      setDefault_DHvb_4(5250);

      setValue_Tc_4(432.0);
      setDefault_Tc_4(432.0);

      setValue_Tb_4(259.7);
      setDefault_Tb_4(259.7);

      setValue_MW_4(62.499);
      setDefault_MW_4(62.499);

      setValue_IUR_4(0.0000044);
      setDefault_IUR_4(0.0000044);

      setValue_Rfc_4(0.1);
      setDefault_Rfc_4(0.1);

      setValue_Mut_4("VC");
      setDefault_Mut_4("VC");

      setValue_Koc_4(25.44);
      setDefault_Koc_4(25.44);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Xylene, m-") {
      setValue_S_4(161.0);
      setDefault_S_4(161.0);

      setValue_Hc_4(0.00718);
      setDefault_Hc_4(0.00718);

      setValue_Dair_4(0.0683659);
      setDefault_Dair_4(0.0683659);

      setValue_Dwater_4(0.0000084394);
      setDefault_Dwater_4(0.0000084394);

      setValue_DHvb_4(8523);
      setDefault_DHvb_4(8523);

      setValue_Tc_4(617.05);
      setDefault_Tc_4(617.05);

      setValue_Tb_4(412.1);
      setDefault_Tb_4(412.1);

      setValue_MW_4(106.17);
      setDefault_MW_4(106.17);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.1);
      setDefault_Rfc_4(0.1);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(598.2);
      setDefault_Koc_4(598.2);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Xylene, o-") {
      setValue_S_4(178.0);
      setDefault_S_4(178.0);

      setValue_Hc_4(0.00518);
      setDefault_Hc_4(0.00518);

      setValue_Dair_4(0.0689201);
      setDefault_Dair_4(0.0689201);

      setValue_Dwater_4(0.0000085315);
      setDefault_Dwater_4(0.0000085315);

      setValue_DHvb_4(8661);
      setDefault_DHvb_4(8661);

      setValue_Tc_4(630.3);
      setDefault_Tc_4(630.3);

      setValue_Tb_4(411.5);
      setDefault_Tb_4(411.5);

      setValue_MW_4(106.17);
      setDefault_MW_4(106.17);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.1);
      setDefault_Rfc_4(0.1);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(552.3);
      setDefault_Koc_4(552.3);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Xylene, P-") {
      setValue_S_4(162.0);
      setDefault_S_4(162.0);

      setValue_Hc_4(0.0069);
      setDefault_Hc_4(0.0069);

      setValue_Dair_4(0.0682485);
      setDefault_Dair_4(0.0682485);

      setValue_Dwater_4(0.0000084199);
      setDefault_Dwater_4(0.0000084199);

      setValue_DHvb_4(8525);
      setDefault_DHvb_4(8525);

      setValue_Tc_4(616.2);
      setDefault_Tc_4(616.2);

      setValue_Tb_4(411.3);
      setDefault_Tb_4(411.3);

      setValue_MW_4(106.17);
      setDefault_MW_4(106.17);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.1);
      setDefault_Rfc_4(0.1);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(541.4);
      setDefault_Koc_4(541.4);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "Xylenes") {
      setValue_S_4(106.0);
      setDefault_S_4(106.0);

      setValue_Hc_4(0.00663);
      setDefault_Hc_4(0.00663);

      setValue_Dair_4(0.0685148);
      setDefault_Dair_4(0.0685148);

      setValue_Dwater_4(0.0000084641);
      setDefault_Dwater_4(0.0000084641);

      setValue_DHvb_4(8523);
      setDefault_DHvb_4(8523);

      setValue_Tc_4(616.2);
      setDefault_Tc_4(616.2);

      setValue_Tb_4(411.3);
      setDefault_Tb_4(411.3);

      setValue_MW_4(106.17);
      setDefault_MW_4(106.17);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.1);
      setDefault_Rfc_4(0.1);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(552.3);
      setDefault_Koc_4(552.3);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "TPH - Aliph >C05-C06") {
      setValue_S_4(36);
      setDefault_S_4(36);

      setValue_Hc_4(32.47711492);
      setDefault_Hc_4(32.47711492);

      setValue_Dair_4(0.1);
      setDefault_Dair_4(0.1);

      setValue_Dwater_4(0.00001);
      setDefault_Dwater_4(0.00001);

      setValue_DHvb_4(8000);
      setDefault_DHvb_4(8000);

      setValue_Tc_4(500);
      setDefault_Tc_4(500);

      setValue_Tb_4(100);
      setDefault_Tb_4(100);

      setValue_MW_4(81);
      setDefault_MW_4(81);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(18);
      setDefault_Rfc_4(18);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(794.3);
      setDefault_Koc_4(794.3);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "TPH - Aliph >C06-C08") {
      setValue_S_4(36);
      setDefault_S_4(36);

      setValue_Hc_4(32.47711492);
      setDefault_Hc_4(32.47711492);

      setValue_Dair_4(0.1);
      setDefault_Dair_4(0.1);

      setValue_Dwater_4(0.00001);
      setDefault_Dwater_4(0.00001);

      setValue_DHvb_4(8000);
      setDefault_DHvb_4(8000);

      setValue_Tc_4(500);
      setDefault_Tc_4(500);

      setValue_Tb_4(100);
      setDefault_Tb_4(100);

      setValue_MW_4(81);
      setDefault_MW_4(81);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(18);
      setDefault_Rfc_4(18);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(794.3);
      setDefault_Koc_4(794.3);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "TPH - Aliph >C05-C06 (>53% n-hexane)") {
      setValue_S_4(5.4);
      setDefault_S_4(5.4);

      setValue_Hc_4(48.11424433);
      setDefault_Hc_4(48.11424433);

      setValue_Dair_4(0.1);
      setDefault_Dair_4(0.1);

      setValue_Dwater_4(0.00001);
      setDefault_Dwater_4(0.00001);

      setValue_DHvb_4(9000);
      setDefault_DHvb_4(9000);

      setValue_Tc_4(500);
      setDefault_Tc_4(500);

      setValue_Tb_4(100);
      setDefault_Tb_4(100);

      setValue_MW_4(100);
      setDefault_MW_4(100);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.67);
      setDefault_Rfc_4(0.67);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(862.9);
      setDefault_Koc_4(862.9);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "TPH - Aliph >C06-C08 (>53% n-hexane)") {
      setValue_S_4(5.4);
      setDefault_S_4(5.4);

      setValue_Hc_4(48.11424433);
      setDefault_Hc_4(48.11424433);

      setValue_Dair_4(0.1);
      setDefault_Dair_4(0.1);

      setValue_Dwater_4(0.00001);
      setDefault_Dwater_4(0.00001);

      setValue_DHvb_4(10000);
      setDefault_DHvb_4(10000);

      setValue_Tc_4(500);
      setDefault_Tc_4(500);

      setValue_Tb_4(100);
      setDefault_Tb_4(100);

      setValue_MW_4(100);
      setDefault_MW_4(100);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.67);
      setDefault_Rfc_4(0.67);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(862.9);
      setDefault_Koc_4(862.9);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "TPH - Aliph >C08-C10") {
      setValue_S_4(0.43);
      setDefault_S_4(0.43);

      setValue_Hc_4(78.54930121);
      setDefault_Hc_4(78.54930121);

      setValue_Dair_4(0.1);
      setDefault_Dair_4(0.1);

      setValue_Dwater_4(0.00001);
      setDefault_Dwater_4(0.00001);

      setValue_DHvb_4(12000);
      setDefault_DHvb_4(12000);

      setValue_Tc_4(500);
      setDefault_Tc_4(500);

      setValue_Tb_4(100);
      setDefault_Tb_4(100);

      setValue_MW_4(130);
      setDefault_MW_4(130);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.5);
      setDefault_Rfc_4(0.5);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(31622.7);
      setDefault_Koc_4(31622.7);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "TPH - Aliph >C10-C12") {
      setValue_S_4(0.034);
      setDefault_S_4(0.034);

      setValue_Hc_4(122.2667856);
      setDefault_Hc_4(122.2667856);

      setValue_Dair_4(0.1);
      setDefault_Dair_4(0.1);

      setValue_Dwater_4(0.00001);
      setDefault_Dwater_4(0.00001);

      setValue_DHvb_4(12000);
      setDefault_DHvb_4(12000);

      setValue_Tc_4(500);
      setDefault_Tc_4(500);

      setValue_Tb_4(100);
      setDefault_Tb_4(100);

      setValue_MW_4(160);
      setDefault_MW_4(160);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.5);
      setDefault_Rfc_4(0.5);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(251188.6);
      setDefault_Koc_4(251188.6);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "TPH - Aliph >C12-C16") {
      setValue_S_4(0.00076);
      setDefault_S_4(0.00076);

      setValue_Hc_4(520.9361792);
      setDefault_Hc_4(520.9361792);

      setValue_Dair_4(0.1);
      setDefault_Dair_4(0.1);

      setValue_Dwater_4(0.00001);
      setDefault_Dwater_4(0.00001);

      setValue_DHvb_4(16000);
      setDefault_DHvb_4(16000);

      setValue_Tc_4(500);
      setDefault_Tc_4(500);

      setValue_Tb_4(300);
      setDefault_Tb_4(300);

      setValue_MW_4(200);
      setDefault_MW_4(200);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.5);
      setDefault_Rfc_4(0.5);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(5011872.3);
      setDefault_Koc_4(5011872.3);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "TPH - Aliph >C16-C21") {
      setValue_S_4(0.0000025);
      setDefault_S_4(0.0000025);

      setValue_Hc_4(4899.404766);
      setDefault_Hc_4(4899.404766);

      setValue_Dair_4(0.1);
      setDefault_Dair_4(0.1);

      setValue_Dwater_4(0.00001);
      setDefault_Dwater_4(0.00001);

      setValue_DHvb_4(17000);
      setDefault_DHvb_4(17000);

      setValue_Tc_4(500);
      setDefault_Tc_4(500);

      setValue_Tb_4(300);
      setDefault_Tb_4(300);

      setValue_MW_4(270);
      setDefault_MW_4(270);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(null);
      setDefault_Rfc_4(null);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(630957344.4);
      setDefault_Koc_4(630957344.4);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "TPH - Aliph >C21-C34") {
      setValue_S_4(0.0000025);
      setDefault_S_4(0.0000025);

      setValue_Hc_4(7258.377431);
      setDefault_Hc_4(7258.377431);

      setValue_Dair_4(0.1);
      setDefault_Dair_4(0.1);

      setValue_Dwater_4(0.00001);
      setDefault_Dwater_4(0.00001);

      setValue_DHvb_4(20000);
      setDefault_DHvb_4(20000);

      setValue_Tc_4(500);
      setDefault_Tc_4(500);

      setValue_Tb_4(100);
      setDefault_Tb_4(100);

      setValue_MW_4(400);
      setDefault_MW_4(400);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(null);
      setDefault_Rfc_4(null);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(630957344.4);
      setDefault_Koc_4(630957344.4);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "TPH - Arom >C05-C07") {
      setValue_S_4(1800);
      setDefault_S_4(1800);

      setValue_Hc_4(0.232323065);
      setDefault_Hc_4(0.232323065);

      setValue_Dair_4(0.1);
      setDefault_Dair_4(0.1);

      setValue_Dwater_4(0.00001);
      setDefault_Dwater_4(0.00001);

      setValue_DHvb_4(8000);
      setDefault_DHvb_4(8000);

      setValue_Tc_4(500);
      setDefault_Tc_4(500);

      setValue_Tb_4(100);
      setDefault_Tb_4(100);

      setValue_MW_4(78);
      setDefault_MW_4(78);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.28);
      setDefault_Rfc_4(0.28);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(79.43);
      setDefault_Koc_4(79.43);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "TPH - Arom >C07-C08") {
      setValue_S_4(520);
      setDefault_S_4(520);

      setValue_Hc_4(0.277264942);
      setDefault_Hc_4(0.277264942);

      setValue_Dair_4(0.1);
      setDefault_Dair_4(0.1);

      setValue_Dwater_4(0.00001);
      setDefault_Dwater_4(0.00001);

      setValue_DHvb_4(10000);
      setDefault_DHvb_4(10000);

      setValue_Tc_4(500);
      setDefault_Tc_4(500);

      setValue_Tb_4(100);
      setDefault_Tb_4(100);

      setValue_MW_4(92);
      setDefault_MW_4(92);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(1.9);
      setDefault_Rfc_4(1.9);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(251.1);
      setDefault_Koc_4(251.1);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "TPH - Arom >C08-C10") {
      setValue_S_4(65);
      setDefault_S_4(65);

      setValue_Hc_4(0.479662005);
      setDefault_Hc_4(0.479662005);

      setValue_Dair_4(0.1);
      setDefault_Dair_4(0.1);

      setValue_Dwater_4(0.00001);
      setDefault_Dwater_4(0.00001);

      setValue_DHvb_4(10000);
      setDefault_DHvb_4(10000);

      setValue_Tc_4(500);
      setDefault_Tc_4(500);

      setValue_Tb_4(300);
      setDefault_Tb_4(300);

      setValue_MW_4(120);
      setDefault_MW_4(120);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.2);
      setDefault_Rfc_4(0.2);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(1584.8);
      setDefault_Koc_4(1584.8);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "TPH - Arom >C10-C12") {
      setValue_S_4(25);
      setDefault_S_4(25);

      setValue_Hc_4(0.135104789);
      setDefault_Hc_4(0.135104789);

      setValue_Dair_4(0.1);
      setDefault_Dair_4(0.1);

      setValue_Dwater_4(0.00001);
      setDefault_Dwater_4(0.00001);

      setValue_DHvb_4(12000);
      setDefault_DHvb_4(12000);

      setValue_Tc_4(500);
      setDefault_Tc_4(500);

      setValue_Tb_4(300);
      setDefault_Tb_4(300);

      setValue_MW_4(130);
      setDefault_MW_4(130);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.2);
      setDefault_Rfc_4(0.2);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(2511.8);
      setDefault_Koc_4(2511.8);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "TPH - Arom >C12-C16") {
      setValue_S_4(5.8);
      setDefault_S_4(5.8);

      setValue_Hc_4(0.051195452);
      setDefault_Hc_4(0.051195452);

      setValue_Dair_4(0.1);
      setDefault_Dair_4(0.1);

      setValue_Dwater_4(0.00001);
      setDefault_Dwater_4(0.00001);

      setValue_DHvb_4(16000);
      setDefault_DHvb_4(16000);

      setValue_Tc_4(500);
      setDefault_Tc_4(500);

      setValue_Tb_4(300);
      setDefault_Tb_4(300);

      setValue_MW_4(150);
      setDefault_MW_4(150);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.2);
      setDefault_Rfc_4(0.2);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(5011.8);
      setDefault_Koc_4(5011.8);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "TPH - Arom >C16-C121") {
      setValue_S_4(0.65);
      setDefault_S_4(0.65);

      setValue_Hc_4(0.013260497);
      setDefault_Hc_4(0.013260497);

      setValue_Dair_4(0.1);
      setDefault_Dair_4(0.1);

      setValue_Dwater_4(0.00001);
      setDefault_Dwater_4(0.00001);

      setValue_DHvb_4(17000);
      setDefault_DHvb_4(17000);

      setValue_Tc_4(500);
      setDefault_Tc_4(500);

      setValue_Tb_4(300);
      setDefault_Tb_4(300);

      setValue_MW_4(190);
      setDefault_MW_4(190);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(null);
      setDefault_Rfc_4(null);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(15848.9);
      setDefault_Koc_4(15848.9);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "TPH - Arom >C21-C35") {
      setValue_S_4(0.0066);
      setDefault_S_4(0.0066);

      setValue_Hc_4(0.000659852);
      setDefault_Hc_4(0.000659852);

      setValue_Dair_4(0.1);
      setDefault_Dair_4(0.1);

      setValue_Dwater_4(0.00001);
      setDefault_Dwater_4(0.00001);

      setValue_DHvb_4(20000);
      setDefault_DHvb_4(20000);

      setValue_Tc_4(500);
      setDefault_Tc_4(500);

      setValue_Tb_4(300);
      setDefault_Tb_4(300);

      setValue_MW_4(240);
      setDefault_MW_4(240);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(null);
      setDefault_Rfc_4(null);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(125892.5);
      setDefault_Koc_4(125892.5);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "TPH, TX1105, C6-C12") {
      setValue_S_4(65);
      setDefault_S_4(65);

      setValue_Hc_4(0.48);
      setDefault_Hc_4(0.48);

      setValue_Dair_4(0.1);
      setDefault_Dair_4(0.1);

      setValue_Dwater_4(0.00001);
      setDefault_Dwater_4(0.00001);

      setValue_DHvb_4(10000);
      setDefault_DHvb_4(10000);

      setValue_Tc_4(500);
      setDefault_Tc_4(500);

      setValue_Tb_4(100);
      setDefault_Tb_4(100);

      setValue_MW_4(120);
      setDefault_MW_4(120);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.2);
      setDefault_Rfc_4(0.2);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(1584.8);
      setDefault_Koc_4(1584.8);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "TPH, TX1105, >C12-C28") {
      setValue_S_4(5.8);
      setDefault_S_4(5.8);

      setValue_Hc_4(0.053);
      setDefault_Hc_4(0.053);

      setValue_Dair_4(0.1);
      setDefault_Dair_4(0.1);

      setValue_Dwater_4(0.00001);
      setDefault_Dwater_4(0.00001);

      setValue_DHvb_4(20000);
      setDefault_DHvb_4(20000);

      setValue_Tc_4(500);
      setDefault_Tc_4(500);

      setValue_Tb_4(100);
      setDefault_Tb_4(100);

      setValue_MW_4(150);
      setDefault_MW_4(150);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.2);
      setDefault_Rfc_4(0.2);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(5011.8);
      setDefault_Koc_4(5011.8);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "TPH, TX1105, >C12-C35") {
      setValue_S_4(5.8);
      setDefault_S_4(5.8);

      setValue_Hc_4(0.053);
      setDefault_Hc_4(0.053);

      setValue_Dair_4(0.1);
      setDefault_Dair_4(0.1);

      setValue_Dwater_4(0.00001);
      setDefault_Dwater_4(0.00001);

      setValue_DHvb_4(20000);
      setDefault_DHvb_4(20000);

      setValue_Tc_4(500);
      setDefault_Tc_4(500);

      setValue_Tb_4(100);
      setDefault_Tb_4(100);

      setValue_MW_4(150);
      setDefault_MW_4(150);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.2);
      setDefault_Rfc_4(0.2);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(5011.8);
      setDefault_Koc_4(5011.8);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    } else if (selectedChem === "TPH, TX1105, >C28-C35") {
      setValue_S_4(5.8);
      setDefault_S_4(5.8);

      setValue_Hc_4(0.053);
      setDefault_Hc_4(0.053);

      setValue_Dair_4(0.1);
      setDefault_Dair_4(0.1);

      setValue_Dwater_4(0.00001);
      setDefault_Dwater_4(0.00001);

      setValue_DHvb_4(20000);
      setDefault_DHvb_4(20000);

      setValue_Tc_4(500);
      setDefault_Tc_4(500);

      setValue_Tb_4(300);
      setDefault_Tb_4(100);

      setValue_MW_4(150);
      setDefault_MW_4(150);

      setValue_IUR_4(null);
      setDefault_IUR_4(null);

      setValue_Rfc_4(0.2);
      setDefault_Rfc_4(0.2);

      setValue_Mut_4("No");
      setDefault_Mut_4("No");

      setValue_Koc_4(5011.8);
      setDefault_Koc_4(5011.8);

      setValue_foc_4(0.0007);
      setDefault_foc_4(0.0007);
    }
  };

  const selectChem5 = (e) => {
    setOption5("none");
    let selectedChem = e.target.value;
    setChem5(selectedChem);

    if (selectedChem === "Acenaphthene") {
      setValue_S_5(3.9);
      setDefault_S_5(3.9);

      setValue_Hc_5(0.000184);
      setDefault_Hc_5(0.000184);

      setValue_Dair_5(0.0506143);
      setDefault_Dair_5(0.0506143);

      setValue_Dwater_5(0.00000833);
      setDefault_Dwater_5(0.00000833);

      setValue_DHvb_5(12155);
      setDefault_DHvb_5(12155);

      setValue_Tc_5(803.15);
      setDefault_Tc_5(803.15);

      setValue_Tb_5(552);
      setDefault_Tb_5(552);

      setValue_MW_5(154.21);
      setDefault_MW_5(154.21);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(null);
      setDefault_Rfc_5(null);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(2522);
      setDefault_Koc_5(2522);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Acetaldehyde") {
      setValue_S_5(1000000);
      setDefault_S_5(1000000);

      setValue_Hc_5(0.0000667);
      setDefault_Hc_5(0.0000667);

      setValue_Dair_5(0.1277026);
      setDefault_Dair_5(0.1277026);

      setValue_Dwater_5(0.0000135);
      setDefault_Dwater_5(0.0000135);

      setValue_DHvb_5(6156.64);
      setDefault_DHvb_5(6156.64);

      setValue_Tc_5(466);
      setDefault_Tc_5(466);

      setValue_Tb_5(293.1);
      setDefault_Tb_5(293.1);

      setValue_MW_5(293.1);
      setDefault_MW_5(293.1);

      setValue_IUR_5(0.0000022);
      setDefault_IUR_5(0.0000022);

      setValue_Rfc_5(0.009);
      setDefault_Rfc_5(0.009);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(3.219);
      setDefault_Koc_5(3.219);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Acetone") {
      setValue_S_5(1000000);
      setDefault_S_5(1000000);

      setValue_Hc_5(0.000035);
      setDefault_Hc_5(0.000035);

      setValue_Dair_5(0.1059215);
      setDefault_Dair_5(0.1059215);

      setValue_Dwater_5(0.0000115);
      setDefault_Dwater_5(0.0000115);

      setValue_DHvb_5(6955);
      setDefault_DHvb_5(6955);

      setValue_Tc_5(508.1);
      setDefault_Tc_5(508.1);

      setValue_Tb_5(328.5);
      setDefault_Tb_5(328.5);

      setValue_MW_5(58.081);
      setDefault_MW_5(58.081);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(31);
      setDefault_Rfc_5(31);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(9.726);
      setDefault_Koc_5(9.726);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Acetonitrile") {
      setValue_S_5(1000000);
      setDefault_S_5(1000000);

      setValue_Hc_5(0.0000345);
      setDefault_Hc_5(0.0000345);

      setValue_Dair_5(0.1339939);
      setDefault_Dair_5(0.1339939);

      setValue_Dwater_5(0.0000141);
      setDefault_Dwater_5(0.0000141);

      setValue_DHvb_5(7110.25);
      setDefault_DHvb_5(7110.25);

      setValue_Tc_5(545.5);
      setDefault_Tc_5(545.5);

      setValue_Tb_5(332.6);
      setDefault_Tb_5(332.6);

      setValue_MW_5(41.053);
      setDefault_MW_5(41.053);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.06);
      setDefault_Rfc_5(0.06);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(13.46);
      setDefault_Koc_5(13.46);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Acetophenone") {
      setValue_S_5(6130);
      setDefault_S_5(6130);

      setValue_Hc_5(0.0000104);
      setDefault_Hc_5(0.0000104);

      setValue_Dair_5(0.0652221);
      setDefault_Dair_5(0.0652221);

      setValue_Dwater_5(0.0000087229);
      setDefault_Dwater_5(0.0000087229);

      setValue_DHvb_5(11731.5);
      setDefault_DHvb_5(11731.5);

      setValue_Tc_5(709.5);
      setDefault_Tc_5(709.5);

      setValue_Tb_5(475.0);
      setDefault_Tb_5(475.0);

      setValue_MW_5(120.15);
      setDefault_MW_5(120.15);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(null);
      setDefault_Rfc_5(null);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(98.77);
      setDefault_Koc_5(98.77);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Acrolein") {
      setValue_S_5(212000);
      setDefault_S_5(212000);

      setValue_Hc_5(0.000122);
      setDefault_Hc_5(0.000122);

      setValue_Dair_5(0.1116862);
      setDefault_Dair_5(0.1116862);

      setValue_Dwater_5(0.0000122);
      setDefault_Dwater_5(0.0000122);

      setValue_DHvb_5(6730.7658);
      setDefault_DHvb_5(6730.7658);

      setValue_Tc_5(506.0);
      setDefault_Tc_5(506.0);

      setValue_Tb_5(325.6);
      setDefault_Tb_5(325.6);

      setValue_MW_5(56.065);
      setDefault_MW_5(56.065);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.00002);
      setDefault_Rfc_5(0.00002);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(4.901);
      setDefault_Koc_5(4.901);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Acrylic Acid") {
      setValue_S_5(1000000);
      setDefault_S_5(1000000);

      setValue_Hc_5(0.00000037);
      setDefault_Hc_5(0.00000037);

      setValue_Dair_5(0.1027173);
      setDefault_Dair_5(0.1027173);

      setValue_Dwater_5(0.000012);
      setDefault_Dwater_5(0.000012);

      setValue_DHvb_5(10955.1);
      setDefault_DHvb_5(10955.1);

      setValue_Tc_5(615.15);
      setDefault_Tc_5(615.15);

      setValue_Tb_5(414.35);
      setDefault_Tb_5(414.35);

      setValue_MW_5(72.064);
      setDefault_MW_5(72.064);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.001);
      setDefault_Rfc_5(0.001);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(2.235);
      setDefault_Koc_5(2.235);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Acrylonitrile") {
      setValue_S_5(74500);
      setDefault_S_5(74500);

      setValue_Hc_5(0.000138);
      setDefault_Hc_5(0.000138);

      setValue_Dair_5(0.1136836);
      setDefault_Dair_5(0.1136836);

      setValue_Dwater_5(0.0000123);
      setDefault_Dwater_5(0.0000123);

      setValue_DHvb_5(7786);
      setDefault_DHvb_5(7786);

      setValue_Tc_5(519.0);
      setDefault_Tc_5(519.0);

      setValue_Tb_5(350.3);
      setDefault_Tb_5(350.3);

      setValue_MW_5(53.064);
      setDefault_MW_5(53.064);

      setValue_IUR_5(0.000068);
      setDefault_IUR_5(0.000068);

      setValue_Rfc_5(0.002);
      setDefault_Rfc_5(0.002);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(28.55);
      setDefault_Koc_5(28.55);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Aldrin") {
      setValue_S_5(0.017);
      setDefault_S_5(0.017);

      setValue_Hc_5(0.000044);
      setDefault_Hc_5(0.000044);

      setValue_Dair_5(0.0228116);
      setDefault_Dair_5(0.0228116);

      setValue_Dwater_5(0.0000058402);
      setDefault_Dwater_5(0.0000058402);

      setValue_DHvb_5(15000);
      setDefault_DHvb_5(15000);

      setValue_Tc_5(627.225);
      setDefault_Tc_5(627.225);

      setValue_Tb_5(418.15);
      setDefault_Tb_5(418.15);

      setValue_MW_5(364.92);
      setDefault_MW_5(364.92);

      setValue_IUR_5(0.0049);
      setDefault_IUR_5(0.0049);

      setValue_Rfc_5(null);
      setDefault_Rfc_5(null);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(437500);
      setDefault_Koc_5(437500);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Allyl Alcohol") {
      setValue_S_5(1000000);
      setDefault_S_5(1000000);

      setValue_Hc_5(0.00000499);
      setDefault_Hc_5(0.00000499);

      setValue_Dair_5(0.1097535);
      setDefault_Dair_5(0.1097535);

      setValue_Dwater_5(0.0000121);
      setDefault_Dwater_5(0.0000121);

      setValue_DHvb_5(9553.84);
      setDefault_DHvb_5(9553.84);

      setValue_Tc_5(539.8);
      setDefault_Tc_5(539.8);

      setValue_Tb_5(370.15);
      setDefault_Tb_5(370.15);

      setValue_MW_5(58.081);
      setDefault_MW_5(58.081);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.0001);
      setDefault_Rfc_5(0.0001);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(4.052);
      setDefault_Koc_5(4.052);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Allyl Chloride") {
      setValue_S_5(3370);
      setDefault_S_5(3370);

      setValue_Hc_5(0.011);
      setDefault_Hc_5(0.011);

      setValue_Dair_5(0.093611);
      setDefault_Dair_5(0.093611);

      setValue_Dwater_5(0.0000108);
      setDefault_Dwater_5(0.0000108);

      setValue_DHvb_5(6936.08);
      setDefault_DHvb_5(6936.08);

      setValue_Tc_5(514.26);
      setDefault_Tc_5(514.26);

      setValue_Tb_5(318.1);
      setDefault_Tb_5(318.1);

      setValue_MW_5(76.526);
      setDefault_MW_5(76.526);

      setValue_IUR_5(0.000006);
      setDefault_IUR_5(0.000006);

      setValue_Rfc_5(0.001);
      setDefault_Rfc_5(0.001);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(47.28);
      setDefault_Koc_5(47.28);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Ammonia") {
      setValue_S_5(482000);
      setDefault_S_5(482000);

      setValue_Hc_5(0.0000161);
      setDefault_Hc_5(0.0000161);

      setValue_Dair_5(0.2305471);
      setDefault_Dair_5(0.2305471);

      setValue_Dwater_5(0.0000223);
      setDefault_Dwater_5(0.0000223);

      setValue_DHvb_5(5581);
      setDefault_DHvb_5(5581);

      setValue_Tc_5(405.55);
      setDefault_Tc_5(405.55);

      setValue_Tb_5(239.8);
      setDefault_Tb_5(239.8);

      setValue_MW_5(17.031);
      setDefault_MW_5(17.031);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.5);
      setDefault_Rfc_5(0.5);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(0.06337);
      setDefault_Koc_5(0.06337);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Amyl Alcohol, tert-") {
      setValue_S_5(110000);
      setDefault_S_5(110000);

      setValue_Hc_5(0.0000138);
      setDefault_Hc_5(0.0000138);

      setValue_Dair_5(0.0785447);
      setDefault_Dair_5(0.0785447);

      setValue_Dwater_5(0.0000091012);
      setDefault_Dwater_5(0.0000091012);

      setValue_DHvb_5(9586.520076);
      setDefault_DHvb_5(9586.520076);

      setValue_Tc_5(545.15);
      setDefault_Tc_5(545.15);

      setValue_Tb_5(375.55);
      setDefault_Tb_5(375.55);

      setValue_MW_5(88.151);
      setDefault_MW_5(88.151);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.003);
      setDefault_Rfc_5(0.003);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(10.14);
      setDefault_Koc_5(10.14);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Anthracene") {
      setValue_S_5(0.0434);
      setDefault_S_5(0.0434);

      setValue_Hc_5(0.0000556);
      setDefault_Hc_5(0.0000556);

      setValue_Dair_5(0.0389732);
      setDefault_Dair_5(0.0389732);

      setValue_Dwater_5(0.0000078523);
      setDefault_Dwater_5(0.0000078523);

      setValue_DHvb_5(13121);
      setDefault_DHvb_5(13121);

      setValue_Tc_5(873.0);
      setDefault_Tc_5(873.0);

      setValue_Tb_5(612.9);
      setDefault_Tb_5(612.9);

      setValue_MW_5(178.24);
      setDefault_MW_5(178.24);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(null);
      setDefault_Rfc_5(null);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(7274);
      setDefault_Koc_5(7274);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Benz[a]anthracene") {
      setValue_S_5(0.0094);
      setDefault_S_5(0.0094);

      setValue_Hc_5(0.000012);
      setDefault_Hc_5(0.000012);

      setValue_Dair_5(0.0261138);
      setDefault_Dair_5(0.0261138);

      setValue_Dwater_5(0.0000067495);
      setDefault_Dwater_5(0.0000067495);

      setValue_DHvb_5(16000);
      setDefault_DHvb_5(16000);

      setValue_Tc_5(1066.125);
      setDefault_Tc_5(1066.125);

      setValue_Tb_5(710.75);
      setDefault_Tb_5(710.75);

      setValue_MW_5(228.3);
      setDefault_MW_5(228.3);

      setValue_IUR_5(0.00006);
      setDefault_IUR_5(0.00006);

      setValue_Rfc_5(null);
      setDefault_Rfc_5(null);

      setValue_Mut_5("Yes");
      setDefault_Mut_5("Yes");

      setValue_Koc_5(99700);
      setDefault_Koc_5(99700);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Benzaldehyde") {
      setValue_S_5(6950);
      setDefault_S_5(6950);

      setValue_Hc_5(0.0000267);
      setDefault_Hc_5(0.0000267);

      setValue_Dair_5(0.074393);
      setDefault_Dair_5(0.074393);

      setValue_Dwater_5(0.0000094627);
      setDefault_Dwater_5(0.0000094627);

      setValue_DHvb_5(11657.8);
      setDefault_DHvb_5(11657.8);

      setValue_Tc_5(695.0);
      setDefault_Tc_5(695.0);

      setValue_Tb_5(452.0);
      setDefault_Tb_5(452.0);

      setValue_MW_5(106.13);
      setDefault_MW_5(106.13);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(null);
      setDefault_Rfc_5(null);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(32.69);
      setDefault_Koc_5(32.69);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Benzene") {
      setValue_S_5(1790);
      setDefault_S_5(1790);

      setValue_Hc_5(0.00555);
      setDefault_Hc_5(0.00555);

      setValue_Dair_5(0.089534);
      setDefault_Dair_5(0.089534);

      setValue_Dwater_5(0.0000103);
      setDefault_Dwater_5(0.0000103);

      setValue_DHvb_5(7342);
      setDefault_DHvb_5(7342);

      setValue_Tc_5(562.16);
      setDefault_Tc_5(562.16);

      setValue_Tb_5(353);
      setDefault_Tb_5(353);

      setValue_MW_5(78.115);
      setDefault_MW_5(78.115);

      setValue_IUR_5(0.0000078);
      setDefault_IUR_5(0.0000078);

      setValue_Rfc_5(0.03);
      setDefault_Rfc_5(0.03);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(70.51);
      setDefault_Koc_5(70.51);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Benzenethiol") {
      setValue_S_5(835.0);
      setDefault_S_5(835.0);

      setValue_Hc_5(0.000335);
      setDefault_Hc_5(0.000335);

      setValue_Dair_5(0.0728564);
      setDefault_Dair_5(0.0728564);

      setValue_Dwater_5(0.0000094506);
      setDefault_Dwater_5(0.0000094506);

      setValue_DHvb_5(11359.51);
      setDefault_DHvb_5(11359.51);

      setValue_Tc_5(663.15);
      setDefault_Tc_5(663.15);

      setValue_Tb_5(442.1);
      setDefault_Tb_5(442.1);

      setValue_MW_5(110.18);
      setDefault_MW_5(110.18);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(null);
      setDefault_Rfc_5(null);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(153.7);
      setDefault_Koc_5(153.7);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Benzyl Chloride") {
      setValue_S_5(525.0);
      setDefault_S_5(525.0);

      setValue_Hc_5(0.000412);
      setDefault_Hc_5(0.000412);

      setValue_Dair_5(0.0633618);
      setDefault_Dair_5(0.0633618);

      setValue_Dwater_5(0.0000088057);
      setDefault_Dwater_5(0.0000088057);

      setValue_DHvb_5(8773.2598);
      setDefault_DHvb_5(8773.2598);

      setValue_Tc_5(685.0);
      setDefault_Tc_5(685.0);

      setValue_Tb_5(452);
      setDefault_Tb_5(452);

      setValue_MW_5(126.59);
      setDefault_MW_5(126.59);

      setValue_IUR_5(0.000049);
      setDefault_IUR_5(0.000049);

      setValue_Rfc_5(0.001);
      setDefault_Rfc_5(0.001);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(99.03);
      setDefault_Koc_5(99.03);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Biphenyl, 1,1'-") {
      setValue_S_5(7.48);
      setDefault_S_5(7.48);

      setValue_Hc_5(0.000308);
      setDefault_Hc_5(0.000308);

      setValue_Dair_5(0.0470592);
      setDefault_Dair_5(0.0470592);

      setValue_Dwater_5(0.0000075618);
      setDefault_Dwater_5(0.0000075618);

      setValue_DHvb_5(10890);
      setDefault_DHvb_5(10890);

      setValue_Tc_5(789.0);
      setDefault_Tc_5(789.0);

      setValue_Tb_5(529.1);
      setDefault_Tb_5(529.1);

      setValue_MW_5(154.21);
      setDefault_MW_5(154.21);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.0004);
      setDefault_Rfc_5(0.0004);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(3019);
      setDefault_Koc_5(3019);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Bis(2-chloro-methylethyl) ether") {
      setValue_S_5(1700);
      setDefault_S_5(1700);

      setValue_Hc_5(0.0000742);
      setDefault_Hc_5(0.0000742);

      setValue_Dair_5(0.0398891);
      setDefault_Dair_5(0.0398891);

      setValue_Dwater_5(0.0000073606);
      setDefault_Dwater_5(0.0000073606);

      setValue_DHvb_5(9694.9215);
      setDefault_DHvb_5(9694.9215);

      setValue_Tc_5(690.0);
      setDefault_Tc_5(690.0);

      setValue_Tb_5(460.0);
      setDefault_Tb_5(460.0);

      setValue_MW_5(171.07);
      setDefault_MW_5(171.07);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(null);
      setDefault_Rfc_5(null);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(160.8);
      setDefault_Koc_5(160.8);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Bis(2-chloroethyl)ether") {
      setValue_S_5(17200);
      setDefault_S_5(17200);

      setValue_Hc_5(0.000017);
      setDefault_Hc_5(0.000017);

      setValue_Dair_5(0.0567192);
      setDefault_Dair_5(0.0567192);

      setValue_Dwater_5(0.000008707);
      setDefault_Dwater_5(0.000008707);

      setValue_DHvb_5(10803);
      setDefault_DHvb_5(10803);

      setValue_Tc_5(659.79);
      setDefault_Tc_5(659.79);

      setValue_Tb_5(451.5);
      setDefault_Tb_5(451.5);

      setValue_MW_5(143.01);
      setDefault_MW_5(143.01);

      setValue_IUR_5(0.00033);
      setDefault_IUR_5(0.00033);

      setValue_Rfc_5(null);
      setDefault_Rfc_5(null);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(35.32);
      setDefault_Koc_5(35.32);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Bromo-2-chloroethane, 1-") {
      setValue_S_5(6900);
      setDefault_S_5(6900);

      setValue_Hc_5(0.000909);
      setDefault_Hc_5(0.000909);

      setValue_Dair_5(0.0659248);
      setDefault_Dair_5(0.0659248);

      setValue_Dwater_5(0.0000108);
      setDefault_Dwater_5(0.0000108);

      setValue_DHvb_5(9107.19);
      setDefault_DHvb_5(9107.19);

      setValue_Tc_5(570.0);
      setDefault_Tc_5(570.0);

      setValue_Tb_5(380.0);
      setDefault_Tb_5(380.0);

      setValue_MW_5(143.41);
      setDefault_MW_5(143.41);

      setValue_IUR_5(0.0006);
      setDefault_IUR_5(0.0006);

      setValue_Rfc_5(null);
      setDefault_Rfc_5(null);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(46.34);
      setDefault_Koc_5(46.34);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Bromobenzene") {
      setValue_S_5(446.0);
      setDefault_S_5(446.0);

      setValue_Hc_5(0.00247);
      setDefault_Hc_5(0.00247);

      setValue_Dair_5(0.0537132);
      setDefault_Dair_5(0.0537132);

      setValue_Dwater_5(0.0000093004);
      setDefault_Dwater_5(0.0000093004);

      setValue_DHvb_5(10628.64);
      setDefault_DHvb_5(10628.64);

      setValue_Tc_5(670.0);
      setDefault_Tc_5(670.0);

      setValue_Tb_5(429.0);
      setDefault_Tb_5(429.0);

      setValue_MW_5(157.01);
      setDefault_MW_5(157.01);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.06);
      setDefault_Rfc_5(0.06);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(393.2);
      setDefault_Koc_5(393.2);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Bromochloromethane") {
      setValue_S_5(16700);
      setDefault_S_5(16700);

      setValue_Hc_5(0.00146);
      setDefault_Hc_5(0.00146);

      setValue_Dair_5(0.078692);
      setDefault_Dair_5(0.078692);

      setValue_Dwater_5(0.0000122);
      setDefault_Dwater_5(0.0000122);

      setValue_DHvb_5(7167.65);
      setDefault_DHvb_5(7167.65);

      setValue_Tc_5(511.5);
      setDefault_Tc_5(511.5);

      setValue_Tb_5(341.0);
      setDefault_Tb_5(341.0);

      setValue_MW_5(129.38);
      setDefault_MW_5(129.38);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.04);
      setDefault_Rfc_5(0.04);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(16.72);
      setDefault_Koc_5(16.72);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Bromodichloromethane") {
      setValue_S_5(3032);
      setDefault_S_5(3032);

      setValue_Hc_5(0.00212);
      setDefault_Hc_5(0.00212);

      setValue_Dair_5(0.0562629);
      setDefault_Dair_5(0.0562629);

      setValue_Dwater_5(0.0000107);
      setDefault_Dwater_5(0.0000107);

      setValue_DHvb_5(7800);
      setDefault_DHvb_5(7800);

      setValue_Tc_5(585.85);
      setDefault_Tc_5(585.85);

      setValue_Tb_5(363.0);
      setDefault_Tb_5(363.0);

      setValue_MW_5(163.83);
      setDefault_MW_5(163.83);

      setValue_IUR_5(0.000037);
      setDefault_IUR_5(0.000037);

      setValue_Rfc_5(null);
      setDefault_Rfc_5(null);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(54.38);
      setDefault_Koc_5(54.38);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Bromoform") {
      setValue_S_5(3100);
      setDefault_S_5(3100);

      setValue_Hc_5(0.000535);
      setDefault_Hc_5(0.000535);

      setValue_Dair_5(0.0357324);
      setDefault_Dair_5(0.0357324);

      setValue_Dwater_5(0.0000104);
      setDefault_Dwater_5(0.0000104);

      setValue_DHvb_5(9472.63236);
      setDefault_DHvb_5(9472.63236);

      setValue_Tc_5(633.375);
      setDefault_Tc_5(633.375);

      setValue_Tb_5(422.25);
      setDefault_Tb_5(422.25);

      setValue_MW_5(252.73);
      setDefault_MW_5(252.73);

      setValue_IUR_5(0.0000011);
      setDefault_IUR_5(0.0000011);

      setValue_Rfc_5(null);
      setDefault_Rfc_5(null);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(120.9);
      setDefault_Koc_5(120.9);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Bromomethane") {
      setValue_S_5(15200);
      setDefault_S_5(15200);

      setValue_Hc_5(0.00734);
      setDefault_Hc_5(0.00734);

      setValue_Dair_5(0.1004976);
      setDefault_Dair_5(0.1004976);

      setValue_Dwater_5(0.0000135);
      setDefault_Dwater_5(0.0000135);

      setValue_DHvb_5(5714);
      setDefault_DHvb_5(5714);

      setValue_Tc_5(467.0);
      setDefault_Tc_5(467.0);

      setValue_Tb_5(276.5);
      setDefault_Tb_5(276.5);

      setValue_MW_5(94.939);
      setDefault_MW_5(94.939);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.005);
      setDefault_Rfc_5(0.005);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(10.77);
      setDefault_Koc_5(10.77);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Butadiene, 1,3-") {
      setValue_S_5(735.0);
      setDefault_S_5(735.0);

      setValue_Hc_5(0.0736);
      setDefault_Hc_5(0.0736);

      setValue_Dair_5(0.1003488);
      setDefault_Dair_5(0.1003488);

      setValue_Dwater_5(0.0000103);
      setDefault_Dwater_5(0.0000103);

      setValue_DHvb_5(5370.33);
      setDefault_DHvb_5(5370.33);

      setValue_Tc_5(425.0);
      setDefault_Tc_5(425.0);

      setValue_Tb_5(268.6);
      setDefault_Tb_5(268.6);

      setValue_MW_5(54.092);
      setDefault_MW_5(54.092);

      setValue_IUR_5(0.00003);
      setDefault_IUR_5(0.00003);

      setValue_Rfc_5(0.002);
      setDefault_Rfc_5(0.002);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(53.3);
      setDefault_Koc_5(53.3);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Butanol, N-") {
      setValue_S_5(63200);
      setDefault_S_5(63200);

      setValue_Hc_5(0.00000881);
      setDefault_Hc_5(0.00000881);

      setValue_Dair_5(0.0900387);
      setDefault_Dair_5(0.0900387);

      setValue_Dwater_5(0.0000101);
      setDefault_Dwater_5(0.0000101);

      setValue_DHvb_5(134572.18);
      setDefault_DHvb_5(134572.18);

      setValue_Tc_5(586.275);
      setDefault_Tc_5(586.275);

      setValue_Tb_5(390.85);
      setDefault_Tb_5(390.85);

      setValue_MW_5(74.124);
      setDefault_MW_5(74.124);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(null);
      setDefault_Rfc_5(null);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(10.01);
      setDefault_Koc_5(10.01);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Butyl alcohol, sec-") {
      setValue_S_5(181000);
      setDefault_S_5(181000);

      setValue_Hc_5(0.00000906);
      setDefault_Hc_5(0.00000906);

      setValue_Dair_5(0.0898848);
      setDefault_Dair_5(0.0898848);

      setValue_Dwater_5(0.0000101);
      setDefault_Dwater_5(0.0000101);

      setValue_DHvb_5(11875.42312);
      setDefault_DHvb_5(11875.42312);

      setValue_Tc_5(536.2);
      setDefault_Tc_5(536.2);

      setValue_Tb_5(372.65);
      setDefault_Tb_5(372.65);

      setValue_MW_5(74.124);
      setDefault_MW_5(74.124);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(30.0);
      setDefault_Rfc_5(30.0);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(7.097);
      setDefault_Koc_5(7.097);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Butylbenzene, n-") {
      setValue_S_5(11.8);
      setDefault_S_5(11.8);

      setValue_Hc_5(0.0159);
      setDefault_Hc_5(0.0159);

      setValue_Dair_5(0.0527732);
      setDefault_Dair_5(0.0527732);

      setValue_Dwater_5(0.0000073335);
      setDefault_Dwater_5(0.0000073335);

      setValue_DHvb_5(12267.12);
      setDefault_DHvb_5(12267.12);

      setValue_Tc_5(720);
      setDefault_Tc_5(720);

      setValue_Tb_5(456.3);
      setDefault_Tb_5(456.3);

      setValue_MW_5(134.22);
      setDefault_MW_5(134.22);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(null);
      setDefault_Rfc_5(null);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(6324);
      setDefault_Koc_5(6324);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Butylbenzene, sec-") {
      setValue_S_5(17.6);
      setDefault_S_5(17.6);

      setValue_Hc_5(0.0176);
      setDefault_Hc_5(0.0176);

      setValue_Dair_5(0.0527928);
      setDefault_Dair_5(0.0527928);

      setValue_Dwater_5(0.0000073371);
      setDefault_Dwater_5(0.0000073371);

      setValue_DHvb_5(11467.5);
      setDefault_DHvb_5(11467.5);

      setValue_Tc_5(677.25);
      setDefault_Tc_5(677.25);

      setValue_Tb_5(451.5);
      setDefault_Tb_5(451.5);

      setValue_MW_5(134.22);
      setDefault_MW_5(134.22);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(null);
      setDefault_Rfc_5(null);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(9245);
      setDefault_Koc_5(9245);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Butylbenzene, tert-") {
      setValue_S_5(29.5);
      setDefault_S_5(29.5);

      setValue_Hc_5(0.0132);
      setDefault_Hc_5(0.0132);

      setValue_Dair_5(0.0529525);
      setDefault_Dair_5(0.0529525);

      setValue_Dwater_5(0.0000073662);
      setDefault_Dwater_5(0.0000073662);

      setValue_DHvb_5(11405.35);
      setDefault_DHvb_5(11405.35);

      setValue_Tc_5(664.725);
      setDefault_Tc_5(664.725);

      setValue_Tb_5(443.15);
      setDefault_Tb_5(443.15);

      setValue_MW_5(134.22);
      setDefault_MW_5(134.22);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(null);
      setDefault_Rfc_5(null);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(3687);
      setDefault_Koc_5(3687);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Carbon Disulfide") {
      setValue_S_5(2160);
      setDefault_S_5(2160);

      setValue_Hc_5(0.0144);
      setDefault_Hc_5(0.0144);

      setValue_Dair_5(0.1064373);
      setDefault_Dair_5(0.1064373);

      setValue_Dwater_5(0.000013);
      setDefault_Dwater_5(0.000013);

      setValue_DHvb_5(6391);
      setDefault_DHvb_5(6391);

      setValue_Tc_5(552.0);
      setDefault_Tc_5(552.0);

      setValue_Tb_5(319.0);
      setDefault_Tb_5(319.0);

      setValue_MW_5(76.139);
      setDefault_MW_5(76.139);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.7);
      setDefault_Rfc_5(0.7);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(48.23);
      setDefault_Koc_5(48.23);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Carbon Tetrachloride") {
      setValue_S_5(793.0);
      setDefault_S_5(793.0);

      setValue_Hc_5(0.0276);
      setDefault_Hc_5(0.0276);

      setValue_Dair_5(0.0571435);
      setDefault_Dair_5(0.0571435);

      setValue_Dwater_5(0.0000097849);
      setDefault_Dwater_5(0.0000097849);

      setValue_DHvb_5(7127);
      setDefault_DHvb_5(7127);

      setValue_Tc_5(556.6);
      setDefault_Tc_5(556.6);

      setValue_Tb_5(349.8);
      setDefault_Tb_5(349.8);

      setValue_MW_5(153.82);
      setDefault_MW_5(153.82);

      setValue_IUR_5(0.000006);
      setDefault_IUR_5(0.000006);

      setValue_Rfc_5(0.1);
      setDefault_Rfc_5(0.1);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(285.6);
      setDefault_Koc_5(285.6);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Carbonyl Sulfide") {
      setValue_S_5(1220);
      setDefault_S_5(1220);

      setValue_Hc_5(0.61);
      setDefault_Hc_5(0.61);

      setValue_Dair_5(0.1157542);
      setDefault_Dair_5(0.1157542);

      setValue_Dwater_5(0.0000132);
      setDefault_Dwater_5(0.0000132);

      setValue_DHvb_5(4.66);
      setDefault_DHvb_5(4.66);

      setValue_Tc_5(378.15);
      setDefault_Tc_5(378.15);

      setValue_Tb_5(223.0);
      setDefault_Tb_5(223.0);

      setValue_MW_5(60.075);
      setDefault_MW_5(60.075);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.1);
      setDefault_Rfc_5(0.1);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(0.9123);
      setDefault_Koc_5(0.9123);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Chloral Hydrate") {
      setValue_S_5(793000);
      setDefault_S_5(793000);

      setValue_Hc_5(0.00000000571);
      setDefault_Hc_5(0.00000000571);

      setValue_Dair_5(0.0543991);
      setDefault_Dair_5(0.0543991);

      setValue_Dwater_5(0.0000104);
      setDefault_Dwater_5(0.0000104);

      setValue_DHvb_5(7520.55);
      setDefault_DHvb_5(7520.55);

      setValue_Tc_5(556.725);
      setDefault_Tc_5(556.725);

      setValue_Tb_5(371.15);
      setDefault_Tb_5(371.15);

      setValue_MW_5(165.4);
      setDefault_MW_5(165.4);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(null);
      setDefault_Rfc_5(null);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(4.465);
      setDefault_Koc_5(4.465);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Chlordane") {
      setValue_S_5(0.056);
      setDefault_S_5(0.056);

      setValue_Hc_5(0.0000486);
      setDefault_Hc_5(0.0000486);

      setValue_Dair_5(0.021493);
      setDefault_Dair_5(0.021493);

      setValue_Dwater_5(0.0000054477);
      setDefault_Dwater_5(0.0000054477);

      setValue_DHvb_5(14000);
      setDefault_DHvb_5(14000);

      setValue_Tc_5(672.225);
      setDefault_Tc_5(672.225);

      setValue_Tb_5(448.15);
      setDefault_Tb_5(448.15);

      setValue_MW_5(409.78);
      setDefault_MW_5(409.78);

      setValue_IUR_5(0.0001);
      setDefault_IUR_5(0.0001);

      setValue_Rfc_5(0.0007);
      setDefault_Rfc_5(0.0007);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(250000);
      setDefault_Koc_5(250000);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Chlorine") {
      setValue_S_5(6300);
      setDefault_S_5(6300);

      setValue_Hc_5(0.0117);
      setDefault_Hc_5(0.0117);

      setValue_Dair_5(0.1542088);
      setDefault_Dair_5(0.1542088);

      setValue_Dwater_5(0.0000223);
      setDefault_Dwater_5(0.0000223);

      setValue_DHvb_5(68572.6866);
      setDefault_DHvb_5(68572.6866);

      setValue_Tc_5(417.15);
      setDefault_Tc_5(417.15);

      setValue_Tb_5(239.1);
      setDefault_Tb_5(239.1);

      setValue_MW_5(70.906);
      setDefault_MW_5(70.906);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.00015);
      setDefault_Rfc_5(0.00015);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(5.462);
      setDefault_Koc_5(5.462);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Chloro,1-difluoroethane, 1-") {
      setValue_S_5(1400);
      setDefault_S_5(1400);

      setValue_Hc_5(0.0588);
      setDefault_Hc_5(0.0588);

      setValue_Dair_5(0.0803925);
      setDefault_Dair_5(0.0803925);

      setValue_Dwater_5(0.0000101);
      setDefault_Dwater_5(0.0000101);

      setValue_DHvb_5(53298.46);
      setDefault_DHvb_5(53298.46);

      setValue_Tc_5(409.85);
      setDefault_Tc_5(409.85);

      setValue_Tb_5(263.3);
      setDefault_Tb_5(263.3);

      setValue_MW_5(100.5);
      setDefault_MW_5(100.5);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(50.0);
      setDefault_Rfc_5(50.0);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(60.09);
      setDefault_Koc_5(60.09);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Chloro,3-butadiene, 2-") {
      setValue_S_5(874.9);
      setDefault_S_5(874.9);

      setValue_Hc_5(0.0561);
      setDefault_Hc_5(0.0561);

      setValue_Dair_5(0.0841489);
      setDefault_Dair_5(0.0841489);

      setValue_Dwater_5(0.00001);
      setDefault_Dwater_5(0.00001);

      setValue_DHvb_5(8074.848);
      setDefault_DHvb_5(8074.848);

      setValue_Tc_5(525);
      setDefault_Tc_5(525);

      setValue_Tb_5(332.4);
      setDefault_Tb_5(332.4);

      setValue_MW_5(88.537);
      setDefault_MW_5(88.537);

      setValue_IUR_5(0.0003);
      setDefault_IUR_5(0.0003);

      setValue_Rfc_5(0.02);
      setDefault_Rfc_5(0.02);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(156.8);
      setDefault_Koc_5(156.8);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Chlorobenzene") {
      setValue_S_5(498.0);
      setDefault_S_5(498.0);

      setValue_Hc_5(0.00311);
      setDefault_Hc_5(0.00311);

      setValue_Dair_5(0.0721306);
      setDefault_Dair_5(0.0721306);

      setValue_Dwater_5(0.0000094765);
      setDefault_Dwater_5(0.0000094765);

      setValue_DHvb_5(8410);
      setDefault_DHvb_5(8410);

      setValue_Tc_5(632.4);
      setDefault_Tc_5(632.4);

      setValue_Tb_5(404.7);
      setDefault_Tb_5(404.7);

      setValue_MW_5(112.56);
      setDefault_MW_5(112.56);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.05);
      setDefault_Rfc_5(0.05);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(291.4);
      setDefault_Koc_5(291.4);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Chlorobutane, 1-") {
      setValue_S_5(1100);
      setDefault_S_5(1100);

      setValue_Hc_5(0.0167);
      setDefault_Hc_5(0.0167);

      setValue_Dair_5(0.0784137);
      setDefault_Dair_5(0.0784137);

      setValue_Dwater_5(0.0000093275);
      setDefault_Dwater_5(0.0000093275);

      setValue_DHvb_5(7263.21);
      setDefault_DHvb_5(7263.21);

      setValue_Tc_5(542.0);
      setDefault_Tc_5(542.0);

      setValue_Tb_5(351.6);
      setDefault_Tb_5(351.6);

      setValue_MW_5(92.569);
      setDefault_MW_5(92.569);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(null);
      setDefault_Rfc_5(null);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(195.4);
      setDefault_Koc_5(195.4);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Chlorodifluoromethane") {
      setValue_S_5(2770);
      setDefault_S_5(2770);

      setValue_Hc_5(0.0406);
      setDefault_Hc_5(0.0406);

      setValue_Dair_5(0.1033788);
      setDefault_Dair_5(0.1033788);

      setValue_Dwater_5(0.0000133);
      setDefault_Dwater_5(0.0000133);

      setValue_DHvb_5(4835.92122);
      setDefault_DHvb_5(4835.92122);

      setValue_Tc_5(369.3);
      setDefault_Tc_5(369.3);

      setValue_Tb_5(232.3);
      setDefault_Tb_5(232.3);

      setValue_MW_5(86.469);
      setDefault_MW_5(86.469);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(50.0);
      setDefault_Rfc_5(50.0);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(8.648);
      setDefault_Koc_5(8.648);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Chloroethanol, 2-") {
      setValue_S_5(1000000);
      setDefault_S_5(1000000);

      setValue_Hc_5(0.000000761);
      setDefault_Hc_5(0.000000761);

      setValue_Dair_5(0.0999813);
      setDefault_Dair_5(0.0999813);

      setValue_Dwater_5(0.0000122);
      setDefault_Dwater_5(0.0000122);

      setValue_DHvb_5(9956.97);
      setDefault_DHvb_5(9956.97);

      setValue_Tc_5(602.625);
      setDefault_Tc_5(602.625);

      setValue_Tb_5(401.75);
      setDefault_Tb_5(401.75);

      setValue_MW_5(80.515);
      setDefault_MW_5(80.515);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(null);
      setDefault_Rfc_5(null);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(3.39);
      setDefault_Koc_5(3.39);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Chloroform") {
      setValue_S_5(7950);
      setDefault_S_5(7950);

      setValue_Hc_5(0.00367);
      setDefault_Hc_5(0.00367);

      setValue_Dair_5(0.0769197);
      setDefault_Dair_5(0.0769197);

      setValue_Dwater_5(0.0000109);
      setDefault_Dwater_5(0.0000109);

      setValue_DHvb_5(6988);
      setDefault_DHvb_5(6988);

      setValue_Tc_5(536.4);
      setDefault_Tc_5(536.4);

      setValue_Tb_5(334.1);
      setDefault_Tb_5(334.1);

      setValue_MW_5(119.38);
      setDefault_MW_5(119.38);

      setValue_IUR_5(0.000023);
      setDefault_IUR_5(0.000023);

      setValue_Rfc_5(0.098);
      setDefault_Rfc_5(0.098);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(51.21);
      setDefault_Koc_5(51.21);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Chloromethane") {
      setValue_S_5(5320);
      setDefault_S_5(5320);

      setValue_Hc_5(0.00882);
      setDefault_Hc_5(0.00882);

      setValue_Dair_5(0.1239651);
      setDefault_Dair_5(0.1239651);

      setValue_Dwater_5(0.0000136);
      setDefault_Dwater_5(0.0000136);

      setValue_DHvb_5(5114.6);
      setDefault_DHvb_5(5114.6);

      setValue_Tc_5(416.25);
      setDefault_Tc_5(416.25);

      setValue_Tb_5(249.0);
      setDefault_Tb_5(249.0);

      setValue_MW_5(50.488);
      setDefault_MW_5(50.488);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.09);
      setDefault_Rfc_5(0.09);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(6.157);
      setDefault_Koc_5(6.157);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Chloronaphthalene, Beta-") {
      setValue_S_5(11.7);
      setDefault_S_5(11.7);

      setValue_Hc_5(0.00032);
      setDefault_Hc_5(0.00032);

      setValue_Dair_5(0.0446914);
      setDefault_Dair_5(0.0446914);

      setValue_Dwater_5(0.0000077301);
      setDefault_Dwater_5(0.0000077301);

      setValue_DHvb_5(11311.936);
      setDefault_DHvb_5(11311.936);

      setValue_Tc_5(793.5);
      setDefault_Tc_5(793.5);

      setValue_Tb_5(529.0);
      setDefault_Tb_5(529.0);

      setValue_MW_5(162.62);
      setDefault_MW_5(162.62);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(2423);
      setDefault_Rfc_5(2423);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(null);
      setDefault_Koc_5(null);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Chlorophenol, 2-") {
      setValue_S_5(11300);
      setDefault_S_5(11300);

      setValue_Hc_5(0.0000112);
      setDefault_Hc_5(0.0000112);

      setValue_Dair_5(0.0661175);
      setDefault_Dair_5(0.0661175);

      setValue_Dwater_5(0.0000094784);
      setDefault_Dwater_5(0.0000094784);

      setValue_DHvb_5(9572);
      setDefault_DHvb_5(9572);

      setValue_Tc_5(675);
      setDefault_Tc_5(675);

      setValue_Tb_5(447.9);
      setDefault_Tb_5(447.9);

      setValue_MW_5(128.56);
      setDefault_MW_5(128.56);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(null);
      setDefault_Rfc_5(null);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(191.1);
      setDefault_Koc_5(191.1);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Chlorotoluene, o-") {
      setValue_S_5(374.0);
      setDefault_S_5(374.0);

      setValue_Hc_5(0.00357);
      setDefault_Hc_5(0.00357);

      setValue_Dair_5(0.0629025);
      setDefault_Dair_5(0.0629025);

      setValue_Dwater_5(0.0000087194);
      setDefault_Dwater_5(0.0000087194);

      setValue_DHvb_5(9950.5);
      setDefault_DHvb_5(9950.5);

      setValue_Tc_5(654.1);
      setDefault_Tc_5(654.1);

      setValue_Tb_5(432.0);
      setDefault_Tb_5(432.0);

      setValue_MW_5(126.59);
      setDefault_MW_5(126.59);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(null);
      setDefault_Rfc_5(null);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(928.6);
      setDefault_Koc_5(928.6);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Chlorotoluene, p-") {
      setValue_S_5(106.0);
      setDefault_S_5(106.0);

      setValue_Hc_5(0.00438);
      setDefault_Hc_5(0.00438);

      setValue_Dair_5(0.062571);
      setDefault_Dair_5(0.062571);

      setValue_Dwater_5(0.0000086574);
      setDefault_Dwater_5(0.0000086574);

      setValue_DHvb_5(10144.98);
      setDefault_DHvb_5(10144.98);

      setValue_Tc_5(658.7);
      setDefault_Tc_5(658.7);

      setValue_Tb_5(435.4);
      setDefault_Tb_5(435.4);

      setValue_MW_5(126.59);
      setDefault_MW_5(126.59);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(null);
      setDefault_Rfc_5(null);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(775.7);
      setDefault_Koc_5(775.7);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Crotonaldehyde, trans-") {
      setValue_S_5(150000);
      setDefault_S_5(150000);

      setValue_Hc_5(0.0000194);
      setDefault_Hc_5(0.0000194);

      setValue_Dair_5(0.0959235);
      setDefault_Dair_5(0.0959235);

      setValue_Dwater_5(0.0000108);
      setDefault_Dwater_5(0.0000108);

      setValue_DHvb_5(8.62);
      setDefault_DHvb_5(8.62);

      setValue_Tc_5(568.0);
      setDefault_Tc_5(568.0);

      setValue_Tb_5(377.0);
      setDefault_Tb_5(377.0);

      setValue_MW_5(70.092);
      setDefault_MW_5(70.092);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(null);
      setDefault_Rfc_5(null);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(10.66);
      setDefault_Koc_5(10.66);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Cumene") {
      setValue_S_5(61.3);
      setDefault_S_5(61.3);

      setValue_Hc_5(7);
      setDefault_Hc_5(7);

      setValue_Dair_5(0.0603044);
      setDefault_Dair_5(0.0603044);

      setValue_Dwater_5(0.0000078566);
      setDefault_Dwater_5(0.0000078566);

      setValue_DHvb_5(10335.3);
      setDefault_DHvb_5(10335.3);

      setValue_Tc_5(631.1);
      setDefault_Tc_5(631.1);

      setValue_Tb_5(425.4);
      setDefault_Tb_5(425.4);

      setValue_MW_5(120.2);
      setDefault_MW_5(120.2);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.4);
      setDefault_Rfc_5(0.4);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(1500);
      setDefault_Koc_5(1500);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Cyanogen") {
      setValue_S_5(8000);
      setDefault_S_5(8000);

      setValue_Hc_5(0.0054);
      setDefault_Hc_5(0.0054);

      setValue_Dair_5(0.1237533);
      setDefault_Dair_5(0.1237533);

      setValue_Dwater_5(0.0000138);
      setDefault_Dwater_5(0.0000138);

      setValue_DHvb_5(5778);
      setDefault_DHvb_5(5778);

      setValue_Tc_5(401.3);
      setDefault_Tc_5(401.3);

      setValue_Tb_5(251.9);
      setDefault_Tb_5(251.9);

      setValue_MW_5(52.036);
      setDefault_MW_5(52.036);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(null);
      setDefault_Rfc_5(null);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(56);
      setDefault_Koc_5(56);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Cyanogen Chloride") {
      setValue_S_5(60000);
      setDefault_S_5(60000);

      setValue_Hc_5(0.0019412);
      setDefault_Hc_5(0.0019412);

      setValue_Dair_5(0.1207454);
      setDefault_Dair_5(0.1207454);

      setValue_Dwater_5(0.0000142);
      setDefault_Dwater_5(0.0000142);

      setValue_DHvb_5(6389.13);
      setDefault_DHvb_5(6389.13);

      setValue_Tc_5(429.0);
      setDefault_Tc_5(429.0);

      setValue_Tb_5(286.0);
      setDefault_Tb_5(286.0);

      setValue_MW_5(61.471);
      setDefault_MW_5(61.471);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(null);
      setDefault_Rfc_5(null);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(12.8);
      setDefault_Koc_5(12.8);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Cyclohexane") {
      setValue_S_5(55.0);
      setDefault_S_5(55.0);

      setValue_Hc_5(0.15);
      setDefault_Hc_5(0.15);

      setValue_Dair_5(0.0799729);
      setDefault_Dair_5(0.0799729);

      setValue_Dwater_5(0.0000091077);
      setDefault_Dwater_5(0.0000091077);

      setValue_DHvb_5(7153.6);
      setDefault_DHvb_5(7153.6);

      setValue_Tc_5(553.4);
      setDefault_Tc_5(553.4);

      setValue_Tb_5(353.7);
      setDefault_Tb_5(353.7);

      setValue_MW_5(84.163);
      setDefault_MW_5(84.163);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(6.0);
      setDefault_Rfc_5(6.0);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(966.4);
      setDefault_Koc_5(966.4);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Cyclohexanone") {
      setValue_S_5(25000);
      setDefault_S_5(25000);

      setValue_Hc_5(0.000009);
      setDefault_Hc_5(0.000009);

      setValue_Dair_5(0.0767599);
      setDefault_Dair_5(0.0767599);

      setValue_Dwater_5(0.0000093795);
      setDefault_Dwater_5(0.0000093795);

      setValue_DHvb_5(10762.40076);
      setDefault_DHvb_5(10762.40076);

      setValue_Tc_5(629.0);
      setDefault_Tc_5(629.0);

      setValue_Tb_5(428.55);
      setDefault_Tb_5(428.55);

      setValue_MW_5(98.146);
      setDefault_MW_5(98.146);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.7);
      setDefault_Rfc_5(0.7);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(37.05);
      setDefault_Koc_5(37.05);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Cyclohexene") {
      setValue_S_5(213.0);
      setDefault_S_5(213.0);

      setValue_Hc_5(0.0455);
      setDefault_Hc_5(0.0455);

      setValue_Dair_5(0.0831876);
      setDefault_Dair_5(0.0831876);

      setValue_Dwater_5(0.0000094975);
      setDefault_Dwater_5(0.0000094975);

      setValue_DHvb_5(7279.94);
      setDefault_DHvb_5(7279.94);

      setValue_Tc_5(560.55);
      setDefault_Tc_5(560.55);

      setValue_Tb_5(356.15);
      setDefault_Tb_5(356.15);

      setValue_MW_5(82.147);
      setDefault_MW_5(82.147);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(1.0);
      setDefault_Rfc_5(1.0);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(303.2);
      setDefault_Koc_5(303.2);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Cyclohexylamine") {
      setValue_S_5(1000000);
      setDefault_S_5(1000000);

      setValue_Hc_5(0.00000416);
      setDefault_Hc_5(0.00000416);

      setValue_Dair_5(0.0712945);
      setDefault_Dair_5(0.0712945);

      setValue_Dwater_5(0.0000085394);
      setDefault_Dwater_5(0.0000085394);

      setValue_DHvb_5(10444.55);
      setDefault_DHvb_5(10444.55);

      setValue_Tc_5(610.725);
      setDefault_Tc_5(610.725);

      setValue_Tb_5(407.15);
      setDefault_Tb_5(407.15);

      setValue_MW_5(99.177);
      setDefault_MW_5(99.177);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(null);
      setDefault_Rfc_5(null);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(24.64);
      setDefault_Koc_5(24.64);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "DDE, p,p'-") {
      setValue_S_5(0.04);
      setDefault_S_5(0.04);

      setValue_Hc_5(0.0000416);
      setDefault_Hc_5(0.0000416);

      setValue_Dair_5(0.0229959);
      setDefault_Dair_5(0.0229959);

      setValue_Dwater_5(0.0000058592);
      setDefault_Dwater_5(0.0000058592);

      setValue_DHvb_5(15000);
      setDefault_DHvb_5(15000);

      setValue_Tc_5(913.725);
      setDefault_Tc_5(913.725);

      setValue_Tb_5(609.15);
      setDefault_Tb_5(609.15);

      setValue_MW_5(318.03);
      setDefault_MW_5(318.03);

      setValue_IUR_5(0.000097);
      setDefault_IUR_5(0.000097);

      setValue_Rfc_5(null);
      setDefault_Rfc_5(null);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(446300);
      setDefault_Koc_5(446300);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Dibenzofuran") {
      setValue_S_5(3.1);
      setDefault_S_5(3.1);

      setValue_Hc_5(0.000213);
      setDefault_Hc_5(0.000213);

      setValue_Dair_5(0.0650663);
      setDefault_Dair_5(0.0650663);

      setValue_Dwater_5(0.0000073773);
      setDefault_Dwater_5(0.0000073773);

      setValue_DHvb_5(66400);
      setDefault_DHvb_5(66400);

      setValue_Tc_5(824.0);
      setDefault_Tc_5(824.0);

      setValue_Tb_5(560.0);
      setDefault_Tb_5(560.0);

      setValue_MW_5(168.2);
      setDefault_MW_5(168.2);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(null);
      setDefault_Rfc_5(null);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(3761);
      setDefault_Koc_5(3761);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Dibenzothiophene") {
      setValue_S_5(1.47);
      setDefault_S_5(1.47);

      setValue_Hc_5(0.0000338);
      setDefault_Hc_5(0.0000338);

      setValue_Dair_5(0.0355475);
      setDefault_Dair_5(0.0355475);

      setValue_Dwater_5(0.0000075958);
      setDefault_Dwater_5(0.0000075958);

      setValue_DHvb_5(22299.23518);
      setDefault_DHvb_5(22299.23518);

      setValue_Tc_5(908.475);
      setDefault_Tc_5(908.475);

      setValue_Tb_5(605.65);
      setDefault_Tb_5(605.65);

      setValue_MW_5(184.26);
      setDefault_MW_5(184.26);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(null);
      setDefault_Rfc_5(null);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(6324);
      setDefault_Koc_5(6324);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Dibromo-3-chloropropane, 1,2-") {
      setValue_S_5(1230);
      setDefault_S_5(1230);

      setValue_Hc_5(0.000147);
      setDefault_Hc_5(0.000147);

      setValue_Dair_5(0.0321351);
      setDefault_Dair_5(0.0321351);

      setValue_Dwater_5(0.0000089048);
      setDefault_Dwater_5(0.0000089048);

      setValue_DHvb_5(9960.045);
      setDefault_DHvb_5(9960.045);

      setValue_Tc_5(703.5);
      setDefault_Tc_5(703.5);

      setValue_Tb_5(469.0);
      setDefault_Tb_5(469.0);

      setValue_MW_5(236.33);
      setDefault_MW_5(236.33);

      setValue_IUR_5(0.006);
      setDefault_IUR_5(0.006);

      setValue_Rfc_5(0.0002);
      setDefault_Rfc_5(0.0002);

      setValue_Mut_5("Yes");
      setDefault_Mut_5("Yes");

      setValue_Koc_5(370.3);
      setDefault_Koc_5(370.3);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Dibromochloromethane") {
      setValue_S_5(2700);
      setDefault_S_5(2700);

      setValue_Hc_5(0.000783);
      setDefault_Hc_5(0.000783);

      setValue_Dair_5(0.0366356);
      setDefault_Dair_5(0.0366356);

      setValue_Dwater_5(0.0000106);
      setDefault_Dwater_5(0.0000106);

      setValue_DHvb_5(5900);
      setDefault_DHvb_5(5900);

      setValue_Tc_5(678.2);
      setDefault_Tc_5(678.2);

      setValue_Tb_5(393.0);
      setDefault_Tb_5(393.0);

      setValue_MW_5(208.28);
      setDefault_MW_5(208.28);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(null);
      setDefault_Rfc_5(null);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(74.86);
      setDefault_Koc_5(74.86);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Dibromoethane, 1,2-") {
      setValue_S_5(3910);
      setDefault_S_5(3910);

      setValue_Hc_5(0.00065);
      setDefault_Hc_5(0.00065);

      setValue_Dair_5(0.0430348);
      setDefault_Dair_5(0.0430348);

      setValue_Dwater_5(0.0000104);
      setDefault_Dwater_5(0.0000104);

      setValue_DHvb_5(8310.03);
      setDefault_DHvb_5(8310.03);

      setValue_Tc_5(583.0);
      setDefault_Tc_5(583.0);

      setValue_Tb_5(404.6);
      setDefault_Tb_5(404.6);

      setValue_MW_5(187.86);
      setDefault_MW_5(187.86);

      setValue_IUR_5(0.0006);
      setDefault_IUR_5(0.0006);

      setValue_Rfc_5(0.009);
      setDefault_Rfc_5(0.009);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(50.2);
      setDefault_Koc_5(50.2);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Dibromomethane (Methylene Bromide)") {
      setValue_S_5(11900);
      setDefault_S_5(11900);

      setValue_Hc_5(0.000822);
      setDefault_Hc_5(0.000822);

      setValue_Dair_5(0.0551373);
      setDefault_Dair_5(0.0551373);

      setValue_Dwater_5(0.0000119);
      setDefault_Dwater_5(0.0000119);

      setValue_DHvb_5(7867.88);
      setDefault_DHvb_5(7867.88);

      setValue_Tc_5(583.0);
      setDefault_Tc_5(583.0);

      setValue_Tb_5(370.0);
      setDefault_Tb_5(370.0);

      setValue_MW_5(173.84);
      setDefault_MW_5(173.84);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.004);
      setDefault_Rfc_5(0.004);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(29.86);
      setDefault_Koc_5(29.86);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Dichloro-2-butene, cis,4-") {
      setValue_S_5(580.2);
      setDefault_S_5(580.2);

      setValue_Hc_5(0.000664);
      setDefault_Hc_5(0.000664);

      setValue_Dair_5(0.0665047);
      setDefault_Dair_5(0.0665047);

      setValue_Dwater_5(0.00000929);
      setDefault_Dwater_5(0.00000929);

      setValue_DHvb_5(9125);
      setDefault_DHvb_5(9125);

      setValue_Tc_5(640.0);
      setDefault_Tc_5(640.0);

      setValue_Tb_5(425.5);
      setDefault_Tb_5(425.5);

      setValue_MW_5(125);
      setDefault_MW_5(125);

      setValue_IUR_5(0.0042);
      setDefault_IUR_5(0.0042);

      setValue_Rfc_5(null);
      setDefault_Rfc_5(null);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(180.4);
      setDefault_Koc_5(180.4);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Dichloro-2-butene, trans,4-") {
      setValue_S_5(850.0);
      setDefault_S_5(850.0);

      setValue_Hc_5(0.000664);
      setDefault_Hc_5(0.000664);

      setValue_Dair_5(0.0663818);
      setDefault_Dair_5(0.0663818);

      setValue_Dwater_5(0.0000092665);
      setDefault_Dwater_5(0.0000092665);

      setValue_DHvb_5(9125);
      setDefault_DHvb_5(9125);

      setValue_Tc_5(646.0);
      setDefault_Tc_5(646.0);

      setValue_Tb_5(428.4);
      setDefault_Tb_5(428.4);

      setValue_MW_5(125);
      setDefault_MW_5(125);

      setValue_IUR_5(0.0042);
      setDefault_IUR_5(0.0042);

      setValue_Rfc_5(null);
      setDefault_Rfc_5(null);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(180.4);
      setDefault_Koc_5(180.4);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Dichlorobenzene, 1,2-") {
      setValue_S_5(156.0);
      setDefault_S_5(156.0);

      setValue_Hc_5(0.00192);
      setDefault_Hc_5(0.00192);

      setValue_Dair_5(0.0561703);
      setDefault_Dair_5(0.0561703);

      setValue_Dwater_5(0.0000089213);
      setDefault_Dwater_5(0.0000089213);

      setValue_DHvb_5(9700);
      setDefault_DHvb_5(9700);

      setValue_Tc_5(705.0);
      setDefault_Tc_5(705.0);

      setValue_Tb_5(453.0);
      setDefault_Tb_5(453.0);

      setValue_MW_5(147);
      setDefault_MW_5(147);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.2);
      setDefault_Rfc_5(0.2);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(947.3);
      setDefault_Koc_5(947.3);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Dichlorobenzene, 1,4-") {
      setValue_S_5(81.3);
      setDefault_S_5(81.3);

      setValue_Hc_5(0.00241);
      setDefault_Hc_5(0.00241);

      setValue_Dair_5(0.0550429);
      setDefault_Dair_5(0.0550429);

      setValue_Dwater_5(0.0000086797);
      setDefault_Dwater_5(0.0000086797);

      setValue_DHvb_5(9271);
      setDefault_DHvb_5(9271);

      setValue_Tc_5(684.75);
      setDefault_Tc_5(684.75);

      setValue_Tb_5(447.0);
      setDefault_Tb_5(447.0);

      setValue_MW_5(147);
      setDefault_MW_5(147);

      setValue_IUR_5(0.000011);
      setDefault_IUR_5(0.000011);

      setValue_Rfc_5(0.8);
      setDefault_Rfc_5(0.8);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(966.4);
      setDefault_Koc_5(966.4);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Dichlorodifluoromethane") {
      setValue_S_5(280);
      setDefault_S_5(280);

      setValue_Hc_5(0.343);
      setDefault_Hc_5(0.343);

      setValue_Dair_5(0.0760293);
      setDefault_Dair_5(0.0760293);

      setValue_Dwater_5(0.0000108);
      setDefault_Dwater_5(0.0000108);

      setValue_DHvb_5(9421.36088);
      setDefault_DHvb_5(9421.36088);

      setValue_Tc_5(384.95);
      setDefault_Tc_5(384.95);

      setValue_Tb_5(243.2);
      setDefault_Tb_5(243.2);

      setValue_MW_5(120.91);
      setDefault_MW_5(120.91);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.1);
      setDefault_Rfc_5(0.1);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(74.86);
      setDefault_Koc_5(74.86);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Dichloroethane, 1,1-") {
      setValue_S_5(5040);
      setDefault_S_5(5040);

      setValue_Hc_5(0.00562);
      setDefault_Hc_5(0.00562);

      setValue_Dair_5(0.0836446);
      setDefault_Dair_5(0.0836446);

      setValue_Dwater_5(0.0000106);
      setDefault_Dwater_5(0.0000106);

      setValue_DHvb_5(6895);
      setDefault_DHvb_5(6895);

      setValue_Tc_5(523.0);
      setDefault_Tc_5(523.0);

      setValue_Tb_5(330.4);
      setDefault_Tb_5(330.4);

      setValue_MW_5(98.96);
      setDefault_MW_5(98.96);

      setValue_IUR_5(0.0000016);
      setDefault_IUR_5(0.0000016);

      setValue_Rfc_5(null);
      setDefault_Rfc_5(null);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(35.74);
      setDefault_Koc_5(35.74);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Dichloroethane, 1,2-") {
      setValue_S_5(8600);
      setDefault_S_5(8600);

      setValue_Hc_5(0.00118);
      setDefault_Hc_5(0.00118);

      setValue_Dair_5(0.0857221);
      setDefault_Dair_5(0.0857221);

      setValue_Dwater_5(0.000011);
      setDefault_Dwater_5(0.000011);

      setValue_DHvb_5(7643);
      setDefault_DHvb_5(7643);

      setValue_Tc_5(561.0);
      setDefault_Tc_5(561.0);

      setValue_Tb_5(356.5);
      setDefault_Tb_5(356.5);

      setValue_MW_5(98.96);
      setDefault_MW_5(98.96);

      setValue_IUR_5(0.000026);
      setDefault_IUR_5(0.000026);

      setValue_Rfc_5(0.007);
      setDefault_Rfc_5(0.007);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(19.23);
      setDefault_Koc_5(19.23);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Dichloroethylene, 1,1-") {
      setValue_S_5(2420);
      setDefault_S_5(2420);

      setValue_Hc_5(0.0261);
      setDefault_Hc_5(0.0261);

      setValue_Dair_5(0.0863107);
      setDefault_Dair_5(0.0863107);

      setValue_Dwater_5(0.000011);
      setDefault_Dwater_5(0.000011);

      setValue_DHvb_5(6247);
      setDefault_DHvb_5(6247);

      setValue_Tc_5(576.05);
      setDefault_Tc_5(576.05);

      setValue_Tb_5(304.6);
      setDefault_Tb_5(304.6);

      setValue_MW_5(96.944);
      setDefault_MW_5(96.944);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.2);
      setDefault_Rfc_5(0.2);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(70.51);
      setDefault_Koc_5(70.51);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Dichloroethylene, 1,2-cis-") {
      setValue_S_5(6410);
      setDefault_S_5(6410);

      setValue_Hc_5(0.00408);
      setDefault_Hc_5(0.00408);

      setValue_Dair_5(0.0884056);
      setDefault_Dair_5(0.0884056);

      setValue_Dwater_5(0.0000113);
      setDefault_Dwater_5(0.0000113);

      setValue_DHvb_5(7192);
      setDefault_DHvb_5(7192);

      setValue_Tc_5(544.0);
      setDefault_Tc_5(544.0);

      setValue_Tb_5(328.0);
      setDefault_Tb_5(328.0);

      setValue_MW_5(96.944);
      setDefault_MW_5(96.944);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(null);
      setDefault_Rfc_5(null);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(54.38);
      setDefault_Koc_5(54.38);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Dichloroethylene, 1,2-trans-") {
      setValue_S_5(4520);
      setDefault_S_5(4520);

      setValue_Hc_5(0.00938);
      setDefault_Hc_5(0.00938);

      setValue_Dair_5(0.0876094);
      setDefault_Dair_5(0.0876094);

      setValue_Dwater_5(0.0000112);
      setDefault_Dwater_5(0.0000112);

      setValue_DHvb_5(6717);
      setDefault_DHvb_5(6717);

      setValue_Tc_5(516.5);
      setDefault_Tc_5(516.5);

      setValue_Tb_5(328.0);
      setDefault_Tb_5(328.0);

      setValue_MW_5(96.944);
      setDefault_MW_5(96.944);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(null);
      setDefault_Rfc_5(null);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(54.39);
      setDefault_Koc_5(54.38);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Dichloropropane, 1,2-") {
      setValue_S_5(2800);
      setDefault_S_5(2800);

      setValue_Hc_5(0.00282);
      setDefault_Hc_5(0.00282);

      setValue_Dair_5(0.0733402);
      setDefault_Dair_5(0.0733402);

      setValue_Dwater_5(0.0000097252);
      setDefault_Dwater_5(0.0000097252);

      setValue_DHvb_5(7590);
      setDefault_DHvb_5(7590);

      setValue_Tc_5(572.0);
      setDefault_Tc_5(572.0);

      setValue_Tb_5(368.5);
      setDefault_Tb_5(368.5);

      setValue_MW_5(112.99);
      setDefault_MW_5(112.99);

      setValue_IUR_5(0.0000037);
      setDefault_IUR_5(0.0000037);

      setValue_Rfc_5(0.004);
      setDefault_Rfc_5(0.004);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(52.24);
      setDefault_Koc_5(52.24);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Dichloropropane, 1,3-") {
      setValue_S_5(2750);
      setDefault_S_5(2750);

      setValue_Hc_5(0.000976);
      setDefault_Hc_5(0.000976);

      setValue_Dair_5(0.0738738);
      setDefault_Dair_5(0.0738738);

      setValue_Dwater_5(0.000009823);
      setDefault_Dwater_5(0.000009823);

      setValue_DHvb_5(8102.51);
      setDefault_DHvb_5(8102.51);

      setValue_Tc_5(590.85);
      setDefault_Tc_5(590.85);

      setValue_Tb_5(393.9);
      setDefault_Tb_5(393.9);

      setValue_MW_5(112.99);
      setDefault_MW_5(112.99);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(null);
      setDefault_Rfc_5(null);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(54.38);
      setDefault_Koc_5(54.38);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Dichloropropene, 1,3-") {
      setValue_S_5(2800);
      setDefault_S_5(2800);

      setValue_Hc_5(0.00355);
      setDefault_Hc_5(0.00355);

      setValue_Dair_5(0.0762725);
      setDefault_Dair_5(0.0762725);

      setValue_Dwater_5(0.0000101);
      setDefault_Dwater_5(0.0000101);

      setValue_DHvb_5(7900);
      setDefault_DHvb_5(7900);

      setValue_Tc_5(587.38);
      setDefault_Tc_5(587.38);

      setValue_Tb_5(385.0);
      setDefault_Tb_5(385.0);

      setValue_MW_5(110.97);
      setDefault_MW_5(110.97);

      setValue_IUR_5(0.000004);
      setDefault_IUR_5(0.000004);

      setValue_Rfc_5(0.02);
      setDefault_Rfc_5(0.02);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(57.73);
      setDefault_Koc_5(57.73);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Dicyclopentadiene") {
      setValue_S_5(26.47);
      setDefault_S_5(26.47);

      setValue_Hc_5(0.0625);
      setDefault_Hc_5(0.0625);

      setValue_Dair_5(0.0557455);
      setDefault_Dair_5(0.0557455);

      setValue_Dwater_5(0.0000077554);
      setDefault_Dwater_5(0.0000077554);

      setValue_DHvb_5(2197.38);
      setDefault_DHvb_5(2197.38);

      setValue_Tc_5(664.5);
      setDefault_Tc_5(664.5);

      setValue_Tb_5(443.0);
      setDefault_Tb_5(443.0);

      setValue_MW_5(132.21);
      setDefault_MW_5(132.21);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.0003);
      setDefault_Rfc_5(0.0003);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(552.3);
      setDefault_Koc_5(552.3);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Diethylformamide") {
      setValue_S_5(1000000);
      setDefault_S_5(1000000);

      setValue_Hc_5(0.00000013);
      setDefault_Hc_5(0.00000013);

      setValue_Dair_5(0.073301);
      setDefault_Dair_5(0.073301);

      setValue_Dwater_5(0.0000089773);
      setDefault_Dwater_5(0.0000089773);

      setValue_DHvb_5(11687.38);
      setDefault_DHvb_5(11687.38);

      setValue_Tc_5(675.975);
      setDefault_Tc_5(675.975);

      setValue_Tb_5(450.65);
      setDefault_Tb_5(450.65);

      setValue_MW_5(101.15);
      setDefault_MW_5(101.15);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(null);
      setDefault_Rfc_5(null);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(4.785);
      setDefault_Koc_5(4.785);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Difluoroethane, 1,1-") {
      setValue_S_5(3200);
      setDefault_S_5(3200);

      setValue_Hc_5(0.0203);
      setDefault_Hc_5(0.0203);

      setValue_Dair_5(0.1023145);
      setDefault_Dair_5(0.1023145);

      setValue_Dwater_5(0.0000115);
      setDefault_Dwater_5(0.0000115);

      setValue_DHvb_5(5153.88);
      setDefault_DHvb_5(5153.88);

      setValue_Tc_5(372.15);
      setDefault_Tc_5(372.15);

      setValue_Tb_5(248.1);
      setDefault_Tb_5(248.1);

      setValue_MW_5(66.051);
      setDefault_MW_5(66.051);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(40.0);
      setDefault_Rfc_5(40.0);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(4.472);
      setDefault_Koc_5(4.472);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Dimethylaniline, N,N-") {
      setValue_S_5(1450);
      setDefault_S_5(1450);

      setValue_Hc_5(0.0000568);
      setDefault_Hc_5(0.0000568);

      setValue_Dair_5(0.0625411);
      setDefault_Dair_5(0.0625411);

      setValue_Dwater_5(0.0000083063);
      setDefault_Dwater_5(0.0000083063);

      setValue_DHvb_5(12276.68);
      setDefault_DHvb_5(12276.68);

      setValue_Tc_5(687.0);
      setDefault_Tc_5(687.0);

      setValue_Tb_5(466.45);
      setDefault_Tb_5(466.45);

      setValue_MW_5(121.18);
      setDefault_MW_5(121.18);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(null);
      setDefault_Rfc_5(null);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(137.3);
      setDefault_Koc_5(137.3);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Dimethylformamide") {
      setValue_S_5(1000000);
      setDefault_S_5(1000000);

      setValue_Hc_5(0.0000000739);
      setDefault_Hc_5(0.0000000739);

      setValue_Dair_5(0.0971846);
      setDefault_Dair_5(0.0971846);

      setValue_Dwater_5(0.0000112);
      setDefault_Dwater_5(0.0000112);

      setValue_DHvb_5(11369.0696);
      setDefault_DHvb_5(11369.0696);

      setValue_Tc_5(647.15);
      setDefault_Tc_5(647.15);

      setValue_Tb_5(426.15);
      setDefault_Tb_5(426.15);

      setValue_MW_5(73.095);
      setDefault_MW_5(73.095);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.03);
      setDefault_Rfc_5(0.03);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(1.24);
      setDefault_Koc_5(1.24);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Dimethylhydrazine, 1,1-") {
      setValue_S_5(1000000);
      setDefault_S_5(1000000);

      setValue_Hc_5(0.0000129);
      setDefault_Hc_5(0.0000129);

      setValue_Dair_5(0.1037857);
      setDefault_Dair_5(0.1037857);

      setValue_Dwater_5(0.0000113);
      setDefault_Dwater_5(0.0000113);

      setValue_DHvb_5(7791.873058);
      setDefault_DHvb_5(7791.873058);

      setValue_Tc_5(523.15);
      setDefault_Tc_5(523.15);

      setValue_Tb_5(337.05);
      setDefault_Tb_5(337.05);

      setValue_MW_5(60.099);
      setDefault_MW_5(60.099);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.000002);
      setDefault_Rfc_5(0.000002);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(1.672);
      setDefault_Koc_5(1.672);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Dioxane, 1,4-") {
      setValue_S_5(1000000);
      setDefault_S_5(1000000);

      setValue_Hc_5(0.0000048);
      setDefault_Hc_5(0.0000048);

      setValue_Dair_5(0.0873739);
      setDefault_Dair_5(0.0873739);

      setValue_Dwater_5(0.0000105);
      setDefault_Dwater_5(0.0000105);

      setValue_DHvb_5(8687.3502);
      setDefault_DHvb_5(8687.3502);

      setValue_Tc_5(585.15);
      setDefault_Tc_5(585.15);

      setValue_Tb_5(374.65);
      setDefault_Tb_5(374.65);

      setValue_MW_5(88.107);
      setDefault_MW_5(88.107);

      setValue_IUR_5(0.000005);
      setDefault_IUR_5(0.000005);

      setValue_Rfc_5(0.03);
      setDefault_Rfc_5(0.03);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(3.931);
      setDefault_Koc_5(3.931);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Epichlorohydrin") {
      setValue_S_5(65900);
      setDefault_S_5(65900);

      setValue_Hc_5(0.0000304);
      setDefault_Hc_5(0.0000304);

      setValue_Dair_5(0.0888682);
      setDefault_Dair_5(0.0888682);

      setValue_Dwater_5(0.0000111);
      setDefault_Dwater_5(0.0000111);

      setValue_DHvb_5(10.1);
      setDefault_DHvb_5(10.1);

      setValue_Tc_5(600.0);
      setDefault_Tc_5(600.0);

      setValue_Tb_5(390.0);
      setDefault_Tb_5(390.0);

      setValue_MW_5(92.526);
      setDefault_MW_5(92.526);

      setValue_IUR_5(0.0000012);
      setDefault_IUR_5(0.0000012);

      setValue_Rfc_5(0.001);
      setDefault_Rfc_5(0.001);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(12.12);
      setDefault_Koc_5(12.12);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Epoxybutane, 1,2-") {
      setValue_S_5(95000);
      setDefault_S_5(95000);

      setValue_Hc_5(0.00018);
      setDefault_Hc_5(0.00018);

      setValue_Dair_5(0.0928958);
      setDefault_Dair_5(0.0928958);

      setValue_Dwater_5(0.0000104);
      setDefault_Dwater_5(0.0000104);

      setValue_DHvb_5(7211);
      setDefault_DHvb_5(7211);

      setValue_Tc_5(516.0);
      setDefault_Tc_5(516.0);

      setValue_Tb_5(336.3);
      setDefault_Tb_5(336.3);

      setValue_MW_5(72.108);
      setDefault_MW_5(72.108);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.02);
      setDefault_Rfc_5(0.02);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(20.43);
      setDefault_Koc_5(20.43);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Ethoxyethanol Acetate, 2-") {
      setValue_S_5(187000);
      setDefault_S_5(187000);

      setValue_Hc_5(0.0000032);
      setDefault_Hc_5(0.0000032);

      setValue_Dair_5(0.0569504);
      setDefault_Dair_5(0.0569504);

      setValue_Dwater_5(0.0000079753);
      setDefault_Dwater_5(0.0000079753);

      setValue_DHvb_5(9779.84);
      setDefault_DHvb_5(9779.84);

      setValue_Tc_5(607.0);
      setDefault_Tc_5(607.0);

      setValue_Tb_5(429.55);
      setDefault_Tb_5(429.55);

      setValue_MW_5(132.16);
      setDefault_MW_5(132.16);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.06);
      setDefault_Rfc_5(0.06);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(12.45);
      setDefault_Koc_5(12.45);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Ethoxyethanol, 2-") {
      setValue_S_5(1000000);
      setDefault_S_5(1000000);

      setValue_Hc_5(0.00000047);
      setDefault_Hc_5(0.00000047);

      setValue_Dair_5(0.0817537);
      setDefault_Dair_5(0.0817537);

      setValue_Dwater_5(0.0000097306);
      setDefault_Dwater_5(0.0000097306);

      setValue_DHvb_5(9680.42838);
      setDefault_DHvb_5(9680.42838);

      setValue_Tc_5(612.225);
      setDefault_Tc_5(612.225);

      setValue_Tb_5(408.15);
      setDefault_Tb_5(408.15);

      setValue_MW_5(90.123);
      setDefault_MW_5(90.123);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.2);
      setDefault_Rfc_5(0.2);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(1.762);
      setDefault_Koc_5(1.762);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Ethyl Acetate") {
      setValue_S_5(80000);
      setDefault_S_5(80000);

      setValue_Hc_5(0.000134);
      setDefault_Hc_5(0.000134);

      setValue_Dair_5(0.0823158);
      setDefault_Dair_5(0.0823158);

      setValue_Dwater_5(0.0000097028);
      setDefault_Dwater_5(0.0000097028);

      setValue_DHvb_5(7633.66);
      setDefault_DHvb_5(7633.66);

      setValue_Tc_5(523.3);
      setDefault_Tc_5(523.3);

      setValue_Tb_5(350.1);
      setDefault_Tb_5(350.1);

      setValue_MW_5(88.107);
      setDefault_MW_5(88.107);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.07);
      setDefault_Rfc_5(0.07);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(18.34);
      setDefault_Koc_5(18.34);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Ethyl Acrylate") {
      setValue_S_5(15000);
      setDefault_S_5(15000);

      setValue_Hc_5(0.000339);
      setDefault_Hc_5(0.000339);

      setValue_Dair_5(0.0745392);
      setDefault_Dair_5(0.0745392);

      setValue_Dwater_5(0.0000091242);
      setDefault_Dwater_5(0.0000091242);

      setValue_DHvb_5(9362.76);
      setDefault_DHvb_5(9362.76);

      setValue_Tc_5(558.6);
      setDefault_Tc_5(558.6);

      setValue_Tb_5(372.4);
      setDefault_Tb_5(372.4);

      setValue_MW_5(100.12);
      setDefault_MW_5(100.12);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.008);
      setDefault_Rfc_5(0.008);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(38.87);
      setDefault_Koc_5(38.87);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Ethyl Chloride (Chloroethane)") {
      setValue_S_5(6710);
      setDefault_S_5(6710);

      setValue_Hc_5(0.0111);
      setDefault_Hc_5(0.0111);

      setValue_Dair_5(0.1037597);
      setDefault_Dair_5(0.1037597);

      setValue_Dwater_5(0.0000116);
      setDefault_Dwater_5(0.0000116);

      setValue_DHvb_5(5879.4);
      setDefault_DHvb_5(5879.4);

      setValue_Tc_5(460.4);
      setDefault_Tc_5(460.4);

      setValue_Tb_5(285.3);
      setDefault_Tb_5(285.3);

      setValue_MW_5(64.515);
      setDefault_MW_5(64.515);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(10.0);
      setDefault_Rfc_5(10.0);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(17.41);
      setDefault_Koc_5(17.41);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Ethyl Methacrylate") {
      setValue_S_5(5400);
      setDefault_S_5(5400);

      setValue_Hc_5(0.000573);
      setDefault_Hc_5(0.000573);

      setValue_Dair_5(0.0653441);
      setDefault_Dair_5(0.0653441);

      setValue_Dwater_5(0.0000083794);
      setDefault_Dwater_5(0.0000083794);

      setValue_DHvb_5(10957.44);
      setDefault_DHvb_5(10957.44);

      setValue_Tc_5(571.0);
      setDefault_Tc_5(571.0);

      setValue_Tb_5(390.0);
      setDefault_Tb_5(390.0);

      setValue_MW_5(114.15);
      setDefault_MW_5(114.15);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.3);
      setDefault_Rfc_5(0.3);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(85.62);
      setDefault_Koc_5(85.62);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Ethylbenzene") {
      setValue_S_5(169.0);
      setDefault_S_5(169.0);

      setValue_Hc_5(0.00788);
      setDefault_Hc_5(0.00788);

      setValue_Dair_5(0.0684652);
      setDefault_Dair_5(0.0684652);

      setValue_Dwater_5(0.0000084558);
      setDefault_Dwater_5(0.0000084558);

      setValue_DHvb_5(8501);
      setDefault_DHvb_5(8501);

      setValue_Tc_5(617.2);
      setDefault_Tc_5(617.2);

      setValue_Tb_5(409.1);
      setDefault_Tb_5(409.1);

      setValue_MW_5(106.17);
      setDefault_MW_5(106.17);

      setValue_IUR_5(0.0000025);
      setDefault_IUR_5(0.0000025);

      setValue_Rfc_5(1.0);
      setDefault_Rfc_5(1.0);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(541.4);
      setDefault_Koc_5(541.4);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Ethylene Diamine") {
      setValue_S_5(1000000);
      setDefault_S_5(1000000);

      setValue_Hc_5(0.00000000173);
      setDefault_Hc_5(0.00000000173);

      setValue_Dair_5(0.109446);
      setDefault_Dair_5(0.109446);

      setValue_Dwater_5(0.0000122);
      setDefault_Dwater_5(0.0000122);

      setValue_DHvb_5(9562.61);
      setDefault_DHvb_5(9562.61);

      setValue_Tc_5(585.225);
      setDefault_Tc_5(585.225);

      setValue_Tb_5(390.15);
      setDefault_Tb_5(390.15);

      setValue_MW_5(60.099);
      setDefault_MW_5(60.099);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(null);
      setDefault_Rfc_5(null);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(0.5664);
      setDefault_Koc_5(0.5664);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Ethylene Oxide") {
      setValue_S_5(1000000);
      setDefault_S_5(1000000);

      setValue_Hc_5(0.000148);
      setDefault_Hc_5(0.000148);

      setValue_Dair_5(0.1339638);
      setDefault_Dair_5(0.1339638);

      setValue_Dwater_5(0.0000145);
      setDefault_Dwater_5(0.0000145);

      setValue_DHvb_5(6104.06);
      setDefault_DHvb_5(6104.06);

      setValue_Tc_5(469.0);
      setDefault_Tc_5(469.0);

      setValue_Tb_5(283.6);
      setDefault_Tb_5(283.6);

      setValue_MW_5(44.054);
      setDefault_MW_5(44.054);

      setValue_IUR_5(0.003);
      setDefault_IUR_5(0.003);

      setValue_Rfc_5(0.03);
      setDefault_Rfc_5(0.03);

      setValue_Mut_5("Yes");
      setDefault_Mut_5("Yes");

      setValue_Koc_5(4.622);
      setDefault_Koc_5(4.622);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Fluorene") {
      setValue_S_5(1.69);
      setDefault_S_5(1.69);

      setValue_Hc_5(0.0000962);
      setDefault_Hc_5(0.0000962);

      setValue_Dair_5(0.0439743);
      setDefault_Dair_5(0.0439743);

      setValue_Dwater_5(0.000007889);
      setDefault_Dwater_5(0.000007889);

      setValue_DHvb_5(12666);
      setDefault_DHvb_5(12666);

      setValue_Tc_5(870.0);
      setDefault_Tc_5(870.0);

      setValue_Tb_5(568.0);
      setDefault_Tb_5(568.0);

      setValue_MW_5(166.22);
      setDefault_MW_5(166.22);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(null);
      setDefault_Rfc_5(null);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(4241);
      setDefault_Koc_5(4241);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Formaldehyde") {
      setValue_S_5(400000);
      setDefault_S_5(400000);

      setValue_Hc_5(0.000000337);
      setDefault_Hc_5(0.000000337);

      setValue_Dair_5(0.1670871);
      setDefault_Dair_5(0.1670871);

      setValue_Dwater_5(0.0000174);
      setDefault_Dwater_5(0.0000174);

      setValue_DHvb_5(5919.9);
      setDefault_DHvb_5(5919.9);

      setValue_Tc_5(412.35);
      setDefault_Tc_5(412.35);

      setValue_Tb_5(254.05);
      setDefault_Tb_5(254.05);

      setValue_MW_5(30.026);
      setDefault_MW_5(30.026);

      setValue_IUR_5(0.000013);
      setDefault_IUR_5(0.000013);

      setValue_Rfc_5(0.0098);
      setDefault_Rfc_5(0.0098);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(7.752);
      setDefault_Koc_5(7.752);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Formic Acid") {
      setValue_S_5(1000000);
      setDefault_S_5(1000000);

      setValue_Hc_5(0.000000167);
      setDefault_Hc_5(0.000000167);

      setValue_Dair_5(0.1478701);
      setDefault_Dair_5(0.1478701);

      setValue_Dwater_5(0.0000172);
      setDefault_Dwater_5(0.0000172);

      setValue_DHvb_5(4800.8046);
      setDefault_DHvb_5(4800.8046);

      setValue_Tc_5(588.0);
      setDefault_Tc_5(588.0);

      setValue_Tb_5(374.15);
      setDefault_Tb_5(374.15);

      setValue_MW_5(46.026);
      setDefault_MW_5(46.026);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.0003);
      setDefault_Rfc_5(0.0003);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(0.7195);
      setDefault_Koc_5(0.7195);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Furan") {
      setValue_S_5(10000);
      setDefault_S_5(10000);

      setValue_Hc_5(0.0054);
      setDefault_Hc_5(0.0054);

      setValue_Dair_5(0.1022757);
      setDefault_Dair_5(0.1022757);

      setValue_Dwater_5(0.0000117);
      setDefault_Dwater_5(0.0000117);

      setValue_DHvb_5(6476.9);
      setDefault_DHvb_5(6476.9);

      setValue_Tc_5(490.2);
      setDefault_Tc_5(490.2);

      setValue_Tb_5(304.5);
      setDefault_Tb_5(304.5);

      setValue_MW_5(68.076);
      setDefault_MW_5(68.076);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(null);
      setDefault_Rfc_5(null);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(14.54);
      setDefault_Koc_5(14.54);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Furfural") {
      setValue_S_5(74100);
      setDefault_S_5(74100);

      setValue_Hc_5(0.00000377);
      setDefault_Hc_5(0.00000377);

      setValue_Dair_5(0.0853213);
      setDefault_Dair_5(0.0853213);

      setValue_Dwater_5(0.0000107);
      setDefault_Dwater_5(0.0000107);

      setValue_DHvb_5(9219.4556);
      setDefault_DHvb_5(9219.4556);

      setValue_Tc_5(670.0);
      setDefault_Tc_5(670.0);

      setValue_Tb_5(434.85);
      setDefault_Tb_5(434.85);

      setValue_MW_5(96.086);
      setDefault_MW_5(96.086);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.05);
      setDefault_Rfc_5(0.05);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(8.368);
      setDefault_Koc_5(8.368);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Heptachlor") {
      setValue_S_5(0.18);
      setDefault_S_5(0.18);

      setValue_Hc_5(0.000294);
      setDefault_Hc_5(0.000294);

      setValue_Dair_5(0.0223441);
      setDefault_Dair_5(0.0223441);

      setValue_Dwater_5(0.0000056959);
      setDefault_Dwater_5(0.0000056959);

      setValue_DHvb_5(13000);
      setDefault_DHvb_5(13000);

      setValue_Tc_5(874.725);
      setDefault_Tc_5(874.725);

      setValue_Tb_5(583.15);
      setDefault_Tb_5(583.15);

      setValue_MW_5(373.32);
      setDefault_MW_5(373.32);

      setValue_IUR_5(0.0013);
      setDefault_IUR_5(0.0013);

      setValue_Rfc_5(null);
      setDefault_Rfc_5(null);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(55850);
      setDefault_Koc_5(55850);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Heptachlor Epoxide") {
      setValue_S_5(0.2);
      setDefault_S_5(0.2);

      setValue_Hc_5(0.000021);
      setDefault_Hc_5(0.000021);

      setValue_Dair_5(0.0240006);
      setDefault_Dair_5(0.0240006);

      setValue_Dwater_5(0.0000062475);
      setDefault_Dwater_5(0.0000062475);

      setValue_DHvb_5(16000);
      setDefault_DHvb_5(16000);

      setValue_Tc_5(920.94);
      setDefault_Tc_5(920.94);

      setValue_Tb_5(613.96);
      setDefault_Tb_5(613.96);

      setValue_MW_5(389.32);
      setDefault_MW_5(389.32);

      setValue_IUR_5(0.0026);
      setDefault_IUR_5(0.0026);

      setValue_Rfc_5(null);
      setDefault_Rfc_5(null);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(3882);
      setDefault_Koc_5(3882);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Hexachlorobenzene") {
      setValue_S_5(0.0062);
      setDefault_S_5(0.0062);

      setValue_Hc_5(0.0017);
      setDefault_Hc_5(0.0017);

      setValue_Dair_5(0.0289745);
      setDefault_Dair_5(0.0289745);

      setValue_Dwater_5(0.0000078497);
      setDefault_Dwater_5(0.0000078497);

      setValue_DHvb_5(11703.454);
      setDefault_DHvb_5(11703.454);

      setValue_Tc_5(897.225);
      setDefault_Tc_5(897.225);

      setValue_Tb_5(598.15);
      setDefault_Tb_5(598.15);

      setValue_MW_5(284.78);
      setDefault_MW_5(284.78);

      setValue_IUR_5(0.00046);
      setDefault_IUR_5(0.00046);

      setValue_Rfc_5(null);
      setDefault_Rfc_5(null);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(17340);
      setDefault_Koc_5(17340);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Hexachlorobutadiene") {
      setValue_S_5(3.2);
      setDefault_S_5(3.2);

      setValue_Hc_5(0.0103);
      setDefault_Hc_5(0.0103);

      setValue_Dair_5(0.0267445);
      setDefault_Dair_5(0.0267445);

      setValue_Dwater_5(0.0000070264);
      setDefault_Dwater_5(0.0000070264);

      setValue_DHvb_5(10206);
      setDefault_DHvb_5(10206);

      setValue_Tc_5(732.225);
      setDefault_Tc_5(732.225);

      setValue_Tb_5(488.15);
      setDefault_Tb_5(488.15);

      setValue_MW_5(260.76);
      setDefault_MW_5(260.76);

      setValue_IUR_5(0.000022);
      setDefault_IUR_5(0.000022);

      setValue_Rfc_5(null);
      setDefault_Rfc_5(null);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(14070);
      setDefault_Koc_5(14070);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Hexachlorocyclopentadiene") {
      setValue_S_5(1.8);
      setDefault_S_5(1.8);

      setValue_Hc_5(0.027);
      setDefault_Hc_5(0.027);

      setValue_Dair_5(0.0272382);
      setDefault_Dair_5(0.0272382);

      setValue_Dwater_5(0.000007217);
      setDefault_Dwater_5(0.000007217);

      setValue_DHvb_5(42992.28);
      setDefault_DHvb_5(42992.28);

      setValue_Tc_5(768.225);
      setDefault_Tc_5(768.225);

      setValue_Tb_5(512.15);
      setDefault_Tb_5(512.15);

      setValue_MW_5(272.77);
      setDefault_MW_5(272.77);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.0002);
      setDefault_Rfc_5(0.0002);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(23650);
      setDefault_Koc_5(23650);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Hexachloroethane") {
      setValue_S_5(50.0);
      setDefault_S_5(50.0);

      setValue_Hc_5(0.00389);
      setDefault_Hc_5(0.00389);

      setValue_Dair_5(0.0320938);
      setDefault_Dair_5(0.0320938);

      setValue_Dwater_5(0.0000088904);
      setDefault_Dwater_5(0.0000088904);

      setValue_DHvb_5(11711.3);
      setDefault_DHvb_5(11711.3);

      setValue_Tc_5(641.4);
      setDefault_Tc_5(641.4);

      setValue_Tb_5(427.6);
      setDefault_Tb_5(427.6);

      setValue_MW_5(236.74);
      setDefault_MW_5(236.74);

      setValue_IUR_5(0.000011);
      setDefault_IUR_5(0.000011);

      setValue_Rfc_5(0.03);
      setDefault_Rfc_5(0.03);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(3915);
      setDefault_Koc_5(3915);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Hexane, N-") {
      setValue_S_5(9.5);
      setDefault_S_5(9.5);

      setValue_Hc_5(1.8);
      setDefault_Hc_5(1.8);

      setValue_Dair_5(0.0731078);
      setDefault_Dair_5(0.0731078);

      setValue_Dwater_5(0.0000081658);
      setDefault_Dwater_5(0.0000081658);

      setValue_DHvb_5(6895.15);
      setDefault_DHvb_5(6895.15);

      setValue_Tc_5(508.0);
      setDefault_Tc_5(508.0);

      setValue_Tb_5(341.7);
      setDefault_Tb_5(341.7);

      setValue_MW_5(86.178);
      setDefault_MW_5(86.178);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.7);
      setDefault_Rfc_5(0.7);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(2423);
      setDefault_Koc_5(2423);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Hexanone, 2-") {
      setValue_S_5(17200);
      setDefault_S_5(17200);

      setValue_Hc_5(0.0000932);
      setDefault_Hc_5(0.0000932);

      setValue_Dair_5(0.0703564);
      setDefault_Dair_5(0.0703564);

      setValue_Dwater_5(0.0000084404);
      setDefault_Dwater_5(0.0000084404);

      setValue_DHvb_5(8610.39);
      setDefault_DHvb_5(8610.39);

      setValue_Tc_5(600.9);
      setDefault_Tc_5(600.9);

      setValue_Tb_5(400.6);
      setDefault_Tb_5(400.6);

      setValue_MW_5(100.16);
      setDefault_MW_5(100.16);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.03);
      setDefault_Rfc_5(0.03);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(76.56);
      setDefault_Koc_5(76.56);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Hydrazine") {
      setValue_S_5(1000000);
      setDefault_S_5(1000000);

      setValue_Hc_5(0.00000061);
      setDefault_Hc_5(0.00000061);

      setValue_Dair_5(0.1733034);
      setDefault_Dair_5(0.1733034);

      setValue_Dwater_5(0.000019);
      setDefault_Dwater_5(0.000019);

      setValue_DHvb_5(10812.55842);
      setDefault_DHvb_5(10812.55842);

      setValue_Tc_5(653.15);
      setDefault_Tc_5(653.15);

      setValue_Tb_5(386.65);
      setDefault_Tb_5(386.65);

      setValue_MW_5(32.045);
      setDefault_MW_5(32.045);

      setValue_IUR_5(0.0049);
      setDefault_IUR_5(0.0049);

      setValue_Rfc_5(0.00003);
      setDefault_Rfc_5(0.00003);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(0.01596);
      setDefault_Koc_5(0.01596);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Hydrogen Chloride") {
      setValue_S_5(673000);
      setDefault_S_5(673000);

      setValue_Hc_5(2040000);
      setDefault_Hc_5(2040000);

      setValue_Dair_5(0.1879912);
      setDefault_Dair_5(0.1879912);

      setValue_Dwater_5(0.0000227);
      setDefault_Dwater_5(0.0000227);

      setValue_DHvb_5(3855.476017);
      setDefault_DHvb_5(3855.476017);

      setValue_Tc_5(324.55);
      setDefault_Tc_5(324.55);

      setValue_Tb_5(188.1);
      setDefault_Tb_5(188.1);

      setValue_MW_5(35.45);
      setDefault_MW_5(35.45);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.02);
      setDefault_Rfc_5(0.02);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(2.939);
      setDefault_Koc_5(2.939);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Hydrogen Cyanide") {
      setValue_S_5(1000000);
      setDefault_S_5(1000000);

      setValue_Hc_5(0.000133);
      setDefault_Hc_5(0.000133);

      setValue_Dair_5(0.1678036);
      setDefault_Dair_5(0.1678036);

      setValue_Dwater_5(0.0000168);
      setDefault_Dwater_5(0.0000168);

      setValue_DHvb_5(6676.41);
      setDefault_DHvb_5(6676.41);

      setValue_Tc_5(456.7);
      setDefault_Tc_5(456.7);

      setValue_Tb_5(298.6);
      setDefault_Tb_5(298.6);

      setValue_MW_5(27.026);
      setDefault_MW_5(27.026);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.0008);
      setDefault_Rfc_5(0.0008);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(15.1);
      setDefault_Koc_5(15.1);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Hydrogen Fluoride") {
      setValue_S_5(1000000);
      setDefault_S_5(1000000);

      setValue_Hc_5(0.000104);
      setDefault_Hc_5(0.000104);

      setValue_Dair_5(0.2190996);
      setDefault_Dair_5(0.2190996);

      setValue_Dwater_5(0.0000223);
      setDefault_Dwater_5(0.0000223);

      setValue_DHvb_5(1789.673078);
      setDefault_DHvb_5(1789.673078);

      setValue_Tc_5(461.15);
      setDefault_Tc_5(461.15);

      setValue_Tb_5(292.66);
      setDefault_Tb_5(292.66);

      setValue_MW_5(20.006);
      setDefault_MW_5(20.006);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.014);
      setDefault_Rfc_5(0.014);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(1.582);
      setDefault_Koc_5(1.582);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Hydrogen Sulfide") {
      setValue_S_5(3740);
      setDefault_S_5(3740);

      setValue_Hc_5(0.00856);
      setDefault_Hc_5(0.00856);

      setValue_Dair_5(0.1880669);
      setDefault_Dair_5(0.1880669);

      setValue_Dwater_5(0.0000223);
      setDefault_Dwater_5(0.0000223);

      setValue_DHvb_5(4459.25482);
      setDefault_DHvb_5(4459.25482);

      setValue_Tc_5(373.1);
      setDefault_Tc_5(373.1);

      setValue_Tb_5(212.82);
      setDefault_Tb_5(212.82);

      setValue_MW_5(34.08);
      setDefault_MW_5(34.08);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.002);
      setDefault_Rfc_5(0.002);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(0.06337);
      setDefault_Koc_5(0.06337);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Isobutyl Alcohol") {
      setValue_S_5(85000);
      setDefault_S_5(85000);

      setValue_Hc_5(0.00000978);
      setDefault_Hc_5(0.00000978);

      setValue_Dair_5(0.0896677);
      setDefault_Dair_5(0.0896677);

      setValue_Dwater_5(0.00001);
      setDefault_Dwater_5(0.00001);

      setValue_DHvb_5(103496.65);
      setDefault_DHvb_5(103496.65);

      setValue_Tc_5(547.78);
      setDefault_Tc_5(547.78);

      setValue_Tb_5(380.95);
      setDefault_Tb_5(380.95);

      setValue_MW_5(74.124);
      setDefault_MW_5(74.124);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(null);
      setDefault_Rfc_5(null);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(8.591);
      setDefault_Koc_5(8.591);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Isopropanol") {
      setValue_S_5(1000000);
      setDefault_S_5(1000000);

      setValue_Hc_5(0.0000081);
      setDefault_Hc_5(0.0000081);

      setValue_Dair_5(0.1032261);
      setDefault_Dair_5(0.1032261);

      setValue_Dwater_5(0.0000112);
      setDefault_Dwater_5(0.0000112);

      setValue_DHvb_5(10841.21994);
      setDefault_DHvb_5(10841.21994);

      setValue_Tc_5(508.3);
      setDefault_Tc_5(508.3);

      setValue_Tb_5(355.45);
      setDefault_Tb_5(355.45);

      setValue_MW_5(60.097);
      setDefault_MW_5(60.097);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.2);
      setDefault_Rfc_5(0.2);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(3.478);
      setDefault_Koc_5(3.478);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Mercury (elemental)") {
      setValue_S_5(0.06);
      setDefault_S_5(0.06);

      setValue_Hc_5(0.008622);
      setDefault_Hc_5(0.008622);

      setValue_Dair_5(0.0307);
      setDefault_Dair_5(0.0307);

      setValue_Dwater_5(0.0000063);
      setDefault_Dwater_5(0.0000063);

      setValue_DHvb_5(14127);
      setDefault_DHvb_5(14127);

      setValue_Tc_5(1750);
      setDefault_Tc_5(1750);

      setValue_Tb_5(356.6);
      setDefault_Tb_5(356.6);

      setValue_MW_5(200.59);
      setDefault_MW_5(200.59);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.0003);
      setDefault_Rfc_5(0.0003);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(3.449);
      setDefault_Koc_5(3.449);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Methacrylonitrile") {
      setValue_S_5(25400);
      setDefault_S_5(25400);

      setValue_Hc_5(0.000247);
      setDefault_Hc_5(0.000247);

      setValue_Dair_5(0.0964299);
      setDefault_Dair_5(0.0964299);

      setValue_Dwater_5(0.0000106);
      setDefault_Dwater_5(0.0000106);

      setValue_DHvb_5(7600.2);
      setDefault_DHvb_5(7600.2);

      setValue_Tc_5(554.0);
      setDefault_Tc_5(554.0);

      setValue_Tb_5(363.3);
      setDefault_Tb_5(363.3);

      setValue_MW_5(67.091);
      setDefault_MW_5(67.091);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.03);
      setDefault_Rfc_5(0.03);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(49.36);
      setDefault_Koc_5(49.36);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Methanol") {
      setValue_S_5(1000000);
      setDefault_S_5(1000000);

      setValue_Hc_5(0.00000455);
      setDefault_Hc_5(0.00000455);

      setValue_Dair_5(0.1582741);
      setDefault_Dair_5(0.1582741);

      setValue_Dwater_5(0.0000165);
      setDefault_Dwater_5(0.0000165);

      setValue_DHvb_5(8918.50964);
      setDefault_DHvb_5(8918.50964);

      setValue_Tc_5(513.15);
      setDefault_Tc_5(513.15);

      setValue_Tb_5(337.85);
      setDefault_Tb_5(337.85);

      setValue_MW_5(32.042);
      setDefault_MW_5(32.042);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(20.0);
      setDefault_Rfc_5(20.0);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(1.224);
      setDefault_Koc_5(1.224);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Methoxyethanol Acetate, 2-") {
      setValue_S_5(1000000);
      setDefault_S_5(1000000);

      setValue_Hc_5(0.000000311);
      setDefault_Hc_5(0.000000311);

      setValue_Dair_5(0.0658347);
      setDefault_Dair_5(0.0658347);

      setValue_Dwater_5(0.0000087052);
      setDefault_Dwater_5(0.0000087052);

      setValue_DHvb_5(10485.3394);
      setDefault_DHvb_5(10485.3394);

      setValue_Tc_5(624.225);
      setDefault_Tc_5(624.225);

      setValue_Tb_5(416.15);
      setDefault_Tb_5(416.15);

      setValue_MW_5(118.13);
      setDefault_MW_5(118.13);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.001);
      setDefault_Rfc_5(0.001);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(6.671);
      setDefault_Koc_5(6.671);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Methoxyethanol, 2-") {
      setValue_S_5(1000000);
      setDefault_S_5(1000000);

      setValue_Hc_5(0.00000033);
      setDefault_Hc_5(0.00000033);

      setValue_Dair_5(0.0951557);
      setDefault_Dair_5(0.0951557);

      setValue_Dwater_5(0.000011);
      setDefault_Dwater_5(0.000011);

      setValue_DHvb_5(8966.27884);
      setDefault_DHvb_5(8966.27884);

      setValue_Tc_5(597.6);
      setDefault_Tc_5(597.6);

      setValue_Tb_5(397.25);
      setDefault_Tb_5(397.25);

      setValue_MW_5(76.096);
      setDefault_MW_5(76.096);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.02);
      setDefault_Rfc_5(0.02);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(0.9935);
      setDefault_Koc_5(0.9935);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Methyl Acetate") {
      setValue_S_5(243000);
      setDefault_S_5(243000);

      setValue_Hc_5(0.000115);
      setDefault_Hc_5(0.000115);

      setValue_Dair_5(0.0957763);
      setDefault_Dair_5(0.0957763);

      setValue_Dwater_5(0.000011);
      setDefault_Dwater_5(0.000011);

      setValue_DHvb_5(7260.0791);
      setDefault_DHvb_5(7260.0791);

      setValue_Tc_5(506.7);
      setDefault_Tc_5(506.7);

      setValue_Tb_5(365);
      setDefault_Tb_5(365);

      setValue_MW_5(74.08);
      setDefault_MW_5(74.08);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(null);
      setDefault_Rfc_5(null);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(9.101);
      setDefault_Koc_5(9.101);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Methyl Acrylate") {
      setValue_S_5(49400);
      setDefault_S_5(49400);

      setValue_Hc_5(0.000199);
      setDefault_Hc_5(0.000199);

      setValue_Dair_5(0.0859972);
      setDefault_Dair_5(0.0859972);

      setValue_Dwater_5(0.0000102);
      setDefault_Dwater_5(0.0000102);

      setValue_DHvb_5(7749);
      setDefault_DHvb_5(7749);

      setValue_Tc_5(536.0);
      setDefault_Tc_5(536.0);

      setValue_Tb_5(353.2);
      setDefault_Tb_5(353.2);

      setValue_MW_5(86.091);
      setDefault_MW_5(86.091);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.02);
      setDefault_Rfc_5(0.02);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(20.05);
      setDefault_Koc_5(20.05);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Methyl Ethyl Ketone (2-Butanone)") {
      setValue_S_5(223000);
      setDefault_S_5(223000);

      setValue_Hc_5(0.0000569);
      setDefault_Hc_5(0.0000569);

      setValue_Dair_5(0.0914462);
      setDefault_Dair_5(0.0914462);

      setValue_Dwater_5(0.0000102);
      setDefault_Dwater_5(0.0000102);

      setValue_DHvb_5(7480.7);
      setDefault_DHvb_5(7480.7);

      setValue_Tc_5(536.78);
      setDefault_Tc_5(536.78);

      setValue_Tb_5(352.5);
      setDefault_Tb_5(352.5);

      setValue_MW_5(72.108);
      setDefault_MW_5(72.108);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(5.0);
      setDefault_Rfc_5(5.0);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(19.1);
      setDefault_Koc_5(19.1);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Methyl Hydrazine") {
      setValue_S_5(1000000);
      setDefault_S_5(1000000);

      setValue_Hc_5(0.000003031);
      setDefault_Hc_5(0.000003031);

      setValue_Dair_5(0.1290894);
      setDefault_Dair_5(0.1290894);

      setValue_Dwater_5(0.000014);
      setDefault_Dwater_5(0.000014);

      setValue_DHvb_5(8887.937352);
      setDefault_DHvb_5(8887.937352);

      setValue_Tc_5(585.15);
      setDefault_Tc_5(585.15);

      setValue_Tb_5(360.65);
      setDefault_Tb_5(360.65);

      setValue_MW_5(46.072);
      setDefault_MW_5(46.072);

      setValue_IUR_5(0.001);
      setDefault_IUR_5(0.001);

      setValue_Rfc_5(0.00002);
      setDefault_Rfc_5(0.00002);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(2.101);
      setDefault_Koc_5(2.101);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (
      selectedChem === "Methyl Isobutyl Ketone (4-methyl-2-pentanone)"
    ) {
      setValue_S_5(19000);
      setDefault_S_5(19000);

      setValue_Hc_5(0.000138);
      setDefault_Hc_5(0.000138);

      setValue_Dair_5(0.0697797);
      setDefault_Dair_5(0.0697797);

      setValue_Dwater_5(0.0000083477);
      setDefault_Dwater_5(0.0000083477);

      setValue_DHvb_5(8243.11);
      setDefault_DHvb_5(8243.11);

      setValue_Tc_5(571.0);
      setDefault_Tc_5(571.0);

      setValue_Tb_5(389.5);
      setDefault_Tb_5(389.5);

      setValue_MW_5(100.16);
      setDefault_MW_5(100.16);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(3.0);
      setDefault_Rfc_5(3.0);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(70.03);
      setDefault_Koc_5(70.03);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Methyl Methacrylate") {
      setValue_S_5(15000);
      setDefault_S_5(15000);

      setValue_Hc_5(0.000319);
      setDefault_Hc_5(0.000319);

      setValue_Dair_5(0.0750447);
      setDefault_Dair_5(0.0750447);

      setValue_Dwater_5(0.0000092087);
      setDefault_Dwater_5(0.0000092087);

      setValue_DHvb_5(8974.9);
      setDefault_DHvb_5(8974.9);

      setValue_Tc_5(567.0);
      setDefault_Tc_5(567.0);

      setValue_Tb_5(373.5);
      setDefault_Tb_5(373.5);

      setValue_MW_5(100.12);
      setDefault_MW_5(100.12);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.7);
      setDefault_Rfc_5(0.7);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(41.96);
      setDefault_Koc_5(41.96);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Methyl Styrene (Mixed Isomers)") {
      setValue_S_5(89.0);
      setDefault_S_5(89.0);

      setValue_Hc_5(0.00262);
      setDefault_Hc_5(0.00262);

      setValue_Dair_5(0.017397);
      setDefault_Dair_5(0.017397);

      setValue_Dwater_5(0.0000041793);
      setDefault_Dwater_5(0.0000041793);

      setValue_DHvb_5(12027.44);
      setDefault_DHvb_5(12027.44);

      setValue_Tc_5(655.0);
      setDefault_Tc_5(655.0);

      setValue_Tb_5(437.65);
      setDefault_Tb_5(437.65);

      setValue_MW_5(354.54);
      setDefault_MW_5(354.54);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.04);
      setDefault_Rfc_5(0.04);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(966.4);
      setDefault_Koc_5(966.4);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Methyl tert-Butyl Ether (MTBE)") {
      setValue_S_5(51000);
      setDefault_S_5(51000);

      setValue_Hc_5(0.000587);
      setDefault_Hc_5(0.000587);

      setValue_Dair_5(0.0752672);
      setDefault_Dair_5(0.0752672);

      setValue_Dwater_5(0.0000085904);
      setDefault_Dwater_5(0.0000085904);

      setValue_DHvb_5(6677.66);
      setDefault_DHvb_5(6677.66);

      setValue_Tc_5(497.1);
      setDefault_Tc_5(497.1);

      setValue_Tb_5(328.2);
      setDefault_Tb_5(328.2);

      setValue_MW_5(88.151);
      setDefault_MW_5(88.151);

      setValue_IUR_5(0.00000026);
      setDefault_IUR_5(0.00000026);

      setValue_Rfc_5(3.0);
      setDefault_Rfc_5(3.0);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(22.62);
      setDefault_Koc_5(22.62);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Methylene Chloride") {
      setValue_S_5(13000);
      setDefault_S_5(13000);

      setValue_Hc_5(0.00325);
      setDefault_Hc_5(0.00325);

      setValue_Dair_5(0.0999362);
      setDefault_Dair_5(0.0999362);

      setValue_Dwater_5(0.0000125);
      setDefault_Dwater_5(0.0000125);

      setValue_DHvb_5(6706);
      setDefault_DHvb_5(6706);

      setValue_Tc_5(510.0);
      setDefault_Tc_5(510.0);

      setValue_Tb_5(313.0);
      setDefault_Tb_5(313.0);

      setValue_MW_5(84.933);
      setDefault_MW_5(84.933);

      setValue_IUR_5(0.00000001);
      setDefault_IUR_5(0.00000001);

      setValue_Rfc_5(0.6);
      setDefault_Rfc_5(0.6);

      setValue_Mut_5("Yes");
      setDefault_Mut_5("Yes");

      setValue_Koc_5(12.15);
      setDefault_Koc_5(12.15);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Methylnaphthalene, 1-") {
      setValue_S_5(25.8);
      setDefault_S_5(25.8);

      setValue_Hc_5(0.000514);
      setDefault_Hc_5(0.000514);

      setValue_Dair_5(0.0527705);
      setDefault_Dair_5(0.0527705);

      setValue_Dwater_5(0.0000078477);
      setDefault_Dwater_5(0.0000078477);

      setValue_DHvb_5(13690.65);
      setDefault_DHvb_5(13690.65);

      setValue_Tc_5(771.8);
      setDefault_Tc_5(771.8);

      setValue_Tb_5(517.7);
      setDefault_Tb_5(517.7);

      setValue_MW_5(142.2);
      setDefault_MW_5(142.2);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(null);
      setDefault_Rfc_5(null);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(2282);
      setDefault_Koc_5(2282);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Methylnaphthalene, 2-") {
      setValue_S_5(24.6);
      setDefault_S_5(24.6);

      setValue_Hc_5(0.000518);
      setDefault_Hc_5(0.000518);

      setValue_Dair_5(0.0524319);
      setDefault_Dair_5(0.0524319);

      setValue_Dwater_5(0.0000077811);
      setDefault_Dwater_5(0.0000077811);

      setValue_DHvb_5(12600);
      setDefault_DHvb_5(12600);

      setValue_Tc_5(761.0);
      setDefault_Tc_5(761.0);

      setValue_Tb_5(514.1);
      setDefault_Tb_5(514.1);

      setValue_MW_5(142.2);
      setDefault_MW_5(142.2);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(null);
      setDefault_Rfc_5(null);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(2237);
      setDefault_Koc_5(2237);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Methylstyrene, Alpha-") {
      setValue_S_5(116.0);
      setDefault_S_5(116.0);

      setValue_Hc_5(0.00255);
      setDefault_Hc_5(0.00255);

      setValue_Dair_5(0.062902);
      setDefault_Dair_5(0.062902);

      setValue_Dwater_5(0.0000081911);
      setDefault_Dwater_5(0.0000081911);

      setValue_DHvb_5(11419.16);
      setDefault_DHvb_5(11419.16);

      setValue_Tc_5(657.0);
      setDefault_Tc_5(657.0);

      setValue_Tb_5(438.4);
      setDefault_Tb_5(438.4);

      setValue_MW_5(118.18);
      setDefault_MW_5(118.18);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(null);
      setDefault_Rfc_5(null);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(1047);
      setDefault_Koc_5(1047);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Naphthalene") {
      setValue_S_5(31.0);
      setDefault_S_5(31.0);

      setValue_Hc_5(0.00044);
      setDefault_Hc_5(0.00044);

      setValue_Dair_5(0.0604994);
      setDefault_Dair_5(0.0604994);

      setValue_Dwater_5(0.000008377);
      setDefault_Dwater_5(0.000008377);

      setValue_DHvb_5(10373);
      setDefault_DHvb_5(10373);

      setValue_Tc_5(748.4);
      setDefault_Tc_5(748.4);

      setValue_Tb_5(490.9);
      setDefault_Tb_5(490.9);

      setValue_MW_5(128.18);
      setDefault_MW_5(128.18);

      setValue_IUR_5(0.000034);
      setDefault_IUR_5(0.000034);

      setValue_Rfc_5(0.003);
      setDefault_Rfc_5(0.003);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(731);
      setDefault_Koc_5(731);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Nickel Carbonyl") {
      setValue_S_5(180.0);
      setDefault_S_5(180.0);

      setValue_Hc_5(0.5);
      setDefault_Hc_5(0.5);

      setValue_Dair_5(0.0433019);
      setDefault_Dair_5(0.0433019);

      setValue_Dwater_5(0.0000081704);
      setDefault_Dwater_5(0.0000081704);

      setValue_DHvb_5(6829.36);
      setDefault_DHvb_5(6829.36);

      setValue_Tc_5(473.15);
      setDefault_Tc_5(473.15);

      setValue_Tb_5(316.15);
      setDefault_Tb_5(316.15);

      setValue_MW_5(170.734);
      setDefault_MW_5(170.734);

      setValue_IUR_5(0.00026);
      setDefault_IUR_5(0.00026);

      setValue_Rfc_5(0.000014);
      setDefault_Rfc_5(0.000014);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(null);
      setDefault_Koc_5(null);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Nitrobenzene") {
      setValue_S_5(2090);
      setDefault_S_5(2090);

      setValue_Hc_5(0.000024);
      setDefault_Hc_5(0.000024);

      setValue_Dair_5(0.068054);
      setDefault_Dair_5(0.068054);

      setValue_Dwater_5(0.0000094495);
      setDefault_Dwater_5(0.0000094495);

      setValue_DHvb_5(10566);
      setDefault_DHvb_5(10566);

      setValue_Tc_5(719.0);
      setDefault_Tc_5(719.0);

      setValue_Tb_5(483.8);
      setDefault_Tb_5(483.8);

      setValue_MW_5(123.11);
      setDefault_MW_5(123.11);

      setValue_IUR_5(0.00004);
      setDefault_IUR_5(0.00004);

      setValue_Rfc_5(0.009);
      setDefault_Rfc_5(0.009);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(147.1);
      setDefault_Koc_5(147.1);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Nitromethane") {
      setValue_S_5(111000);
      setDefault_S_5(111000);

      setValue_Hc_5(0.0000286);
      setDefault_Hc_5(0.0000286);

      setValue_Dair_5(0.1192837);
      setDefault_Dair_5(0.1192837);

      setValue_Dwater_5(0.0000139);
      setDefault_Dwater_5(0.0000139);

      setValue_DHvb_5(9140.63);
      setDefault_DHvb_5(9140.63);

      setValue_Tc_5(588.0);
      setDefault_Tc_5(588.0);

      setValue_Tb_5(374.1);
      setDefault_Tb_5(374.1);

      setValue_MW_5(61.041);
      setDefault_MW_5(61.041);

      setValue_IUR_5(0.0000088);
      setDefault_IUR_5(0.0000088);

      setValue_Rfc_5(0.005);
      setDefault_Rfc_5(0.005);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(8.925);
      setDefault_Koc_5(8.925);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Nitropropane, 2-") {
      setValue_S_5(17000);
      setDefault_S_5(17000);

      setValue_Hc_5(0.000119);
      setDefault_Hc_5(0.000119);

      setValue_Dair_5(0.0846934);
      setDefault_Dair_5(0.0846934);

      setValue_Dwater_5(0.0000102);
      setDefault_Dwater_5(0.0000102);

      setValue_DHvb_5(8383);
      setDefault_DHvb_5(8383);

      setValue_Tc_5(594.0);
      setDefault_Tc_5(594.0);

      setValue_Tb_5(393.2);
      setDefault_Tb_5(393.2);

      setValue_MW_5(89.095);
      setDefault_MW_5(89.095);

      setValue_IUR_5(0.0027);
      setDefault_IUR_5(0.0027);

      setValue_Rfc_5(0.02);
      setDefault_Rfc_5(0.02);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(45.56);
      setDefault_Koc_5(45.56);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Nitrotoluene, o-") {
      setValue_S_5(650.0);
      setDefault_S_5(650.0);

      setValue_Hc_5(0.0000125);
      setDefault_Hc_5(0.0000125);

      setValue_Dair_5(0.0587535);
      setDefault_Dair_5(0.0587535);

      setValue_Dwater_5(0.0000086675);
      setDefault_Dwater_5(0.0000086675);

      setValue_DHvb_5(12239.1);
      setDefault_DHvb_5(12239.1);

      setValue_Tc_5(720.0);
      setDefault_Tc_5(720.0);

      setValue_Tb_5(495.0);
      setDefault_Tb_5(495.0);

      setValue_MW_5(137.14);
      setDefault_MW_5(137.14);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(null);
      setDefault_Rfc_5(null);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(260.8);
      setDefault_Koc_5(260.8);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Nonane, n-") {
      setValue_S_5(0.22);
      setDefault_S_5(0.22);

      setValue_Hc_5(3.4);
      setDefault_Hc_5(3.4);

      setValue_Dair_5(0.051432);
      setDefault_Dair_5(0.051432);

      setValue_Dwater_5(0.000006769);
      setDefault_Dwater_5(0.000006769);

      setValue_DHvb_5(11082.45);
      setDefault_DHvb_5(11082.45);

      setValue_Tc_5(594.0);
      setDefault_Tc_5(594.0);

      setValue_Tb_5(423.8);
      setDefault_Tb_5(423.8);

      setValue_MW_5(128.26);
      setDefault_MW_5(128.26);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.02);
      setDefault_Rfc_5(0.02);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(80030);
      setDefault_Koc_5(80030);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Pentane, n-") {
      setValue_S_5(38.0);
      setDefault_S_5(38.0);

      setValue_Hc_5(1.25);
      setDefault_Hc_5(1.25);

      setValue_Dair_5(0.0821293);
      setDefault_Dair_5(0.0821293);

      setValue_Dwater_5(0.0000087974);
      setDefault_Dwater_5(0.0000087974);

      setValue_DHvb_5(6155.06);
      setDefault_DHvb_5(6155.06);

      setValue_Tc_5(469.7);
      setDefault_Tc_5(469.7);

      setValue_Tb_5(309.0);
      setDefault_Tb_5(309.0);

      setValue_MW_5(72.151);
      setDefault_MW_5(72.151);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(1.0);
      setDefault_Rfc_5(1.0);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(874.5);
      setDefault_Koc_5(874.5);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Phosgene") {
      setValue_S_5(6825.5);
      setDefault_S_5(6825.5);

      setValue_Hc_5(0.0167);
      setDefault_Hc_5(0.0167);

      setValue_Dair_5(0.0893282);
      setDefault_Dair_5(0.0893282);

      setValue_Dwater_5(0.0000117);
      setDefault_Dwater_5(0.0000117);

      setValue_DHvb_5(7352.39);
      setDefault_DHvb_5(7352.39);

      setValue_Tc_5(455.0);
      setDefault_Tc_5(455.0);

      setValue_Tb_5(281.2);
      setDefault_Tb_5(281.2);

      setValue_MW_5(98.917);
      setDefault_MW_5(98.917);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.0003);
      setDefault_Rfc_5(0.0003);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(2.01);
      setDefault_Koc_5(2.01);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Propionaldehyde") {
      setValue_S_5(306000);
      setDefault_S_5(306000);

      setValue_Hc_5(0.0000734);
      setDefault_Hc_5(0.0000734);

      setValue_Dair_5(0.1103767);
      setDefault_Dair_5(0.1103767);

      setValue_Dwater_5(0.0000122);
      setDefault_Dwater_5(0.0000122);

      setValue_DHvb_5(7074.62);
      setDefault_DHvb_5(7074.62);

      setValue_Tc_5(496.0);
      setDefault_Tc_5(496.0);

      setValue_Tb_5(321.0);
      setDefault_Tb_5(321.0);

      setValue_MW_5(58.081);
      setDefault_MW_5(58.081);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.008);
      setDefault_Rfc_5(0.008);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(10.52);
      setDefault_Koc_5(10.52);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Propyl benzene") {
      setValue_S_5(52.2);
      setDefault_S_5(52.2);

      setValue_Hc_5(0.0105);
      setDefault_Hc_5(0.0105);

      setValue_Dair_5(0.0601558);
      setDefault_Dair_5(0.0601558);

      setValue_Dwater_5(0.000007831);
      setDefault_Dwater_5(0.000007831);

      setValue_DHvb_5(9123);
      setDefault_DHvb_5(9123);

      setValue_Tc_5(630.0);
      setDefault_Tc_5(630.0);

      setValue_Tb_5(432.2);
      setDefault_Tb_5(432.2);

      setValue_MW_5(120.2);
      setDefault_MW_5(120.2);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(1.0);
      setDefault_Rfc_5(1.0);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(1593);
      setDefault_Koc_5(1593);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Propylene") {
      setValue_S_5(200.0);
      setDefault_S_5(200.0);

      setValue_Hc_5(0.196);
      setDefault_Hc_5(0.196);

      setValue_Dair_5(0.1096967);
      setDefault_Dair_5(0.1096967);

      setValue_Dwater_5(0.0000107);
      setDefault_Dwater_5(0.0000107);

      setValue_DHvb_5(4402.41);
      setDefault_DHvb_5(4402.41);

      setValue_Tc_5(364.95);
      setDefault_Tc_5(364.95);

      setValue_Tb_5(225.6);
      setDefault_Tb_5(225.6);

      setValue_MW_5(42.081);
      setDefault_MW_5(42.081);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(3.0);
      setDefault_Rfc_5(3.0);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(34.34);
      setDefault_Koc_5(34.34);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Propylene Glycol Monomethyl Ether") {
      setValue_S_5(1000000);
      setDefault_S_5(1000000);

      setValue_Hc_5(0.00000092);
      setDefault_Hc_5(0.00000092);

      setValue_Dair_5(0.083145);
      setDefault_Dair_5(0.083145);

      setValue_Dwater_5(0.0000099604);
      setDefault_Dwater_5(0.0000099604);

      setValue_DHvb_5(7795.93344);
      setDefault_DHvb_5(7795.93344);

      setValue_Tc_5(588.225);
      setDefault_Tc_5(588.225);

      setValue_Tb_5(392.15);
      setDefault_Tb_5(392.15);

      setValue_MW_5(90.123);
      setDefault_MW_5(90.123);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(2.0);
      setDefault_Rfc_5(2.0);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(1.419);
      setDefault_Koc_5(1.419);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Propylene Oxide") {
      setValue_S_5(590000);
      setDefault_S_5(590000);

      setValue_Hc_5(0.0000696);
      setDefault_Hc_5(0.0000696);

      setValue_Dair_5(0.1085105);
      setDefault_Dair_5(0.1085105);

      setValue_Dwater_5(0.0000119);
      setDefault_Dwater_5(0.0000119);

      setValue_DHvb_5(6621.12);
      setDefault_DHvb_5(6621.12);

      setValue_Tc_5(482.1);
      setDefault_Tc_5(482.1);

      setValue_Tb_5(308.0);
      setDefault_Tb_5(308.0);

      setValue_MW_5(58.081);
      setDefault_MW_5(58.081);

      setValue_IUR_5(0.0000037);
      setDefault_IUR_5(0.0000037);

      setValue_Rfc_5(0.03);
      setDefault_Rfc_5(0.03);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(7.097);
      setDefault_Koc_5(7.097);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Pyrene") {
      setValue_S_5(0.135);
      setDefault_S_5(0.135);

      setValue_Hc_5(0.0000119);
      setDefault_Hc_5(0.0000119);

      setValue_Dair_5(0.0277873);
      setDefault_Dair_5(0.0277873);

      setValue_Dwater_5(0.0000072479);
      setDefault_Dwater_5(0.0000072479);

      setValue_DHvb_5(14370);
      setDefault_DHvb_5(14370);

      setValue_Tc_5(936.0);
      setDefault_Tc_5(936.0);

      setValue_Tb_5(677.0);
      setDefault_Tb_5(677.0);

      setValue_MW_5(202.26);
      setDefault_MW_5(202.26);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(null);
      setDefault_Rfc_5(null);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(17180);
      setDefault_Koc_5(17180);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Pyridine") {
      setValue_S_5(1000000);
      setDefault_S_5(1000000);

      setValue_Hc_5(0.000011);
      setDefault_Hc_5(0.000011);

      setValue_Dair_5(0.0930883);
      setDefault_Dair_5(0.0930883);

      setValue_Dwater_5(0.0000109);
      setDefault_Dwater_5(0.0000109);

      setValue_DHvb_5(35.1);
      setDefault_DHvb_5(35.1);

      setValue_Tc_5(617.2);
      setDefault_Tc_5(617.2);

      setValue_Tb_5(388.2);
      setDefault_Tb_5(388.2);

      setValue_MW_5(79.102);
      setDefault_MW_5(79.102);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(null);
      setDefault_Rfc_5(null);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(28.91);
      setDefault_Koc_5(28.91);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Styrene") {
      setValue_S_5(310.0);
      setDefault_S_5(310.0);

      setValue_Hc_5(0.00275);
      setDefault_Hc_5(0.00275);

      setValue_Dair_5(0.071114);
      setDefault_Dair_5(0.071114);

      setValue_Dwater_5(0.0000087838);
      setDefault_Dwater_5(0.0000087838);

      setValue_DHvb_5(8737);
      setDefault_DHvb_5(8737);

      setValue_Tc_5(636.0);
      setDefault_Tc_5(636.0);

      setValue_Tb_5(418.0);
      setDefault_Tb_5(418.0);

      setValue_MW_5(104.15);
      setDefault_MW_5(104.15);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(1.0);
      setDefault_Rfc_5(1.0);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(363);
      setDefault_Koc_5(363);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Tetrachloroethane, 1,1,1,2-") {
      setValue_S_5(1070);
      setDefault_S_5(1070);

      setValue_Hc_5(0.0025);
      setDefault_Hc_5(0.0025);

      setValue_Dair_5(0.0481761);
      setDefault_Dair_5(0.0481761);

      setValue_Dwater_5(0.0000090977);
      setDefault_Dwater_5(0.0000090977);

      setValue_DHvb_5(9768.282525);
      setDefault_DHvb_5(9768.282525);

      setValue_Tc_5(624.0);
      setDefault_Tc_5(624.0);

      setValue_Tb_5(403.5);
      setDefault_Tb_5(403.5);

      setValue_MW_5(167.85);
      setDefault_MW_5(167.85);

      setValue_IUR_5(0.0000074);
      setDefault_IUR_5(0.0000074);

      setValue_Rfc_5(null);
      setDefault_Rfc_5(null);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(348.8);
      setDefault_Koc_5(348.8);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Tetrachloroethane, 1,1,2,2-") {
      setValue_S_5(2830);
      setDefault_S_5(2830);

      setValue_Hc_5(0.000367);
      setDefault_Hc_5(0.000367);

      setValue_Dair_5(0.0489206);
      setDefault_Dair_5(0.0489206);

      setValue_Dwater_5(0.0000092902);
      setDefault_Dwater_5(0.0000092902);

      setValue_DHvb_5(8996);
      setDefault_DHvb_5(8996);

      setValue_Tc_5(661.15);
      setDefault_Tc_5(661.15);

      setValue_Tb_5(419.5);
      setDefault_Tb_5(419.5);

      setValue_MW_5(167.85);
      setDefault_MW_5(167.85);

      setValue_IUR_5(0.000058);
      setDefault_IUR_5(0.000058);

      setValue_Rfc_5(null);
      setDefault_Rfc_5(null);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(118.5);
      setDefault_Koc_5(118.5);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Tetrachloroethylene") {
      setValue_S_5(206.0);
      setDefault_S_5(206.0);

      setValue_Hc_5(0.0177);
      setDefault_Hc_5(0.0177);

      setValue_Dair_5(0.0504664);
      setDefault_Dair_5(0.0504664);

      setValue_Dwater_5(0.0000094551);
      setDefault_Dwater_5(0.0000094551);

      setValue_DHvb_5(8288);
      setDefault_DHvb_5(8288);

      setValue_Tc_5(620.2);
      setDefault_Tc_5(620.2);

      setValue_Tb_5(394.3);
      setDefault_Tb_5(394.3);

      setValue_MW_5(165.83);
      setDefault_MW_5(165.83);

      setValue_IUR_5(0.00000026);
      setDefault_IUR_5(0.00000026);

      setValue_Rfc_5(0.04);
      setDefault_Rfc_5(0.04);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(892.2);
      setDefault_Koc_5(892.2);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Tetrafluoroethane, 1,1,1,2-") {
      setValue_S_5(2040);
      setDefault_S_5(2040);

      setValue_Hc_5(0.05);
      setDefault_Hc_5(0.05);

      setValue_Dair_5(0.0823066);
      setDefault_Dair_5(0.0823066);

      setValue_Dwater_5(0.0000106);
      setDefault_Dwater_5(0.0000106);

      setValue_DHvb_5(5933.96);
      setDefault_DHvb_5(5933.96);

      setValue_Tc_5(624.0);
      setDefault_Tc_5(624.0);

      setValue_Tb_5(403.5);
      setDefault_Tb_5(403.5);

      setValue_MW_5(102.03);
      setDefault_MW_5(102.03);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(80.0);
      setDefault_Rfc_5(80.0);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(28.69);
      setDefault_Koc_5(28.69);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Tetrahydrofuran") {
      setValue_S_5(1000000);
      setDefault_S_5(1000000);

      setValue_Hc_5(0.0000705);
      setDefault_Hc_5(0.0000705);

      setValue_Dair_5(0.0993751);
      setDefault_Dair_5(0.0993751);

      setValue_Dwater_5(0.0000108);
      setDefault_Dwater_5(0.0000108);

      setValue_DHvb_5(7073.991);
      setDefault_DHvb_5(7073.991);

      setValue_Tc_5(541.15);
      setDefault_Tc_5(541.15);

      setValue_Tb_5(339.0);
      setDefault_Tb_5(339.0);

      setValue_MW_5(72.108);
      setDefault_MW_5(72.108);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(2.0);
      setDefault_Rfc_5(2.0);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(12.27);
      setDefault_Koc_5(12.27);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Titanium Tetrachloride") {
      setValue_S_5(null);
      setDefault_S_5(null);

      setValue_Hc_5(null);
      setDefault_Hc_5(null);

      setValue_Dair_5(0.0379716);
      setDefault_Dair_5(0.0379716);

      setValue_Dwater_5(0.0000090633);
      setDefault_Dwater_5(0.0000090633);

      setValue_DHvb_5(8646.2252);
      setDefault_DHvb_5(8646.2252);

      setValue_Tc_5(643.15);
      setDefault_Tc_5(643.15);

      setValue_Tb_5(421.15);
      setDefault_Tb_5(421.15);

      setValue_MW_5(189.679);
      setDefault_MW_5(189.679);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.0001);
      setDefault_Rfc_5(0.0001);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(18.85);
      setDefault_Koc_5(18.85);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Toluene") {
      setValue_S_5(526.0);
      setDefault_S_5(526.0);

      setValue_Hc_5(0.00664);
      setDefault_Hc_5(0.00664);

      setValue_Dair_5(0.0778039);
      setDefault_Dair_5(0.0778039);

      setValue_Dwater_5(0.0000092043);
      setDefault_Dwater_5(0.0000092043);

      setValue_DHvb_5(7930);
      setDefault_DHvb_5(7930);

      setValue_Tc_5(591.79);
      setDefault_Tc_5(591.79);

      setValue_Tb_5(383.6);
      setDefault_Tb_5(383.6);

      setValue_MW_5(92.142);
      setDefault_MW_5(92.142);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(5.0);
      setDefault_Rfc_5(5.0);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(233.9);
      setDefault_Koc_5(233.9);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Trichloro,2,2-trifluoroethane, 1,1,2-") {
      setValue_S_5(170.0);
      setDefault_S_5(170.0);

      setValue_Hc_5(0.526);
      setDefault_Hc_5(0.526);

      setValue_Dair_5(0.0375658);
      setDefault_Dair_5(0.0375658);

      setValue_Dwater_5(0.000008592);
      setDefault_Dwater_5(0.000008592);

      setValue_DHvb_5(6462.56);
      setDefault_DHvb_5(6462.56);

      setValue_Tc_5(487.3);
      setDefault_Tc_5(487.3);

      setValue_Tb_5(320.7);
      setDefault_Tb_5(320.7);

      setValue_MW_5(187.38);
      setDefault_MW_5(187.38);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(5.0);
      setDefault_Rfc_5(5.0);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(552.3);
      setDefault_Koc_5(552.3);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Trichlorobenzene, 1,2,3-") {
      setValue_S_5(18.0);
      setDefault_S_5(18.0);

      setValue_Hc_5(0.00125);
      setDefault_Hc_5(0.00125);

      setValue_Dair_5(0.03953);
      setDefault_Dair_5(0.03953);

      setValue_Dwater_5(0.0000083836);
      setDefault_Dwater_5(0.0000083836);

      setValue_DHvb_5(12611.53);
      setDefault_DHvb_5(12611.53);

      setValue_Tc_5(762.5);
      setDefault_Tc_5(762.5);

      setValue_Tb_5(491.5);
      setDefault_Tb_5(491.5);

      setValue_MW_5(181.45);
      setDefault_MW_5(181.45);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(null);
      setDefault_Rfc_5(null);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(2040);
      setDefault_Koc_5(2040);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Trichlorobenzene, 1,2,4-") {
      setValue_S_5(49.0);
      setDefault_S_5(49.0);

      setValue_Hc_5(0.00142);
      setDefault_Hc_5(0.00142);

      setValue_Dair_5(0.0395992);
      setDefault_Dair_5(0.0395992);

      setValue_Dwater_5(0.0000084033);
      setDefault_Dwater_5(0.0000084033);

      setValue_DHvb_5(10471);
      setDefault_DHvb_5(10471);

      setValue_Tc_5(725.0);
      setDefault_Tc_5(725.0);

      setValue_Tb_5(486.5);
      setDefault_Tb_5(486.5);

      setValue_MW_5(181.45);
      setDefault_MW_5(181.45);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.002);
      setDefault_Rfc_5(0.002);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(1964);
      setDefault_Koc_5(1964);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Trichloroethane, 1,1,1-") {
      setValue_S_5(1290);
      setDefault_S_5(1290);

      setValue_Hc_5(0.0172);
      setDefault_Hc_5(0.0172);

      setValue_Dair_5(0.0648174);
      setDefault_Dair_5(0.0648174);

      setValue_Dwater_5(0.000009599);
      setDefault_Dwater_5(0.000009599);

      setValue_DHvb_5(7136);
      setDefault_DHvb_5(7136);

      setValue_Tc_5(545.0);
      setDefault_Tc_5(545.0);

      setValue_Tb_5(347.0);
      setDefault_Tb_5(347.0);

      setValue_MW_5(133.41);
      setDefault_MW_5(133.41);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(5.0);
      setDefault_Rfc_5(5.0);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(144.8);
      setDefault_Koc_5(144.8);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Trichloroethane, 1,1,2-") {
      setValue_S_5(4590);
      setDefault_S_5(4590);

      setValue_Hc_5(0.000824);
      setDefault_Hc_5(0.000824);

      setValue_Dair_5(0.0668904);
      setDefault_Dair_5(0.0668904);

      setValue_Dwater_5(0.00001);
      setDefault_Dwater_5(0.00001);

      setValue_DHvb_5(8322);
      setDefault_DHvb_5(8322);

      setValue_Tc_5(602.0);
      setDefault_Tc_5(602.0);

      setValue_Tb_5(386.8);
      setDefault_Tb_5(386.8);

      setValue_MW_5(133.41);
      setDefault_MW_5(133.41);

      setValue_IUR_5(0.000016);
      setDefault_IUR_5(0.000016);

      setValue_Rfc_5(0.0002);
      setDefault_Rfc_5(0.0002);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(43.64);
      setDefault_Koc_5(43.64);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Trichloroethylene") {
      setValue_S_5(1280);
      setDefault_S_5(1280);

      setValue_Hc_5(0.00985);
      setDefault_Hc_5(0.00985);

      setValue_Dair_5(0.0686618);
      setDefault_Dair_5(0.0686618);

      setValue_Dwater_5(0.0000102);
      setDefault_Dwater_5(0.0000102);

      setValue_DHvb_5(7505);
      setDefault_DHvb_5(7505);

      setValue_Tc_5(544.2);
      setDefault_Tc_5(544.2);

      setValue_Tb_5(360.2);
      setDefault_Tb_5(360.2);

      setValue_MW_5(131.39);
      setDefault_MW_5(131.39);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.002);
      setDefault_Rfc_5(0.002);

      setValue_Mut_5("Yes");
      setDefault_Mut_5("Yes");

      setValue_Koc_5(125.9);
      setDefault_Koc_5(125.9);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Trichlorofluoromethane") {
      setValue_S_5(1100);
      setDefault_S_5(1100);

      setValue_Hc_5(0.097);
      setDefault_Hc_5(0.097);

      setValue_Dair_5(0.065356);
      setDefault_Dair_5(0.065356);

      setValue_Dwater_5(0.00001);
      setDefault_Dwater_5(0.00001);

      setValue_DHvb_5(5998.9);
      setDefault_DHvb_5(5998.9);

      setValue_Tc_5(471.0);
      setDefault_Tc_5(471.0);

      setValue_Tb_5(296.7);
      setDefault_Tb_5(296.7);

      setValue_MW_5(137.37);
      setDefault_MW_5(137.37);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(null);
      setDefault_Rfc_5(null);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(156.8);
      setDefault_Koc_5(156.8);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Trichloropropane, 1,2,3-") {
      setValue_S_5(1750);
      setDefault_S_5(1750);

      setValue_Hc_5(0.000343);
      setDefault_Hc_5(0.000343);

      setValue_Dair_5(0.0574661);
      setDefault_Dair_5(0.0574661);

      setValue_Dwater_5(0.0000092411);
      setDefault_Dwater_5(0.0000092411);

      setValue_DHvb_5(9171);
      setDefault_DHvb_5(9171);

      setValue_Tc_5(652.0);
      setDefault_Tc_5(652.0);

      setValue_Tb_5(430.0);
      setDefault_Tb_5(430.0);

      setValue_MW_5(147.43);
      setDefault_MW_5(147.43);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.0003);
      setDefault_Rfc_5(0.0003);

      setValue_Mut_5("Yes");
      setDefault_Mut_5("Yes");

      setValue_Koc_5(93.27);
      setDefault_Koc_5(93.27);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Triethylamine") {
      setValue_S_5(68600);
      setDefault_S_5(68600);

      setValue_Hc_5(0.000149);
      setDefault_Hc_5(0.000149);

      setValue_Dair_5(0.0663631);
      setDefault_Dair_5(0.0663631);

      setValue_Dwater_5(0.0000078576);
      setDefault_Dwater_5(0.0000078576);

      setValue_DHvb_5(8095.2);
      setDefault_DHvb_5(8095.2);

      setValue_Tc_5(535.6);
      setDefault_Tc_5(535.6);

      setValue_Tb_5(362.0);
      setDefault_Tb_5(362.0);

      setValue_MW_5(101.19);
      setDefault_MW_5(101.19);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5();
      setDefault_Rfc_5();

      setValue_Mut_5(0.007);
      setDefault_Mut_5(0.007);

      setValue_Koc_5(45.9);
      setDefault_Koc_5(45.9);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Trifluoroethane, 1,1,1-") {
      setValue_S_5(760.9);
      setDefault_S_5(760.9);

      setValue_Hc_5(0.77);
      setDefault_Hc_5(0.77);

      setValue_Dair_5(0.0990283);
      setDefault_Dair_5(0.0990283);

      setValue_Dwater_5(0.0000116);
      setDefault_Dwater_5(0.0000116);

      setValue_DHvb_5(4.58891);
      setDefault_DHvb_5(4.58891);

      setValue_Tc_5(345.88);
      setDefault_Tc_5(345.88);

      setValue_Tb_5(228.15);
      setDefault_Tb_5(228.15);

      setValue_MW_5(84.041);
      setDefault_MW_5(84.041);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(20.0);
      setDefault_Rfc_5(20.0);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(32.34);
      setDefault_Koc_5(32.34);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Trimethylbenzene, 1,2,3-") {
      setValue_S_5(75.2);
      setDefault_S_5(75.2);

      setValue_Hc_5(0.00436);
      setDefault_Hc_5(0.00436);

      setValue_Dair_5(0.0612535);
      setDefault_Dair_5(0.0612535);

      setValue_Dwater_5(0.0000080214);
      setDefault_Dwater_5(0.0000080214);

      setValue_DHvb_5(11715.39);
      setDefault_DHvb_5(11715.39);

      setValue_Tc_5(664.5);
      setDefault_Tc_5(664.5);

      setValue_Tb_5(449.1);
      setDefault_Tb_5(449.1);

      setValue_MW_5(120.2);
      setDefault_MW_5(120.2);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.06);
      setDefault_Rfc_5(0.06);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(1500);
      setDefault_Koc_5(1500);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Trimethylbenzene, 1,2,4-") {
      setValue_S_5(57.0);
      setDefault_S_5(57.0);

      setValue_Hc_5(0.00616);
      setDefault_Hc_5(0.00616);

      setValue_Dair_5(0.0606754);
      setDefault_Dair_5(0.0606754);

      setValue_Dwater_5(0.0000079209);
      setDefault_Dwater_5(0.0000079209);

      setValue_DHvb_5(9368.8);
      setDefault_DHvb_5(9368.8);

      setValue_Tc_5(649.17);
      setDefault_Tc_5(649.17);

      setValue_Tb_5(442.3);
      setDefault_Tb_5(442.3);

      setValue_MW_5(120.2);
      setDefault_MW_5(120.2);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.06);
      setDefault_Rfc_5(0.06);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(1413);
      setDefault_Koc_5(1413);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Trimethylbenzene, 1,3,5-") {
      setValue_S_5(48.2);
      setDefault_S_5(48.2);

      setValue_Hc_5(0.00877);
      setDefault_Hc_5(0.00877);

      setValue_Dair_5(0.0602254);
      setDefault_Dair_5(0.0602254);

      setValue_Dwater_5(0.000007843);
      setDefault_Dwater_5(0.000007843);

      setValue_DHvb_5(9321);
      setDefault_DHvb_5(9321);

      setValue_Tc_5(637.25);
      setDefault_Tc_5(637.25);

      setValue_Tb_5(437.7);
      setDefault_Tb_5(437.7);

      setValue_MW_5(120.2);
      setDefault_MW_5(120.2);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.06);
      setDefault_Rfc_5(0.06);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(928.6);
      setDefault_Koc_5(928.6);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Vinyl Acetate") {
      setValue_S_5(20000);
      setDefault_S_5(20000);

      setValue_Hc_5(0.000511);
      setDefault_Hc_5(0.000511);

      setValue_Dair_5(0.0849016);
      setDefault_Dair_5(0.0849016);

      setValue_Dwater_5(0.00001);
      setDefault_Dwater_5(0.00001);

      setValue_DHvb_5(7800);
      setDefault_DHvb_5(7800);

      setValue_Tc_5(519.13);
      setDefault_Tc_5(519.13);

      setValue_Tb_5(345.5);
      setDefault_Tb_5(345.5);

      setValue_MW_5(86.091);
      setDefault_MW_5(86.091);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.2);
      setDefault_Rfc_5(0.2);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(18.34);
      setDefault_Koc_5(18.34);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Vinyl Bromide") {
      setValue_S_5(7600);
      setDefault_S_5(7600);

      setValue_Hc_5(0.0123);
      setDefault_Hc_5(0.0123);

      setValue_Dair_5(0.0862238);
      setDefault_Dair_5(0.0862238);

      setValue_Dwater_5(0.0000117);
      setDefault_Dwater_5(0.0000117);

      setValue_DHvb_5(5397.92);
      setDefault_DHvb_5(5397.92);

      setValue_Tc_5(463.51);
      setDefault_Tc_5(463.51);

      setValue_Tb_5(288.8);
      setDefault_Tb_5(288.8);

      setValue_MW_5(106.95);
      setDefault_MW_5(106.95);

      setValue_IUR_5(0.000032);
      setDefault_IUR_5(0.000032);

      setValue_Rfc_5(0.003);
      setDefault_Rfc_5(0.003);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(23.03);
      setDefault_Koc_5(23.03);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Vinyl Chloride") {
      setValue_S_5(8800);
      setDefault_S_5(8800);

      setValue_Hc_5(0.0278);
      setDefault_Hc_5(0.0278);

      setValue_Dair_5(0.1071202);
      setDefault_Dair_5(0.1071202);

      setValue_Dwater_5(0.000012);
      setDefault_Dwater_5(0.000012);

      setValue_DHvb_5(5250);
      setDefault_DHvb_5(5250);

      setValue_Tc_5(432.0);
      setDefault_Tc_5(432.0);

      setValue_Tb_5(259.7);
      setDefault_Tb_5(259.7);

      setValue_MW_5(62.499);
      setDefault_MW_5(62.499);

      setValue_IUR_5(0.0000044);
      setDefault_IUR_5(0.0000044);

      setValue_Rfc_5(0.1);
      setDefault_Rfc_5(0.1);

      setValue_Mut_5("VC");
      setDefault_Mut_5("VC");

      setValue_Koc_5(25.44);
      setDefault_Koc_5(25.44);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Xylene, m-") {
      setValue_S_5(161.0);
      setDefault_S_5(161.0);

      setValue_Hc_5(0.00718);
      setDefault_Hc_5(0.00718);

      setValue_Dair_5(0.0683659);
      setDefault_Dair_5(0.0683659);

      setValue_Dwater_5(0.0000084394);
      setDefault_Dwater_5(0.0000084394);

      setValue_DHvb_5(8523);
      setDefault_DHvb_5(8523);

      setValue_Tc_5(617.05);
      setDefault_Tc_5(617.05);

      setValue_Tb_5(412.1);
      setDefault_Tb_5(412.1);

      setValue_MW_5(106.17);
      setDefault_MW_5(106.17);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.1);
      setDefault_Rfc_5(0.1);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(598.2);
      setDefault_Koc_5(598.2);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Xylene, o-") {
      setValue_S_5(178.0);
      setDefault_S_5(178.0);

      setValue_Hc_5(0.00518);
      setDefault_Hc_5(0.00518);

      setValue_Dair_5(0.0689201);
      setDefault_Dair_5(0.0689201);

      setValue_Dwater_5(0.0000085315);
      setDefault_Dwater_5(0.0000085315);

      setValue_DHvb_5(8661);
      setDefault_DHvb_5(8661);

      setValue_Tc_5(630.3);
      setDefault_Tc_5(630.3);

      setValue_Tb_5(411.5);
      setDefault_Tb_5(411.5);

      setValue_MW_5(106.17);
      setDefault_MW_5(106.17);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.1);
      setDefault_Rfc_5(0.1);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(552.3);
      setDefault_Koc_5(552.3);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Xylene, P-") {
      setValue_S_5(162.0);
      setDefault_S_5(162.0);

      setValue_Hc_5(0.0069);
      setDefault_Hc_5(0.0069);

      setValue_Dair_5(0.0682485);
      setDefault_Dair_5(0.0682485);

      setValue_Dwater_5(0.0000084199);
      setDefault_Dwater_5(0.0000084199);

      setValue_DHvb_5(8525);
      setDefault_DHvb_5(8525);

      setValue_Tc_5(616.2);
      setDefault_Tc_5(616.2);

      setValue_Tb_5(411.3);
      setDefault_Tb_5(411.3);

      setValue_MW_5(106.17);
      setDefault_MW_5(106.17);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.1);
      setDefault_Rfc_5(0.1);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(541.4);
      setDefault_Koc_5(541.4);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "Xylenes") {
      setValue_S_5(106.0);
      setDefault_S_5(106.0);

      setValue_Hc_5(0.00663);
      setDefault_Hc_5(0.00663);

      setValue_Dair_5(0.0685148);
      setDefault_Dair_5(0.0685148);

      setValue_Dwater_5(0.0000084641);
      setDefault_Dwater_5(0.0000084641);

      setValue_DHvb_5(8523);
      setDefault_DHvb_5(8523);

      setValue_Tc_5(616.2);
      setDefault_Tc_5(616.2);

      setValue_Tb_5(411.3);
      setDefault_Tb_5(411.3);

      setValue_MW_5(106.17);
      setDefault_MW_5(106.17);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.1);
      setDefault_Rfc_5(0.1);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(552.3);
      setDefault_Koc_5(552.3);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "TPH - Aliph >C05-C06") {
      setValue_S_5(36);
      setDefault_S_5(36);

      setValue_Hc_5(32.47711492);
      setDefault_Hc_5(32.47711492);

      setValue_Dair_5(0.1);
      setDefault_Dair_5(0.1);

      setValue_Dwater_5(0.00001);
      setDefault_Dwater_5(0.00001);

      setValue_DHvb_5(8000);
      setDefault_DHvb_5(8000);

      setValue_Tc_5(500);
      setDefault_Tc_5(500);

      setValue_Tb_5(100);
      setDefault_Tb_5(100);

      setValue_MW_5(81);
      setDefault_MW_5(81);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(18);
      setDefault_Rfc_5(18);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(794.3);
      setDefault_Koc_5(794.3);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "TPH - Aliph >C06-C08") {
      setValue_S_5(36);
      setDefault_S_5(36);

      setValue_Hc_5(32.47711492);
      setDefault_Hc_5(32.47711492);

      setValue_Dair_5(0.1);
      setDefault_Dair_5(0.1);

      setValue_Dwater_5(0.00001);
      setDefault_Dwater_5(0.00001);

      setValue_DHvb_5(8000);
      setDefault_DHvb_5(8000);

      setValue_Tc_5(500);
      setDefault_Tc_5(500);

      setValue_Tb_5(100);
      setDefault_Tb_5(100);

      setValue_MW_5(81);
      setDefault_MW_5(81);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(18);
      setDefault_Rfc_5(18);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(794.3);
      setDefault_Koc_5(794.3);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "TPH - Aliph >C05-C06 (>53% n-hexane)") {
      setValue_S_5(5.4);
      setDefault_S_5(5.4);

      setValue_Hc_5(48.11424433);
      setDefault_Hc_5(48.11424433);

      setValue_Dair_5(0.1);
      setDefault_Dair_5(0.1);

      setValue_Dwater_5(0.00001);
      setDefault_Dwater_5(0.00001);

      setValue_DHvb_5(9000);
      setDefault_DHvb_5(9000);

      setValue_Tc_5(500);
      setDefault_Tc_5(500);

      setValue_Tb_5(100);
      setDefault_Tb_5(100);

      setValue_MW_5(100);
      setDefault_MW_5(100);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.67);
      setDefault_Rfc_5(0.67);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(862.9);
      setDefault_Koc_5(862.9);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "TPH - Aliph >C06-C08 (>53% n-hexane)") {
      setValue_S_5(5.4);
      setDefault_S_5(5.4);

      setValue_Hc_5(48.11424433);
      setDefault_Hc_5(48.11424433);

      setValue_Dair_5(0.1);
      setDefault_Dair_5(0.1);

      setValue_Dwater_5(0.00001);
      setDefault_Dwater_5(0.00001);

      setValue_DHvb_5(10000);
      setDefault_DHvb_5(10000);

      setValue_Tc_5(500);
      setDefault_Tc_5(500);

      setValue_Tb_5(100);
      setDefault_Tb_5(100);

      setValue_MW_5(100);
      setDefault_MW_5(100);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.67);
      setDefault_Rfc_5(0.67);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(862.9);
      setDefault_Koc_5(862.9);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "TPH - Aliph >C08-C10") {
      setValue_S_5(0.43);
      setDefault_S_5(0.43);

      setValue_Hc_5(78.54930121);
      setDefault_Hc_5(78.54930121);

      setValue_Dair_5(0.1);
      setDefault_Dair_5(0.1);

      setValue_Dwater_5(0.00001);
      setDefault_Dwater_5(0.00001);

      setValue_DHvb_5(12000);
      setDefault_DHvb_5(12000);

      setValue_Tc_5(500);
      setDefault_Tc_5(500);

      setValue_Tb_5(100);
      setDefault_Tb_5(100);

      setValue_MW_5(130);
      setDefault_MW_5(130);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.5);
      setDefault_Rfc_5(0.5);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(31622.7);
      setDefault_Koc_5(31622.7);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "TPH - Aliph >C10-C12") {
      setValue_S_5(0.034);
      setDefault_S_5(0.034);

      setValue_Hc_5(122.2667856);
      setDefault_Hc_5(122.2667856);

      setValue_Dair_5(0.1);
      setDefault_Dair_5(0.1);

      setValue_Dwater_5(0.00001);
      setDefault_Dwater_5(0.00001);

      setValue_DHvb_5(12000);
      setDefault_DHvb_5(12000);

      setValue_Tc_5(500);
      setDefault_Tc_5(500);

      setValue_Tb_5(100);
      setDefault_Tb_5(100);

      setValue_MW_5(160);
      setDefault_MW_5(160);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.5);
      setDefault_Rfc_5(0.5);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(251188.6);
      setDefault_Koc_5(251188.6);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "TPH - Aliph >C12-C16") {
      setValue_S_5(0.00076);
      setDefault_S_5(0.00076);

      setValue_Hc_5(520.9361792);
      setDefault_Hc_5(520.9361792);

      setValue_Dair_5(0.1);
      setDefault_Dair_5(0.1);

      setValue_Dwater_5(0.00001);
      setDefault_Dwater_5(0.00001);

      setValue_DHvb_5(16000);
      setDefault_DHvb_5(16000);

      setValue_Tc_5(500);
      setDefault_Tc_5(500);

      setValue_Tb_5(300);
      setDefault_Tb_5(300);

      setValue_MW_5(200);
      setDefault_MW_5(200);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.5);
      setDefault_Rfc_5(0.5);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(5011872.3);
      setDefault_Koc_5(5011872.3);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "TPH - Aliph >C16-C21") {
      setValue_S_5(0.0000025);
      setDefault_S_5(0.0000025);

      setValue_Hc_5(4899.404766);
      setDefault_Hc_5(4899.404766);

      setValue_Dair_5(0.1);
      setDefault_Dair_5(0.1);

      setValue_Dwater_5(0.00001);
      setDefault_Dwater_5(0.00001);

      setValue_DHvb_5(17000);
      setDefault_DHvb_5(17000);

      setValue_Tc_5(500);
      setDefault_Tc_5(500);

      setValue_Tb_5(300);
      setDefault_Tb_5(300);

      setValue_MW_5(270);
      setDefault_MW_5(270);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(null);
      setDefault_Rfc_5(null);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(630957344.4);
      setDefault_Koc_5(630957344.4);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "TPH - Aliph >C21-C34") {
      setValue_S_5(0.0000025);
      setDefault_S_5(0.0000025);

      setValue_Hc_5(7258.377431);
      setDefault_Hc_5(7258.377431);

      setValue_Dair_5(0.1);
      setDefault_Dair_5(0.1);

      setValue_Dwater_5(0.00001);
      setDefault_Dwater_5(0.00001);

      setValue_DHvb_5(20000);
      setDefault_DHvb_5(20000);

      setValue_Tc_5(500);
      setDefault_Tc_5(500);

      setValue_Tb_5(100);
      setDefault_Tb_5(100);

      setValue_MW_5(400);
      setDefault_MW_5(400);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(null);
      setDefault_Rfc_5(null);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(630957344.4);
      setDefault_Koc_5(630957344.4);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "TPH - Arom >C05-C07") {
      setValue_S_5(1800);
      setDefault_S_5(1800);

      setValue_Hc_5(0.232323065);
      setDefault_Hc_5(0.232323065);

      setValue_Dair_5(0.1);
      setDefault_Dair_5(0.1);

      setValue_Dwater_5(0.00001);
      setDefault_Dwater_5(0.00001);

      setValue_DHvb_5(8000);
      setDefault_DHvb_5(8000);

      setValue_Tc_5(500);
      setDefault_Tc_5(500);

      setValue_Tb_5(100);
      setDefault_Tb_5(100);

      setValue_MW_5(78);
      setDefault_MW_5(78);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.28);
      setDefault_Rfc_5(0.28);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(79.43);
      setDefault_Koc_5(79.43);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "TPH - Arom >C07-C08") {
      setValue_S_5(520);
      setDefault_S_5(520);

      setValue_Hc_5(0.277264942);
      setDefault_Hc_5(0.277264942);

      setValue_Dair_5(0.1);
      setDefault_Dair_5(0.1);

      setValue_Dwater_5(0.00001);
      setDefault_Dwater_5(0.00001);

      setValue_DHvb_5(10000);
      setDefault_DHvb_5(10000);

      setValue_Tc_5(500);
      setDefault_Tc_5(500);

      setValue_Tb_5(100);
      setDefault_Tb_5(100);

      setValue_MW_5(92);
      setDefault_MW_5(92);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(1.9);
      setDefault_Rfc_5(1.9);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(251.1);
      setDefault_Koc_5(251.1);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "TPH - Arom >C08-C10") {
      setValue_S_5(65);
      setDefault_S_5(65);

      setValue_Hc_5(0.479662005);
      setDefault_Hc_5(0.479662005);

      setValue_Dair_5(0.1);
      setDefault_Dair_5(0.1);

      setValue_Dwater_5(0.00001);
      setDefault_Dwater_5(0.00001);

      setValue_DHvb_5(10000);
      setDefault_DHvb_5(10000);

      setValue_Tc_5(500);
      setDefault_Tc_5(500);

      setValue_Tb_5(300);
      setDefault_Tb_5(300);

      setValue_MW_5(120);
      setDefault_MW_5(120);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.2);
      setDefault_Rfc_5(0.2);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(1584.8);
      setDefault_Koc_5(1584.8);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "TPH - Arom >C10-C12") {
      setValue_S_5(25);
      setDefault_S_5(25);

      setValue_Hc_5(0.135104789);
      setDefault_Hc_5(0.135104789);

      setValue_Dair_5(0.1);
      setDefault_Dair_5(0.1);

      setValue_Dwater_5(0.00001);
      setDefault_Dwater_5(0.00001);

      setValue_DHvb_5(12000);
      setDefault_DHvb_5(12000);

      setValue_Tc_5(500);
      setDefault_Tc_5(500);

      setValue_Tb_5(300);
      setDefault_Tb_5(300);

      setValue_MW_5(130);
      setDefault_MW_5(130);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.2);
      setDefault_Rfc_5(0.2);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(2511.8);
      setDefault_Koc_5(2511.8);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "TPH - Arom >C12-C16") {
      setValue_S_5(5.8);
      setDefault_S_5(5.8);

      setValue_Hc_5(0.051195452);
      setDefault_Hc_5(0.051195452);

      setValue_Dair_5(0.1);
      setDefault_Dair_5(0.1);

      setValue_Dwater_5(0.00001);
      setDefault_Dwater_5(0.00001);

      setValue_DHvb_5(16000);
      setDefault_DHvb_5(16000);

      setValue_Tc_5(500);
      setDefault_Tc_5(500);

      setValue_Tb_5(300);
      setDefault_Tb_5(300);

      setValue_MW_5(150);
      setDefault_MW_5(150);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.2);
      setDefault_Rfc_5(0.2);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(5011.8);
      setDefault_Koc_5(5011.8);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "TPH - Arom >C16-C121") {
      setValue_S_5(0.65);
      setDefault_S_5(0.65);

      setValue_Hc_5(0.013260497);
      setDefault_Hc_5(0.013260497);

      setValue_Dair_5(0.1);
      setDefault_Dair_5(0.1);

      setValue_Dwater_5(0.00001);
      setDefault_Dwater_5(0.00001);

      setValue_DHvb_5(17000);
      setDefault_DHvb_5(17000);

      setValue_Tc_5(500);
      setDefault_Tc_5(500);

      setValue_Tb_5(300);
      setDefault_Tb_5(300);

      setValue_MW_5(190);
      setDefault_MW_5(190);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(null);
      setDefault_Rfc_5(null);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(15848.9);
      setDefault_Koc_5(15848.9);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "TPH - Arom >C21-C35") {
      setValue_S_5(0.0066);
      setDefault_S_5(0.0066);

      setValue_Hc_5(0.000659852);
      setDefault_Hc_5(0.000659852);

      setValue_Dair_5(0.1);
      setDefault_Dair_5(0.1);

      setValue_Dwater_5(0.00001);
      setDefault_Dwater_5(0.00001);

      setValue_DHvb_5(20000);
      setDefault_DHvb_5(20000);

      setValue_Tc_5(500);
      setDefault_Tc_5(500);

      setValue_Tb_5(300);
      setDefault_Tb_5(300);

      setValue_MW_5(240);
      setDefault_MW_5(240);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(null);
      setDefault_Rfc_5(null);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(125892.5);
      setDefault_Koc_5(125892.5);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "TPH, TX1105, C6-C12") {
      setValue_S_5(65);
      setDefault_S_5(65);

      setValue_Hc_5(0.48);
      setDefault_Hc_5(0.48);

      setValue_Dair_5(0.1);
      setDefault_Dair_5(0.1);

      setValue_Dwater_5(0.00001);
      setDefault_Dwater_5(0.00001);

      setValue_DHvb_5(10000);
      setDefault_DHvb_5(10000);

      setValue_Tc_5(500);
      setDefault_Tc_5(500);

      setValue_Tb_5(100);
      setDefault_Tb_5(100);

      setValue_MW_5(120);
      setDefault_MW_5(120);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.2);
      setDefault_Rfc_5(0.2);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(1584.8);
      setDefault_Koc_5(1584.8);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "TPH, TX1105, >C12-C28") {
      setValue_S_5(5.8);
      setDefault_S_5(5.8);

      setValue_Hc_5(0.053);
      setDefault_Hc_5(0.053);

      setValue_Dair_5(0.1);
      setDefault_Dair_5(0.1);

      setValue_Dwater_5(0.00001);
      setDefault_Dwater_5(0.00001);

      setValue_DHvb_5(20000);
      setDefault_DHvb_5(20000);

      setValue_Tc_5(500);
      setDefault_Tc_5(500);

      setValue_Tb_5(100);
      setDefault_Tb_5(100);

      setValue_MW_5(150);
      setDefault_MW_5(150);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.2);
      setDefault_Rfc_5(0.2);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(5011.8);
      setDefault_Koc_5(5011.8);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "TPH, TX1105, >C12-C35") {
      setValue_S_5(5.8);
      setDefault_S_5(5.8);

      setValue_Hc_5(0.053);
      setDefault_Hc_5(0.053);

      setValue_Dair_5(0.1);
      setDefault_Dair_5(0.1);

      setValue_Dwater_5(0.00001);
      setDefault_Dwater_5(0.00001);

      setValue_DHvb_5(20000);
      setDefault_DHvb_5(20000);

      setValue_Tc_5(500);
      setDefault_Tc_5(500);

      setValue_Tb_5(100);
      setDefault_Tb_5(100);

      setValue_MW_5(150);
      setDefault_MW_5(150);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.2);
      setDefault_Rfc_5(0.2);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(5011.8);
      setDefault_Koc_5(5011.8);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    } else if (selectedChem === "TPH, TX1105, >C28-C35") {
      setValue_S_5(5.8);
      setDefault_S_5(5.8);

      setValue_Hc_5(0.053);
      setDefault_Hc_5(0.053);

      setValue_Dair_5(0.1);
      setDefault_Dair_5(0.1);

      setValue_Dwater_5(0.00001);
      setDefault_Dwater_5(0.00001);

      setValue_DHvb_5(20000);
      setDefault_DHvb_5(20000);

      setValue_Tc_5(500);
      setDefault_Tc_5(500);

      setValue_Tb_5(300);
      setDefault_Tb_5(100);

      setValue_MW_5(150);
      setDefault_MW_5(150);

      setValue_IUR_5(null);
      setDefault_IUR_5(null);

      setValue_Rfc_5(0.2);
      setDefault_Rfc_5(0.2);

      setValue_Mut_5("No");
      setDefault_Mut_5("No");

      setValue_Koc_5(5011.8);
      setDefault_Koc_5(5011.8);

      setValue_foc_5(0.0007);
      setDefault_foc_5(0.0007);
    }
  };

  // 세션에 저장
  const saveData = () => {
    sessionStorage.setItem("materialNum", materialNum);
    let numOfMaterial = parseInt(materialNum);
    let verify = false; // 값 다 있는 경우 true

    // 저장
    if (numOfMaterial >= 1) {
      if (
        value_S_1 !== "" &&
        value_S_1 !== null &&
        value_Hc_1 !== "" &&
        value_Hc_1 !== null &&
        value_Dair_1 !== "" &&
        value_Dair_1 !== null &&
        value_Dwater_1 !== "" &&
        value_Dwater_1 !== null &&
        value_DHvb_1 !== "" &&
        value_DHvb_1 !== null &&
        value_Tc_1 !== "" &&
        value_Tc_1 !== null &&
        value_Tb_1 !== "" &&
        value_Tb_1 !== null &&
        value_MW_1 !== "" &&
        value_MW_1 !== null &&
        value_IUR_1 !== "" &&
        value_IUR_1 !== null &&
        value_Rfc_1 !== "" &&
        value_Rfc_1 !== null &&
        value_Mut_1 !== "" &&
        value_Mut_1 !== null
      ) {
        sessionStorage.setItem("chem_1", chem1);
        sessionStorage.setItem("value_S_1", value_S_1);
        sessionStorage.setItem("value_Hc_1", value_Hc_1);
        sessionStorage.setItem("value_Dair_1", value_Dair_1);
        sessionStorage.setItem("value_Dwater_1", value_Dwater_1);
        sessionStorage.setItem("value_DHvb_1", value_DHvb_1);
        sessionStorage.setItem("value_Tc_1", value_Tc_1);
        sessionStorage.setItem("value_Tb_1", value_Tb_1);
        sessionStorage.setItem("value_MW_1", value_MW_1);
        sessionStorage.setItem("value_IUR_1", value_IUR_1);
        sessionStorage.setItem("value_Rfc_1", value_Rfc_1);
        sessionStorage.setItem("value_Mut_1", value_Mut_1);
        sessionStorage.setItem("value_Koc_1", value_Koc_1);
        sessionStorage.setItem("value_foc_1", value_foc_1);
        sessionStorage.setItem("default_Koc_1", default_Koc_1);
        sessionStorage.setItem("default_foc_1", default_foc_1);

        if (numOfMaterial === 1) {
          verify = true;
        }
      } else {
        alert("오염물질 1의 값이 누락되었습니다.");
      }
    }
    if (numOfMaterial >= 2) {
      if (
        value_S_2 !== "" &&
        value_S_2 !== null &&
        value_Hc_2 !== "" &&
        value_Hc_2 !== null &&
        value_Dair_2 !== "" &&
        value_Dair_2 !== null &&
        value_Dwater_2 !== "" &&
        value_Dwater_2 !== null &&
        value_DHvb_2 !== "" &&
        value_DHvb_2 !== null &&
        value_Tc_2 !== "" &&
        value_Tc_2 !== null &&
        value_Tb_2 !== "" &&
        value_Tb_2 !== null &&
        value_MW_2 !== "" &&
        value_MW_2 !== null &&
        value_IUR_2 !== "" &&
        value_IUR_2 !== null &&
        value_Rfc_2 !== "" &&
        value_Rfc_2 !== null &&
        value_Mut_2 !== "" &&
        value_Mut_2 !== null
      ) {
        sessionStorage.setItem("chem_2", chem2);
        sessionStorage.setItem("value_S_2", value_S_2);
        sessionStorage.setItem("value_Hc_2", value_Hc_2);
        sessionStorage.setItem("value_Dair_2", value_Dair_2);
        sessionStorage.setItem("value_Dwater_2", value_Dwater_2);
        sessionStorage.setItem("value_DHvb_2", value_DHvb_2);
        sessionStorage.setItem("value_Tc_2", value_Tc_2);
        sessionStorage.setItem("value_Tb_2", value_Tb_2);
        sessionStorage.setItem("value_MW_2", value_MW_2);
        sessionStorage.setItem("value_IUR_2", value_IUR_2);
        sessionStorage.setItem("value_Rfc_2", value_Rfc_2);
        sessionStorage.setItem("value_Mut_2", value_Mut_2);
        sessionStorage.setItem("value_Koc_2", value_Koc_2);
        sessionStorage.setItem("value_foc_2", value_foc_2);
        sessionStorage.setItem("default_Koc_2", default_Koc_2);
        sessionStorage.setItem("default_foc_2", default_foc_2);

        if (numOfMaterial === 2) {
          verify = true;
        }
      } else {
        alert("오염물질 2의 값이 누락되었습니다.");
      }
    }
    if (numOfMaterial >= 3) {
      if (
        value_S_3 !== "" &&
        value_S_3 !== null &&
        value_Hc_3 !== "" &&
        value_Hc_3 !== null &&
        value_Dair_3 !== "" &&
        value_Dair_3 !== null &&
        value_Dwater_3 !== "" &&
        value_Dwater_3 !== null &&
        value_DHvb_3 !== "" &&
        value_DHvb_3 !== null &&
        value_Tc_3 !== "" &&
        value_Tc_3 !== null &&
        value_Tb_3 !== "" &&
        value_Tb_3 !== null &&
        value_MW_3 !== "" &&
        value_MW_3 !== null &&
        value_IUR_3 !== "" &&
        value_IUR_3 !== null &&
        value_Rfc_3 !== "" &&
        value_Rfc_3 !== null &&
        value_Mut_3 !== "" &&
        value_Mut_3 !== null
      ) {
        sessionStorage.setItem("chem_3", chem3);
        sessionStorage.setItem("value_S_3", value_S_3);
        sessionStorage.setItem("value_Hc_3", value_Hc_3);
        sessionStorage.setItem("value_Dair_3", value_Dair_3);
        sessionStorage.setItem("value_Dwater_3", value_Dwater_3);
        sessionStorage.setItem("value_DHvb_3", value_DHvb_3);
        sessionStorage.setItem("value_Tc_3", value_Tc_3);
        sessionStorage.setItem("value_Tb_3", value_Tb_3);
        sessionStorage.setItem("value_MW_3", value_MW_3);
        sessionStorage.setItem("value_IUR_3", value_IUR_3);
        sessionStorage.setItem("value_Rfc_3", value_Rfc_3);
        sessionStorage.setItem("value_Mut_3", value_Mut_3);
        sessionStorage.setItem("value_Koc_3", value_Koc_3);
        sessionStorage.setItem("value_foc_3", value_foc_3);
        sessionStorage.setItem("default_Koc_3", default_Koc_3);
        sessionStorage.setItem("default_foc_3", default_foc_3);

        if (numOfMaterial === 3) {
          verify = true;
        }
      } else {
        alert("오염물질 3의 값이 누락되었습니다.");
      }
    }
    if (numOfMaterial >= 4) {
      if (
        value_S_4 !== "" &&
        value_S_4 !== null &&
        value_Hc_4 !== "" &&
        value_Hc_4 !== null &&
        value_Dair_4 !== "" &&
        value_Dair_4 !== null &&
        value_Dwater_4 !== "" &&
        value_Dwater_4 !== null &&
        value_DHvb_4 !== "" &&
        value_DHvb_4 !== null &&
        value_Tc_4 !== "" &&
        value_Tc_4 !== null &&
        value_Tb_4 !== "" &&
        value_Tb_4 !== null &&
        value_MW_4 !== "" &&
        value_MW_4 !== null &&
        value_IUR_4 !== "" &&
        value_IUR_4 !== null &&
        value_Rfc_4 !== "" &&
        value_Rfc_4 !== null &&
        value_Mut_4 !== "" &&
        value_Mut_4 !== null
      ) {
        sessionStorage.setItem("chem_4", chem4);
        sessionStorage.setItem("value_S_4", value_S_4);
        sessionStorage.setItem("value_Hc_4", value_Hc_4);
        sessionStorage.setItem("value_Dair_4", value_Dair_4);
        sessionStorage.setItem("value_Dwater_4", value_Dwater_4);
        sessionStorage.setItem("value_DHvb_4", value_DHvb_4);
        sessionStorage.setItem("value_Tc_4", value_Tc_4);
        sessionStorage.setItem("value_Tb_4", value_Tb_4);
        sessionStorage.setItem("value_MW_4", value_MW_4);
        sessionStorage.setItem("value_IUR_4", value_IUR_4);
        sessionStorage.setItem("value_Rfc_4", value_Rfc_4);
        sessionStorage.setItem("value_Mut_4", value_Mut_4);
        sessionStorage.setItem("value_Koc_4", value_Koc_4);
        sessionStorage.setItem("value_foc_4", value_foc_4);
        sessionStorage.setItem("default_Koc_4", default_Koc_4);
        sessionStorage.setItem("default_foc_4", default_foc_4);

        if (numOfMaterial === 4) {
          verify = true;
        }
      } else {
        alert("오염물질 4의 값이 누락되었습니다.");
      }
    }
    if (numOfMaterial === 5) {
      if (
        value_S_5 !== "" &&
        value_S_5 !== null &&
        value_Hc_5 !== "" &&
        value_Hc_5 !== null &&
        value_Hc_5 !== "" &&
        value_Hc_5 !== null &&
        value_Dwater_5 !== "" &&
        value_Dwater_5 !== null &&
        value_DHvb_5 !== "" &&
        value_DHvb_5 !== null &&
        value_Tc_5 !== "" &&
        value_Tc_5 !== null &&
        value_Tb_5 !== "" &&
        value_Tb_5 !== null &&
        value_MW_5 !== "" &&
        value_MW_5 !== null &&
        value_IUR_5 !== "" &&
        value_IUR_5 !== null &&
        value_Rfc_5 !== "" &&
        value_Rfc_5 !== null &&
        value_Mut_5 !== "" &&
        value_Mut_5 !== null
      ) {
        sessionStorage.setItem("chem_5", chem5);
        sessionStorage.setItem("value_S_5", value_S_5);
        sessionStorage.setItem("value_Hc_5", value_Hc_5);
        sessionStorage.setItem("value_Dair_5", value_Dair_5);
        sessionStorage.setItem("value_Dwater_5", value_Dwater_5);
        sessionStorage.setItem("value_DHvb_5", value_DHvb_5);
        sessionStorage.setItem("value_Tc_5", value_Tc_5);
        sessionStorage.setItem("value_Tb_5", value_Tb_5);
        sessionStorage.setItem("value_MW_5", value_MW_5);
        sessionStorage.setItem("value_IUR_5", value_IUR_5);
        sessionStorage.setItem("value_Rfc_5", value_Rfc_5);
        sessionStorage.setItem("value_Mut_5", value_Mut_5);
        sessionStorage.setItem("value_Koc_5", value_Koc_5);
        sessionStorage.setItem("value_foc_5", value_foc_5);
        sessionStorage.setItem("default_Koc_5", default_Koc_5);
        sessionStorage.setItem("default_foc_5", default_foc_5);

        if (numOfMaterial === 5) {
          verify = true;
        }
      } else {
        alert("오염물질 5의 값이 누락되었습니다.");
      }
    }

    // 값 누락 검사 후 이동
    verify === true && sessionStorage.setItem("check_coc", true);
    verify === true && navigate("/input/source/depth1");
  };

  // 더보기 토글
  const [more1, setMore1] = useState("none");
  const [close1, setClose1] = useState("inline-block");
  const [more2, setMore2] = useState("none");
  const [close2, setClose2] = useState("inline-block");
  const [more3, setMore3] = useState("none");
  const [close3, setClose3] = useState("inline-block");
  const [more4, setMore4] = useState("none");
  const [close4, setClose4] = useState("inline-block");
  const [more5, setMore5] = useState("none");
  const [close5, setClose5] = useState("inline-block");

  // 세션 값 쓰기
  const getSession = () => {
    setMaterialNum(sessionStorage.getItem("materialNum"));

    // material 1
    setChem1(sessionStorage.getItem("chem_1"));
    setValue_S_1(sessionStorage.getItem("value_S_1"));
    setValue_Hc_1(sessionStorage.getItem("value_Hc_1"));
    setValue_Dair_1(sessionStorage.getItem("value_Dair_1"));
    setValue_Dwater_1(sessionStorage.getItem("value_Dwater_1"));
    setValue_DHvb_1(sessionStorage.getItem("value_DHvb_1"));
    setValue_Tc_1(sessionStorage.getItem("value_Tc_1"));
    setValue_Tb_1(sessionStorage.getItem("value_Tb_1"));
    setValue_MW_1(sessionStorage.getItem("value_MW_1"));
    if (sessionStorage.getItem("value_IUR_1") === "NULL") {
      setValue_IUR_1(null);
      setNull1();
    } else {
      setValue_IUR_1(sessionStorage.getItem("value_IUR_1"));
    }
    if (sessionStorage.getItem("value_Rfc_1") === "NULL") {
      setValue_Rfc_1(null);
      setNull1();
    } else {
      setValue_Rfc_1(sessionStorage.getItem("value_Rfc_1"));
    }
    setValue_Mut_1(sessionStorage.getItem("value_Mut_1"));
    if (sessionStorage.getItem("value_Koc_1") === "NULL") {
      setValue_Koc_1(null);
      setNull1();
    } else {
      setValue_Koc_1(sessionStorage.getItem("value_Koc_1"));
    }
    setValue_foc_1(sessionStorage.getItem("value_foc_1"));

    // material 2
    setChem2(sessionStorage.getItem("chem_2"));
    setValue_S_2(sessionStorage.getItem("value_S_2"));
    setValue_Hc_2(sessionStorage.getItem("value_Hc_2"));
    setValue_Dair_2(sessionStorage.getItem("value_Dair_2"));
    setValue_Dwater_2(sessionStorage.getItem("value_Dwater_2"));
    setValue_DHvb_2(sessionStorage.getItem("value_DHvb_2"));
    setValue_Tc_2(sessionStorage.getItem("value_Tc_2"));
    setValue_Tb_2(sessionStorage.getItem("value_Tb_2"));
    setValue_MW_2(sessionStorage.getItem("value_MW_2"));
    setValue_IUR_2(sessionStorage.getItem("value_IUR_2"));
    setValue_Rfc_2(sessionStorage.getItem("value_Rfc_2"));
    setValue_Mut_2(sessionStorage.getItem("value_Mut_2"));
    setValue_Koc_2(sessionStorage.getItem("value_Koc_2"));
    setValue_foc_2(sessionStorage.getItem("value_foc_2"));
    if (sessionStorage.getItem("value_IUR_2") === "NULL") {
      setValue_IUR_2(null);
      setNull2();
    } else {
      setValue_IUR_2(sessionStorage.getItem("value_IUR_2"));
    }
    if (sessionStorage.getItem("value_Rfc_2") === "NULL") {
      setValue_Rfc_2(null);
      setNull2();
    } else {
      setValue_Rfc_2(sessionStorage.getItem("value_Rfc_2"));
    }
    setValue_Mut_2(sessionStorage.getItem("value_Mut_2"));
    if (sessionStorage.getItem("value_Koc_2") === "NULL") {
      setValue_Koc_2(null);
      setNull2();
    } else {
      setValue_Koc_2(sessionStorage.getItem("value_Koc_2"));
    }
    setValue_foc_2(sessionStorage.getItem("value_foc_2"));

    // material 3
    setChem3(sessionStorage.getItem("chem_3"));
    setValue_S_3(sessionStorage.getItem("value_S_3"));
    setValue_Hc_3(sessionStorage.getItem("value_Hc_3"));
    setValue_Dair_3(sessionStorage.getItem("value_Dair_3"));
    setValue_Dwater_3(sessionStorage.getItem("value_Dwater_3"));
    setValue_DHvb_3(sessionStorage.getItem("value_DHvb_3"));
    setValue_Tc_3(sessionStorage.getItem("value_Tc_3"));
    setValue_Tb_3(sessionStorage.getItem("value_Tb_3"));
    setValue_MW_3(sessionStorage.getItem("value_MW_3"));
    setValue_IUR_3(sessionStorage.getItem("value_IUR_3"));
    setValue_Rfc_3(sessionStorage.getItem("value_Rfc_3"));
    setValue_Mut_3(sessionStorage.getItem("value_Mut_3"));
    setValue_Koc_3(sessionStorage.getItem("value_Koc_3"));
    setValue_foc_3(sessionStorage.getItem("value_foc_3"));
    if (sessionStorage.getItem("value_IUR_3") === "NULL") {
      setValue_IUR_3(null);
      setNull3();
    } else {
      setValue_IUR_3(sessionStorage.getItem("value_IUR_3"));
    }
    if (sessionStorage.getItem("value_Rfc_1") === "NULL") {
      setValue_Rfc_3(null);
      setNull3();
    } else {
      setValue_Rfc_3(sessionStorage.getItem("value_Rfc_3"));
    }
    setValue_Mut_3(sessionStorage.getItem("value_Mut_3"));
    if (sessionStorage.getItem("value_Koc_3") === "NULL") {
      setValue_Koc_3(null);
      setNull3();
    } else {
      setValue_Koc_3(sessionStorage.getItem("value_Koc_3"));
    }
    setValue_foc_3(sessionStorage.getItem("value_foc_3"));

    // material 4
    setChem4(sessionStorage.getItem("chem_4"));
    setValue_S_4(sessionStorage.getItem("value_S_4"));
    setValue_Hc_4(sessionStorage.getItem("value_Hc_4"));
    setValue_Dair_4(sessionStorage.getItem("value_Dair_4"));
    setValue_Dwater_4(sessionStorage.getItem("value_Dwater_4"));
    setValue_DHvb_4(sessionStorage.getItem("value_DHvb_4"));
    setValue_Tc_4(sessionStorage.getItem("value_Tc_4"));
    setValue_Tb_4(sessionStorage.getItem("value_Tb_4"));
    setValue_MW_4(sessionStorage.getItem("value_MW_4"));
    setValue_IUR_4(sessionStorage.getItem("value_IUR_4"));
    setValue_Rfc_4(sessionStorage.getItem("value_Rfc_4"));
    setValue_Mut_4(sessionStorage.getItem("value_Mut_4"));
    setValue_Koc_4(sessionStorage.getItem("value_Koc_4"));
    setValue_foc_4(sessionStorage.getItem("value_foc_4"));
    if (sessionStorage.getItem("value_IUR_4") === "NULL") {
      setValue_IUR_4(null);
      setNull4();
    } else {
      setValue_IUR_4(sessionStorage.getItem("value_IUR_4"));
    }
    if (sessionStorage.getItem("value_Rfc_4") === "NULL") {
      setValue_Rfc_4(null);
      setNull4();
    } else {
      setValue_Rfc_4(sessionStorage.getItem("value_Rfc_4"));
    }
    setValue_Mut_4(sessionStorage.getItem("value_Mut_4"));
    if (sessionStorage.getItem("value_Koc_4") === "NULL") {
      setValue_Koc_4(null);
      setNull4();
    } else {
      setValue_Koc_4(sessionStorage.getItem("value_Koc_4"));
    }
    setValue_foc_4(sessionStorage.getItem("value_foc_4"));

    // material 5
    setChem5(sessionStorage.getItem("chem_5"));
    setValue_S_5(sessionStorage.getItem("value_S_5"));
    setValue_Hc_5(sessionStorage.getItem("value_Hc_5"));
    setValue_Dair_5(sessionStorage.getItem("value_Dair_5"));
    setValue_Dwater_5(sessionStorage.getItem("value_Dwater_5"));
    setValue_DHvb_5(sessionStorage.getItem("value_DHvb_5"));
    setValue_Tc_5(sessionStorage.getItem("value_Tc_5"));
    setValue_Tb_5(sessionStorage.getItem("value_Tb_5"));
    setValue_MW_5(sessionStorage.getItem("value_MW_5"));
    setValue_IUR_5(sessionStorage.getItem("value_IUR_5"));
    setValue_Rfc_5(sessionStorage.getItem("value_Rfc_5"));
    setValue_Mut_5(sessionStorage.getItem("value_Mut_5"));
    setValue_Koc_5(sessionStorage.getItem("value_Koc_5"));
    setValue_foc_5(sessionStorage.getItem("value_foc_5"));
    if (sessionStorage.getItem("value_IUR_5") === "NULL") {
      setValue_IUR_5(null);
      setNull5();
    } else {
      setValue_IUR_5(sessionStorage.getItem("value_IUR_5"));
    }
    if (sessionStorage.getItem("value_Rfc_5") === "NULL") {
      setValue_Rfc_5(null);
      setNull5();
    } else {
      setValue_Rfc_5(sessionStorage.getItem("value_Rfc_5"));
    }
    setValue_Mut_5(sessionStorage.getItem("value_Mut_5"));
    if (sessionStorage.getItem("value_Koc_5") === "NULL") {
      setValue_Koc_5(null);
      setNull5();
    } else {
      setValue_Koc_5(sessionStorage.getItem("value_Koc_5"));
    }
    setValue_foc_5(sessionStorage.getItem("value_foc_5"));
  };

  useEffect(() => {
    getSession();
  }, []);

  const [numOption, setNumOption] = useState("inline-block");
  const [option1, setOption1] = useState("inline-block");
  const [option2, setOption2] = useState("inline-block");
  const [option3, setOption3] = useState("inline-block");
  const [option4, setOption4] = useState("inline-block");
  const [option5, setOption5] = useState("inline-block");

  return (
    <>
      <Header />
      <S.Container>
        <Menu />
        <S.EvalContent>
          <S.PagePath>
            위해성 평가 <BiChevronRight /> Input <BiChevronRight /> 오염원{" "}
            <BiChevronRight /> 오염물질
          </S.PagePath>
          <S.PageTitle>오염물질</S.PageTitle>
          <S.EvalArea>
            <table>
              <thead>
                <tr>
                  <S.Td>
                    <h3>오염물질 개수</h3>
                  </S.Td>
                  <S.Td>
                    <select onChange={setInput} value={materialNum}>
                      <option value="" selected style={{ display: numOption }}>
                        오염물질 개수를 선택해주세요.
                      </option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </S.Td>
                </tr>
              </thead>
            </table>
            {parseInt(materialNum) >= 1 ? (
              <S.EvalBox>
                <table>
                  <thead>
                    <tr>
                      <S.Td>오염물질 1</S.Td>
                      <S.Td>
                        <select onChange={(e) => selectChem1(e)} value={chem1}>
                          <option
                            value=""
                            selected
                            style={{ display: option1 }}
                          >
                            오염물질을 선택해주세요.
                          </option>
                          {CHEMICAL_LIST.map((chem) => (
                            <option value={chem}>{chem}</option>
                          ))}
                        </select>
                      </S.Td>
                      <S.Td>
                        <button
                          onClick={() => {
                            setMore1("inline-block");
                            setClose1("none");
                          }}
                          style={{ display: close1 }}
                        >
                          더보기
                        </button>
                      </S.Td>
                    </tr>
                  </thead>
                </table>
                <S.PaddingBox>
                  {chem1 === null ? (
                    <h5>
                      ※ 아래의 값들은 오염물질에 따라 자동으로 입력되며 필요 시
                      사용자가 수정할 수 있습니다.
                    </h5>
                  ) : (
                    <h5>
                      ※ 아래의 값들은 {chem1}에 따라 자동으로 입력되며 필요 시
                      사용자가 수정할 수 있습니다.
                    </h5>
                  )}

                  <div style={{ display: more1 }}>
                    <p style={{ textAlign: "center" }}>
                      <button
                        onClick={() => {
                          setMore1("none");
                          setClose1("inline-block");
                        }}
                      >
                        <BiChevronUp />
                        닫기
                      </button>
                    </p>

                    <table>
                      <tbody>
                        <tr>
                          <S.Td></S.Td>
                        </tr>
                        <tr>
                          <S.Td></S.Td>
                          <S.Td>기호</S.Td>
                          <S.Td>단위</S.Td>
                        </tr>
                        <tr>
                          <S.Td>순수 성분 수용성</S.Td>
                          <S.Td>S</S.Td>
                          <S.Td>mg/L</S.Td>
                          <S.Td>
                            <input
                              value={value_S_1}
                              onChange={(e) => {
                                setValue_S_1(e.target.value);
                              }}
                              placeholder={default_S_1}
                              type="number"
                              step="0.00000000001"
                            />
                          </S.Td>
                        </tr>
                        <tr>
                          <S.Td>표준 온도(25℃)의 헨리 상수</S.Td>
                          <S.Td>Hc</S.Td>
                          <S.Td>atm-m3/mol</S.Td>
                          <S.Td>
                            <input
                              value={value_Hc_1}
                              onChange={(e) => setValue_Hc_1(e.target.value)}
                              placeholder={default_Hc_1}
                              type="number"
                              step="0.00000000001"
                            />
                          </S.Td>
                        </tr>
                        <tr>
                          <S.Td>공기에서의 확산성</S.Td>
                          <S.Td>Dair</S.Td>
                          <S.Td>cm2/s</S.Td>
                          <S.Td>
                            <input
                              value={value_Dair_1}
                              onChange={(e) => setValue_Dair_1(e.target.value)}
                              placeholder={default_Dair_1}
                              type="number"
                              step="0.00000000001"
                            />
                          </S.Td>
                        </tr>
                        <tr>
                          <S.Td>물에서의 확산성</S.Td>
                          <S.Td>Dwater</S.Td>
                          <S.Td>cm2/s</S.Td>
                          <S.Td>
                            <input
                              value={value_Dwater_1}
                              onChange={(e) =>
                                setValue_Dwater_1(e.target.value)
                              }
                              placeholder={default_Dwater_1}
                              type="number"
                            />
                          </S.Td>
                        </tr>
                        <tr>
                          <S.Td>정상 끓는 점에서의 기화 엔탈피</S.Td>
                          <S.Td>DHvb</S.Td>
                          <S.Td>cal/mol</S.Td>
                          <S.Td>
                            <input
                              value={value_DHvb_1}
                              onChange={(e) => setValue_DHvb_1(e.target.value)}
                              placeholder={default_DHvb_1}
                              type="number"
                            />
                          </S.Td>
                        </tr>
                        <tr>
                          <S.Td>임계 온도</S.Td>
                          <S.Td>Tc</S.Td>
                          <S.Td>K</S.Td>
                          <S.Td>
                            <input
                              value={value_Tc_1}
                              onChange={(e) => setValue_Tc_1(e.target.value)}
                              placeholder={default_Tc_1}
                              type="number"
                            />
                          </S.Td>
                        </tr>
                        <tr>
                          <S.Td>정상 끓는 점</S.Td>
                          <S.Td>Tb</S.Td>
                          <S.Td>K</S.Td>
                          <S.Td>
                            <input
                              value={value_Tb_1}
                              onChange={(e) => setValue_Tb_1(e.target.value)}
                              placeholder={default_Tb_1}
                              type="number"
                            />
                          </S.Td>
                        </tr>
                        <tr>
                          <S.Td>화합물의 분자량</S.Td>
                          <S.Td>MW</S.Td>
                          <S.Td>g/mol</S.Td>
                          <S.Td>
                            <input
                              value={value_MW_1}
                              onChange={(e) => setValue_MW_1(e.target.value)}
                              placeholder={default_MW_1}
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
                              value={value_IUR_1}
                              onChange={(e) => setValue_IUR_1(e.target.value)}
                              placeholder={default_IUR_1}
                              type={typeIUR1}
                              disabled={disabled_IUR1}
                            />
                          </S.Td>
                        </tr>
                        <tr>
                          <S.Td>RfC</S.Td>
                          <S.Td></S.Td>
                          <S.Td>mg/m3</S.Td>
                          <S.Td>
                            <input
                              value={value_Rfc_1}
                              onChange={(e) => setValue_Rfc_1(e.target.value)}
                              placeholder={default_Rfc_1}
                              type={typeRfc1}
                              disabled={disabled_Rfc1}
                            />
                          </S.Td>
                        </tr>
                        <tr>
                          <S.Td>Mut</S.Td>
                          <S.Td></S.Td>
                          <S.Td></S.Td>
                          <S.Td>
                            <select
                              value={value_Mut_1}
                              onChange={(e) => setValue_Mut_1(e.target.value)}
                              placeholder={default_Mut_1}
                            >
                              <option>Yes</option>
                              <option>No</option>
                            </select>
                          </S.Td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </S.PaddingBox>
              </S.EvalBox>
            ) : null}
            {parseInt(materialNum) >= 2 ? (
              <S.EvalBox>
                <table>
                  <thead>
                    <tr>
                      <S.Td>오염물질 2</S.Td>
                      <S.Td>
                        <select onChange={(e) => selectChem2(e)} value={chem2}>
                          <option
                            value=""
                            selected
                            style={{ display: option2 }}
                          >
                            오염물질을 선택해주세요.
                          </option>
                          {CHEMICAL_LIST.map((chem) => (
                            <option value={chem}>{chem}</option>
                          ))}
                        </select>
                      </S.Td>
                      <S.Td>
                        <button
                          onClick={() => {
                            setMore2("inline-block");
                            setClose2("none");
                          }}
                          style={{ display: close2 }}
                        >
                          더보기
                        </button>
                      </S.Td>
                    </tr>
                  </thead>
                </table>
                <S.PaddingBox>
                  {chem2 === null ? (
                    <h5>
                      ※ 아래의 값들은 오염물질에 따라 자동으로 입력되며 필요 시
                      사용자가 수정할 수 있습니다.
                    </h5>
                  ) : (
                    <h5>
                      ※ 아래의 값들은 {chem2}에 따라 자동으로 입력되며 필요 시
                      사용자가 수정할 수 있습니다.
                    </h5>
                  )}
                  <div style={{ display: more2 }}>
                    <p style={{ textAlign: "center" }}>
                      <button
                        onClick={() => {
                          setMore2("none");
                          setClose2("inline-block");
                        }}
                      >
                        <BiChevronUp />
                        닫기
                      </button>
                    </p>
                    <table>
                      <tbody>
                        <tr>
                          <S.Td></S.Td>
                        </tr>
                        <tr>
                          <S.Td></S.Td>
                          <S.Td>기호</S.Td>
                          <S.Td>단위</S.Td>
                        </tr>
                        <tr>
                          <S.Td>순수 성분 수용성</S.Td>
                          <S.Td>S</S.Td>
                          <S.Td>mg/L</S.Td>
                          <S.Td>
                            <input
                              value={value_S_2}
                              onChange={(e) => {
                                setValue_S_2(e.target.value);
                              }}
                              placeholder={default_S_2}
                              type="number"
                            />
                          </S.Td>
                        </tr>
                        <tr>
                          <S.Td>표준 온도(25℃)의 헨리 상수</S.Td>
                          <S.Td>Hc</S.Td>
                          <S.Td>atm-m3/mol</S.Td>
                          <S.Td>
                            <input
                              value={value_Hc_2}
                              onChange={(e) => setValue_Hc_2(e.target.value)}
                              placeholder={default_Hc_2}
                              type="number"
                            />
                          </S.Td>
                        </tr>
                        <tr>
                          <S.Td>공기에서의 확산성</S.Td>
                          <S.Td>Dair</S.Td>
                          <S.Td>cm2/s</S.Td>
                          <S.Td>
                            <input
                              value={value_Dair_2}
                              onChange={(e) => setValue_Dair_2(e.target.value)}
                              placeholder={default_Dair_2}
                              type="number"
                            />
                          </S.Td>
                        </tr>
                        <tr>
                          <S.Td>물에서의 확산성</S.Td>
                          <S.Td>Dwater</S.Td>
                          <S.Td>cm2/s</S.Td>
                          <S.Td>
                            <input
                              value={value_Dwater_2}
                              onChange={(e) =>
                                setValue_Dwater_2(e.target.value)
                              }
                              placeholder={default_Dwater_2}
                              type="number"
                            />
                          </S.Td>
                        </tr>
                        <tr>
                          <S.Td>정상 끓는 점에서의 기화 엔탈피</S.Td>
                          <S.Td>DHvb</S.Td>
                          <S.Td>cal/mol</S.Td>
                          <S.Td>
                            <input
                              value={value_DHvb_2}
                              onChange={(e) => setValue_DHvb_2(e.target.value)}
                              placeholder={default_DHvb_2}
                              type="number"
                            />
                          </S.Td>
                        </tr>
                        <tr>
                          <S.Td>임계 온도</S.Td>
                          <S.Td>Tc</S.Td>
                          <S.Td>K</S.Td>
                          <S.Td>
                            <input
                              value={value_Tc_2}
                              onChange={(e) => setValue_Tc_2(e.target.value)}
                              placeholder={default_Tc_2}
                              type="number"
                            />
                          </S.Td>
                        </tr>
                        <tr>
                          <S.Td>정상 끓는 점</S.Td>
                          <S.Td>Tb</S.Td>
                          <S.Td>K</S.Td>
                          <S.Td>
                            <input
                              value={value_Tb_2}
                              onChange={(e) => setValue_Tb_2(e.target.value)}
                              placeholder={default_Tb_2}
                              type="number"
                            />
                          </S.Td>
                        </tr>
                        <tr>
                          <S.Td>화합물의 분자량</S.Td>
                          <S.Td>MW</S.Td>
                          <S.Td>g/mol</S.Td>
                          <S.Td>
                            <input
                              value={value_MW_2}
                              onChange={(e) => setValue_MW_2(e.target.value)}
                              placeholder={default_MW_2}
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
                              value={value_IUR_2}
                              onChange={(e) => setValue_IUR_2(e.target.value)}
                              placeholder={default_IUR_2}
                              type={typeIUR2}
                              disabled={disabled_IUR2}
                            />
                          </S.Td>
                        </tr>
                        <tr>
                          <S.Td>RfC</S.Td>
                          <S.Td></S.Td>
                          <S.Td>mg/m3</S.Td>
                          <S.Td>
                            <input
                              value={value_Rfc_2}
                              onChange={(e) => setValue_Rfc_2(e.target.value)}
                              placeholder={default_Rfc_2}
                              type={typeRfc2}
                              disabled={disabled_Rfc2}
                            />
                          </S.Td>
                        </tr>
                        <tr>
                          <S.Td>Mut</S.Td>
                          <S.Td></S.Td>
                          <S.Td></S.Td>
                          <S.Td>
                            <select
                              value={value_Mut_2}
                              onChange={(e) => setValue_Mut_2(e.target.value)}
                              placeholder={default_Mut_2}
                            >
                              <option>Yes</option>
                              <option>No</option>
                            </select>
                          </S.Td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </S.PaddingBox>
              </S.EvalBox>
            ) : null}

            {parseInt(materialNum) >= 3 ? (
              <S.EvalBox>
                <table>
                  <thead>
                    <tr>
                      <S.Td>오염물질 3</S.Td>
                      <S.Td>
                        <select onChange={(e) => selectChem3(e)} value={chem3}>
                          <option
                            value=""
                            selected
                            style={{ display: option3 }}
                          >
                            오염물질을 선택해주세요.
                          </option>
                          {CHEMICAL_LIST.map((chem) => (
                            <option value={chem}>{chem}</option>
                          ))}
                        </select>
                      </S.Td>
                      <S.Td>
                        <button
                          onClick={() => {
                            setMore3("inline-block");
                            setClose3("none");
                          }}
                          style={{ display: close3 }}
                        >
                          더보기
                        </button>
                      </S.Td>
                    </tr>
                  </thead>
                </table>
                <S.PaddingBox>
                  {chem3 === null ? (
                    <h5>
                      ※ 아래의 값들은 오염물질에 따라 자동으로 입력되며 필요 시
                      사용자가 수정할 수 있습니다.
                    </h5>
                  ) : (
                    <h5>
                      ※ 아래의 값들은 {chem3}에 따라 자동으로 입력되며 필요 시
                      사용자가 수정할 수 있습니다.
                    </h5>
                  )}
                  <div style={{ display: more3 }}>
                    <p style={{ textAlign: "center" }}>
                      <button
                        onClick={() => {
                          setMore3("none");
                          setClose3("inline-block");
                        }}
                      >
                        <BiChevronUp />
                        닫기
                      </button>
                    </p>

                    <table>
                      <tbody>
                        <tr>
                          <S.Td></S.Td>
                        </tr>
                        <tr>
                          <S.Td></S.Td>
                          <S.Td>기호</S.Td>
                          <S.Td>단위</S.Td>
                        </tr>
                        <tr>
                          <S.Td>순수 성분 수용성</S.Td>
                          <S.Td>S</S.Td>
                          <S.Td>mg/L</S.Td>
                          <S.Td>
                            <input
                              value={value_S_3}
                              onChange={(e) => {
                                setValue_S_3(e.target.value);
                              }}
                              placeholder={default_S_3}
                              type="number"
                            />
                          </S.Td>
                        </tr>
                        <tr>
                          <S.Td>표준 온도(25℃)의 헨리 상수</S.Td>
                          <S.Td>Hc</S.Td>
                          <S.Td>atm-m3/mol</S.Td>
                          <S.Td>
                            <input
                              value={value_Hc_3}
                              onChange={(e) => setValue_Hc_3(e.target.value)}
                              placeholder={default_Hc_3}
                              type="number"
                            />
                          </S.Td>
                        </tr>
                        <tr>
                          <S.Td>공기에서의 확산성</S.Td>
                          <S.Td>Dair</S.Td>
                          <S.Td>cm2/s</S.Td>
                          <S.Td>
                            <input
                              value={value_Dair_3}
                              onChange={(e) => setValue_Dair_3(e.target.value)}
                              placeholder={default_Dair_3}
                              type="number"
                            />
                          </S.Td>
                        </tr>
                        <tr>
                          <S.Td>물에서의 확산성</S.Td>
                          <S.Td>Dwater</S.Td>
                          <S.Td>cm2/s</S.Td>
                          <S.Td>
                            <input
                              value={value_Dwater_3}
                              onChange={(e) =>
                                setValue_Dwater_3(e.target.value)
                              }
                              placeholder={default_Dwater_3}
                              type="number"
                            />
                          </S.Td>
                        </tr>
                        <tr>
                          <S.Td>정상 끓는 점에서의 기화 엔탈피</S.Td>
                          <S.Td>DHvb</S.Td>
                          <S.Td>cal/mol</S.Td>
                          <S.Td>
                            <input
                              value={value_DHvb_3}
                              onChange={(e) => setValue_DHvb_3(e.target.value)}
                              placeholder={default_DHvb_3}
                              type="number"
                            />
                          </S.Td>
                        </tr>
                        <tr>
                          <S.Td>임계 온도</S.Td>
                          <S.Td>Tc</S.Td>
                          <S.Td>K</S.Td>
                          <S.Td>
                            <input
                              value={value_Tc_3}
                              onChange={(e) => setValue_Tc_3(e.target.value)}
                              placeholder={default_Tc_3}
                              type="number"
                            />
                          </S.Td>
                        </tr>
                        <tr>
                          <S.Td>정상 끓는 점</S.Td>
                          <S.Td>Tb</S.Td>
                          <S.Td>K</S.Td>
                          <S.Td>
                            <input
                              value={value_Tb_3}
                              onChange={(e) => setValue_Tb_3(e.target.value)}
                              placeholder={default_Tb_3}
                              type="number"
                            />
                          </S.Td>
                        </tr>
                        <tr>
                          <S.Td>화합물의 분자량</S.Td>
                          <S.Td>MW</S.Td>
                          <S.Td>g/mol</S.Td>
                          <S.Td>
                            <input
                              value={value_MW_3}
                              onChange={(e) => setValue_MW_3(e.target.value)}
                              placeholder={default_MW_3}
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
                              value={value_IUR_3}
                              onChange={(e) => setValue_IUR_3(e.target.value)}
                              placeholder={default_IUR_3}
                              type={typeIUR3}
                              disabled={disabled_IUR3}
                            />
                          </S.Td>
                        </tr>
                        <tr>
                          <S.Td>RfC</S.Td>
                          <S.Td></S.Td>
                          <S.Td>mg/m3</S.Td>
                          <S.Td>
                            <input
                              value={value_Rfc_3}
                              onChange={(e) => setValue_Rfc_3(e.target.value)}
                              placeholder={default_Rfc_3}
                              type={typeRfc3}
                              disabled={disabled_Rfc3}
                            />
                          </S.Td>
                        </tr>
                        <tr>
                          <S.Td>Mut</S.Td>
                          <S.Td></S.Td>
                          <S.Td></S.Td>
                          <S.Td>
                            <select
                              value={value_Mut_3}
                              onChange={(e) => setValue_Mut_3(e.target.value)}
                              placeholder={default_Mut_3}
                            >
                              <option>Yes</option>
                              <option>No</option>
                            </select>
                          </S.Td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </S.PaddingBox>
              </S.EvalBox>
            ) : null}

            {parseInt(materialNum) >= 4 ? (
              <S.EvalBox>
                <table>
                  <thead>
                    <tr>
                      <S.Td>오염물질 4</S.Td>
                      <S.Td>
                        <select onChange={(e) => selectChem4(e)} value={chem4}>
                          <option
                            value=""
                            selected
                            style={{ display: option4 }}
                          >
                            오염물질을 선택해주세요.
                          </option>
                          {CHEMICAL_LIST.map((chem) => (
                            <option value={chem}>{chem}</option>
                          ))}
                        </select>
                      </S.Td>
                      <S.Td>
                        <button
                          onClick={() => {
                            setMore4("inline-block");
                            setClose4("none");
                          }}
                          style={{ display: close4 }}
                        >
                          더보기
                        </button>
                      </S.Td>
                    </tr>
                  </thead>
                </table>
                <S.PaddingBox>
                  {chem4 === null ? (
                    <h5>
                      ※ 아래의 값들은 오염물질에 따라 자동으로 입력되며 필요 시
                      사용자가 수정할 수 있습니다.
                    </h5>
                  ) : (
                    <h5>
                      ※ 아래의 값들은 {chem4}에 따라 자동으로 입력되며 필요 시
                      사용자가 수정할 수 있습니다.
                    </h5>
                  )}
                  <div style={{ display: more4 }}>
                    <p style={{ textAlign: "center" }}>
                      <button
                        onClick={() => {
                          setMore4("none");
                          setClose4("inline-block");
                        }}
                      >
                        <BiChevronUp />
                        닫기
                      </button>
                    </p>

                    <table>
                      <tbody>
                        <tr>
                          <S.Td></S.Td>
                        </tr>
                        <tr>
                          <S.Td></S.Td>
                          <S.Td>기호</S.Td>
                          <S.Td>단위</S.Td>
                        </tr>
                        <tr>
                          <S.Td>순수 성분 수용성</S.Td>
                          <S.Td>S</S.Td>
                          <S.Td>mg/L</S.Td>
                          <S.Td>
                            <input
                              value={value_S_4}
                              onChange={(e) => {
                                setValue_S_4(e.target.value);
                              }}
                              placeholder={default_S_4}
                              type="number"
                            />
                          </S.Td>
                        </tr>
                        <tr>
                          <S.Td>표준 온도(25℃)의 헨리 상수</S.Td>
                          <S.Td>Hc</S.Td>
                          <S.Td>atm-m3/mol</S.Td>
                          <S.Td>
                            <input
                              value={value_Hc_4}
                              onChange={(e) => setValue_Hc_4(e.target.value)}
                              placeholder={default_Hc_4}
                              type="number"
                            />
                          </S.Td>
                        </tr>
                        <tr>
                          <S.Td>공기에서의 확산성</S.Td>
                          <S.Td>Dair</S.Td>
                          <S.Td>cm2/s</S.Td>
                          <S.Td>
                            <input
                              value={value_Dair_4}
                              onChange={(e) => setValue_Dair_4(e.target.value)}
                              placeholder={default_Dair_4}
                              type="number"
                            />
                          </S.Td>
                        </tr>
                        <tr>
                          <S.Td>물에서의 확산성</S.Td>
                          <S.Td>Dwater</S.Td>
                          <S.Td>cm2/s</S.Td>
                          <S.Td>
                            <input
                              value={value_Dwater_4}
                              onChange={(e) =>
                                setValue_Dwater_4(e.target.value)
                              }
                              placeholder={default_Dwater_4}
                              type="number"
                            />
                          </S.Td>
                        </tr>
                        <tr>
                          <S.Td>정상 끓는 점에서의 기화 엔탈피</S.Td>
                          <S.Td>DHvb</S.Td>
                          <S.Td>cal/mol</S.Td>
                          <S.Td>
                            <input
                              value={value_DHvb_4}
                              onChange={(e) => setValue_DHvb_4(e.target.value)}
                              placeholder={default_DHvb_4}
                              type="number"
                            />
                          </S.Td>
                        </tr>
                        <tr>
                          <S.Td>임계 온도</S.Td>
                          <S.Td>Tc</S.Td>
                          <S.Td>K</S.Td>
                          <S.Td>
                            <input
                              value={value_Tc_4}
                              onChange={(e) => setValue_Tc_4(e.target.value)}
                              placeholder={default_Tc_4}
                              type="number"
                            />
                          </S.Td>
                        </tr>
                        <tr>
                          <S.Td>정상 끓는 점</S.Td>
                          <S.Td>Tb</S.Td>
                          <S.Td>K</S.Td>
                          <S.Td>
                            <input
                              value={value_Tb_4}
                              onChange={(e) => setValue_Tb_4(e.target.value)}
                              placeholder={default_Tb_4}
                              type="number"
                            />
                          </S.Td>
                        </tr>
                        <tr>
                          <S.Td>화합물의 분자량</S.Td>
                          <S.Td>MW</S.Td>
                          <S.Td>g/mol</S.Td>
                          <S.Td>
                            <input
                              value={value_MW_4}
                              onChange={(e) => setValue_MW_4(e.target.value)}
                              placeholder={default_MW_4}
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
                              value={value_IUR_4}
                              onChange={(e) => setValue_IUR_4(e.target.value)}
                              placeholder={default_IUR_4}
                              type={typeIUR4}
                              disabled={disabled_IUR4}
                            />
                          </S.Td>
                        </tr>
                        <tr>
                          <S.Td>RfC</S.Td>
                          <S.Td></S.Td>
                          <S.Td>mg/m3</S.Td>
                          <S.Td>
                            <input
                              value={value_Rfc_4}
                              onChange={(e) => setValue_Rfc_4(e.target.value)}
                              placeholder={default_Rfc_4}
                              type={typeRfc4}
                              disabled={disabled_Rfc4}
                            />
                          </S.Td>
                        </tr>
                        <tr>
                          <S.Td>Mut</S.Td>
                          <S.Td></S.Td>
                          <S.Td></S.Td>
                          <S.Td>
                            <select
                              value={value_Mut_4}
                              onChange={(e) => setValue_Mut_4(e.target.value)}
                              placeholder={default_Mut_4}
                            >
                              <option>Yes</option>
                              <option>No</option>
                            </select>
                          </S.Td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </S.PaddingBox>
              </S.EvalBox>
            ) : null}

            {parseInt(materialNum) >= 5 ? (
              <S.EvalBox>
                <table>
                  <thead>
                    <tr>
                      <S.Td>오염물질 5</S.Td>
                      <S.Td>
                        <select onChange={(e) => selectChem5(e)} value={chem5}>
                          <option
                            value=""
                            selected
                            style={{ display: option5 }}
                          >
                            오염물질을 선택해주세요.
                          </option>
                          {CHEMICAL_LIST.map((chem) => (
                            <option value={chem}>{chem}</option>
                          ))}
                        </select>
                      </S.Td>
                      <S.Td>
                        <button
                          onClick={() => {
                            setMore5("inline-block");
                            setClose5("none");
                          }}
                          style={{ display: close5 }}
                        >
                          더보기
                        </button>
                      </S.Td>
                    </tr>
                  </thead>
                </table>
                <S.PaddingBox>
                  {chem5 === null ? (
                    <h5>
                      ※ 아래의 값들은 오염물질에 따라 자동으로 입력되며 필요 시
                      사용자가 수정할 수 있습니다.
                    </h5>
                  ) : (
                    <h5>
                      ※ 아래의 값들은 {chem5}에 따라 자동으로 입력되며 필요 시
                      사용자가 수정할 수 있습니다.
                    </h5>
                  )}
                  <div style={{ display: more5 }}>
                    <p style={{ textAlign: "center" }}>
                      <button
                        onClick={() => {
                          setMore5("none");
                          setClose5("inline-block");
                        }}
                      >
                        <BiChevronUp />
                        닫기
                      </button>
                    </p>
                    <table>
                      <tbody>
                        <tr>
                          <S.Td></S.Td>
                        </tr>
                        <tr>
                          <S.Td></S.Td>
                          <S.Td>기호</S.Td>
                          <S.Td>단위</S.Td>
                        </tr>
                        <tr>
                          <S.Td>순수 성분 수용성</S.Td>
                          <S.Td>S</S.Td>
                          <S.Td>mg/L</S.Td>
                          <S.Td>
                            <input
                              value={value_S_5}
                              onChange={(e) => {
                                setValue_S_5(e.target.value);
                              }}
                              placeholder={default_S_5}
                              type="number"
                            />
                          </S.Td>
                        </tr>
                        <tr>
                          <S.Td>표준 온도(25℃)의 헨리 상수</S.Td>
                          <S.Td>Hc</S.Td>
                          <S.Td>atm-m3/mol</S.Td>
                          <S.Td>
                            <input
                              value={value_Hc_5}
                              onChange={(e) => setValue_Hc_5(e.target.value)}
                              placeholder={default_Hc_5}
                              type="number"
                            />
                          </S.Td>
                        </tr>
                        <tr>
                          <S.Td>공기에서의 확산성</S.Td>
                          <S.Td>Dair</S.Td>
                          <S.Td>cm2/s</S.Td>
                          <S.Td>
                            <input
                              value={value_Dair_5}
                              onChange={(e) => setValue_Dair_5(e.target.value)}
                              placeholder={default_Dair_5}
                              type="number"
                            />
                          </S.Td>
                        </tr>
                        <tr>
                          <S.Td>물에서의 확산성</S.Td>
                          <S.Td>Dwater</S.Td>
                          <S.Td>cm2/s</S.Td>
                          <S.Td>
                            <input
                              value={value_Dwater_5}
                              onChange={(e) =>
                                setValue_Dwater_5(e.target.value)
                              }
                              placeholder={default_Dwater_5}
                              type="number"
                            />
                          </S.Td>
                        </tr>
                        <tr>
                          <S.Td>정상 끓는 점에서의 기화 엔탈피</S.Td>
                          <S.Td>DHvb</S.Td>
                          <S.Td>cal/mol</S.Td>
                          <S.Td>
                            <input
                              value={value_DHvb_5}
                              onChange={(e) => setValue_DHvb_5(e.target.value)}
                              placeholder={default_DHvb_5}
                              type="number"
                            />
                          </S.Td>
                        </tr>
                        <tr>
                          <S.Td>임계 온도</S.Td>
                          <S.Td>Tc</S.Td>
                          <S.Td>K</S.Td>
                          <S.Td>
                            <input
                              value={value_Tc_5}
                              onChange={(e) => setValue_Tc_5(e.target.value)}
                              placeholder={default_Tc_5}
                              type="number"
                            />
                          </S.Td>
                        </tr>
                        <tr>
                          <S.Td>정상 끓는 점</S.Td>
                          <S.Td>Tb</S.Td>
                          <S.Td>K</S.Td>
                          <S.Td>
                            <input
                              value={value_Tb_5}
                              onChange={(e) => setValue_Tb_5(e.target.value)}
                              placeholder={default_Tb_5}
                              type="number"
                            />
                          </S.Td>
                        </tr>
                        <tr>
                          <S.Td>화합물의 분자량</S.Td>
                          <S.Td>MW</S.Td>
                          <S.Td>g/mol</S.Td>
                          <S.Td>
                            <input
                              value={value_MW_5}
                              onChange={(e) => setValue_MW_5(e.target.value)}
                              placeholder={default_MW_5}
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
                              value={value_IUR_5}
                              onChange={(e) => setValue_IUR_5(e.target.value)}
                              placeholder={default_IUR_5}
                              type={typeIUR5}
                              disabled={disabled_IUR5}
                            />
                          </S.Td>
                        </tr>
                        <tr>
                          <S.Td>RfC</S.Td>
                          <S.Td></S.Td>
                          <S.Td>mg/m3</S.Td>
                          <S.Td>
                            <input
                              value={value_Rfc_5}
                              onChange={(e) => setValue_Rfc_5(e.target.value)}
                              placeholder={default_Rfc_5}
                              type={typeRfc5}
                              disabled={disabled_Rfc5}
                            />
                          </S.Td>
                        </tr>
                        <tr>
                          <S.Td>Mut</S.Td>
                          <S.Td></S.Td>
                          <S.Td></S.Td>
                          <S.Td>
                            <select
                              value={value_Mut_5}
                              onChange={(e) => setValue_Mut_5(e.target.value)}
                              placeholder={default_Mut_5}
                            >
                              <option>Yes</option>
                              <option>No</option>
                            </select>
                          </S.Td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </S.PaddingBox>
              </S.EvalBox>
            ) : null}
          </S.EvalArea>
          <S.EvalArea>
            <S.BtnAreaTwin>
              <S.PrevBtn onClick={() => navigate(-1)}>이전</S.PrevBtn>
              <S.NextBtn onClick={saveData}>다음</S.NextBtn>
            </S.BtnAreaTwin>
          </S.EvalArea>
        </S.EvalContent>
      </S.Container>
    </>
  );
};

export default CocPoint;
