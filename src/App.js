import "./index.css";

import { VeltProvider,VeltPresence, useVeltClient } from '@veltdev/react';
import Vellum from "./components/Vellum";
import { useEffect } from 'react';

export default function App() {
  const { client } = useVeltClient();

    let photos = [
        "https://media.licdn.com/dms/image/C5603AQHgHt3GquPb0g/profile-displayphoto-shrink_400_400/0/1650605489047?e=1696464000&v=beta&t=9056kSSbnv5pNtD6IfTKJ6Facx5LV7myV2FwE5sEv7A",
        "https://media.licdn.com/dms/image/C5603AQFMYOrof6sBuw/profile-displayphoto-shrink_800_800/0/1517590565909?e=1696464000&v=beta&t=NV5R9NMWJAFAfJT-DUEArt5h4g1EiuT1z19kRmklvn8",
        "https://media.licdn.com/dms/image/D5603AQGUTcXPa8BqPw/profile-displayphoto-shrink_100_100/0/1687405357316?e=1696464000&v=beta&t=VS3jsPKFVZP6szB1ysnDHJizMk6Buipp0KvoljYkRKs",
        "https://media.licdn.com/dms/image/D4D03AQF97dCysVk3ow/profile-displayphoto-shrink_100_100/0/1690914330944?e=1696464000&v=beta&t=kKBLw0YIg3ND8-ogbUIPopEz_qXVjrcJPippaJrPpqg",
    ]

    // // 2) Create a useEffect hook
    // useEffect(() => {
    //     if (client) {

    //     // Fetch the relevant user info from your authenticated user object.
    //     // const { uid, displayName, email, photoURL } = yourAuthenticatedUser;

    //     const randId = Math.floor(Math.random() * 4)
    //     // Create the Velt user object
    //     const user = {
    //         userId: `${randId}`,
    //         name: `user${randId}`,
    //         email: `user${randId}@vellum.ai`,
    //         photoUrl: photos[Math.floor(Math.random() * 4)]
    //     };

    //     //4) Pass the user object to the SDK
    //     client.identify(user);
    //     client.setDocumentId('unique-document-id');
    //     console.log("user: ", user)

    //     }
    // }, [client]);
  return (
    <VeltProvider apiKey="j3AwoBkuQMTEgeqrmPve">
      <Vellum/>
    </VeltProvider>
  );
}
