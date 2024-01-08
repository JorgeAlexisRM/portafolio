
function descargarCV(){
    var url = 'archivos/CV_JorgeRuano.pdf';

    var link = document.createElement('a');
    link.style.display = 'none';
    document.body.appendChild(link);

    link.href = url;

    link.download = 'CV_JorgeRuano.pdf';

    link.click();

    document.body.removeChild(link);
}