import Layout from "../components/Layout";
import {withRouter} from 'next/router';

const Post = ({router}) => (
    <Layout title={router.query.title}>
        <p style={{width: "80vw"}}>
            Ullamco nulla Lorem est enim Lorem magna amet ullamco quis proident. Veniam velit adipisicing consequat
            tempor enim ipsum cupidatat commodo id elit aliqua commodo. Amet ex sint laborum labore adipisicing sunt
            deserunt enim exercitation occaecat sit dolor commodo sint. Eu ea ut sunt in ea aliquip elit nulla amet.
            Ipsum duis laborum ut consectetur voluptate. Do id ad velit nostrud nostrud dolore dolore enim velit nulla
            quis dolore nulla sit.
        </p>
    </Layout>
);

export default withRouter(Post);