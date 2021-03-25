import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { DeleteOutlined } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import { Typography } from "@material-ui/core";

const NoteCard = ({ note, handleDelete }) => {
  return (
    <div>
      <Card elevation={3}>
        <CardHeader
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography varient="body2" color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default NoteCard;
