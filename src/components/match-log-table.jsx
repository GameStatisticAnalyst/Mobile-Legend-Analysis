import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function MatchLogTable({ logs }){
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[180px]">Time</TableHead>
          <TableHead>Player</TableHead>
          <TableHead>Action</TableHead>
          <TableHead>Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {logs.map((log) => (
          <TableRow key={log.id}>
            <TableCell>{log.timestamp}</TableCell>
            <TableCell>{log.playerName}</TableCell>
            <TableCell>{log.action}</TableCell>
            <TableCell>{log.description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

