document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        const lyricsContainer = document.getElementById("song-lyrics");

        if (!lyricsContainer) {
            console.error("Elemento #song-lyrics ainda não carregado.");
            return;
        }

        console.log("Elemento #song-lyrics encontrado:", lyricsContainer);
    }, 1000); // Aguarda 1 segundo para garantir que o HTML carregue
});
