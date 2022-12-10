import { Box, Center, SimpleGrid } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { CSSAPICall } from './axios/APICall'
import { Product } from './ProductBox/Product'
import { Spinner } from '@chakra-ui/react'

const CSSPage = () => {
 
    const [data, setdata] = useState([])
    const [Loading , setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)

        CSSAPICall()
        .then(function (response) {
            setLoading(false)

            setdata(response.data.items)
          })
          .catch(function (error) {
            console.log(error);
          })
    }, [])


    console.log(data, "data")
  return (
    <Box m="auto" p="25px">
        <SimpleGrid columns={[1,2,4]} spacing={10}>
        {Loading && <Center m="auto" mt='25px'>{<Spinner size='xl' />}</Center>}

        {data.map((ele)=>{
            return (
               <Box>
                 <Product type={ele.owner.type} name={ele.name} image={ele.owner.avatar_url}/>
               </Box>
            )
        })}
     </SimpleGrid>
    </Box>
  )
}

export default CSSPage
