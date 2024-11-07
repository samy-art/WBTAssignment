$(document).ready(function() {
    // Function to add search term to the red-bordered box
    $('#addSearchBtn').on('click', function() {
      var skill = $('#searchInput').val().trim();
      
      if (skill !== '') {
        // Create a new div element for the skill
        var skillItem = $('<div class="skill-item">').text(skill);
        
        // Create a delete button with an 'X'
        var deleteBtn = $('<button class="deleteBtn">X</button>');
        deleteBtn.on('click', function() {
          $(this).parent().remove(); // Remove the skill item when 'X' is clicked
        });
        
        // Append the delete button to the skill item
        skillItem.append(deleteBtn);
        
        // Append the skill item to the container
        $('#searchContainer').append(skillItem);
        
        // Clear the input field after adding the skill
        $('#searchInput').val('');
      } else {
        alert('Please enter a skill!');
      }
    });
  
    // Optionally, allow pressing 'Enter' to add the skill
    $('#searchInput').on('keypress', function(e) {
      if (e.which === 13) { // 13 is the Enter key
        $('#addSearchBtn').click();
      }
    });
  });
  