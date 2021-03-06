async function getUsers() {
    let url = 'https://finessent12.herokuapp.com/api/profile/';
    try {
        let res = await fetch(url);
        return await res.json();
    }
    catch (error) {
        console.log(error);
    }
  }
 async function renderUsers() {
    let users = await getUsers();
    let html = '';
    users.forEach(user => {
        let htmlSegment = `


        <div class="container-fluid padding">
        <div class="card-deck">
            

            <div class="card" >
            <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
               
                    <div class="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div>
                </a>
            </div>
            <div class="card-body">
                <h5 class="card-title color-red">Username: ${user.username}</h5>
                <p>
                    E-Mail: ${user.email}
                </p>
                <p>Contact:${user.contact}</p>
            </div>
      
            </div>
        </div>
    </div>
        
                        
                        `;
  
        html += htmlSegment;
    });
  
    let profiles = document.querySelector('.profiles');
    profiles.innerHTML = html;
  }
  
  renderUsers();

  