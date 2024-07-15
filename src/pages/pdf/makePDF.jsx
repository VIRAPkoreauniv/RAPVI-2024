import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const makePDF = () => {
  const convertToImg = async () => {
    // html to image
    const paper = document.querySelector(".div_paper");
    const canvas = await html2canvas(paper, { scale: 2.0 });
    const imageFile = canvas.toDataURL("image/png");

    // imageFile to Pdf
    convertToPdf(imageFile);
  };

  const convertToPdf = (imageFile) => {
    // image to pdf
    const doc = new jsPDF("p", "mm", "a4");
    const imgProps = doc.getImageProperties(imageFile);
    const pageWidth = doc.internal.pageSize.getWidth();
    // const pageHeight = (imgProps.height * pageWidth) / imgProps.width;
    // doc.addImage(imageFile, "JPEG", 0, 0, pageWidth, pageHeight);

    let imgWidth = 210;
    let pageHeight = 295;
    let imgHeight = (imgProps.height * pageWidth) / imgProps.width;
    let heightLeft = imgHeight;

    // const doc = new jsPDF("p", "mm", "a4");
    let position = 0;
    doc.addImage(imageFile, "JPEG", 0, 0, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      doc.addPage();
      doc.addImage(imageFile, "JPEG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    window.open(doc.output("bloburl"));
    doc.save("report.pdf");

    const pdf = new File([doc.output("blob")], "report.pdf", {
      type: "application/pdf",
    });

    return pdf;
  };
  return {
    viewWithPdf: async () => {
      alert("결과 PDF 생성 중입니다. \n최대 1분 가량 소요될 수 있습니다.");
      await convertToImg();
    },
  };
};

export default makePDF;
