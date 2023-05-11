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

import './loader.css';

type LoaderProps = {
  text?: string;
}

export default function Loader({ text }: LoaderProps) {
  return (
    <div className='loading' role='status'>
      <span className='relative text-larch-pink top-14 right-14 font-bold text-2xl'>{text ? text : "Processing"}...</span>
    </div>
  );
}
