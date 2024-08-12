<script setup></script>

<template>
  <!-- Timeline component showing different activities -->
  <div class="timeline">
    <!-- Header of the timeline with an icon and title -->
    <h2><i class="fa-solid fa-chart-simple">Activity Timeline</i></h2>
    <!-- List of timeline events -->
    <ul>
      <!-- First event in the timeline -->
      <li>
        <!-- Dot representing the event type and line connecting events -->
        <span class="dot purple"></span>
        <span class="linea"></span>

        <div class="content">
          <div class="details">
            <!-- Event description and action -->
            <p><strong>12 Invoices have has been paid</strong></p>
            <p>Invoices have been paid to the company</p>
            <button class="fw-bold">
              <!-- Button to download the invoice -->
              <i class="fa-regular fa-file-pdf fw-bold"></i> Invoice.pdf
            </button>
          </div>
          <!-- Time when the event occurred -->
          <span class="time">12 min ago</span>
        </div>
      </li>

      <!-- Second event in the timeline -->
      <li>
        <!-- Dot representing the event type and line connecting events -->
        <span class="dot green"></span>
        <span class="linea"></span>

        <div class="content">
          <div class="details">
            <!-- Event description and meeting details -->
            <p><strong>Client Meeting</strong></p>
            <p>Project meeting with John @10:15am</p>

            <!-- Avatar and details of the client -->
            <div class="avatar-contenedor">
              <img src="/public/img/b.jpg" alt="avatar" class="me-2" />

              <div>
                <p><strong>Lester McCarthy (Client)</strong></p>
                <p>CEO of Pixinvent</p>
              </div>
            </div>
          </div>
          <!-- Time when the event occurred -->
          <span class="time">45 min ago</span>
        </div>
      </li>

      <!-- Third event in the timeline -->
      <li>
        <!-- Dot representing the event type and line connecting events -->
        <span class="dot blue"></span>
        <span class="linea"></span>

        <div class="content">
          <div class="details">
            <!-- Event description and project details -->
            <p><strong>Create a new project for client</strong></p>
            <p>6 team members in a project</p>

            <!-- Avatars of team members involved in the project -->
            <div class="avatar-contenedor">
              <img src="/public/img/avatar1.jpg" alt="avatar1" />
              <img src="/public/img/avatar2.jpg" alt="avatar2" />
              <img src="/public/img/a.jpg" alt="avatar3" />
              <span class="additional-members fw-bold">+3</span>
            </div>
          </div>
          <!-- Time when the event occurred -->
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

  p {
    font-weight: 400;
  }

  h2 {
    color: #858484;
    font-size: 0.8rem;
    margin-bottom: 1rem;
    font-weight: 900px;

    .fa-chart-simple::before {
      margin-right: 20px;
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
            margin-right: -10px;
            border: 2px solid #fff;
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
