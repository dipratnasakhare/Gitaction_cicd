import { Badge, Box, Image } from '@chakra-ui/react'
import React from 'react'


export const Product = ({image, name, type}) => {
   
    
      return (
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
          <Image src={image} alt={'imageAlt'} />
    
          <Box p='6'>
           
            <Box
              mt='1'
              fontWeight='semibold'
              as='h4'
              lineHeight='tight'
              noOfLines={1}
            >
              {name}
            </Box>
    
            <Box>
              
              <Box as='span' color='gray.600' fontSize='sm'>
               {type}
              </Box>
            </Box>
    
            <Box display='flex' mt='2' alignItems='center'>
             
            
            </Box>
          </Box>
        </Box>
      )
    
}
