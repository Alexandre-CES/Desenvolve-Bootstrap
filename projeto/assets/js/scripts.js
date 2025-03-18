
//Popover
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

//Tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const exampleModal = document.getElementById('modalPortfolio');
exampleModal.addEventListener('show.bs.modal', function(event)
{
    document.getElementById('modalImage').src = event.relatedTarget.getAttribute('data-img');
});