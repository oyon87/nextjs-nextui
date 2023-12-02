"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Link } from "@nextui-org/react";
import { listMenu } from "@/data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faBars, faHouse, faList } from "@fortawesome/free-solid-svg-icons";
import { SCREEN } from "@/constant/deault";

export default function SidebarMenu () {
  const pathname = usePathname();
  const [ isMobileOpen, setIsMobileOpen ] = useState( true );
  const [ isMobile, setIsMobile ] = useState( false );

  const mobileToggleMenu = () => {
    setIsMobileOpen( !isMobileOpen );
  }

  const checkScreen = () => {
    if ( window.innerWidth >= SCREEN.TABLET ) {
      setIsMobile( false );
      setIsMobileOpen( true );
    } else {
      setIsMobile( true );
      setIsMobileOpen( false );
    }
  }

  const renderIcon = ( icon ) => {
    switch ( icon ) {
      case "home":
        return <FontAwesomeIcon icon={ faHouse } />;
      case "list":
        return <FontAwesomeIcon icon={ faList } />;
      default:
        return icon;
    }
  }

  useEffect( () => {
    window.addEventListener( "resize", () => {
      checkScreen();
    } )
    checkScreen();
  }, [] )

  return (
    <div className="bg-background/70 md:min-h-screen">
      <div className="h-10 md:h-16 flex items-center justify-end pr-5">
        { isMobile ?
          <div className="cursor-pointer" onClick={ mobileToggleMenu }>
            { isMobileOpen ? <FontAwesomeIcon icon={ faX } /> : <FontAwesomeIcon icon={ faBars } /> }
          </div>
          :
          <div className="cursor-pointer">
            DESKTOP
          </div>
        }
      </div>
      <ul className={ ( isMobileOpen ? "h-fit" : "h-0" ) }>
        { listMenu.map( ( list, index ) => {
          return (
            <li className={ "px-4 py-2 " + ( isMobileOpen ? "" : "hidden" ) } key={ index }>
              <Link
                href={ list.path }
                className="flex items-center"
                color={ `${ pathname === list.path ? "warning" : "foreground" }` }
                isBlock
              >
                <span className="pr-2">{ renderIcon( list.icon ) }</span>
                <span>{ list.name }</span>
              </Link>
            </li>
          );
        } ) }
      </ul>
    </div>
  );
}
