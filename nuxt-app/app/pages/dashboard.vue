<template>
    <div>
        <header>
            <h1>ユーザーダッシュボード</h1>
            <nav>
                <ul>
                    <li><NuxtLink to="/dashboard">概要</NuxtLink></li>
                    <li><NuxtLink to="/dashboard/profile">プロフィール</NuxtLink></li>
                    <li><NuxtLink to="/dashboard/settings">設定</NuxtLink></li>
                </ul>
            </nav>
        </header>

        <main>
            <NuxtPage />
        </main>

        <footer>
            <p>&copy; 2025 My Nuxt App</p>
        </footer>
    </div>
</template>
