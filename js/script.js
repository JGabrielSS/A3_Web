// ==================== DADOS DAS RESENHAS ====================
const reviewsData = [
    {
        id: 1,
        title: "Duna",
        author: "Frank Herbert",
        genre: "Ficção Científica",
        rating: 5,
        shortReview: "Uma epopeia política e ecológica que redefiniu a ficção científica. A jornada de Paul Atreides é hipnótica.",
        fullReview: "Duna é muito mais do que uma aventura espacial. Herbert tece mitologia, ecologia, religião e política em um enredo magistral. A construção de mundo é impecável, cada detalhe das irmandades, do Melange e das tribos Fremen. É um livro denso, mas recompensador.",
        coverImage: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=800&h=500&fit=crop"
    },
    {
        id: 2,
        title: "Orgulho e Preconceito",
        author: "Jane Austen",
        genre: "Romance Clássico",
        rating: 5,
        shortReview: "Uma crítica social afiada disfarçada de romance. Elizabeth Bennet é uma protagonista inesquecível.",
        fullReview: "Austen combina humor, ironia e um olhar aguçado sobre a sociedade inglesa do século XIX. O relacionamento entre Elizabeth e Darcy transcende o tempo, com diálogos brilhantes e tensão romântica impecável.",
        coverImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&h=500&fit=crop"
    },
    {
        id: 3,
        title: "O Nome do Vento",
        author: "Patrick Rothfuss",
        genre: "Fantasia",
        rating: 4,
        shortReview: "Prosa poética e um protagonista fascinante. A jornada de Kvothe é viciante.",
        fullReview: "Rothfuss constrói uma história dentro de uma história com maestria. A Universidade, a música, o lirismo — cada página é uma imersão. Fãs de fantasia densa vão adorar cada palavra.",
        coverImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&h=500&fit=crop"
    },
    {
        id: 4,
        title: "Drácula",
        author: "Bram Stoker",
        genre: "Horror Gótico",
        rating: 5,
        shortReview: "Um clássico que ainda arrepia. Epistolar, atmosférico e sombriamente romântico.",
        fullReview: "Ler Drácula é viajar para a Inglaterra vitoriana e sentir o suspense crescer a cada carta e diário. Stoker constrói uma sensação de opressão e mistério magnífica. Imperdível para os amantes do horror clássico.",
        coverImage: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=800&h=500&fit=crop"
    },
    {
        id: 5,
        title: "Flores para Algernon",
        author: "Daniel Keyes",
        genre: "Ficção Científica",
        rating: 5,
        shortReview: "Uma experiência emocional devastadora sobre inteligência, empatia e humanidade.",
        fullReview: "Contado através de relatórios de progresso, acompanhamos Charlie Gordon em sua jornada de transformação intelectual. É uma leitura que questiona o que nos torna humanos. Um dos livros mais impactantes já escritos.",
        coverImage: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=500&fit=crop"
    },
    {
        id: 6,
        title: "O Cemitério",
        author: "Stephen King",
        genre: "Terror",
        rating: 4,
        shortReview: "King no seu melhor: medo do luto e do que pode ser trazido de volta.",
        fullReview: "O Cemitério explora o terror psicológico e sobrenatural com a prosa envolvente de King. A ambientação no Maine e a temática familiar criam uma sensação constante de desgraça.",
        coverImage: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=800&h=500&fit=crop"
    },
    {
        id: 7,
        title: "O Alquimista",
        author: "Paulo Coelho",
        genre: "Ficção Filosófica",
        rating: 3,
        shortReview: "Uma fábula inspiradora sobre sonhos e destino.",
        fullReview: "A jornada de Santiago em busca do tesouro é uma metáfora sobre seguir sua lenda pessoal. O estilo é direto e alegórico, com mensagem positiva que conquista muitos leitores.",
        coverImage: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=800&h=500&fit=crop"
    },
    {
        id: 8,
        title: "Kindred",
        author: "Octavia Butler",
        genre: "Ficção Científica",
        rating: 5,
        shortReview: "Uma mulher negra moderna é transportada para o sul escravagista. Brutal e necessário.",
        fullReview: "Butler usa a ficção científica para explorar a escravidão nos Estados Unidos de forma visceral. Dana viaja no tempo e precisa sobreviver em Maryland do século XIX. É um livro desconfortável, mas extremamente poderoso.",
        coverImage: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&h=500&fit=crop"
    },
    {
        id: 9,
        title: "Um Cântico de Natal",
        author: "Charles Dickens",
        genre: "Ficção Filosófica",
        rating: 5,
        shortReview: "Uma obra-prima atemporal sobre redenção, generosidade e o verdadeiro espírito do Natal.",
        fullReview: "A jornada de Ebenezer Scrooge, visitado por três espíritos que o mostram seu passado, presente e futuro, é uma das mais poderosas narrativas sobre transformação pessoal já escritas. Dickens combina crítica social com uma mensagem universal de esperança e compaixão.",
        coverImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&h=500&fit=crop"
    },
    {
        id: 10,
        title: "Canção de Exílio",
        author: "Gonçalves Dias",
        genre: "Poesia Brasileira",
        rating: 5,
        shortReview: "Um dos poemas mais emblemáticos do Romantismo brasileiro, exaltando a natureza e a pátria.",
        fullReview: "Canção de Exílio é um poema que sintetiza o sentimento nacionalista do Romantismo no Brasil. Com versos que exaltam a terra natal ('Minha terra tem palmeiras, onde canta o Sabiá'), Gonçalves Dias cria uma obra-prima de saudade e amor à pátria, influenciando gerações de poetas.",
        coverImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&h=500&fit=crop"
    },
    {
        id: 11,
        title: "Senhora",
        author: "José de Alencar",
        genre: "Romance Brasileiro",
        rating: 4,
        shortReview: "Um romance envolvente sobre amor, orgulho e vingança na sociedade carioca do século XIX.",
        fullReview: "Senhora retrata a história de Aurélia Camargo, uma jovem que compra seu ex-noivo que a abandonara por interesses financeiros. Alencar constrói uma narrativa poderosa sobre a condição feminina, o casamento por interesse e a força do amor verdadeiro, com personagens profundamente humanos.",
        coverImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&h=500&fit=crop"
    },
    {
        id: 12,
        title: "Poemas Escolhidos",
        author: "Gregório de Matos",
        genre: "Poesia Barroca",
        rating: 4,
        shortReview: "A poesia ácida e satírica do 'Boca do Inferno' que criticava a sociedade colonial.",
        fullReview: "Gregório de Matos, conhecido como 'Boca do Inferno', é o maior representante da poesia barroca no Brasil. Seus poemas transitam entre o sagrado e o profano, com uma sátira mordaz à sociedade baiana do século XVII, denunciando hipocrisias, corrupção e injustiças com maestria linguística.",
        coverImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&h=500&fit=crop"
    },
    {
        id: 13,
        title: "Amor de Perdição",
        author: "Camilo Castelo Branco",
        genre: "Romance Romântico",
        rating: 5,
        shortReview: "Um dos maiores romances de amor trágico da literatura portuguesa.",
        fullReview: "A história proibida entre Teresa e Simão, separados pela rivalidade familiar, é narrada com paixão e fatalismo. Camilo Castelo Branco cria uma obra-prima do Ultrarromantismo português, explorando os limites do amor, honra e destino, com um desfecho que emociona até hoje.",
        coverImage: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=800&h=500&fit=crop"
    },
    {
        id: 14,
        title: "Lágrimas de Mulher",
        author: "Aluísio Azevedo",
        genre: "Romance Naturalista",
        rating: 3,
        shortReview: "Uma análise psicológica da condição feminina no século XIX.",
        fullReview: "Nesta obra, Aluísio Azevedo explora as angústias e sofrimentos da mulher na sociedade patriarcal do século XIX. Com sua escrita naturalista, o autor dissecas emoções e contradições, oferecendo um retrato sensível e ao mesmo tempo crítico das limitações impostas às mulheres.",
        coverImage: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=500&fit=crop"
    },
    {
        id: 15,
        title: "A Chinela Turca",
        author: "Machado de Assis",
        genre: "Conto Fantástico",
        rating: 4,
        shortReview: "Um conto fantástico que mistura sonho, realidade e crítica social.",
        fullReview: "Neste conto brilhante, Machado de Assis narra a história de um homem que adquire uma chinela turca com poderes mágicos de realizar desejos. Com seu humor característico e ironia refinada, Machado explora os limites entre realidade e fantasia, enquanto critica a sociedade carioca do século XIX.",
        coverImage: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=800&h=500&fit=crop"
    },
    {
        id: 16,
        title: "O Eu Profundo e os Outros Eus",
        author: "Fernando Pessoa",
        genre: "Poesia Modernista",
        rating: 5,
        shortReview: "Uma exploração filosófica sobre identidade, heteronímia e a multiplicidade do ser.",
        fullReview: "Fernando Pessoa, o mestre da heteronímia, nos presenteia com poemas que questionam a própria essência do 'eu'. Esta coletânea revela as múltiplas faces do poeta, explorando a fragmentação da identidade, a solidão existencial e a busca por significado em um mundo caótico.",
        coverImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&h=500&fit=crop"
    },
    {
        id: 17,
        title: "O Jardim Secreto",
        author: "Frances Hodgson Burnett",
        genre: "Ficção Juvenil",
        rating: 5,
        shortReview: "Um clássico da literatura infantil sobre cura, amizade e o poder transformador da natureza.",
        fullReview: "Mary Lennox, uma menina mimada e solitária, descobre um jardim secreto e abandonado na mansão de seu tio. Ao restaurá-lo, ela não só transforma o jardim, mas também a si mesma e às pessoas ao seu redor. Uma história encantadora sobre renascimento, esperança e magia da natureza.",
        coverImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&h=500&fit=crop"
    },
    {
        id: 18,
        title: "A Divina Comédia",
        author: "Dante Alighieri",
        genre: "Poesia Épica",
        rating: 5,
        shortReview: "A obra-prima da literatura italiana, uma jornada épica pelo Inferno, Purgatório e Paraíso.",
        fullReview: "Dante Alighieri cria uma alegoria monumental sobre a jornada da alma humana em busca da redenção. Guiado por Virgílio e Beatriz, o poeta atravessa os nove círculos do Inferno, as montanhas do Purgatório e as esferas celestiais do Paraíso. Uma obra-prima da literatura mundial.",
        coverImage: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=800&h=500&fit=crop"
    },
    {
        id: 19,
        title: "O Mercador de Veneza",
        author: "William Shakespeare",
        genre: "Drama Clássico",
        rating: 5,
        shortReview: "Uma peça brilhante sobre justiça, misericórdia e preconceito na Veneza renascentista.",
        fullReview: "Shakespeare tece uma narrativa complexa envolvendo o judeu Shylock e seu 'pedaço de carne' como garantia de dívida. A obra explora temas como antissemitismo, vingança, amor e a tensão entre lei estrita e misericórdia, com personagens inesquecíveis e diálogos magistrais.",
        coverImage: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=800&h=500&fit=crop"
    },
    {
        id: 20,
        title: "O Animal Social",
        author: "Elliot Aronson",
        genre: "Psicologia social",
        rating: 5,
        shortReview: "Uma peça brilhante sobre justiça, misericórdia e preconceito na Veneza renascentista.",
        fullReview: "Shakespeare tece uma narrativa complexa envolvendo o judeu Shylock e seu 'pedaço de carne' como garantia de dívida. A obra explora temas como antissemitismo, vingança, amor e a tensão entre lei estrita e misericórdia, com personagens inesquecíveis e diálogos magistrais.",
        coverImage: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=800&h=500&fit=crop"
    }
];

