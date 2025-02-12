export default {
  tutorial: {
    title: "Tutorial",
  },
  coc: {
    pagePath: {
      text1: "Risk assessment",
      text2: "Conataminant source",
      text3: "Contaminant",
    },
    pageTitle: "Contaminant",
    numOfMaterials: "Number of contaminants",
    placeholder: "Select the number of contaminants.",
    more: "See more",
    close: "Close",
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
    material: {
      title: "Contaminant {{number}}",
      placeholder: "Select a contaminant.",
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
    alert: "Missing value for contaminant {{material}}.",
    material: "Contaminant",
    waterLevel: "Water level (unit : m)",
    elevation: "Elevation (unit : m)",
    placeholder: "Insert a value.",
    prev: "Previous",
    next: "Next",
  },
  conc: {
    pagePath: {
      text1: "Risk assessment",
      text2: "Contaminant source",
      text3: "Contaminant concentration",
    },
    pageTitle: "Contaminant concentration",
    alert: "Missing value for contaminant {{material}}.",
    material: "Contaminant",
    media: {
      title: "Contaminated media",
      placeholder: "Select the contaminated media.",
      sat: "Aquifer(groundwater)",
      unsat: "Vadose zone(soil)",
    },
    info: "※ Groundwater temperature is 15℃ by default when Vadose zone(soil) is selected.",
    table: {
      td1: "Symbology",
      td2: "Unit",
      td3: "Grounwater temperature",
      td4: "Concentration of the media",
    },
    unsat: {
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
      placeholder: "Select a geological media type.",
    },
    info: " ※ The values ​​below are automatically entered based on the substratum soil type and can be modified if necessary.",
    table: {
      td1: "Symbology",
      td2: "Unit",
      td3: "Total porosity",
      td4: "Water-filled porosity",
      td5: "Bulk density",
      td6: "Height of capillary fringe",
      td7: "Capillary zone total porosity",
      td8: "Capillary zone water-filled porosity",
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
    select: {
      title: "Building foundation type",
      placeholder: "Insert a building foundation type.",
    },
    info: "※ The values ​​below are automatically entered according to the building foundation type and can be modified if necessary.",
    table: {
      td1: "Symbology",
      td2: "Unit",
      td3: "Depth below grade to base of foundation",
      td4: "Foundation thickness",
      td5: "Fraction of foundation area with cracks",
      td6: "Enclosed space floor area",
      td7: "Enclosed space mixing height",
      td8: "Indoor air exchange rate",
      td9: "Ratio between",
    },
    prev: "Previous",
    next: "Next",
  },
  receptor: {
    alert1: "Select an exposure property type",
    alert2: "Calculation error\nZeroDivisionError",
    alert3:
      "Calculation error\nOverflowError\nThe server's computational limit has been exceeded. Try increasing eta by 10 and substituting.",
    alert4: "Wrong input. (Calculation error)",
    pagePath: {
      text1: "Risk assessment",
      text2: "Receptor",
      text3: "Exposure properties",
    },
    pageTitle: "Exposure properties",
    select: {
      title: "Exposure properties",
      placeholder: "Select an exposure property.",
    },
    info: "※ The values ​​below are automatically entered based on the type of exposure property.",
    table: {
      td1: "Symbology",
      td2: "Unit",
      td3: "Exposure duration",
      td4: "Exposure frequency",
      td5: "Exposure time",
      td6: "Averaging time for carcinogens",
      td7: "Averageing time for non-carcinogens",
    },
    prev: "Previous",
    next: "Next",
  },
  output: {
    noInput: "No input",
    chart1: {
      name: "Cancer risk",
      bar: "Screening level",
    },
    chart2: {
      name: "Non-cancer risk",
      bar: "Screening level",
    },
    pagePath: {
      text1: "Risk assessment",
      text2: "Result",
    },
    pageTitle: "Result",
    projectInfo: {
      name: "Project title",
      manager: "Project manager",
      date: "Project date",
    },
    part1: {
      title: "Indoors contamination concentration",
      td1: "Contaminant",
      td2: "Indoors contamination concentration",
    },
    part2: {
      title: "Cancer risk via vapor intrusion",
      td1: "Contaminant",
      td2: "Non-cancer risk via vapor intrusion",
    },
    part3: {
      title: "Cancer risk via vapor intrusion",
      td1: "Contaminant",
      td2: "Non-cancer risk via vapor intrusion",
    },
    prev: "Previous",
  },
};
