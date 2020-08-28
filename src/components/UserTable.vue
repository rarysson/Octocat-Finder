<template>
    <div class="table-container">
        <table>
            <caption>
                Atividades de
                {{
                    user.name || user.username
                }}
            </caption>

            <thead>
                <tr>
                    <th>Nome do repositório</th>
                    <th>Quantidade de commit</th>
                    <th>Mensagem do último commit</th>
                    <th>Hash do útilmo commit</th>
                </tr>
            </thead>

            <tbody>
                <tr v-if="repositories.length === 0 && !defaultUser">
                    <td class="loading"></td>
                    <td class="loading"></td>
                    <td class="loading"></td>
                    <td class="loading"></td>
                </tr>

                <tr v-for="(repository, index) in repositories" :key="index">
                    <td>{{ repository.name }}</td>
                    <td>{{ repository.commits_qnt }}</td>
                    <td>{{ repository.last_commit_message }}</td>
                    <td>{{ repository.last_commit_hash }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "UserTable",

    props: ["repositories", "defaultUser", "user"]
};
</script>

<style scoped>
.table-container {
    background-color: #fff;
    border-radius: 5px;
    width: 100%;
    flex: 1;
    display: flex;
    overflow: auto;
    color: var(--blue);
}

caption {
    text-align: left;
    font-weight: bold;
    font-size: 1.25rem;
    margin-bottom: 15px;
    padding: 30px 30px 0;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th {
    text-align: left;
    width: 25%;
}

th,
td {
    border-bottom: 1px solid #d4dae4;
    padding: 30px;
    font-size: 0.95rem;
}

tr:nth-of-type(even) {
    background-color: #fafafc;
}

.loading {
    position: relative;
}

.loading::after {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    width: 100px;
    height: 100%;
    transform: translateX(-100%);
    background: linear-gradient(
        90deg,
        transparent,
        rgba(125, 125, 125, 0.2),
        transparent
    );
    animation: loading 1s infinite;
}

@keyframes loading {
    100% {
        transform: translateX(100%);
    }
}
</style>
