import jsPDF from "jspdf";

export const generatePDF = (salarySlip) => {
    const doc = new jsPDF();

    doc.text(`Salary Slip`, 20, 20);
    doc.text(`Month: ${salarySlip.month} ${salarySlip.year}`, 20, 30);
    doc.text(`Amount: ₹${salarySlip.amount}`, 20, 40);

    doc.save(`Salary_Slip_${salarySlip.month}_${salarySlip.year}.pdf`);
};
