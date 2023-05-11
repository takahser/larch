/*
 * Copyright (C) Zeeve Inc.
 * This file is part of Larch.
 * Larch is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * Larch is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with Larch.  If not, see <http://www.gnu.org/licenses/>.
 */

import { createContext, useContext } from "react";

export interface SidebarContextProps {
    compact: boolean;
    expanded: boolean;
    toggleExpanded: (value: boolean) => void;
}

export const SidebarContext = createContext<SidebarContextProps | null>(null);

const useSidebar = () => {
    const context = useContext(SidebarContext);

    if (context === null) {
        throw new Error("useSidebar can only be used within the Sidebar component!");
    }
    return context;
};

export { useSidebar };