// Estado
let activeGenre = "Todos";

// Extrair gêneros únicos
const uniqueGenres = ["Todos", ...new Set(reviewsData.map(b => b.genre))];

// Renderizar estrelas
function renderStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        stars += i <= rating ? '<i class="fas fa-star"></i>' : '<i class="far fa-star"></i>';
    }
    return stars;
}

// Filtrar e exibir cards
function renderReviews() {
    const grid = document.getElementById("reviewsGrid");
    if (!grid) return;

    let filtered = [...reviewsData];
    if (activeGenre !== "Todos") {
        filtered = filtered.filter(book => book.genre === activeGenre);
    }
    

    if (filtered.length === 0) {
        grid.innerHTML = `<div class="empty-message"><i class="fas fa-book-open"></i> Nenhuma resenha encontrada<br>Experimente outro gênero ou palavra-chave</div>`;
        return;
    }

    grid.innerHTML = filtered.map(book => `
            <div class="review-card" data-id="${book.id}">
                <div class="card-img" style="background-image: linear-gradient(0deg, rgba(0,0,0,0.2), rgba(0,0,0,0.05)), url('${book.coverImage}'); background-size: cover;">
                    <span class="genre-badge">${book.genre}</span>
                </div>
                <div class="card-content">
                    <h3 class="book-title">${escapeHtml(book.title)}</h3>
                    <div class="book-author"><i class="fas fa-user-pen"></i> ${escapeHtml(book.author)}</div>
                    <div class="rating">${renderStars(book.rating)} <span>${book.rating}/5</span></div>
                    <p class="review-summary">${escapeHtml(book.shortReview)}</p>
                    <button class="read-more" data-id="${book.id}">Ler resenha completa <i class="fas fa-arrow-right"></i></button>
                </div>
            </div>
        `).join("");

    // Eventos dos botões "ler mais"
    document.querySelectorAll('.read-more').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = parseInt(btn.getAttribute('data-id'));
            const book = reviewsData.find(b => b.id === id);
            if (book) openModal(book);
        });
    });

    // Clique no card inteiro também abre modal
    document.querySelectorAll('.review-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.classList.contains('read-more')) return;
            const id = parseInt(card.getAttribute('data-id'));
            const book = reviewsData.find(b => b.id === id);
            if (book) openModal(book);
        });
    });
}

