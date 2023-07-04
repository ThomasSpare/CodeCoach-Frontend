import Layout from '../components/Layout';


const HomePage = () => {
    return (
        <Layout title= 'Code Coach | Home' content='homepage, code, javascript, python'>
        <h1>Home</h1>
        <p>Welcome to Code Coach - a new way to learn and level up your code skills</p>
        <img src="/workspace/CodeCoach-Frontend/frontend/src/assets/images/coach1.jpg" class="img-fluid"  alt="..."></img>
        <img src="/workspace/CodeCoach-Frontend/frontend/src/assets/images/coach2.jpg" class="img-fluid" alt="..."></img>
        <img src="/workspace/CodeCoach-Frontend/frontend/src/assets/images/coach3.jpg" class="img-fluid" alt="..."></img>
        <img src="/workspace/CodeCoach-Frontend/frontend/src/assets/images/coach4.jpg" class="img-fluid" alt="..."></img>

        </Layout>
    );     
    };

    export default HomePage;