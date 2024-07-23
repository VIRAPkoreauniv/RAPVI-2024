export default {
  save: "PDF export/save",
  basic: {
    projectInfo: {
      rapvi: "RAPVI basic assessment",
      title: "Project information",
      name: "Project title",
      manager: "Project manager",
      date: "Project date/time",
    },
    input: {
      title: "Input",
      material: "Contaminant",
      waterlevel: "Water level",
      elevation: "Elevation",
      medium: "Geological media",
      temperature: "Groundwater temperature",
      conc: "Contaminant concentration of the media",
      koc: "Carbon-water sorption coefficient",
      foc: "Organics partitioning coefficient",
      geoType: "Geological media soil type",
      nSA: "Total porosity",
      nwSA: "Water-filled porosity",
      rhoSA: "Bulk density",
      hcz: "Height of capillary fringe",
      ncz: "Capillary zone total porosity",
      nwcz: "Capillary zone water-filled porosity",
      foundType: "Building foundation type",
      lb: "Depth below grade to base of foundation",
      lf: "Foundation thickness",
      eta: "Fraction of foundation area with cracks",
      abf: "Enclosed space floor area",
      hb: "Enclosed space mixing heigh",
      ach: "Indoor air exchange rate",
      Qsoil_Qb: "Ratio between vapor flux to air exchange rate",
      expType: "Exposure properties",
      ef: "Exposure duration",
      ed: "Exposure frequency",
      et: "Exposure time",
      atc: "Averaging time for carcinogens",
      atnc: "Averageing time for non-carcinogens",
    },
    output: {
      title: "Result",
      result1: "Indoors contamination concentration",
      result2: "Cancer risk via vapor intrusion",
      result3: "Non-cancer risk via vapor intrusion",
    },
  },
  site: {
    input: {
      coc: {
        title: "Source-contaminant",
        table: {
          head: {
            text1: "Unit",
            text2: "Input values",
            text3: "Selected contaminant",
          },
          body: {
            S: "Pure component water solubility",
            Hc: "Henry's law constant at 25℃",
            Dair: "Diffusivity in air",
            Dwater: "Diffusivity in water",
            DHvb: "Enthalpy of vaporization at the normal boiling point",
            Tc: "Critical temperature",
            Tb: "Normal boiling point",
            MW: "Molecular weight",
            RfC: "Allowed daily inhalation concentration",
            Mut: "Mutation involvement",
          },
        },
      },
      depth: {
        title: "Source - contamination depth",
        table: {
          head: {
            text1: "Unit",
            text2: "Input values",
          },
          body: {
            waterlevel: "Water level",
            legend: "Contamination depth (Deepest depth = 100)",
            elevation: "Elevation",
          },
        },
      },
      conc: {
        title: "Source - contamination concentration",
        table: {
          head: {
            text1: "Unit",
            text2: "Input values",
          },
          body: {
            source: "Source",
            Ts: "Groundwater temperature",
            koc: "Carbon-water sorption coefficient",
            foc: "Organics partitioning coefficient",
            Cmedium: "Geological media concentration",
            legend: "Contamination concentration (Highest concentration = 100)",
          },
        },
      },
      geo: {
        title: "Pathway - geological media",
        table: {
          head: {
            text1: "Unit",
            text2: "Input values",
          },
          body: {
            geo: "Geological media",
            nSA: "Total porosity",
            nwSA: "Water-filled porosity",
            rhoSA: "Bulk density",
            hcz: "Height of capillary fringe",
            ncz: "Capillary zone total porosity",
            nwcz: "Capillary zone water-filled porosity",
            DeffT: "Diffusivity of multi-layer media",
          },
        },
      },
      found: {
        title: "Pathway - Building properties",
        table: {
          head: {
            text1: "Unit",
            text2: "Input values",
            text3: "Number",
            text4: "Building foundation type",
          },
          body: {
            found: "Building",
          },
        },
      },
      receptor: {
        title: "Receptor - Exposure properties",
        table: {
          head: {
            text1: "Unit",
            text2: "Input values",
            text3: "Number",
            text4: "Exposure properties",
          },
        },
      },
    },
    output: {
      result1: "Indoors contamination concentration",
      result2: "Cancer risk via vapor intrusion",
      result3: "Non-cancer risk via vapor intrusion",
    },
  },
};
