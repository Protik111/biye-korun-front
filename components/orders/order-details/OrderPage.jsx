import { Badge, Button, List, ThemeIcon } from "@mantine/core";


const OrderPage = () => {
  return (
    <div className='container rounded-10'>
        <h2 className="text-center mb-30">Order Details</h2>
        <h3 className="mb-30">Order# 114-1878440</h3>

        <div className='p-20 rounded-10 flex justify-between' style={{border: '1px solid grey'}}>
            <div>
                <h3 className="mb-10">Billing Address</h3>
                <div>
                    <List
                        // spacing="xs"
                        size="sm"
                        center
                        style={{ listStyle: 'none', textAlign: 'left', fontSize: '19px'}}
                    >
                        <List.Item style={{ lineHeight: '1.5' }}>
                            Ayman Awal
                        </List.Item>

                        <List.Item style={{ lineHeight: '1.5' }}>
                            314 Copper Beach
                        </List.Item>

                        <List.Item style={{ lineHeight: '1.5' }}>
                            University Park, PA 16802
                        </List.Item>

                        <List.Item style={{ lineHeight: '1.5' }}>
                            United States
                        </List.Item>
                    </List>
                </div>
                
            </div>
            <div>
                <h3 className="mb-10">Package Details</h3>
                <div>
                    <List
                        // spacing="xs"
                        size="sm"
                        center
                        style={{ listStyle: 'none', textAlign: 'left', fontSize: '19px'}}
                    >
                        <List.Item style={{ lineHeight: '1.5' }}>
                            Name: Platinum Gold
                        </List.Item>

                        <List.Item style={{ lineHeight: '1.5' }}>
                            Ordered on: December 20, 2022
                        </List.Item>

                        <List.Item style={{ lineHeight: '1.5' }}>
                            Expires on: June 20, 2023
                        </List.Item>

                        {/* <List.Item style={{ lineHeight: '1.5' }}>
                            United States
                        </List.Item> */}
                    </List>
                </div>
            </div>
            <div>
                <h3>Payment Method</h3> 
                <div>
                    <List
                        // spacing="xs"
                        size="sm"
                        center
                        style={{ listStyle: 'none', textAlign: 'left', fontSize: '19px'}}
                    >
                        <List.Item style={{ lineHeight: '1.5' }}>
                            Total before tax: $250
                        </List.Item>

                        <List.Item style={{ lineHeight: '1.5' }}>
                            Total before tax: $250
                        </List.Item>

                        <List.Item style={{ lineHeight: '1.5' }}>
                            Estimated tax: $15
                        </List.Item>

                        <List.Item style={{ lineHeight: '1.5' }}>
                            <b>Grand Total</b>: $265
                        </List.Item>
                        
                    </List>
                </div>
            </div>

        </div>
    </div>
  )
}

export default OrderPage;