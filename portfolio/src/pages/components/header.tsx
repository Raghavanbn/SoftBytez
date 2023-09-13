import React from 'react';

export default function Header() {
    return (
        <div>
            <header>
                <div className="flex flex-col items-center py-10">       
                    <div className="w-[35%] md:w-[10%] lg:w-[10%]">
                        <img  src="/images/logo.png" alt="logo"/>                      
                    </div>
                </div>
            </header>
        </div>
    );
}