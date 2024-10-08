function updateLabel() {
    document.getElementById('productName').innerText = document.getElementById('productNameInput').value;
    /*document.getElementById('unit').innerText = 'Unidad de Medida: ' + document.getElementById('unitInput').value;*/
    document.getElementById('price').innerText = '$' + document.getElementById('priceInput').value;
    document.getElementById('plu').innerText = 'PLU: ' + document.getElementById('pluInput').value;
    document.getElementById('pricePerUnit').innerText = 'Precio por UMD: ' + '$' + document.getElementById('pricePerUnitInput').value;
    document.getElementById('terms').innerText = 'Términos y Condiciones: ' + document.getElementById('termsInput').value;
}

function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'in',
        format: 'letter'
    });

    html2canvas(document.querySelector('.label')).then(canvas => {
        doc.addImage(canvas.toDataURL('image/png'), 'PNG', 0.5, 0.5, 8, 10.5);
        doc.save('etiqueta.pdf');
    }).catch(error => {
        console.error('Error al generar el PDF:', error);
    });
}
