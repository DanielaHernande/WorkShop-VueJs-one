<script setup></script>

<template>
  <div class="timeline">
    <h2><i class="fa-solid fa-chart-simple">Activity Timeline</i></h2>
    <ul>
      <li>
        <span class="dot purple"></span>
        <span class="linea"></span>

        <div class="content">
          <div class="details">
            <p><strong>12 Invoices have has been paid</strong></p>
            <p>Invoices have been paid to the company</p>
            <button class="fw-bold"><i class="fa-regular fa-file-pdf fw-bold"></i> Invoice.pdf</button>
          </div>
          <span class="time">12 min ago</span>
        </div>
      </li>

      <li>
        <span class="dot green"></span>
        <span class="linea"></span>

        <div class="content">
          <div class="details">
            <p><strong>Client Meeting</strong></p>
            <p>Project meeting with John @10:15am</p>

            <div class="avatar-contenedor">
              <img src="/public/img/avatar.jpg" alt="avatar" class="me-2"/>

              <div>
                <p><strong>Lester McCarthy (Client)</strong></p>
                <p>CEO of Pixinvent</p>
              </div>
            </div>
          </div>
          <span class="time">45 min ago</span>
        </div>
      </li>

      <li>
        <span class="dot blue"></span>
        <span class="linea"></span>

        <div class="content">
            <div class="details">
                <p><strong>Create a new project for client</strong></p>
                <p>6 team members in a project</p>

                <div class="avatar-contenedor">
                  <img src="/public/img/avatar.jpg" alt="avatar1" />
                  <img src="/public/img/avatar.jpg" alt="avatar2" />
                  <img src="/public/img/avatar.jpg" alt="avatar3" />
                  <span class="additional-members fw-bold">+3</span>
                </div>
            </div>
            <span class="time">2 Day Ago</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>

.timeline {

  max-height: 400px;
  max-width: 965px;
  background-color: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  h2 {
    color: #858484;
    font-size: 0.80rem;
    margin-bottom: 1rem;
    font-weight: 900px;

    .fa-chart-simple::before {
        
        margin-right: 20px
      }
  }


  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      display: flex;
      align-items: start;
      margin-bottom: 1rem;
      position: relative;

      .dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        margin-right: 1rem;
        position: absolute;
        left: 0;
        top: 0.5rem;
      }

      .purple {
        background-color: rgb(150, 120, 206);
        box-shadow: 0 0 4px gray;
      }
      .green {
        background-color: rgb(141, 204, 141);
        box-shadow: 0 0 4px gray;
      }
      .blue {
        background-color: rgb(70, 148, 238);
        box-shadow: 0 0 4px gray;
      }

      .content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding-left: 2rem;

        .details {
            flex: 1;
        }

        p {
            color: #999;
            margin: 0.25rem 0;
            font-size: 0.95rem;
            line-height: 1.4;
        }

        button {
            display: flex;
            align-items: center;
            background-color: #f1f1f1;
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 5px;
            font-size: 0.9rem;
            color: #8f8f8f;

            i {
                color: red;
                margin-right: 0.5rem;
            }
        }

        .avatar-contenedor {

            display: flex;
            align-items: center;
            margin-top: 0.5rem;

            img {
                width: 32px;
                height: 32px;
                border-radius: 50%;  
            }

            div {
                display: flex;
                flex-direction: column;
            }

            .additional-members {
                background-color: #f1f1f1;
                border-radius: 50%;
                width: 32px;
                height: 32px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 0.9rem;
                color: #7c7b7b;
            }
        }

      }
      .time {
        margin-left: auto;
        color: #999;
        font-size: 0.85rem;
      }
    }
  }
}
</style>