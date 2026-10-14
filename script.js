const jobSearch = document.getElementById('jobSearch');
const jobType = document.getElementById('jobType');
const jobCards = [...document.querySelectorAll('.job-card')];
const noResults = document.getElementById('noResults');

function filterJobs() {
  const query = jobSearch.value.trim().toLowerCase();
  const type = jobType.value;
  let visible = 0;
  jobCards.forEach(card => {
    const searchable = `${card.dataset.title} ${card.dataset.skills} ${card.textContent}`.toLowerCase();
    const matchesQuery = searchable.includes(query);
    const matchesType = type === 'all' || card.dataset.type === type;
    const show = matchesQuery && matchesType;
    card.hidden = !show;
    if (show) visible++;
  });
  noResults.hidden = visible !== 0;
}
jobSearch.addEventListener('input', filterJobs);
jobType.addEventListener('change', filterJobs);

const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalText = document.getElementById('modalText');
const demoRole = document.getElementById('demoRole');
const form = document.getElementById('demoForm');
const success = document.getElementById('formSuccess');

function openModal(title, message, role) {
  modalTitle.textContent = title;
  modalText.textContent = message;
  if (role) demoRole.value = role;
  form.hidden = false;
  success.hidden = true;
  modal.hidden = false;
}
document.getElementById('loginBtn').addEventListener('click', () => openModal('Welcome back.', 'Sign-in is a demo here. Connect an authentication service to enable real accounts.'));
document.getElementById('businessBtn').addEventListener('click', () => openModal('Find your next teammate.', 'Tell us a little about yourself to preview the business sign-up flow.', 'Business looking to hire'));
document.querySelectorAll('.job-apply').forEach(button => button.addEventListener('click', () => openModal(`Interested in ${button.dataset.job}?`, 'Create a student profile to apply. This demo previews the flow; applications are not sent to an employer.', 'Student looking for work')));
document.getElementById('modalClose').addEventListener('click', () => modal.hidden = true);
modal.addEventListener('click', event => { if (event.target === modal) modal.hidden = true; });
document.addEventListener('keydown', event => { if (event.key === 'Escape') modal.hidden = true; });
form.addEventListener('submit', event => {
  event.preventDefault();
  form.hidden = true;
  success.hidden = false;
});
document.getElementById('menuToggle').addEventListener('click', () => document.getElementById('nav').classList.toggle('open'));
document.querySelectorAll('#nav a').forEach(link => link.addEventListener('click', () => document.getElementById('nav').classList.remove('open')));
