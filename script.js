document.addEventListener('DOMContentLoaded', function() {
    const citySelect = document.getElementById('city');
    const loadDataButton = document.getElementById('load-data');

    // Cargar ciudades (ejemplo estático)
    const cities = ['Ciudad A', 'Ciudad B', 'Ciudad C'];
    cities.forEach(city => {
        let option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        citySelect.appendChild(option);
    });

    loadDataButton.addEventListener('click', () => {
        const city = citySelect.value;
        const startDate = document.getElementById('start-date').value;
        const endDate = document.getElementById('end-date').value;
        // Lógica para cargar y visualizar datos
        console.log(`Cargando datos para ${city} desde ${startDate} hasta ${endDate}`);
    });
});