// Card de exibição da resenha completa
function openModal(book) {
    const modal = document.getElementById("reviewModal");
    document.getElementById("modalBookTitle").innerText = book.title;
    document.getElementById("modalAuthor").innerHTML = `<i class="fas fa-feather-alt"></i> ${book.author}`;
    document.getElementById("modalGenreBadge").innerText = book.genre;
    document.getElementById("modalFullReview").innerText = book.fullReview;
    document.getElementById("modalRating").innerHTML = renderStars(book.rating) + ` <span style="color:#9b8a70;">(${book.rating}/5)</span>`;
    modal.style.display = "flex";
}

function closeModal() {
    document.getElementById("reviewModal").style.display = "none";
}

// Helper
function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function (m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

// Construir dropdown de gêneros
function buildGenreDropdown() {
    const dropdown = document.getElementById("genreDropdown");
    if (!dropdown) return;
    dropdown.innerHTML = '';
    uniqueGenres.forEach(genre => {
        const option = document.createElement("div");
        option.className = `genre-option ${activeGenre === genre ? 'active' : ''}`;
        option.textContent = genre;
        option.addEventListener("click", (e) => {
            e.stopPropagation();
            activeGenre = genre;
            renderReviews();
            // Atualizar visual do dropdown
            document.querySelectorAll('.genre-option').forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
            // Fechar dropdown após seleção
            document.getElementById("genreDropdown").classList.remove("show");
        });
        dropdown.appendChild(option);
    });
}

// Alternar dropdown
function initFilterToggle() {
    const toggleBtn = document.getElementById("filterToggleBtn");
    const dropdown = document.getElementById("genreDropdown");
    if (!toggleBtn || !dropdown) return;

    toggleBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        dropdown.classList.toggle("show");
    });

    // Fechar dropdown ao clicar fora
    document.addEventListener("click", (e) => {
        if (!toggleBtn.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.classList.remove("show");
        }
    });
}

// Carrega o conteúdo da página
document.addEventListener("DOMContentLoaded", () => {
    buildGenreDropdown();
    renderReviews();
    initFilterToggle();
    initSearch();

    const modal = document.getElementById("reviewModal");
    const closeSpan = document.querySelector(".close-modal");
    if (closeSpan) closeSpan.addEventListener("click", closeModal);
    window.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
    });
});