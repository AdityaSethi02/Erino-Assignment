import { MoreVert } from "@mui/icons-material";
import {
    IconButton,
    TableBody,
    TableCell,
    TableRow,
    Skeleton,
} from "@mui/material";

export const AllContactSkeleton = () => {
  return (
        <TableBody>
            <TableRow>
                <TableCell align="center"><Skeleton /></TableCell>
                <TableCell align="center"><Skeleton /></TableCell>
                <TableCell align="center"><Skeleton /></TableCell>
                <TableCell align="center"><Skeleton /></TableCell>
                <TableCell align="center"><Skeleton /></TableCell>
                <TableCell align="center"><Skeleton /></TableCell>
                <TableCell align="center">
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align="center"><Skeleton /></TableCell>
                <TableCell align="center"><Skeleton /></TableCell>
                <TableCell align="center"><Skeleton /></TableCell>
                <TableCell align="center"><Skeleton /></TableCell>
                <TableCell align="center"><Skeleton /></TableCell>
                <TableCell align="center"><Skeleton /></TableCell>
                <TableCell align="center">
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align="center"><Skeleton /></TableCell>
                <TableCell align="center"><Skeleton /></TableCell>
                <TableCell align="center"><Skeleton /></TableCell>
                <TableCell align="center"><Skeleton /></TableCell>
                <TableCell align="center"><Skeleton /></TableCell>
                <TableCell align="center"><Skeleton /></TableCell>
                <TableCell align="center">
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align="center"><Skeleton /></TableCell>
                <TableCell align="center"><Skeleton /></TableCell>
                <TableCell align="center"><Skeleton /></TableCell>
                <TableCell align="center"><Skeleton /></TableCell>
                <TableCell align="center"><Skeleton /></TableCell>
                <TableCell align="center"><Skeleton /></TableCell>
                <TableCell align="center">
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align="center"><Skeleton /></TableCell>
                <TableCell align="center"><Skeleton /></TableCell>
                <TableCell align="center"><Skeleton /></TableCell>
                <TableCell align="center"><Skeleton /></TableCell>
                <TableCell align="center"><Skeleton /></TableCell>
                <TableCell align="center"><Skeleton /></TableCell>
                <TableCell align="center">
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </TableCell>
            </TableRow>
        </TableBody>
    );
};
