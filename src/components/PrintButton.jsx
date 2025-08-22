export default function PrintButton(){
   const handlePrint = () => {
    const printContent = document.getElementById("estimate-table");
    const WindowPrint = window.open("", "", "width=1080,height=720");
          WindowPrint.document.write(`
      <html>
        <head>
          <title>Final Estimate</title>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
          <style>
            @media print {
              button { display: none; }
            }
            table, th, td {
              border: 1px solid black !important;
              border-collapse: collapse !important;
            }
            th, td {
              padding: 8px;
              text-align: center;
            }
            body {
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              text-align: center;
              margin: 20px;
            }
          </style>
        </head>
        <body>
          ${printContent.outerHTML}
        </body>
      </html>
    `);
    WindowPrint.document.close();
    WindowPrint.print();
  };

  return(
    <>
        <div className="text-center mt-4">
        <button className="btn btn-primary" onClick={handlePrint}>
          Print / Download
        </button>
      </div>
    </>
  )
} 