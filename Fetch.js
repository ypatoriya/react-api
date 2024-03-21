import React, { useEffect, useState } from 'react';

function Fetch() {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setRecords(data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>UserID</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {records.map(record => (
                        <tr key={record.id}>
                            <td>{record.id}</td>
                            <td>{record.userId}</td>
                            <td>{record.title}</td>
                            <td>{record.body}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Fetch;
