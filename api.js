   document.getElementById('createPanelForm').addEventListener('submit', function(event) {
       event.preventDefault();
       const name = document.getElementById('name').value;

       fetch('https://serverpublicbyrapziexdnorusuhyapitkalocapermatiajatolol.chizyy.my.id/api/panel', {
           method: 'POST',
           headers: {
               'Authorization': 'Bearer ptla_fPSjbkhVkvWe13SUVMoXignLOC97KxbBKZVt1NK7Bzk',
               'Content-Type': 'application/json'
           },
           body: JSON.stringify({ name: name })
       })
       .then(response => response.json())
       .then(data => {
           document.getElementById('response').innerText = 'Panel berhasil dibuat: ' + data.id;
       })
       .catch(error => {
           document.getElementById('response').innerText = 'Terjadi kesalahan: ' + error;
       });
   });
