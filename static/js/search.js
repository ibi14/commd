let allPosts = [];

function initSearch(posts) {
    allPosts = posts;
    const input = document.getElementById('search-input');
    input.addEventListener('keyup', performSearch);
}

function performSearch() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '';

    if (query.length < 2) return;

    const filtered = allPosts.filter(post => {
        return post.Title.toLowerCase().includes(query) || 
               (post.Description && post.Description.toLowerCase().includes(query)) ||
               (post.Content && post.Content.toLowerCase().includes(query));
    });

    if (filtered.length === 0) {
        resultsContainer.innerHTML = '<p>No results found.</p>';
        return;
    }

    filtered.forEach(post => {
        const div = document.createElement('div');
        div.className = 'result-item';
        div.innerHTML = `
            <h3><a href="${post.Permalink}">${post.Title}</a></h3>
            <p>${post.Description || ''}</p>
            <small>${new Date(post.Date).toLocaleDateString()}</small>
        `;
        resultsContainer.appendChild(div);
    });
}