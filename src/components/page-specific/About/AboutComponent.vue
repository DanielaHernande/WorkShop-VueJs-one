<script setup></script>

<template>
    <div class="about-card ">
        <div class="section">
            <h3>ABOUT</h3>
            <ul>
                <li><i class="fa-regular fa-user"></i> <strong>Full Name:</strong> Jhon Doe</li>
                <li><i class="fa-solid fa-check"></i> <strong>Status: </strong> active</li>
                <li><i class="fa-solid fa-crown"></i> <strong>Role: </strong> Developer</li>
                <li><i class="fa-regular fa-flag"></i> <strong>Country: </strong> COL</li>
                <li><i class="fa-solid fa-language"></i> <strong>Language: </strong> English</li>
            </ul>
        </div>

        <div class="section">
            <h3>CONTACT</h3>
            <ul>
                <li><i class="fa-solid fa-phone-volume"></i> <strong>Contact:</strong> (123) 456-7890</li>
                <li><i class="fa-regular fa-comments"></i> <strong>Skype:</strong> john.doe</li>
                <li><i class="fa-regular fa-envelope"></i> <strong>Email:</strong> john.doe@example.com</li>
            </ul>
        </div>

        <div class="section">
            <h3>TEAMS</h3>
            <ul>
                <li><strong>Backend Developer (123 Members)</strong></li>
                <li><strong>VueJS Developer (98 Members)</strong></li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.about-card {

    width: 400px;
    height: 450px;
    margin-left: 75px;
    padding: 1rem;
    background-color: #fff;
    border-radius: 0.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 1rem;

    h3 {
        font-size: 12PX;
        color: #b4b4b4;
        margin-bottom: 1rem;
    }

    .section {
        margin-bottom: 1rem;

        ul {
            padding: 0;
            list-style: none;

            li {
                margin-bottom: 0.5rem;
                font-size: 0.9rem;
                color: #555;

                i {
                    margin-right: 0.5rem;
                    color: #555;
                }

                strong {
                    color: #949393;
                }
            }
        }
    }
}
</style>