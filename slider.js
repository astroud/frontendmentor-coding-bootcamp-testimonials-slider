const prevButton = document.querySelector('.slider-buttons__prev');
    const nextButton = document.querySelector('.slider-buttons__next');
    const endorsementCards = document.querySelectorAll('.endorsement-card');

    handlePrevButton = () => {
      let activeEndorsement = document.querySelector('.endorsement-card--active');
      
      if (activeEndorsement.previousElementSibling.classList.contains('endorsement-card')) {
        activeEndorsement.classList.remove('endorsement-card--active');
        activeEndorsement.previousElementSibling.classList.add('endorsement-card--active');
      }
      else {
        activeEndorsement.classList.remove('endorsement-card--active');
        endorsementCards[endorsementCards.length - 1].classList.add('endorsement-card--active');
      }
    }

    handleNextButton = () => {
      let activeEndorsement = document.querySelector('.endorsement-card--active');
      
      if (activeEndorsement.nextElementSibling) {
        activeEndorsement.classList.remove('endorsement-card--active');
        activeEndorsement.nextElementSibling.classList.add('endorsement-card--active');
      }
      else {
        activeEndorsement.classList.remove('endorsement-card--active');
        endorsementCards[0].classList.add('endorsement-card--active');
      }
    }

    prevButton.addEventListener('click', handlePrevButton);
    nextButton.addEventListener('click', handleNextButton);