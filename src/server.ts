import { http } from './http';
import './websockets/client';
import './websockets/admin';

const port = 3333;

http.listen(port, () => console.log(`server is running at port ${port}`));