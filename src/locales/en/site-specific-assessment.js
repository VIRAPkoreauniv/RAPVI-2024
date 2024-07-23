export default {
  tutorial: {
    title: "Tutorial",
    conc: {
      info: "※ Users can edit groundwater temperature if required.",
    },
  },
  coc: {
    pagePath: {
      text1: "Risk assessment",
      text2: "Contaminant Source",
      text3: "Contaminant",
    },
    pageTitle: "Contaminant",
    placeholder: "Select a contaminant.",
    info: "※ The values ​​below are automatically entered according to {{chem}} and can be modified by the user if necessary.",
    table: {
      td1: "Symbology",
      td2: "Unit",
      td3: "Pure component water solubility",
      td4: "Henry's law constant at 25℃)",
      td5: "Diffusivity in air",
      td6: "Diffusivity in water",
      td7: "Enthalpy of vaporization at the normal boiling point",
      td8: "Critical temperature",
      td9: "Normal boiling point",
      td10: "Molecular weight",
    },
    prev: "Previous",
    next: "Next",
  },
  depth: {
    pagePath: {
      text1: "Risk assessment",
      text2: "Contaminant source",
      text3: "Contamination depth",
    },
    pageTitle: "Contamination Depth",
    waterlevel: "Water level (unit : m)",
    elevation: "Elevation (unit : m)",
    popWaterlevel: "Contamination depth - water level",
    popElevation: "Contamination concentration - Elevation",
    prev: "Previous",
    next: "Next",
    input: {
      placeholder: "Copy Excel data and paste here.",
      openData: "Data check",
      reset: "Insert again",
      legend: "Contamination depth (Deepest depth = 100)",
    },
  },
  conc: {
    pagePath: {
      text1: "Risk assessment",
      text2: "Contaminant source",
      text3: "Contaminant concentration",
    },
    pageTitle: "Contaminant concentration",
    alert: "Select the contaminated media",
    select: {
      title: "Contaminated media",
      sat: "Saturated zone(groundwater)",
      unsat: "Vadose zone(soil)",
    },
    info: "※ Select the contaminated media",
    sat: {
      title: "Contaminated media : Saturated zone(groundwater)",
      info: "※ Groundwater temperature is 15℃ by default when Vadose zone(soil) is selected.",
      table: {
        td1: "Symbology",
        td2: "Unit",
        td3: "Grounwater temperature",
        td4: "Concentration of the media",
      },
    },
    unsat: {
      title: "Contaminated media : Vadose zone(soil)",
      table: {
        td1: "Symbology",
        td2: "Unit",
        td3: "Concentration of the media",
      },
      soil: {
        title: "Sorption properties",
        info: "※ The values ​​of koc and foc can be automatically entered depending on the contaminant and can be modified by the user if necessary.",
        table: {
          td1: "Symbology",
          td2: "Unit",
          td3: "Octanol/water partitioning coefficient",
          td4: "Carbon-water sorption coefficient",
          td5: "Organics partitioning coefficient",
        },
      },
    },
    pop: {
      satConc: "Contamination concentration - Saturated zone(groundwater)",
      unsatConc: "Contamination concentration - Vadose zone(soil)",
      deffi: "Contamination concentration - Deffi",
    },
    input: {
      alert: "Inserted data size is inappropriate.",
      sizeCheck: "Inserted data size",
      placeholder: "Insert grid data.",
      openData: "Data check",
      reset: "Insert again",
      legend: "Contamination depth (Deepest depth = 100)",
    },
    prev: "Previous",
    next: "Next",
  },
  geo: {
    pagePath: {
      text1: "Risk assessment",
      text2: "Pathway",
      text3: "Geological media",
    },
    pageTitle: "Geological media",
    select: {
      title: "Geological media type",
      single: "Single layer",
      multiple: "Multi layer",
      info1: "Select the geological media type.",
      info2:
        "Input values ​​are different for single layer and multi-layer cases.",
    },
    single: {
      title: "Geological media type",
      placeholder: "Select a geological media type.",
      info: {
        info1:
          "Please select the geological media soil type by referring to the 'Available geological media soil types' table below.",
        info2:
          "When you select a geological media soil type, all data will be filled with the selected geological media type (single value).",
        info3:
          "※ You can add a custom soil type by clicking ‘+ Add another geological media soil type’ at the bottom of the table.",
      },
      table: {
        title: "Available geological media soil types",
        td1: "Number",
        td2: "Geological media soil type",
        add: "+ Add another geological media soil type",
      },
    },
    multiple: {
      title: "Diffusion coefficient (DeffT)",
      placeholder: "Insert a DeffT value.",
      info: "Please enter the calculated value from the DeffT sheet of the preprocessing Excel file.",
    },
    geoPop: "Geological media",
    alert: {
      alert1: "Select a geological media type.",
      alert2: "Insert a DeffT value",
    },
    prev: "Previous",
    next: "Next",
  },
  found: {
    pagePath: {
      text1: "Risk assessment",
      text2: "Pathway",
      text3: "Building properties",
    },
    pageTitle: "Building properties",
    input: {
      title: "Building foundation type",
      placeholder: "Insert grid values.",
      openData: "Data check",
      reset: "Insert again",
      sizeCheck: "Inserted data size",
      alert: {
        alert1: "The size of the entered data is incorrect.",
        alert2:
          "Contains an incorrect building foundation type number.\n\nPlease check the building foundation type number that can be entered at the bottom and try again.",
      },
    },
    table: {
      title: "Available building foundation types",
      info: "※ The building type corresponding to each cell of the grid must be indicated by a number as shown in the table below.",
      td1: "Number",
      td2: "Building foundation types",
      more: "+ Add another building foundation type",
    },
    alert: "Insert the building foundation type grid values.",
    pop: "Building properties",
    prev: "Previous",
    next: "Next",
  },
  receptor: {
    pagePath: {
      text1: "Risk assessment",
      text2: "Receptor",
      text3: "Exposure properties",
    },
    pageTitle: "Exposure properties",
    input: {
      title: "Exposure property type",
      placeholder: "Insert grid values.",
      openData: "Data check",
      reset: "Insert again",
      sizeCheck: "Inserted data size",
      alert: {
        alert1: "The size of the entered data is incorrect.",
        alert2:
          "Contains an incorrect building foundation type number.\n\nPlease check the building foundation type number that can be entered at the bottom and try again.",
      },
    },
    table: {
      title: "Available exposure property types",
      info: "※ The exposure characteristics corresponding to each cell of the grid should be numbered as shown in the table below.",
      td1: "Number",
      td2: "Exposure properties",
      more: "+ Add other exposure property types",
    },
    alert: "Insert exposure property type grid values.",
    pop: "Exposure properties",
    prev: "Previous",
    next: "Next",
  },
  output: {
    pagePath: {
      text1: "Risk assessment",
      text2: "Results",
    },
    pageTitle: "Results",
    pdf: "View as PDF",
    projectInfo: {
      name: "Project title",
      manager: "Project manager",
      date: "Project date/time",
    },
    part1: "Indoors contamination concentration",
    part2: "Cancer risk",
    part3: "Non-cancer risk",
    prev: "Previous",
  },
};
