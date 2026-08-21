const songForm = document.getElementById('songForm');
const songList = document.getElementById('songList');

// Data awal lagu
let songs = [
  { title: "Hati-Hati di Jalan", artist: "Tulus" },
  { title: "Yellow", artist: "Coldplay" }
];

// Fungsi untuk menampilkan daftar lagu ke tabel
function renderSongs() {
  songList.innerHTML = "";

  songs.forEach((song, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${song.title}</td>
      <td>${song.artist}</td>
      <td><button class="delete-btn" onclick="deleteSong(${index})">Hapus</button></td>
    `;
    songList.appendChild(row);
  });
}

// Tambah lagu baru
songForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const titleInput = document.getElementById('songTitle');
  const artistInput = document.getElementById('songArtist');

  songs.push({
    title: titleInput.value,
    artist: artistInput.value
  });

  // Reset form
  titleInput.value = "";
  artistInput.value = "";

  renderSongs();
});

// Hapus lagu
function deleteSong(index) {
  songs.splice(index, 1);
  renderSongs();
}

// Filter pencarian lagu
function filterSongs() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const rows = songList.getElementsByTagName('tr');

  Array.from(rows).forEach(row => {
    const title = row.getElementsByTagName('td')[0].textContent.toLowerCase();
    const artist = row.getElementsByTagName('td')[1].textContent.toLowerCase();

    if (title.includes(query) || artist.includes(query)) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
}

// Tampilkan lagu saat halaman pertama kali dimuat
renderSongs();
